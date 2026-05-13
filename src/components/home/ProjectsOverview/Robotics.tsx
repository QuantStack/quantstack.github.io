import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import RoboticsMD from "./descriptions/Robotics.md";
import RoboticsPictureUrl from "@site/static/img/projects/robotics.png";

export default function RoboticsProjects() {
  return (
    <SplitSection
      bg="light"
      reverse
      image={<img src={RoboticsPictureUrl} alt={"Picture showing two jupyterlab user interfaces displaying robotics projects."} style={{ maxWidth: "100%" }} />}
    >
      <h1 className="padding-none">Robotics</h1>
      <h2 className={styles.h2_custom}>We just kicked off a new initiative to Robotics education.</h2>
      <RoboticsMD />
    </SplitSection>
  );
}
