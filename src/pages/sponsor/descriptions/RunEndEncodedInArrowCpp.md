#### Overview

Apache Arrow is the universal columnar format and multi-language toolbox for fast data interchange and in-memory analytics.

Run-End-Encoding is a composite Arrow datatype that efficiently represents data with many repeated values, such as timeseries.
While basic support is present, Run-End-Encoding is not universally supported in all Arrow C++ components.

We propose to finish implementing support for Run-End-Encoding in all components of Arrow C++:

* cast kernels (including implicit run-end-encoding or decoding where applicable)

* scalar kernels:
    - all unary kernels (math, etc.)
    - all binary kernels (arithmetic, comparisons, etc.)
    - `coalesce`, `if_else`, `case_when`
    - fix incorrect output in `is_null` and `true_unless_null`

* vector kernels:
    - cumulative aggregations (`cumulative_max`, `cumulative_sum`, etc.)
    - `pairwise_diff`
    - `filter`, `take`, `scatter`
    - `fill_null_forward`, `fill_null_backward`
    - `replace_with_mask`
    - `indices_non_zero`
    - `sort_indices`, `rank`, `rank_normal`, `rank_quantile`
    - `partition_nth_indices`
    - `select_k_unstable`
    - `unique`, `value_counts`
    - `winsorize`
    - fix incorrect output in `drop_null`

* aggregate kernels:
    - `all`, `any`
    - `count_distinct`
    - `approximate_median`
    - `sum`, `product`, `mean`, `mode`, `quantile`, `tdigest`
    - `variance`, `stddev`, `skew`, `kurtosis`
    - `first`, `last`, `min`, `max`
    - `index`
    - fix incorrect output in `count`

* Parquet reader and writer

* CSV reader

* ORC reader and writer

Funders can decide to fund the entire package, or choose the components they are interested in.

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it.
