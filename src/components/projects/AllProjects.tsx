import { projectsDetails } from "./descriptions/projectsDetails";
import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";

export default function AllProjects() {
  return (
    <div
      className={
        "container flex-full-centered" + " " + styles.all_projects_container
      }
    >
      <ul className="row --no-gutters">
        {projectsDetails.map((project, index) => {
          return (
            <li className="projects-list" key={index}>
              <div className="col" style={{ paddingLeft: "0" }}>
                <ProjectCard project={project} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
