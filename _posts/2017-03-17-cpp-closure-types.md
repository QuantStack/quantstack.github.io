---
layout: post
title: "Closure types for C++ expression systems"
date: 2017-03-17 20:20:40 +0100
author: SylvainCorlay
categories: [C++]
excerpt_separator: <!--more-->
---

The `xtensor` library is a tensor expression library implementing numpy-style broadcasting and universal functions, but in a lazy fashion.

If `x` and `y` are two tensor expressions with compatible shapes, the result of `x + y` is not a tensor but an expression that does
not hold any value. Values of `x + y` are computed upon access or when it is assigned to a container such as `xt::xtensor` or
`xt::xarray`. The same holds for most functions in xtensor, views, broadcasting views, etc.

In order to be able to perform the differed computation of `x + y`, the returned expression must hold references, const references or
copies of the members `x` and `y`, depending on how arguments were passed to `operator+`. The actual types of held by the expressions
are the closure types.

<!--more-->

The concept of closure type is key in the implementation of `xtensor` and appears in all the expression defined in xtensor, and the
utility functions and meta functions complements the tools of the standard libary for the move semantics. 

## Basic rules for determinning closure types

The two main requirements are the following:

 - when an argument passed to the function returning an expression (here, `operator+`) is an *rvalue*, the closure type is always a value and the `rvalue` is *moved*.
 - when an argument passed to the function returning an expression is an *lvalue reference*, the closure type is a reference of the same type.

It is important for the closure type not to be a reference when the passed argument is an rvalue, which can result in dangling references.

Following the idioms of the C++ standard library for naming type traits, we provide two type traits classes providing an implementation of these rules
in the `xutils.hpp` header, `closure`, and `const_closure`. The latter adds the const qualifier even when the provided argument is not const.

```cpp
template <class S>
struct closure
{
    using underlying_type = std::conditional_t<
        std::is_const<std::remove_reference_t<S>>::value,
        const std::decay_t<S>,
        std::decay_t<S>>;
    using type = typename std::conditional<
        std::is_lvalue_reference<S>::value,
        underlying_type&,
        underlying_type>::type;
};

template <class S>
using closure_t = typename closure<S>::type;
```

The implementation for `const_closure` is slightly shorter.

```cpp
template <class S>
struct const_closure
{
    using underlying_type = const std::decay_t<S>;
    using type = typename std::conditional<
        std::is_lvalue_reference<S>::value,
        underlying_type&,
        underlying_type>::type;
};
        
template <class S>
using const_closure_t = typename const_closure<S>::type;
```

Using this mechanism, we were able to

 - avoid dangling references in nested expressions,
 - hold references whenever possible,
 - take advantage of the move semantics when holding references is not possible.

## Closure types and scalar wrappers

A requirement for `xtensor` is the ability to mix scalars and tensors in tensor expressions. In order to do so,
scalar values are wrapped into the `xscalar` wrapper, which is a cheap 0-D tensor expression holding a single
scalar value.

For the xscalar to be a proper proxy on the scalar value, if actually holds a closure type on the scalar value.

The logics for this is encoded into xtensor's `xclosure` type trait.

```cpp
// General case: simply use the regular closure type.
template <class E, class EN = void>
struct xclosure
{
    using type = detail::closure_t<E>;
};

// Scalar case: the closure type is an xscalar<CT> where
// CT is the closure type.
template <class E>
struct xclosure<E, disable_xexpression<std::decay_t<E>>>
{
    using type = xscalar<detail::closure_t<E>>;
};

template <class E>
using xclosure_t = typename xclosure<E>::type;
```

In doing so, we ensure const-correctness, we avoid dangling reference, and ensure that lvalues remain lvalues.
The `const_xclosure` follows the same scheme:

```cpp
template <class E, class EN = void>
struct const_xclosure
{
    using type = detail::const_closure_t<E>;
};

template <class E>
struct const_xclosure<E, disable_xexpression<std::decay_t<E>>>
{
    using type = xscalar<std::decay_t<E>>;
};
 
template <class E>
using const_xclosure_t = typename const_xclosure<E>::type;
```
