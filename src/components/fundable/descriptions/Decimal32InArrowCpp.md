#### Overview

Apache Arrow is the universal columnar format and multi-language toolbox for fast data interchange and in-memory analytics.

Fixed-width decimal data in Arrow is usually represented by the Decimal128 data type.
This data type has non-trivial memory costs (16 bytes per value) and computational costs (operations on 128-bit integers must be emulated on most if not all architectures).

Arrow recently gained Decimal32 and Decimal64 data types which, as their names suggest, encode fixed-width decimal data more compactly.
Decimal32 (resp. Decimal64) is able to represent up to 9 (resp. 18) decimal digits of precision, which is sufficient in many applications.

However, while basic support is present, Decimal32 and Decimal64 are not universally supported by all Arrow components.

We propose to finish implementing support for Decimal32 and Decimal64 types in all components of Arrow C++:

* scalar compute kernels:
    - `abs`
    - `round`
    - `is_in`, `index_in`
    - `coalesce`
    - `min_element_wise`, `max_element_wise`

* vector compute kernels:
    - `dictionary_encode`, `unique`, `value_counts`
    - `pairwise_diff`
    - `select_k_unstable`
    - `replace_with_mask`
    - `fill_null_forward`, `fill_null_backward`

* aggregate compute kernels:
    - `sum`, `mean`, `mode`, `tdigest`
    - `first`, `last`, `min`, `max`
    - `index`

* CSV reader and writer

* ORC reader and writer

Funders can decide to fund the entire package, or choose the components they are interested in.

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it
