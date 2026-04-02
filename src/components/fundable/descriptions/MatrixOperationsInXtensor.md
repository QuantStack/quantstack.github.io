#### Overview
This project aims to integrate Kazushige Goto’s highly optimized matrix multiplication algorithms into the [xtensor](https://github.com/xtensor-stack/xtensor/) framework, leveraging the [xsimd](https://github.com/xtensor-stack/xsimd/) library for SIMD acceleration.

##### Background

The GOTO algorithms, formalized by Kazushige Goto and Robert van de Geijn in their landmark paper "Anatomy of High-Performance Matrix Multiplication", are the algorithmic foundations underlying high-performance libraries such as GotoBLAS and OpenBLAS. The algorithms achieve near-peak CPU throughput through a principled exploitation of the memory hierarchy.

xtensor library is a popular C++ library for numerical analysis with a focus on multi-dimensional arrays and broadcasting, inspired by NumPy. xtensor leverages SIMD acceleration through the xsimd library and offers language bindings for Python, Julia and R.

By integrating Goto's algorithms into xtensor and using xsimd for SIMD optimizations, we can provide users with faster matrix operations, especially for large-scale computations.

##### Objectives

- Study and understand Kazushige Goto's matrix multiplication algorithms.
- Implement these algorithms in C++ using xsimd for SIMD acceleration. This implementation could be done in a way that is not tied to the xtensor codebase for better reusability.
- Integrate the implementation into the xtensor framework.
- Benchmark the performance against existing xtensor matrix operations and other libraries like Eigen and BLAS.
- Document the implementation and provide examples for users.

