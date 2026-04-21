# FP16 Support in xsimd

xsimd is a C++ header-only library that abstracts SIMD (vectorization) intrinsics behind a single, generic API.
The same code — `xsimd::batch<float>` — compiles to optimal machine code on x86 SSE/AVX, ARM NEON SVE, RISC-V, and WebAssembly, with no runtime overhead.
When an intrinsic is missing on a given target, xsimd falls back gracefully rather than failing or leaving the developer to write platform-specific branches.
This is why projects like Mozilla Firefox, Apache Arrow, Meta Velox, KDE Krita, and Pythran have adopted it as their vectorization layer.

FP16 — the 16-bit half-precision floating point format — has become a first-class data type in modern computing.
It is the default storage format for large language model weights, the standard precision for neural network inference,
and increasingly the format of choice wherever memory bandwidth is the binding constraint.
Yet consuming or producing FP16 data from C++ SIMD code today requires writing painful, platform-specific intrinsics by hand.
xsimd currently has no FP16 support, forcing its users to drop out of the generic API the moment they touch half-precision data.

We propose to add vectorized FP16 support to xsimd — native FP16 operations where hardware supports them, and correct fallbacks elsewhere.

## Why FP16 Matters

**Memory bandwidth is a bottleneck.** Modern CPUs and GPUs are not compute-bound — they are memory-bandwidth-bound.
FP16 cuts data size in half versus FP32.
This means twice as many values fit in cache, twice as many elements move per memory transaction,
and large working can perform more with L2 or L3 caches without accessing RAM.
The bandwidth saving alone, before any compute consideration, is the primary reason the format matters.

**SIMD registers double the throughput.** With native arithmetic support, FP16 operation double the number
of floating point numbers processed per CPU cycle when precision is not an issue.

**FP16 is widely used in AI.** Transformer weights, KV caches, activations, and embeddings are all routinely stored in FP16.
Any library that processes or pipelines this data at any point of the training and inference pipeline must be able to consume and produce FP16 buffers efficiently.
Without xsimd FP16 support, these projects become a limiting factor in an otheriwse highly optimized data transformation.

## Hardware Landscape

FP16 conversion and arithmetic are now widely available across all major SIMD families:
- **x86**: Early on, the `f16c` feature introduced SIMD convertion from FP16 and FP32 for efficient storage, while arithmetic would still be performed in FP32.
  With the AVX-512 generation, support for doing operations directly in FP16 is introduce with sigificant speedups.
- **ARM**: FP16 support becomes mandatory in latest ARM generations (ARM v8.2-a) with arithmetic, convertion, *etc*.
  This affects NEON operations on modern smartphones and all Apple silicon M-chips.
  Coverage is extended server side with both SVE and SVE2 supporting FP16.

## Proposed Work

This proposal covers foundational FP16 support: native FP16 operations on platforms that provide hardware acceleration, and correct, efficient fallbacks everywhere else.

Concretely, this means:
- A new `xsimd::batch<xsimd::fp16>` type (or equivalent half-precision batch specialization) that can be loaded from and stored to FP16 buffers.
- Support for converting from and to `batch<float>`, mapping to the optimal hardware instruction where available, and a correct SIMD algorithm elsewhere.
- Native FP16 arithmetic operations — add, multiply, FMA, min, max, and comparison — on backends that provide hardware support, with FP32-based fallbacks on those that do not

## Impact

Funding this development will directly open xsimd to the rapidly growing landscape of LLM and machine
learning workflows: local inference engines, model weight processing, and embedding pipelines.

Beyond new workloads, this will benefit existing projects using xsimd that already handle FP16 data.
For instance Apache Arrow and Parquet process half-precision columns today without hardware-optimized SIMD support.
These projects stand to benefit directly and with small integration effort.

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it.
