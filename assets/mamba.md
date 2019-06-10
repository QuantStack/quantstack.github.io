## What is Mamba?

Mamba is a drop-in replacement for conda package manager, that uses a different dependency resolution mechanism that makes mamba much faster than conda. The mamba-backend is called `libsolv` -- a library implemented in C for speed.

Using mamba instead of conda should give you the same package installations as with conda, but much faster.

Currently, mamba is still in beta-state. Some features of the conda package manager are not yet implemented, but for the general use case it works very well.

We are looking forward to your feedback on GitHub: https://github.com/QuantStack/mamba. You can follow the main author on Twitter for updates: https://twitter.com/wuoulf.

## Mamba Installation

These Minimamba installers contain the mamba & conda package manager and Python.

On Linux and OS X, you install Minimamba using the Terminal: 

```
$ sh Minimamba.sh
```

You can find more information in the official conda documentation -- just replace every mention of Miniconda with Minimamba: https://conda.io/projects/conda/en/latest/user-guide/install

Once Minimamba is installed, you can use the `mamba` command to install any other packages and create environments, etc.

For example:

```sh
$ mamba install numpy xtensor -c conda-forge
...
$ mamba create -n xstack xeus-cling xtensor xsimd -c conda-forge
$ conda activate xstack # Note: still use conda for activation/deactivation
...
```

Minimamba comes with Python 3.7. We do not currently provide versions for legacy versions of Python, although mamba works fine with Python 2.7.

You can still install and create environments for Python 2.7 by explicitly setting the Python version for the new enviornment.

#### Note

If you already have conda installed (Miniconda or Anaconda) and you want to use mamba, you can also install it using 

```sh
$ conda install mamba -c conda-forge
```

If you already have Minimamba installed, and you just want to upgrade, you should not use the installer. Just use mamba update.

For instance:

```sh
$ mamba update mamba -c conda-forge
```

will update mamba.

We also advise to set your default channels to include `conda-forge`. To do this 
create a file in `~/.condarc` that contains the following:

```yml
channels:
  - conda-forge
  - defaults
```

<br/>
<hr/>
<small>
Snake vector graphic from Mozilla emoji project (https://github.com/mozilla/fxemoji)
Flame vector graphic created by kubanek (freepik.com)
</small>
<br/>
<br/>
