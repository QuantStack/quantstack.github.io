#### Overview

JupyterGIS provides a powerful suite of vector geospatial processing tools—such as buffer creation, centroid calculation, and convex hull generation—directly in the browser. These capabilities are enabled by a GDAL WebAssembly (WASM) build, eliminating the need for server-side processing or local installations.

Building on this foundation, we are now expanding support to raster processing tools, unlocking even more geospatial workflows in JupyterLite and notebook.link. This will enable users to perform complex raster operations entirely client-side, making geospatial analysis more accessible, collaborative, and scalable.

##### Upcoming Raster Processing Features

We are prioritizing the following features, but welcome community input to shape the roadmap:

| Feature            | Use Case |
| ------------------ | -------- |
| Clipping by Extent | Extract raster data for a specific geographic area. |
| Clipping by Mask Layer | Use vector layers to define custom clipping boundaries. |
| Generating Contours | Create contour lines from elevation or other continuous raster datasets. |
| Polygonizing Raster Data | Convert raster cells into vector polygons for further analysis. |

##### Are you interested in this project? Either entirely or partially, contact us for more information on how to help us fund it