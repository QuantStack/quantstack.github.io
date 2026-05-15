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
      <Section>
        <h2 className="text--center">What we work on</h2>
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
