import JupyterProject from "./Jupyter";
import SupplyChainProjects from "./SupplyChain";
import SpecialProjects from "./SpecialProjects";
import RoboticsProjects from "./Robotics";
import ComputingProjects from "./Computing";
import DataAnalysisProjects from "./DataAnalysis";
import Section from "../../layout/Section";
import styles from "./styles.module.css";

export default function ProjectsOverview() {
  return (
    <div className={styles.projects_overview_container}>
      <Section bg="yellow">
        <h2 className="text--center">Our open-source projects</h2>
      </Section>
      <JupyterProject />
      <SupplyChainProjects />
      <SpecialProjects />
      <RoboticsProjects />
      <ComputingProjects />
      <DataAnalysisProjects />
    </div>
  );
}
