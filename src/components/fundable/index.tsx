import styles from "./styles.module.css";
import { fundableProjectsDetails } from "./projectsDetails";
import ProjectCategory from "./ProjectCategory";
import MenuSidebar from "./MenuSideBar";

export function getCategoryFromProjectPageName(pageName: string) {
  for (const [categoryName, projectsByCategory] of Object.entries(fundableProjectsDetails)) {
    const project = projectsByCategory.find((project) => project.pageName === pageName);
    if (project) {
      return projectsByCategory;
    }
  }
  return null;
}

export function MainAreaFundableProjects() {
  return (
    <div>
      <h1 style={{ padding: "0" }}>Check out our projects available for funding!</h1>

      <section id="jupyter-ecosystem">
        <ProjectCategory
          projectCategoryName={"Jupyter Ecosystem"}
          projectCategory={fundableProjectsDetails.jupyterEcosystem}
        />
      </section>
      <section id="project-management">
        <ProjectCategory
          projectCategoryName={"Package Management"}
          projectCategory={fundableProjectsDetails.packageManagement}
        />
      </section>
    </div>

  )
}

export default function FundableProjects() {
  return (

    <div className="container upper-container-with-margin-top">
      <div className="row">
        <div className={"col col--2" + " " + styles.menu_sidebar}>
          <MenuSidebar />
        </div>
        <div className={"col col--9 col--offset-1" + " " + styles.main_area_desktop} >
          <MainAreaFundableProjects />
        </div >
        <div className={"col col--12" + " " + styles.main_area_mobile} >
          <MainAreaFundableProjects />
        </div>
      </div>
    </div >

  );
}
