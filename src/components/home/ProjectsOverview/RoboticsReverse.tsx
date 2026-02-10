import styles from "./styles.module.css";
import RoboticsMD from "@site/src/components/home/ProjectsOverview/descriptions/Robotics.md";
import RoboticsPictureUrl from "@site/static/img/projects/robotics.png";

export default function RoboticsProjects() {
  return (
    <div className={styles.container_projects}>
      <div className={styles.row_projects}>
        <div
          className={
            "col col--6 flex-full-centered" +
            " " +
            styles.col_project_overview_with_padding
          }
        >
          <img src={RoboticsPictureUrl} width={"640px"} alt={"Picture showing two jupyterlab user interfaces displaying robotics projects."}/>
        </div>
        <div className={"col col--6" + " " + styles.col_project_overview_with_padding}>
          <h1 className="padding-none">Robotics </h1>
          <h2 className={styles.h2_custom}>
            We just kicked off a new initiative to Robotics education.
          </h2>
          <RoboticsMD />
        </div>
      </div>
    </div>
  );
}
