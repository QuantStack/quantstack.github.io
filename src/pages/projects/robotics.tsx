import RoboticsDescription from "@site/src/components/projects/descriptions/Robotics.md";
import ProjectPopup from "@site/src/components/projects/mobile/ProjectPopup";
import { projectsDetails } from "@site/src/components/projects/descriptions/projectsDetails";

export default function Robotics() {
  return (
    <ProjectPopup name="robotics" projectDetails={projectsDetails} ProjectDescription={RoboticsDescription}/>
  )
}