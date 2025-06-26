import styles from "./styles.module.css";
import { fundableProjectsDetails } from "./projectsDetails";
import ProjectCategory from "./ProjectCategory";

export function getCategoryFromProjectTitle(title: string) {
  for (const [categoryName, projectsByCategory] of Object.entries(fundableProjectsDetails)) {
    const project = projectsByCategory.find((project) => project.shortTitle.replace(/\s+/g, '').replace(/\s+/g, '') === title);
    if (project) {
      return projectsByCategory;
    }
  }
  return null;
}

export default function FundableProjects() {
  return (
    <div className="main-container-with-margins">
      <div className="container upper-container-with-margin-top">
        <div className="row">
          <div className="col col--10">
            <h1 style={{ padding: "0" }}>Check out our projects available for funding!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ProjectCategory
              projectCategoryName={"Jupyter Ecosystem"}
              projectCategory={fundableProjectsDetails.jupyterEcosystem}
            />
            <ProjectCategory
              projectCategoryName={"Package Management"}
              projectCategory={fundableProjectsDetails.packageManagement}
            />

          </div>
        </div>
      </div>
    </div>


  );
}
