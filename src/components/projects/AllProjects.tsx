import { projectsDetails } from "./descriptions/projectsDetails";
import ProjectCard from "./ProjectCard"

export default function AllProjects() {
  return (
    <div className="container flex-full-centered" style={{marginBottom: "var(--ifm-spacing-3xl)"}}>
        <ul className="row">
          {projectsDetails.map((project, index) => {
            return(
              <li className="projects-list" key={index}>
                <div className="col">
                  <ProjectCard project={project}/>
                </div>
              </li>
            )
        })}
      </ul>
    </div>
  )
}
