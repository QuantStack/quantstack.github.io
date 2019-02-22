## GSOC 2019 Project Proposals

![](img/projets/xtensor_orig.svg)

<img src="img/projets/xtensor_orig.svg" style="margin: 50px 0; height: 150px; text-align: center;" />

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

<img src="img/projets/xeus_orig.svg" style="margin: 50px 0; height: 150px; text-align: center;" />

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

<img src="img/projets/codecast.png" style="margin: 50px 0; height: 150px; text-align: center; display: inline;" /> <span style="font-size: 100px; vertical-align: middle; margin-left: 50px; margin-right: 50px; color: #333;">+</span> <img src="img/projets/jupyter.png" style="margin: 50px 0; height: 150px; text-align: center; display: inline;" /> 

### **Jupyter + Codecast:** JupyterLab codecast extension

Jupyterlab [1], the new front end for Project Jupyter, is based on a plugin architecture allowing extension authors to add features to the application enriching the experience of the users. Codecast is a recorder and a player for interactive coding tutorials in C and Arduino languages [3]. It enables voice recording while typing code and plays back the voice synchronized with the key/mouse events. Codecast has also a variety of algorithm visualization, memory visualization... It has been successfully used in many Massive Open Online Courses like the ones in the professional certificate "C programming with Linux" [4]. 
This "Jupterlab codecast extension" project aims to develop an extension for jupyterlab to open codecasts tutorials within jupyterlab.

**Reommended skills:** TypeScript, JavaScript, NodeJS, ReactJS, AngujarJS, npm, bower, gulp, little bit of python and C/arduino.

**Mentors:** Remi SHARROCK, Associate Professor at Telecom ParisTech, France-IOI developpers, QuantStack team.

**Further links:**

[1] https://github.com/jupyterlab
[2] https://github.com/jupyter/notebook
[3] https://github.com/France-ioi/codecast 
[4] https://www.edx.org/professional-certificate/dartmouth-imtx-c-programming-with-linux

### **Jupyter + Codecast:** Binder backend for codecast

BinderHub (or jupyterhub/binderhub) [1] builds and registers a Docker image using a GitHub repository, then connects with JupyterHub [2], allowing users to interact with the code and environment within a live JupyterHub instance. Codecast is a recorder and a player for interactive coding tutorials in C and Arduino languages [3]. It enables voice recording while typing code and plays back the voice synchronized with the key/mouse events. Codecast has also a variety of algorithm visualization, memory visualization... It has been successfully used in many Massive Open Online Courses like the ones in the professional certificate "C programming with Linux" [4]. Codecast uses c-to-json as a backend to translate C code to JSON that is interpreted in Javascript [5] and also a amazon web service EC2 to execute c-to-json and to store to store audio/event files for codecasts.
This project aims to develop a binderhub backend to execute c-to-json and to store audio/event files for codecast (if possible).

**Recommanded skills:** C, Clang, JavaScript, JSON, Docker, bash/Linux.

**Mentors:** Remi SHARROCK, Associate Professor at Telecom ParisTech, France-IOI developpers, QuantStack team.

**Further links:**

[1] https://github.com/jupyterhub/binderhub
[2] https://github.com/jupyterhub
[3] https://github.com/France-ioi/codecast 
[4] https://www.edx.org/professional-certificate/dartmouth-imtx-c-programming-with-linux
[5] https://github.com/France-ioi/c-to-json

### **Jupyter + Codecast:** A Jupyter text/code editor recorder

Codecast is a recorder and a player for interactive coding tutorials in C and Arduino languages [1]. It enables voice recording while typing code and plays back the voice synchronized with the key/mouse events. Codecast has also a variety of algorithm visualization, memory visualization... It has been successfully used in many Massive Open Online Courses like the ones in the professional certificate "C programming with Linux" [2]. 

Jupyter is a web-based development environment for interactive computing [3]. This project aims to develop a recorder/player for any text/code notebook. The voice can be recorded and played back synchronized with the key/mouse events.

**Recommanded skills:** JavaScript, Docker, bash/Linux, Jupyter.

**Mentors:** Remi SHARROCK, Associate Professor at Telecom ParisTech, France-IOI developpers, QuantStack team.

**Further links:**

[1] https://github.com/France-ioi/codecast 
[2] https://www.edx.org/professional-certificate/dartmouth-imtx-c-programming-with-linux
[3] https://github.com/jupyter/notebook
