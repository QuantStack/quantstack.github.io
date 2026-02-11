import styles from "./styles.module.css";
import JupyterMD from "./descriptions/Jupyter.md";
import JupyterPictureUrl from "@site/static/img/projects/jupyterlab_examples.png";

export default function JupyterProject() {
  return (
    <div
      className={styles.container_projects}
      style={{
        marginTop: "var(--ifm-spacing-4xl)",
      }}
    >
      <div className="row-max-width">
        <div className={"col col--6" + " " + styles.col_project_overview_with_padding}>
          <h1 className="padding-none">Jupyter project </h1>
          <h2 className={styles.h2_custom}>We strive to sustain the project in the long term.</h2>
         <JupyterMD/>
        </div>

        <div
          className={"col col--6 flex-full-centered"+" " +styles.col_project_overview_with_padding}
        >
          <img src={JupyterPictureUrl} width={"540px"} alt={"Picture showing two jupyterlab user interfaces"}/>
        </div>
      </div>
    </div>
  );
}
