import NbconvertModernizationMD from "@site/src/components/fundable/descriptions/NbconvertModernization.md"
import JupyterGISRasterProcessingMD from "@site/src/components/fundable/descriptions/JupyterGISRasterProcessing.md"
import JupyterGISToolsForPythonAPIMD from "@site/src/components/fundable/descriptions/JupyterGISToolsForPythonAPI.md"
import EmscriptenForgePackageRequestsMD from "@site/src/components/fundable/descriptions/EmscriptenForgePackageRequests.md"
import SVE2SupportInXsimdMD from "@site/src/components/fundable/descriptions/SVE2SupportInXsimd.md"
import MatrixOperationsInXtensorMD from "@site/src/components/fundable/descriptions/MatrixOperationsInXtensor.md"
import BinaryViewInArrowCppMD from "@site/src/components/fundable/descriptions/BinaryViewInArrowCpp.md"
import Decimal32InArrowCppMD from"@site/src/components/fundable/descriptions/Decimal32InArrowCpp.md"
import Float16InArrowCppMD from"@site/src/components/fundable/descriptions/Float16InArrowCpp.md"

export const fundableProjectsDetails = {
    jupyterEcosystem: [
        {
            category: "Jupyter Ecosystem",
            title: "Modernizing nbconvert",
            pageName: "NbconvertModernization",
            shortDescription: "Conversion of Jupyter notebooks to PDF currently relies on nbconvert in the backend, which in turns uses a headless browser for producing the PDF. We propose to directly perform the PDF conversion in the user's browser, which will simplify the architecture and make it function with JupyterLite.",
            description: NbconvertModernizationMD,
            price: "30 000 €",
            maxNbOfFunders: 1,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            note: "Note: Costs and features can be further adapted following discussion with the funding organization. Open-source under relevant licenses. The funding organization will be credited in communication about the project.",
            repoLink: "https://github.com/jupyter/nbconvert"
        },
        {
            category: "Jupyter Ecosystem",
            title: "Raster processing tools in JupyterGIS",
            pageName: "JupyterGISRasterProcessing",
            shortDescription: "JupyterGIS currently offers a set of vector processing and conversion tools. These capabilities are powered by a GDAL WebAssembly (WASM) build running in the browser. We will work on extending support to raster processing tools using the same underlying technology.",
            description: JupyterGISRasterProcessingMD,
            price: "TBD",
            maxNbOfFunders: 1,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/geojupyter/jupytergis"
        },
        {
            category: "Jupyter Ecosystem",
            title: "Bringing processing tools to the JupyterGIS Python API",
            pageName: "JupyterGISToolsForPythonAPI",
            shortDescription: "JupyterGIS currently supports several vector processing and conversion tools, currently available only through the JupyterGIS user interface. We plan to extend these capabilities to the JupyterGIS Python API, enabling users to access the same processing tools programmatically. ",
            description: JupyterGISToolsForPythonAPIMD,
            price: "10 000 €",
            maxNbOfFunders: 1,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/geojupyter/jupytergis"
        },
    ],
    packageManagement: [
        {
            category: "Package Management",
            title: "Package requests for emscripten-forge",
            pageName: "EmscriptenForgePackageRequests",
            shortDescription: "Emscripten-forge is a conda package distribution specifically designed for WebAssembly. While the number of available emscripten-forge packages is growing quickly, many packages are still missing from the ecosystem. We will be working on adding new packages upon request.",
            description: EmscriptenForgePackageRequestsMD,
            price: "TBD",
            maxNbOfFunders: 1,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/mamba-org/mamba"
        }],

    scientificComputing: [
        {
            category: "Scientific Computing",
            title: "SVE2 support in xsimd",
            pageName: "SVE2SupportInXsimd",
            shortDescription: "xsimd is a C++ scientific library that abstract low-level high performances computing primitives across different hardwares. We will add support for the latest SVE2 generation of ARM CPUs.",
            description: SVE2SupportInXsimdMD,
            price: "30 000 €",
            maxNbOfFunders: 2,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/xtensor-stack/xsimd"
        },
        {
            category: "Scientific Computing",
            title: "Implementing Kazushige Goto Algorithms for Matrix Operations in xtensor",
            pageName: "MatrixOperationsInXtensor",
            shortDescription: "This project aims to integrate Kazushige Goto’s highly optimized matrix multiplication algorithms into the xtensor framework, leveraging the xsimd library for SIMD acceleration.",
            description: MatrixOperationsInXtensorMD,
            price: "45 000 €",
            maxNbOfFunders: 1,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/xtensor-stack/xtensor"
        }
    ],

    apacheArrow: [
        {
            category: "Apache Arrow and Parquet",
            title: "Complete BinaryView / StringView support in Arrow C++",
            pageName: "BinaryViewInApacheArrow",
            shortDescription: "BinaryView is a more recent and more efficient alternative to Arrow's standard Binary type. It allows for inlined storage of short strings and fast prefix comparison.",
            description: BinaryViewInArrowCppMD,
            price: "TBD",
            maxNbOfFunders: 4,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/apache/arrow"
        },
        {
            category: "Apache Arrow and Parquet",
            title: "Complete Decimal32 / Decimal64 support in Arrow C++",
            pageName: "Decimal32InApacheArrow",
            shortDescription: "Decimal32 and Decimal64 are more compact and computationally more efficient data types than the standard Decimal128.",
            description: Decimal32InArrowCppMD,
            price: "TBD",
            maxNbOfFunders: 2,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/apache/arrow"
        },
        {
            category: "Apache Arrow and Parquet",
            title: "Complete Float16 support in Arrow C++",
            pageName: "Float16InApacheArrow",
            shortDescription: "Float16 is a more compact data type than Float32 and Float64, and sees growing usage in applications where its limited precision is sufficient.",
            description: Float16InArrowCppMD,
            price: "TBD",
            maxNbOfFunders: 2,
            currentNbOfFunders: 0,
            currentFundingPercentage: 0,
            repoLink: "https://github.com/apache/arrow"
        }
    ]

}

