import styles from "./styles.module.css";

export default function ProjectCard({ project }): JSX.Element {
  const prefix = "project_picture_";
  const base = `${prefix}${project.name}` 
  return (
    <div className="container">
      <div className="row row--no-gutters">
        <div
          className={"col col--6 col" + " " + styles.project_text}
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
            styles[base]
          }
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
}
