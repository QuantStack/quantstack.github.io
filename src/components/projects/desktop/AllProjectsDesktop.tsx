import styles from "../styles.module.css";
import { projectsDetails } from "../descriptions/projectsDetails";
import JupyterDescription from "../descriptions/Jupyter.md";
import CondaForgeDescription from "../descriptions/CondaForge.md";
import XTensorXSIMDDescription from "../descriptions/XTensorXSIMD.md";
import RoboticsDescription from "../descriptions/Robotics.md";
import ProjectDesktop from "./ProjectDesktop";

const ProjectsDescriptions = [
  JupyterDescription,
  CondaForgeDescription,
  XTensorXSIMDDescription,
  RoboticsDescription,
];

export function AllProjectsDeskTop() {
  return (
    <div className="container">
      <ul className={"row" + " " + styles.row_custom}>
        {projectsDetails.map((project, index) => (
          <li className="cards_list" key={index}>
            <div className="col">
              <ProjectDesktop
                project={project}
                ProjectDescriptionMD={ProjectsDescriptions[index]}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
