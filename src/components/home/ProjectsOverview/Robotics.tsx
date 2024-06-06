import styles from "./styles.module.css";
import RoboticsMD from "@site/src/components/home/ProjectsOverview/descriptions/Robotics.md";
import RoboticsPictureUrl from "@site/static/img/projects/robotics.png"

export default function RoboticsProjects() {
    return (
      <div className={"container" + " " + styles.project_desktop}>
        <div className={"row" + " " + styles.row_custom_picture}>
          <div className={"col col--5 col--offset-1" + " " + styles.col_custom_text}>
            <img src={RoboticsPictureUrl} />
          </div>
          <div className={"col col--5" + " "+ styles.col_custom_text}>
            <h1>Robotics </h1>
            <h2 className={styles.h2_custom}>
                We just kicked off a new initiative to Robotics education.
                </h2>
           <RoboticsMD/>
          </div>
        </div>
      </div>
    );
  }