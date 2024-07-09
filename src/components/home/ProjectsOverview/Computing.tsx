import styles from "./styles.module.css";
import ComputingMD from "@site/src/components/home/ProjectsOverview/descriptions/Computing.md";
import XTensorXSIMDPicture from "@site/static/img/projects/xtensor_xsimd.svg";

export default function ComputingProjects() {
  return (
    <div className={"container" + " " + styles.project_container}>
      <div className="row">
        <div
          className={"col col--5 col--offset-1" + " " + styles.col_project_overview_with_padding}
        >
          <h1 className="padding-none">Scientific computing </h1>
          <h2 className={styles.h2_custom}>
            Supporting the development of several C++ scientific computing
            packages.
          </h2>

          <ComputingMD />
        </div>
        <div className={"col col--5" + " " + "flex-full-centered"+ " " + styles.col_project_overview_with_padding}>
          <XTensorXSIMDPicture width={"500px"}/>
        </div>
      </div>
    </div>
  );
}
