## GSOC 2019 project proposals

[Sparse storage for xtensor](#xtensor)

### **xtensor**: add sparse n-dimensional arrays

xtensor is a powerful n-dimensional array computing library for C++. It follows all the great ideas of NumPy and adds a lot of C++ power: advanced tools like template metaprogramming, loop fusion and explicit SIMD programming are used throughout the code base. N-dimensional arrays are used everywhere (machine learning, robotics, or image manipulation), and the aim of xtensor is to build up an NumPy-like eco-system for the C++ language.

One feature that xtensor is currently lacking is an implementation of a sparse container. Sparse matrices appear often in all sorts of scientific fields (for example measurements in detectors with lots of missing values). Saving arrays in sparse formats can lead to large savings in storage- and computational cost by disregarding missing or zero-values.

There are a number of commonly used storage formats for sparse arrays, such as dictionary-of-keys, compressed row or column storage, and coordinate list storage. During the GSOC we will explore the implementation of one or more of these storage methods, and the optimization of them. We can look at the Python implementation of a n-dimensional sparse container in `pydata.sparse`. In our quest for the fastest implementation possible we will decipher assembly code using tools like godbolt and perf. We might leverage fast matrix multiplication implementations in specialized sparse BLAS as an extension to the existing xtensor-blas library.

We are C++ experts and would be happy to mentor interested students on the xtensor codebase, high-performance C++, advanced C++ library writing techniques and everything else.

**Recommended Skills:** Familiarity with C++ or other programming languages and willing to dive deep into C++, xtensor and sparse arrays 

**Expected Outcomes:** A xtensor based, standalone implementation for sparse arrays