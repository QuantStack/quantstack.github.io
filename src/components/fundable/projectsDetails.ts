import NbconvertModernizationMD from "@site/src/components/fundable/descriptions/NbconvertModernization.md"
import JupyterGISRasterProcessingMD from "@site/src/components/fundable/descriptions/JupyterGISRasterProcessing.md"
import JupyterGISToolsForPythonAPIMD from "@site/src/components/fundable/descriptions/JupyterGISToolsForPythonAPI.md"
import EmscriptenForgePackageRequestsMD from "@site/src/components/fundable/descriptions/EmscriptenForgePackageRequests.md"
import JupyterLabParquetFileViewerMD from "@site/src/components/fundable/descriptions/JupyterLabParquetFileViewer.md"
import JupyterGISIcon from "/img/icons/JupyterGIS.svg";
import ToolsIcon from "/img/icons/Tools.svg";
import PythonIcon from "/img/icons/Python.svg";
import GlobeIcon from "/img/icons/Globe.svg";
import EmptyIcon from "/img/icons/Empty.svg";
import JupyterIcon from "/img/icons/Jupyter.svg";
import EmscriptenForgeIcon from "/img/icons/EmscriptenForge.svg";

export const fundableProjectsDetails = {
    jupyterEcosystem: [
        {
            category: "Jupyter Ecosystem",
            title: "Modernize nbconvert",
            pageName: "NbconvertModernization",
            catchUpPhrase: "",
            description: NbconvertModernizationMD,
            optionA: "This is option A",
            optionB: "This is option B",
            customOption: "This is custom option",
            icons: [JupyterIcon, EmptyIcon,EmptyIcon, EmptyIcon, EmptyIcon, EmptyIcon],
            price: "15000 €",
            maxNbOfFunders: 3,
            currentNbOfFunders: 2,
            currentFundingPercentage: 65,
            note: "Note: Costs and features can be further adapted following discussion with the funding organization. Open-source under relevant licenses. The funding organization will be credited in communication about the project.",
            repoLink: "https://github.com/jupyter/nbconvert"
        },
        {
            category: "Jupyter Ecosystem",
            title: "Raster processing tools in JupyterGIS",
            pageName: "JupyterGISRasterProcessing",
            catchUpPhrase: "",
            description: JupyterGISRasterProcessingMD,
            optionA: "This is option A",
            optionB: "This is option B",
            customOption: "This is custom option",
            icons: [JupyterIcon, JupyterGISIcon, ToolsIcon, PythonIcon, GlobeIcon, EmptyIcon],
            price: "15000 €",
            maxNbOfFunders: 4,
            currentNbOfFunders: 2,
            currentFundingPercentage: 45,
            note: "Note: Costs and features can be further adapted following discussion with the funding organization. Open-source under relevant licenses. The funding organization will be credited in communication about the project.",
            repoLink: "https://github.com/geojupyter/jupytergis"
        },
        {
            category: "Jupyter Ecosystem",
            title: "Bringing processing tools to the JupyterGIS Python API",
            pageName: "JupyterGISToolsForPythonAPI",
            catchUpPhrase: "",
            description: JupyterGISToolsForPythonAPIMD,
            optionA: "This is option A",
            optionB: "This is option B",
            customOption: "This is custom option",
            icons: [JupyterIcon, JupyterGISIcon, ToolsIcon, PythonIcon, GlobeIcon, EmptyIcon],
            price: "10000 €",
            maxNbOfFunders: 2,
            currentNbOfFunders: 0,
            currentFundingPercentage: 15,
            note: "Note: Costs and features can be further adapted following discussion with the funding organization. Open-source under relevant licenses. The funding organization will be credited in communication about the project.",
            repoLink: "https://github.com/geojupyter/jupytergis"
        },
        {
            category: "Jupyter Ecosystem",
            title: "Parquet File Viewer For JupyterLab",
            pageName: "JupyterLabParquetFileViewer",
            catchUpPhrase: "",
            description: JupyterLabParquetFileViewerMD,
            optionA: "This is option A",
            optionB: "This is option B",
            customOption: "This is custom option",
            icons: [JupyterIcon, EmptyIcon,EmptyIcon, EmptyIcon, EmptyIcon, EmptyIcon],
            price: "10000 €",
            maxNbOfFunders: 2,
            currentNbOfFunders: 0,
            currentFundingPercentage: 15,
            note: "Note: Costs and features can be further adapted following discussion with the funding organization. Open-source under relevant licenses. The funding organization will be credited in communication about the project.",
            repoLink: "https://github.com/jupyterlab/jupyterlab"
        }
    ],
    packageManagement: [
        {
            category: "Package Management",
            title: "Package requests for emscripten-forge",
            pageName: "EmscriptenForgePackageRequests",
            catchUpPhrase: "",
            description: EmscriptenForgePackageRequestsMD,
            optionA: "This is option A",
            optionB: "This is option B",
            customOption: "This is custom option",
            icons: [EmscriptenForgeIcon, EmptyIcon,EmptyIcon, EmptyIcon, EmptyIcon, EmptyIcon],
            price: "package dependant",
            maxNbOfFunders: 3,
            currentNbOfFunders: 1,
            currentFundingPercentage: 33,
            note: "Note: Costs and features can be further adapted following discussion with the funding organization. Open-source under relevant licenses. The funding organization will be credited in communication about the project.",
            repoLink: "https://github.com/mamba-org/mamba"
        }],
}

