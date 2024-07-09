import XtensorXsimdDescription from "@site/src/components/projects/descriptions/XTensorXSIMD.md";
import ProjectPopup from "@site/src/components/projects/ProjectPage";
import { projectsDetails } from "@site/src/components/projects/descriptions/projectsDetails";

export default function XTensorXSIMD() {
  return (
    <ProjectPopup name="xtensorxsimd" projectDetails={projectsDetails} ProjectDescription={XtensorXsimdDescription}/>
  )
}