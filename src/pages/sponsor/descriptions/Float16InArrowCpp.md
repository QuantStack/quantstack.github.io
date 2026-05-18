#### Overview

Apache Arrow is the universal columnar format and multi-language toolbox for fast data interchange and in-memory analytics.

Arrow offers three floating-point data types based on the standard IEEE binary floating-point representation:
Float16, Float32 and Float64.

In some workloads, 16-bit floating-point numbers have become a popular alternative to 32-bit and 64-bit representations, bringing better memory footprint and potentially better performance (when hardware support is present).

However, while basic support is present, Float16 is not universally supported in all Arrow C++ components because of limited language support for 16-bit floating-point numbers.

We propose to finish implementing support for Float16 in all components of Arrow C++:

* scalar compute kernels:
    - arithmetic: `abs`, `add`, etc.
    - comparisons: `equal`, etc.
    - math: `sqrt`, etc.
    - `is_in`, `index_in`

* vector compute kernels:
    - `sort_indices`, `rank`, `rank_normal`, `rank_quantile`
    - `partition_nth_indices`
    - `select_k_unstable`

* aggregate compute kernels:
    - `sum`, `product`, `mean`, `mode`, `quantile`, `tdigest`
    - `variance`, `stddev`, `skew`, `kurtosis`
    - `first`, `last`, `min`, `max`
    - `index`

* CSV reader

* ORC reader and writer

Funders can decide to fund the entire package, or choose the components they are interested in.

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it.
