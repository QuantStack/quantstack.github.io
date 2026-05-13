import { projectsDetails } from "./descriptions/projectsDetails";
import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";

export default function AllProjects() {
  return (
    <div className="page-content">
      <ul className={"projects-list " + styles.all_projects_container}>
        {projectsDetails.map((project, index) => (
          <li key={index}><ProjectCard project={project} /></li>
        ))}
      </ul>
    </div>
  )
}
