import CondaForgeDescription from "@site/src/components/projects/descriptions/CondaForge.md";
import ProjectPopup from "@site/src/components/projects/mobile/ProjectPopup";
import { projectsDetails } from "@site/src/components/projects/descriptions/projectsDetails";

export default function CondaForge() {
  return (
    <ProjectPopup name="condaforge" projectDetails={projectsDetails} ProjectDescription={CondaForgeDescription}/>
  )
}
