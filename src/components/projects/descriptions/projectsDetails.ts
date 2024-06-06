import jupyterLogoUrl from "@site/static/img/projects/Jupyter.png";
import xtensorLogoUrl from "@site/static/img/projects/xtensor.png";
import condaforgeLogoUrl from "@site/static/img/projects/conda_forge.png";
import robostackPictureUrl from "@site/static/img/projects/robostack.png";



export const projectsDetails = [
  {
    name: "jupyter",
    title: "Jupyter",
    pictureRoute: jupyterLogoUrl,
    pictureWidthDesktop: "198px",
    pictureHeightDesktop: "234px",
    pictureBorderDesktop: "solid 1px var(--ifm-color-orange-jupyter)",
    pictureWidthMobile: "36px",
    pictureHeightMobile: "43px",
    pictureBorderMobile: "solid 0px",
    reverse: "false"
  },
  {
    name: "xtensorxsimd",
    title: "Xtensor & Xsimd",
    pictureRoute: xtensorLogoUrl,
    pictureWidthDesktop: "257px",
    pictureHeightDesktop: "257px",
    pictureBorderDesktop: "solid 1px  var(--ifm-color-green-xtensor)",
    pictureWidthMobile: "36px",
    pictureHeightMobile: "43px",
    pictureBorderMobile: "solid 0px",
    reverse: "true",
  },
  {
    name: "condaforge",
    title: "Conda-forge",
    pictureRoute: condaforgeLogoUrl,
    pictureWidthDesktop: "196px",
    pictureHeightDesktop: "180px",
    pictureBorderDesktop: "solid 1px var(--ifm-color-grey-condaforge)",
    pictureWidthMobile: "36px",
    pictureHeightMobile: "43px",
    pictureBorderMobile: "solid 0px",
    reverse:"false"
  },
  {
    name: "robotics",
    title: "Robotics",
    pictureRoute: robostackPictureUrl,
    pictureWidthDesktop: "189px",
    pictureHeightDesktop: "210px",
    pictureBorderDesktop: "solid 1px rgb(146, 95, 218)",
    pictureWidthMobile: "36px",
    pictureHeightMobile: "43px",
    pictureBorderMobile: "solid 0px",
    reverse:"true"
  },
];
