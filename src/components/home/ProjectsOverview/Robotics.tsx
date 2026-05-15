import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import RoboticsMD from "./descriptions/Robotics.md";
import RoboticsPictureUrl from "@site/static/img/projects/robotics.png";

export default function RoboticsProjects() {
  return (
    <SplitSection
      reverse
      image={<img src={RoboticsPictureUrl} alt={"Picture showing two jupyterlab user interfaces displaying robotics projects."} style={{ maxWidth: "100%" }} />}
    >
      <h2 className="padding-none">Robotics</h2>
      <p className={styles.tagline}>Creators of RoboStack, the first multi-platform ROS distribution, and maintainers of jupyter-ros.</p>
      <RoboticsMD />
    </SplitSection>
  );
}
