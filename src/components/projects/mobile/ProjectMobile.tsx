import styles from "../styles.module.css";

export default function ProjectMobile({ project }): JSX.Element {
  return (
    <div className={"container" + " " + styles.project_container}>
      <div className={"row"}>
        <div
          className={"col" + " " + "flex-full-centered" + " " + "padding-none"}
          style={{ borderRadius: "8px" }}
        >
          <div className="flex-full-centered">
            <img
              src={project.pictureRoute}
              width={project.pictureWidthMobile}
              height={project.pictureHeightMobile}
            />
          </div>
          <div className="flex-full-centered">
            <div className={styles.project_title_small}>{project.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
