import jupyterLogoUrl from "@site/static/img/projects/Jupyter.png";
import xtensorLogoUrl from "@site/static/img/projects/xtensor.png";
import condaforgeLogoUrl from "@site/static/img/projects/conda_forge.png";
import robostackPictureUrl from "@site/static/img/projects/robostack.png";
import JupyterMD from "./Jupyter.md";
import CondaForgeMD from "./CondaForge.md";
import XTensorXSIMDMD from "./XTensorXSIMD.md";
import RoboticsMD from "./Robotics.md";


export const projectsDetails = [
  {
    name: "jupyter",
    title: "Jupyter",
    pictureRoute: jupyterLogoUrl,
    pictureWidth: "198px",
    pictureHeight: "234px",
    pictureBorder: "solid 1px var(--ifm-color-orange-jupyter)",
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
    pictureBorder: "solid 1px  var(--ifm-color-green-xtensor)",
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
    pictureBorder: "solid 1px var(--ifm-color-grey-condaforge)",
    pictureAltText: "Picture for Condaforge project showing its forge logo.",
    ProjectMD: CondaForgeMD,
    reverse:"false"
  },
  {
    name: "robotics",
    title: "Robotics",
    pictureRoute: robostackPictureUrl,
    pictureWidth: "189px",
    pictureHeight: "210px",
    pictureBorder: "solid 1px rgb(146, 95, 218)",
    pictureAltText: "Picture for robotics project showing an illustration with a robotics device.",
    ProjectMD: RoboticsMD,
    reverse:"true"
  },
];
