![](img/projets/xtensor_orig.svg)

<img src="img/projets/xtensor_orig.svg" style="margin: 50px 0; width: 300px; text-align: center;" />

### **xtensor**: Support for Sparse n-dimensional Arrays

xtensor is a powerful C++ n-dimensional array computing library. It follows all the great ideas of NumPy and adds a lot of C++ power: advanced tools like template metaprogramming, loop fusion and explicit SIMD acceleration are used throughout the code base. N-dimensional arrays are used everywhere (machine learning, robotics, or image manipulation), and the aim of xtensor is to build up an NumPy-like eco-system for the C++ programming language.

One feature that xtensor is currently lacking is support for sparse containers. Sparse matrices arise in all sorts of scientific fields (for example measurements in detectors with lots of missing values). Saving arrays in sparse formats can lead to large savings in storage and computational cost by disregarding missing or zero-values.

There are a number of commonly used storage formats for sparse arrays, such as dictionary-of-keys, compressed row or column storage, and coordinate list storage. During the GSOC we will explore the implementation of one or more of these storage methods, and the optimization of them. We can look at the Python implementation of a n-dimensional sparse container in `pydata.sparse`. In our quest for the fastest implementation possible we will decipher assembly code using tools like godbolt and perf. We might leverage fast matrix multiplication implementations in specialized sparse BLAS as an extension to the existing xtensor-blas library.

We are C++ experts and would be happy to mentor interested students on the xtensor codebase, high-performance C++, advanced C++ library writing techniques and everything else.

**Recommended Skills:** Familiarity with C++ or other programming languages and willingness to dive deep into C++, xtensor and sparse arrays.

**Expected Outcomes:** A xtensor based, standalone implementation for sparse arrays.

**Mentors:** This project will be mentored by the core xtensor developers.

**Further links:** 

- https://github.com/QuantStack/xtensor
- https://xtensor.readthedocs.io/en/latest/numpy.html
- https://github.com/QuantStack/xtensor-blas
- https://en.wikipedia.org/wiki/Sparse_matrix
- https://github.com/pydata/sparse

---

### **xtensor**: Pythran as a TorchScript Compiler

TorchScript is a statically typed subset of the Python programming language used to create serializable and optimizable models from PyTorch. Any code written in TorchScript can be saved from your Python process and loaded in a process where there is no Python dependency.

Pythran is a claimless Python to C++ transpiler, which supports a large subset of Python and produces machine efficient code. Pythran can be used as an ahead-of-time compiler to produce standalone programs or Python extensions.

Since Pythran is aware of NumPy operations, it is a good candidate to compile TorchScript models to efficient C++ implementations.

A good research project would be to experiment with the use of Pythran as a TorchScript compiler. There is also an ongoing effort in Pythran to use xtensor as a backend for NumPy operations.

**Recommended skills:** Familiarity with C++ and Python, and motivation to tackle the codebases of Pythran, TorchScript, and xtensor.

**Expected Outcomes:** Proof of concept of usage of Pythran as a compiler for TorchScript models.

**Mentors:** This project will be mentored by both the QuantStack team and the Pythran developers.

**Further links:**

- https://github.com/QuantStack/xtensor
- https://pythran.readthedocs.io/en/latest/
- https://pytorch.org/docs/stable/jit.html

---

<img src="img/projets/xeus_orig.svg" style="margin: 50px 0; width: 300px; text-align: center;" />

### **xeus:** A xeus-based Jupyter Kernel for Scilab

Scilab is a free and open-source numerical and computational programming language. It can be used for statistical analysis, image processing, signal processing, and all areas of scientific computing. Together with GNU Octave, Scilab is one of the two major open-source alternatives to MATLAB, although less emphasis is put in compatibility with MATLAB.

The Jupyter framework is a collection of tools meant to simplify and unify the workflows of researchers, engineers, and more generally all practicioners of scientific computing. The Project Jupyter is agnostic to the programming language and provides a complete specification of the communication protocol to implement for new language kernels.

The QuantStack team comprises several core developers of Project Jupyter, as well as the authors of the "xeus" reference implementation of the Jupyter protocol, which was used to create several language kernels (The xeus-Cling C++ kernel, the Juniper R kernel, the xeus-Python Python kernel).

For this project, we propose to implement a xeus-based Scilab kernel for Jupyter, including full support for the Jupyter interactive widgets.

**Reommended skills:** Familiarity with C++. Some familiarity with GNU Octave, Scilab or MATLAB is also a plus.

**Mentors:** This project will be mentored by both the QuantStack team and scilab developers from Scilab.io.

**Further links:**

- https://www.scilab.org/
- https://github.com/QuantStack/xeus
- https://github.com/QuantStack/xeus-python