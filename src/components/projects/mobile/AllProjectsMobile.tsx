import styles from "../styles.module.css";
import { projectsDetails } from "../descriptions/projectsDetails";
import Link from "@docusaurus/Link";
import ProjectMobile from "./ProjectMobile";

export default function AllProjectsMobile () {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className="container">
          <ul className={"row" + " " + styles.row_custom}>
            {projectsDetails.map((project, index) => (
              <li className="cards_list" key={index}>
                <div className="col">
                  <Link href={"/projects/" + project.name}>
                    <div className={styles.project_description}>
                    <ProjectMobile project={project} />
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
