import styles from "./styles.module.css";

export default function RoboticsProjects() {
    return (
      <div className={"container" + " " + styles.project_desktop}>
        <div className={"row" + " " + styles.row_custom}>
          <div className={"col col--5 col--offset-1" + " " + styles.col_custom}>
            <img src="img/projects/robotics.svg" width="600px" />
          </div>
          <div className="col col--5">
            <h1>Robotics </h1>
            <h2 className={styles.h2_custom}>
                We just kicked off a new initiative to Robotics education.
                </h2>
            <p>
              QuantStack created the RoboStack distribution of ROS, the first
              multi-platform distribution of ROS, as conda packages.
              <br />
              <br />
              We are bootstrapping the jupyter-ros project, a
              Jupyterlab-basedrobotics development environment for the ROS
              ecosystem.
              <br />
              <br />
              We just kicked off a new initiative to Robotics education. <br />
              Stay tuned for more on this subject!
            </p>
          </div>
        </div>
      </div>
    );
  }