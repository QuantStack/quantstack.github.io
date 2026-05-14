import { projectsDetails } from "./descriptions/projectsDetails";
import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";

export default function AllProjects() {
  return (
    <>
      {projectsDetails.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          bg="white"
        />
      ))}
    </>
  );
}
