---
layout: post
title: "Scientific computing in a polyglot world with xtensor"
date: 2017-05-29 20:20:40 +0100
author: QuantStack
categories: [C++]
excerpt_separator: <!--more-->
---

![robot](/assets/images/posts/robot.jpg)

<div class="img-caption">
In the future, there will be actual wars about which language humans should use to speak to the machine.
</div>

The *One Language to Rule Them All* probably does not exist yet. In the world of interactive scientific computing, countless articles and blog posts argue on the merits of R, Python, Julia and other technologies. The truth is, while this diversity is an chance, efforts are duplicated in each community and collaboration is sparse, which hurts sustainability in the long run.

For numerical code, C-level efficiency can be achieved in different ways. Preferred approaches differ in Python and Julia. On the one hand, authors of Python extension modules often make use of tools such as cython, or write their code in a way that is amenable to vectorization with numpy. On the other hand, Julia fully relies on just-in-time compilation and the LLVM stack. These two approaches are not easily reconcilable.

As library authors, we directly work with C++ for the numerical code, and provide bindings for the preferred languages of the end users (Julia, Python, R, etc...). This is a use case in which the `xtensor` C++ library particularly shines.

`xtensor` is a C++ lazy tensor algebra library providing an API similar to that of numpy, including broadcasting and universal functions. You can check out the [numpy to xtensor cheat sheet](http://xtensor.readthedocs.io/en/latest/numpy.html). More importantly, `xtensor` is an *expression system*, which enables the use of tensor expressions backed by arbitrary backends such as

 - in-memory containers
 - database systems
 - filesystem operations
 - data structures from other libraries or programming languages providing a C API.

In other words, `xtensor` enables a uniform way of operating on data regardless of the source. Besides, it transparently makes use of *lazy computing* techniques, to prevent the computation of temporary variables, and allow the symbolic manipulation of large expressions. This is also what enabled language bindings such as [xtensor-python](https://github.com/QuantStack/xtensor-python) and [xtensor-julia](https://github.com/QuantStack/xtensor-julia) which wrap native numpy and Julia arrays as xtensor expressions.

- `xtensor-python` makes use of the excellent [pybind11](https://github.com/pybind/pybind11), which was created by Wenzel Jakob.
- `xtensor-julia` relies upon the [CxxWrap](https://github.com/JuliaInterop/CxxWrap.jl), which was authored by Bart Janssens.

![hope](/assets/images/posts/hope.png)
<div class="img-caption">
But there is still hope
</div>

## Learning by the example

Assume we have some Python module based on a `process` function that operates on two numpy arrays. After some time, we realize that the performance is not so good and that the bottleneck is the `process` function. To fix that, we decide to replace it with a C++ native implementation, exposed to Python as an extension module.

## First implementation

Let's start with a straightforward implementation, that is, a simple C++ module exposing one function to Python using `pybind11` and `xtensor-python`, which can be done with a single cpp file, `process.cpp`. In this example, we provide all the boilerplate to produce a minimal extension module.

```cpp
#define FORCE_IMPORT_ARRAY
#include "xtensor-python/pyarray.hpp"

namespace py = pybind11;
using pyarray_type = xt::pyarray<double>;

double process(const pyarray_type& e1, const pyarray_type& e2)
{
    // Operate on `e1` and `e2` using the xtensor numpy-style API.
}

PYBIND11_PLUGIN(cppprocess)
{
    xt::import_numpy();
    py::module m("cppprocess");
    m.def("process", process);
    return m.ptr();
}
```

Once the module is built, we can use it in our Python code like any other Python function:

```python
import cppprocess as xp
res = xp.process(e1, e2)  # for e1 and e2 are numpy arrays
```

In the `process` C++ function implemented above, the `pyarray` C++ objects offers an API very similar to that of a numpy array, while following the idioms of the C++ standard library including:

 - iterator pairs to iterate in various fashions onto N-dimensional arrays
 - special functions, reducers, broadcasting, universal functions
 - linear algebra routines

A cheat sheet for the numpy to xtensor migration can be found [here](http://xtensor.readthedocs.io/en/latest/numpy.html).

Now we would like to reuse this new implementation in other contexts:

 - a pure C++ context
 - a Julia module

A naive approach would be to make this C++ implementation standalone, make use of it in the for the Python extension. The same headers would be included in the C++ module that requires it so that we can use `process` from both Python and C++. The issue with this approach is that the resulting C++ program would depend on numpy. Indeed, `process` operates on argument of type `pyarray` which is a C++ wrapper for numpy arrays.

In a pure C++ module, we would rather make use of the `xarray` and `xtensor` container, or any other implementation the xtensor expression interface. The way to reconcile these use cases is to make use of the abstract xtensor expression type.

## Enforcing the usage of expressions

Before separating the implementation of `process`, we make it a template function so it can works with any expression type. A naive approach would be a signature of the form

```cpp
template <class E1, class E2>
double xprocess(const E1& e1, const E2& e2)
```

The `xprocess` template function is generic allows to use any type for its argument. If we try to call it with something that does not implement the `xexpression` interface, we will end up with cryptic errors. To avoid this, we can modify the signature of `xprocess` so that the compiler complains when passed parameters are not xtensor expressions:

```cpp
template <class E1, class E2>
double xprocess(const xt::xexpression<E1>& e1,
                const xt::xexpression<E2>& e2)
{
    const E1& m1 = e1.derived_cast();
    const E2& m2 = e2.derived_cast();
    // Operate on m1 and m2 using the numpy-style xtensor API.
}
```

The first line in the function retrieves the real type of the expression, so that we can keep the rest of the implementation unchanged.

```cpp
PYBIND11_PLUGIN(cppprocess)
{
    xt::import_numpy();
    py::module m("cppprocess", "cppprocess extension module");
    m.def("process", xprocess<xt::xexpression<pyarray_type>,
                              xt::xexpression<pyarray_type>>);
    return m.ptr();
}
```

## Splitting the project

Now we can split the project into:

- A header-only C++ project containing the generic `xprocess` template function.
- A Python extension depending on the C++ template library, exposing to Python a specialization of the abstract implementation for the `pyarray` and `pytensor` wrappers on numpy.

This way, we can use `xprocess` in pure C++ contexts without any dependency on `pybind11` or `xtensor-python`. And since `xprocess` is generic, we can use it with other types of expressions, such as `xtensor`, `xarray`, or even expresions backed by database calls, filesystem operations, etc ...

But we can go further. We can now expose `xprocess` to Julia with very little additional work:

```cpp
#include "jlcxx/jlcxx.hpp"
#include "xtensor-julia/jlarray.hpp
#include "xprocess/xprocess.hpp"

using jlarray_type = xt::jlarray<double>;

double jlprocess(jlarray_type e1, jlarray_type e2)
{
    return xprocess(e1, e2);
}

JULIA_CPP_MODULE_BEGIN(cppprocess)
    jlcxx::Module mod = registry.create_module("xprocess");
    mod.method("process", jlprocess);
JULIA_CPP_MODULE_END
```

## Conclusion

Creating extension modules for Julia and Python based on a single implementation of the C++ engine is made easy by the `xtensor-python` and `xtensor-julia` projects. 

Following the rules below will help you avoid code duplication and leverage on generic code:

- separate the pure C++ implementation in a dedicated project, that does not depend on `xtensor-python`, `xtensor-julia` or other language bindings.
- operate on abstract `xexpression` rather than explicit types such as `xtensor` or `xarray`.
- Python bindings and Julia bindings should be thin wrappers around the expression-based implementation.

![sad](/assets/images/posts/sad.png)
<div class="img-caption">
The Programming Language War can still be avoided.
</div>
