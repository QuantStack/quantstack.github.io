#### Overview

[Numba](https://numba.pydata.org/) is the standard
just-in-time (JIT) compiler for numerical Python, widely used
across the scientific stack to accelerate compute-heavy code.
[Pyodide](https://pyodide.org/) brings CPython to the browser
through WebAssembly and powers JupyterLite, while
[emscripten-forge](https://github.com/emscripten-forge)
provides a conda-based package distribution for the same
target. Today, Numba cannot run in either environment.

We propose to make Numba and its JIT backend,
[llvmlite](https://github.com/numba/llvmlite),
browser-compatible using WebAssembly, and thus enabling
Pyodide and emscripten-forge users to JIT-compile numerical
code just like they do on a native CPython interpreter.

#### Why Numba in the Browser Matters

In a native CPython environment, many paths exist to make
numerical Python fast: Numba's JIT compilation,
multiprocessing, native C extensions, or offloading to a GPU.
In the browser, multithreading/processing and GPU access are
mostly unavailable, and shipping pre-compiled native
extensions for everything is impractical. In addition, the
overhead of the Python interpreter is larger in the browser
and many existing libraries use Numba, sometimes as hard
requirements. JIT compilation is therefore an interesting
route to improved performance in a fully client-side,
browser-based Python environment.

#### Current Progress

We have already patched llvmlite and demonstrated that it runs
in the browser including compilation and execution of the WASM
code it generates. A live demo is available at
https://notebook.link/@anutosh491/llvmlite.

We also have a working demo of Numba's `@jit` decorator
operating on scalar functions in the browser. However, several
issues have been identified that must be overcome to make
Numba work generally (e.g. with arrays). These likely include
WebAssembly's lack of writable-and-executable memory pages
(which rules out MCJIT), unsupported atomic instructions
without shared memory, variadic C calls that cannot be lowered
to WASM, and linkage incompatibilities in the LLVM WASM PIC
backend. But these seem surmountable based on our experience.

#### Why QuantStack

QuantStack is uniquely positioned to deliver this work. We
have shipped several JIT and WebAssembly projects in the
scientific Python ecosystem, including
[xeus-cpp](https://github.com/jupyter-xeus/xeus-cpp), a C++
interpreter running in the browser via Clang and LLVM compiled
to WebAssembly. Our team also includes Numba core developers,
giving us a direct upstream relationship.

#### Proposed Work

The goal of this project is to deliver:

- upstream llvmlite compatibility with browser environments,
  based on our existing patches.
- build a proof of concept for general Numba use in the browser to
  - demonstrate, ideally all of Numba, or at least a large part of it, in the browser
  - demonstrate the ability to run libraries that depend on it (such as pytensor/pymc) in the browser
  - gather the changes required to upstream
- upstream the required changes to Numba

Note that this is a proof of concept effort, we will advance
incrementally, deliver sub-parts, and adjust the plan based
on new learnings.

##### Are you interested in this project? Either entirely or
partially, contact us for more information on how to help us
fund it.
