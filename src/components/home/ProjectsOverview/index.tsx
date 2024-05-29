import JupyterProject from "./Jupyter";
import SupplyChainProjects from "./SupplyChain";
import SpecialProjects from "./SpecialProjects";
import RoboticsProjects from "./Robotics";
import ComputingProjects from "./Computing";

export default function ProjectsOverview() {
  return (
    <div>
      <JupyterProject />
      <SupplyChainProjects />
      <SpecialProjects />
      <RoboticsProjects />
      <ComputingProjects />
    </div>
  );
}
