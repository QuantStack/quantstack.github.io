import jupyterLogoUrl from "@site/static/img/projects/Jupyter.png";
import xtensorLogoUrl from "@site/static/img/projects/xtensor.png";
import condaforgeLogoUrl from "@site/static/img/projects/conda_forge.png";
import apachearrowLogoUrl from "@site/static/img/projects/apache_arrow.png";
import robostackPictureUrl from "@site/static/img/projects/robostack.png";
import JupyterMD from "./Jupyter.md";
import CondaForgeMD from "./CondaForge.md";
import XTensorXSIMDMD from "./XTensorXSIMD.md";
import ApacheArrowMD from "./ApacheArrow.md";
import RoboticsMD from "./Robotics.md";


export const projectsDetails = [
  {
    name: "jupyter",
    title: "Jupyter",
    pictureRoute: jupyterLogoUrl,
    pictureWidth: "198px",
    pictureHeight: "234px",
    pictureAltText: "Picture for Jupyter project showing its logo.",
    ProjectMD: JupyterMD,
    reverse: "false"
  },
  {
    name: "xtensorxsimd",
    title: "Xtensor & Xsimd",
    pictureRoute: xtensorLogoUrl,
    pictureWidth: "257px",
    pictureHeight: "257px",
    pictureAltText: "Picture for Xtensor and Xsimd showing their respective logo.",
    ProjectMD: XTensorXSIMDMD,
    reverse: "true",
  },
  {
    name: "condaforge",
    title: "Conda-forge",
    pictureRoute: condaforgeLogoUrl,
    pictureWidth: "196px",
    pictureHeight: "180px",
    pictureAltText: "Picture for Condaforge project showing its forge logo.",
    ProjectMD: CondaForgeMD,
    reverse:"false"
  },
  {
    name: "apache_arrow",
    title: "Apache Arrow and Parquet",
    pictureRoute: apachearrowLogoUrl,
    pictureWidth: "176px",
    pictureHeight: "63px",
    pictureAltText: "Picture for Apache Arrow project showing the logo made of arrows.",
    ProjectMD: ApacheArrowMD,
    reverse:"false"
  },
  {
    name: "robotics",
    title: "Robotics",
    pictureRoute: robostackPictureUrl,
    pictureWidth: "189px",
    pictureHeight: "210px",
    pictureAltText: "Picture for robotics project showing an illustration with a robotics device.",
    ProjectMD: RoboticsMD,
    reverse:"true"
  },
];
