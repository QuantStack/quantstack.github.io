#### Overview

Apache Arrow is the universal columnar format and multi-language toolbox for fast data interchange and in-memory analytics.

Representation of string and binary data in Arrow traditionally uses the Binary layout, where the entire string data resides in a separate buffer that is accessed using indirect indexing from a buffer of offsets.

Recently, the Arrow project added the Binary View layout, a more efficient layout inspired from modern execution engines where the beginning of each string is packed directly within the offsets buffer. This allows short strings to be read and processed directly without going through an additional indirection.

However, while basic support is present, Binary View is not universally supported by all Arrow components.

We propose to finish implementing support for Binary View and String View types in all components of Arrow C++:

* scalar compute kernels:
    - `equal`, `less_equal`, etc.
    - `is_in`, `index_in`
    - `ascii_*`, `binary_*`, `utf8_*`
    - `string_is_ascii`
    - `count_substring`
    - `extract_regex`, `extract_regex_span`
    - `split_pattern`, `split_pattern_regex`
    - `coalesce`

* vector compute kernels:
    - `take`, `filter`, `scatter`
    - `run_end_encode`, `run_end_decode`
    - `sort_indices`, `rank`, `rank_normal`, `rank_quantile`
    - `partition_nth_indices`
    - `select_k_unstable`
    - `replace_with_mask`
    - `fill_null_forward`, `fill_null_backward`, `drop_null`

* aggregate compute kernels:
    - `count_distinct`
    - `first`, `last`, `min`, `max`
    - `index`

* CSV reader and writer

* ORC reader and writer

Funders can decide to fund the entire package, or choose the components they are interested in.

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it
