import styles from "./styles.module.css";

export default function ProjectCard({ project }): JSX.Element {
  /*if (project.reverse === "false") {*/
  return (
    <div className="container">
      <div className="row row--no-gutters horizontally-centered">
        <div
          className={"col col--6 col" + " " + styles.col_project_text}
        >
          <div className={styles.project_title}>{project.title}</div>
          <div className={styles.project_description}>
            <project.ProjectMD />
          </div>
        </div>
        <div
          className={
            "col col--4 flex-full-centered padding-none" +
            " " +
            styles.col_project_picture_right
          }
          style={{ border: project.pictureBorder }}
        >
          <div className={styles.col_project_picture}></div>
          <img
            src={project.pictureRoute}
            width={project.pictureWidth}
            height={project.pictureHeight}
            alt={project.pictureAltText}
          />
        </div>
      </div>
    </div>
  );
  /* } else if (project.reverse === "true") {
    return (
      <div className="container">
        <div className={"row horizontally-centered"}>
          <div
            className={
              "col col--4 flex-full-centered padding-none" +
              " " +
              styles.col_project_picture_left
            }
            style={{ border: project.pictureBorder }}
          >
            <div className={styles.col_project_picture}>
              <img
                src={project.pictureRoute}
                width={project.pictureWidth}
                height={project.pictureHeight}
                alt={project.pictureAltText}
              />
            </div>
          </div>

          <div className={"col col--6" + " " + styles.col_project_text}>
            <div className={styles.project_title}>{project.title}</div>
            <div className={styles.project_description}>
              <project.projectMD />
            </div>
          </div>
        </div>
      </div>
    );
  }*/
}
