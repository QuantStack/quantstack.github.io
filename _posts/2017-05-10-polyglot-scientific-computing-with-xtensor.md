---
layout: post
title: "Scientific computing in a polyglot world with xtensor"
date: 2017-05-10 20:20:40 +0100
author: QuantStack
categories: [C++]
excerpt_separator: <!--more-->
---

![robot](/assets/images/posts/robot.jpg)

<div class="img-caption">
In the future, there will be actual wars about which language humans should use to speak to the machine.
</div>

The *One Language to Rule Them All* probably does not exist yet. In the world of interactive scientific computing, countless articles and blogs argue on the merits of R, Python, Julia and other technologies. The truth is, each language has its own ecosystem and qualities. More importantly, these communities are siloed, collaboration is sparse and efforts are duplicated, which hurts sustainability in the long run.

For numerical code, C-level efficiency can be achieved in different ways. Preferred approaches differ in Python and Julia. Library authors for Python often make use of tools such as cython, or try to write code in a way that is amenable to vectorization with numpy. Julia fully relies on just-in-time compilation and the LLVM stack. These two approaches are not easily reconcilable.

As library authors, we directly work with C++ for the numerical code, and provide bindings fo the target languages. This is a usecase in which the `xtensor` C++ library particularly shines.

`xtensor` is a C++ lazy tensor algebra library providing an API similar to that of numpy. You can check out the [numpy to xtensor cheat sheet](http://xtensor.readthedocs.io/en/latest/numpy.html). More importantly, `xtensor` is an *expression system*, which enables the use of tensor expression backed by arbitrary backends such as

 - in-memory containers
 - database systems
 - filesystem operations
 - data structures from other libraries or programming languages providing a C API.

In other words, `xtensor` enables a uniform way of operating on data regardless of the source. This is also what enabled language bindings such as [xtensor-python](https://github.com/QuantStack/xtensor-python) and [xtensor-julia](https://github.com/QuantStack/xtensor-julia) which wrap native numpy and Julia arrays as xtensor expressions.

![hope](/assets/images/posts/hope.png)
<div class="img-caption">
But there is still hope
</div>

## Learning by the example

For instance, assume we have developped, in Python, some statistics functions based on `scipy.logsumexp`. After a few days in production, we realize that the performances are not so good and that the bottleneck is `scipy.logsumexp`. To fix that, we decide to replace this function with a native implementation, in C++, exposed to Python as an extension module.

## First implementation

Let's start with a straighforward implementation, that is, a simple C++ module exposing its single function to python via `pybind11` and `xtensor-python`:

```cpp
#define FORCE_IMPORT_ARRAY
#include "xtensor-python/pyarray.hpp"
#include "pybind11/stl.h"
#include "xtensor/xeval.hpp"
#include "xtensor/xstridedview.hpp"

namespace py = pybind11;
using array_type = xt::pyarray<double>;
using axes_type = std::vector<double>;

// C++ implementation of logsumexp using xtensor
array_type logsumexp(const array_type& a, const axes_type& axes)
{
    auto m = xt::eval(xt::amax(a, axes));
    auto sv = xt::slice_vector(m);
    for (auto i = 0; i < e1.dimension(); ++i)
    {
        if (std::find(axes.begin(), axes.end(), i) != axes.end())
        {
            sv.push_back(xt::newaxis());
        }
        else
        {
            sv.push_back(xt::all());
        }
    }
    auto max2 = xt::dynamic_view(m, sv);
    return array_type(m + xt::log(xt::sum(xt::exp(a - max2), axes)));
}

PYBIND11_PLUGIN(fast_lse)
{
    xt::import_numpy();
    py::module m("fast_lse", "Fast implementation of logsumexp");
    m.def("logsumexp", logsumexp);
    return m.ptr();
}
```

Once the module is built, we can use it in your Python code like any other Python function:

```python
import fast_lse as fl
// ... x is a numpy array initialized elsewhere
res = fl.logsumexp(x, (0,))
```

This new version performs beautifully. In fact, we would like to reuse it in

 - a pure C++ context
 - a Julia module

One possible solution is to move this function into a separate expression, include this header in `fast_lse.cpp` to expose it to the Python, and include this header into the C++ module that needs it. And now we can use `logsumexp` from both Python and C++. That looks easy, doesn't it?

Except that your C++ program will now depend on numpy. Indeed, `logsumexp` accepts and returns `pyarray` which are a C++ backend for numpy arrays. In a pure C++ module, you may prefer to use `xarray`, `xtensor` or any other C++ object that implements the `xexpression` interface.

## Working with expressions

Before moving `logsumexp` into a dedicated header, let's make it a template function so it can works with any expression:

```cpp
template <class E>
E logsumexp(const E& a, const axes_type& axes)
{
    auto m = xt::eval(xt::amax(a, axes));
    auto sv = xt::slice_vector(m);
    for (auto i = 0; i < e1.dimension(); ++i)
    {
        if (std::find(axes.begin(), axes.end(), i) != axes.end())
        {
            sv.push_back(xt::newaxis());
        }
        else
        {
            sv.push_back(xt::all());
        }
    }
    auto max2 = xt::dynamic_view(m, sv);
    return E(m + xt::log(xt::sum(xt::exp(a - max2), axes)));
}
```

With that change, we have two ways of exposing `logsumexp` to the Python. The first one is to directly instantiate the template:

```cpp
PYBIND11_PLUGIN(fast_lse)
{
    xt::import_numpy();
    py::module m("fast_lse", "Fast implementation of logsumexp");
    m.def("logsumexp", logsumexp<array_type>);
    return m.ptr();
}
```

However, if we decide to change the template parameter of `logsumexp` in the future, or if we add new template parameters, we'll have to update this binding code. To avoid this, we can wrap the call to the template `logsumexp` into a C++ function and let the template parameter deduction work for us:

```cpp
array_type python_logsumexp(const array_type& a, const axes_type& axes)
{
    return logsumexp(a, axes);
}

PYBIND11(fast_lse)
{
    xt::import_numpy();
    py::module m("fast_lse", "Fast implementation of logsumexp");
    m.def("logsumexp", python_logsumexp);
    return m.ptr();
}
```

Note that from Python, the function name remains unchanged even if the *implementation* name (i.e. `python_logsumexp`) has changed.

## Enforcing the usage of expressions

Our template `logsumexp` function is generic, however it allows to use any type for the first argument. If we try to call it with something that does not implement the `xexpression` interface, we will end up with cryptic errors, the compiler complaining about not being able to convert the parameter type to a very complicated template type.

To avoid this, we can modify `logsumexp` signature so it complains earlier when its first parameter type is not an expression:

```cpp
template <class E>
E logsumexp(const xt::xexpression<E>& e, const axes_type& axes)
{
    const E& a = e.derived_cast();
    auto m = xt::eval(xt::amax(a, axes));
    auto sv = xt::slice_vector(m);
    for (auto i = 0; i < e1.dimension(); ++i)
    {
        if (std::find(axes.begin(), axes.end(),  i) != axes.end())
        {
            sv.push_back(xt::newaxis());
        }
        else
        {
            sv.push_back(xt::all());
        }
    }
    auto max2 = xt::dynamic_view(m, sv);
    return E(m + xt::log(xt::sum(xt::exp(a - max2), axes)));
}
```

The first line in the function retrieves the real type of the expression, so that we can keep the rest of the implementation unchanged. Now you can see the benefits of wrapping `logsumexp` inside `python_logsumexp`: we don't have to change anything else in the code. Whereas if we had used direct instantiation of the template, the following changes would have been required:

```cpp
PYBIND11_PLUGIN(fast_lse)
{
    xt::import_numpy();
    py::module m("fast_lse", "Fast implementation of logsumexp");
    // m.def("logsumexp", logsumexp<array_type>);
    m.def("logsumexp", logsumexp<xt::xexpression<array_type>>);
    return m.ptr();
}
```

## Splitting the project

Now that the implementation of `logsumexp` is generic enough, we can move it to a dedicated header. That is not sufficient, though. Indeed, even if including this header in a pure C++ module does not make that module depend on numpy, it makes any package including your C++ module depend on both `xtensor-python` and `pybind11`.

We can avoid useless dependencies by splitting the projects:
- A pure C++ project containing the template function `logsumexp`.
- A python extension project depending on the previous one, and exposing the `logsumexp` function to the Python.

This way, we can use `logsumexp` from C++ modules without any dependency on `pybind11` or `xtensor-python`. And since `logsumexp` is generic, we can use it with other kinds of expressions, such as `xtensor`, `xarray`, database backends, file backends, etc ...

But we can go further. We can now expose `logsumexp` to Julia with very little additional work:

```cpp
#include <cxx_wrap.hpp>
#include "xtensor-julia/jlarray.hpp
#include "fast_lse/logsumexp.hpp"

using array_type = xt::jlarray<double>;
using axes_type = cxx_wrap::ArrayRef<std::size_t>

array_type julia_logsumexp(array_type a, axes_type axes)
{
    return logsumexp(a, axes);
}

JULIA_CPP_MODULE_BEGIN(fast_lse)
    cxx_wrap::Module mod = registry.create_module("fast_lse");
    mod.method("logsumexp", julia_logsumexp);
JULIA_CPP_MODULE_END
```

## Conclusion

Exposing code using xtensor to other languages such as Python or Julia is easy thanks to the `xtensor-python` and `xtensor-julia` projects. Following the rules below will help you avoid code duplication and leverage on generic code:

- put the C++ implementation in a dedicated project, that does not depend on `xtensor-python`, `xtensor-julia` or any related project.
- use template `xexpression` rather than explicit types such as `xtensor` or `xarray` whenever you can.
- Python bindings and Julia bindings should be tiny wrappers that forward to the C++ implementation.

![sad](/assets/images/posts/sad.png)
