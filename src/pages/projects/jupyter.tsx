import JupyterDescription from "@site/src/components/projects/descriptions/Jupyter.md";
import ProjectPopup from "@site/src/components/projects/ProjectPage";
import { projectsDetails } from "@site/src/components/projects/descriptions/projectsDetails";

export default function Jupyter() {
  return (
    <ProjectPopup name="jupyter" projectDetails={projectsDetails} ProjectDescription={JupyterDescription}/>
  )
}