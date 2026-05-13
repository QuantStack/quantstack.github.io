import styles from "./styles.module.css";

export default function ProjectCard({ project }): JSX.Element {
  const picClass = styles[`project_picture_${project.name}`] ?? "";
  const isReverse = project.reverse === "true";

  const textCol = (
    <div className={"col col--8 " + styles.project_text}>
      <div className={styles.project_title}>{project.title}</div>
      <div className={styles.project_description}>
        <project.ProjectMD />
      </div>
    </div>
  );

  const imageCol = (
    <div className="col col--4 flex-full-centered padding-none">
      <div className={picClass}>
        <img
          src={project.pictureRoute}
          alt={project.pictureAltText}
          className={styles.project_logo}
        />
      </div>
    </div>
  );

  return (
    <div className="row row--no-gutters">
      {isReverse ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
    </div>
  );
}
