import styles from "./styles.module.css";
import { fundableProjectsDetails } from "./projectsDetails";
import ProjectCategory from "./ProjectCategory";
import MenuSidebar from "./MenuSideBar";
import LinkToContact from "../home/LinkToContact";

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
          projectCategoryName={"Jupyter ecosystem"}
          projectCategory={fundableProjectsDetails.jupyterEcosystem}
        />
      </section>
      <section id="package-management">
        <ProjectCategory
          projectCategoryName={"Package management"}
          projectCategory={fundableProjectsDetails.packageManagement}
        />
      </section>
      <section id="propose-and-fund-a-project">
        <h2 className={styles.project_category_header} style={{ margin: "0px" }}>Can't find a project?</h2>
        <p style={{ marginTop: "var(--ifm-spacing-lg)" }}>If you have a project in mind that you think would be relevant to our expertise, please contact us to discuss it.</p>
        <LinkToContact label={"CONTACT US!"} />
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
