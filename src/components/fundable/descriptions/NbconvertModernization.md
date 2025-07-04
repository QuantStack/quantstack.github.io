Conversion of Jupyter notebooks to PDF currently relies on nbconvert in the backend, which in turns uses a headless browser for producing the PDF. We propose to directly perform the PDF conversion in the user's browser, which will simplify the architecture and make it function with JupyterLite.

Nbconvert heavily relies on Jinja2 templates for conversion to different formats.

We will utilize a JavaScript implementation of Jinja2 covering the required features of Jinja to produce a frontend version of nbconvert that does not require Python but still provides a good coverage of the nbconvert features, including the use of custom templates.