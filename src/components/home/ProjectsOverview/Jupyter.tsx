import styles from "./styles.module.css";
import JupyterMD from "./descriptions/Jupyter.md"

export default function JupyterProject() {
  return (
    <div
      className={"container" + " " + styles.project_desktop}
      style={{
        marginTop: "var(--ifm-spacing-7xl)",
      }}
    >
      <div className={"row"}>
        <div className="col col--5 col--offset-1">
          <h1>Jupyter project </h1>
          <h2 className={styles.h2_custom}>We strive to sustain the project in the long term.</h2>
         <JupyterMD/>
        </div>

        <div
          className={"col col--5" + " " + styles.col_custom}
        >
          <img src="/img/projects/jupyterlab_examples.svg" />
        </div>
      </div>
    </div>
  );
}
