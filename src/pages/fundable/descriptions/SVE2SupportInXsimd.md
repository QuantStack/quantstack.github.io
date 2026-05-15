#### Overview
xsimd is a C++ header-only library that abstracts SIMD (vectorization) intrinsics behind a single, generic API. The same code - `xsimd::batch<float>` - compiles to optimal machine code on x86 SSE/AVX, ARM NEON, RISC-V, and WebAssembly, with no runtime overhead. When an intrinsic is missing on a given target, xsimd falls back gracefully rather than failing or leaving the developer to write platform-specific branches. This is why projects like Mozilla Firefox, Apache Arrow, Meta Velox, KDE Krita, and Pythran have adopted it as their vectorization layer.

Writing SIMD intrinsics by hand is notoriously painful. Each architecture exposes different types, different naming conventions, and different gotchas - alignment rules, predicate registers, lane-width surprises, compiler bugs. Targeting two architectures means two separate, opaque, hard-to-test code paths. xsimd eliminates that cost entirely.

ARM is now a first-class server architecture. AWS Graviton4 - broadly deployed today across EC2 instance families - ships with SVE2, ARM's latest vector ISA. Google and Microsoft have both announced their own ARM-based server chips (Axion and Cobalt 200 respectively), signalling an industry-wide shift. SVE2 brings a materially richer instruction set than NEON, and xsimd currently cannot exploit it - falling back to SVE and NEON on hardware that is capable of significantly more.

We propose to implement a complete xsimd::sve2 backend - all arithmetic, mathematical, and reduction operations . The work will be fully tested, documented, and merged upstream into the public repository under the existing BSD 3-Clause license.

Funding this development will directly enhance the cutting-edge data processing workflow using Arrow and Velox, paving the way for the future of ARM computing!

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it.