#### Overview

[Numba](https://numba.pydata.org/) is the standard
just-in-time (JIT) compiler for numerical Python, widely used
across the scientific stack to accelerate compute-heavy code.
Until recently it could not run in the browser: its JIT
backend, [llvmlite](https://github.com/numba/llvmlite), relies
on execution engines that WebAssembly does not provide.

We have made Numba work in the browser. Numba and llvmlite now
run inside [JupyterLite](https://jupyterlite.readthedocs.io/),
compiling Python functions to WebAssembly and executing them in
the same page, with no server involved. We are looking for
funding to turn this prototype into a capability the ecosystem
can rely on, maintained upstream in Numba and llvmlite.

See our announcement,
[Numba in the Browser](https://notebook.link/blog/numba-in-the-browser/),
for the full story.

#### What Works Today

- llvmlite runs in the browser, through a WebAssembly execution
  engine that emits WebAssembly objects from LLVM IR, links them
  in-process with LLVM's linker LLD, and loads each result as an
  Emscripten side module.
- Numba's `@jit` and `@njit` compile and execute inside a
  JupyterLite kernel, on arrays as well as scalars.
- Packages that depend on Numba run in the browser, including
  [PyTensor](https://github.com/pymc-devs/pytensor),
  [PyMC](https://github.com/pymc-devs/pymc),
  [Dolo.py](https://github.com/EconForge/dolo.py) and
  [interpolation.py](https://github.com/EconForge/interpolation.py).
- On the example in our announcement, Numba gives a roughly
  250x speedup in WebAssembly, against about 90x for the same
  code natively.

#### Why Numba in the Browser Matters

A substantial part of the scientific Python stack depends on
Numba, frequently as a hard requirement rather than an optional
accelerator. PyTensor, PyMC, QuantEcon, stumpy and others are in
this category. Until now none of them could be installed in
Pyodide or emscripten-forge at all: not a matter of running
slower in the browser, but of not running.

Numba also covers a case that pre-compiled extensions
structurally cannot. Code written interactively in a notebook
does not exist until the user types it, so it cannot be shipped
ahead of time in a wheel or a conda package. A JIT compiler is
the only way to make that code fast, and notebooks are precisely
where browser-based Python is used.

#### Why QuantStack

QuantStack has in-house Numba expertise, which is rare, combined
with long experience of LLVM in WebAssembly. We develop
[xeus-cpp](https://github.com/jupyter-xeus/xeus-cpp), a C++
interpreter running in the browser via Clang and LLVM compiled
to WebAssembly, and the execution engine behind Numba in the
browser grew directly out of that work. We also maintain
[emscripten-forge](https://github.com/emscripten-forge) and are
core contributors to Jupyter and JupyterLite, where this work is
deployed.

#### Proposed Work

The prototype establishes the end-to-end architecture. Making it
dependable means:

- upstreaming the llvmlite and Numba changes as focused,
  reviewable contributions;
- expanding test coverage, running the llvmlite and Numba test
  suites in the browser;
- improving compilation performance and adding persistent
  caching, so that compiled functions survive a page reload;
- validating and packaging more of the Numba ecosystem for
  emscripten-forge.

These are separable pieces of work: we advance incrementally and
deliver sub-parts, so the project can be funded in full or in
part.

##### Are you interested in this project? Either entirely or
partially, contact us for more information on how to help us
fund it.
