import styles from "./styles.module.css";

export default function SpecialProjects() {
    return (
      <div className={"container" + " " + styles.project_desktop}>
        <div className="row">
          <div className="col col--5 col--offset-1">
            <h1>Special projects</h1>
            <h2 className={styles.h2_custom}>
              Applications built from the ground up and addressing a complete use
              case.
            </h2>
            <p>
              Special projects leverage the open-source software stack that we
              maintain. Both JupyterCAD and Glue-Web leverage the JupyterLab
              application framework and assemble JupyterLab components to produce
              a different application.
              <br />
              <br />
              Such examples include: <br />
              JupyterCAD <br />
              Glue-Web
            </p>
          </div>
          <div className={"col col--5" + " " + styles.col_custom}>
            <img src="img/projects/jupytercad.svg" />
          </div>
        </div>
      </div>
    );
  }