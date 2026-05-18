#### Overview

Apache Parquet is an open source, column-oriented data file format designed for
efficient data storage and retrieval. Together with Apache Arrow for in-memory data,
it has become the *de facto* standard for efficient columnar analytics.

While Parquet and Arrow are most often used together, they have incompatible physical
representations of data with optional values: data where some values can be
missing or "null". While Arrow uses a validity bitmap for each schema field and nesting level,
Parquet condenses that information in a more sophisticated structure called definition
levels (borrowing ideas from Google's Dremel project).

Converting between those two representations is non-trivial and often turns out
a performance bottleneck when reading a Parquet file as in-memory Arrow data.
Even columns that practically do not contain any nulls can still suffer from it if
the data is declared nullable (optional) at the schema level.

We propose to optimize the conversion of null values from Parquet in Arrow C++
for flat (non-nested) data:

1. decoding Parquet definition levels directly into an Arrow validity bitmap, rather than using an
   intermediate representation as 16-bit integers;

2. avoiding decoding definition levels entirely when a data page's statistics shows
   it cannot contain any nulls (or, conversely, when it cannot contain any non-null values).

As a subsequent task, these optimizations may be extended so as to apply to schemas
with moderate amounts of nesting.

This work will benefit applications using Arrow C++ or any of its language
bindings (such as PyArrow, R-Arrow...).

Depending on the typology of Parquet data, this could make Parquet reading 2x
faster, even more in some cases. If you are unsure whether your workload could
benefit, we can discuss this based on sample Parquet files you provide us.

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it
