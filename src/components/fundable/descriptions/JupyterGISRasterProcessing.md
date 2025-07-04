Similar to QGIS, JupyterGIS currently offers a set of vector processing and conversion tools such as buffer creation, centroid calculation, and convex hull generation. These capabilities are powered by a GDAL WebAssembly (WASM) build running in the browser.

We will work on extending support to raster processing tools using the same underlying technology. Planned features (non-exhaustive and subject to request needs) include:

- Clipping by extent
- Clipping by mask layer
- Generating contours
- Polygonizing raster data