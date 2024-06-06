import styles from "./styles.module.css";
import JupyterMD from "./descriptions/Jupyter.md";
import JupyterPictureUrl from "@site/static/img/projects/jupyterlab_examples.png";

export default function JupyterProject() {
  return (
    <div
      className={"container" + " " + styles.project_desktop}
      style={{
        marginTop: "var(--ifm-spacing-7xl)",
      }}
    >
      <div className={"row"}>
        <div className={"col col--5 col--offset-1" + " " + styles.col_custom_text}>
          <h1>Jupyter project </h1>
          <h2 className={styles.h2_custom}>We strive to sustain the project in the long term.</h2>
         <JupyterMD/>
        </div>

        <div
          className={"col col--5" + " " + styles.col_custom_picture}
        >
          <img src={JupyterPictureUrl} />
        </div>
      </div>
    </div>
  );
}
