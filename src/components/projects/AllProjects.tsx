import { projectsDetails } from "./descriptions/projectsDetails";
import ProjectCard from "./ProjectCard";

export default function AllProjects() {
  return (
    <div
      className="container flex-full-centered"
      style={{ marginBottom: "var(--ifm-spacing-3xl)" }}
    >
      <ul className="row --no-gutters">
        {projectsDetails.map((project, index) => {
          return (
            <li
              className="projects-list"
              key={index}
              
            >
              <div className="col" style={{ paddingLeft: "0" }}>
                <ProjectCard project={project} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
