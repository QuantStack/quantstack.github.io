import styles from "./styles.module.css";
import SpecialProjectsMD from "@site/src/components/home/ProjectsOverview/descriptions/SpecialProjects.md";
import SpecialProjectsPictureUrl from "@site/static/img/projects/special_projects.png";

export default function SpecialProjects() {
    return (
      <div className={"container" + " " + styles.project_yellow}>
        <div className="row">
          <div className={"col col--5 col--offset-1" + " " + styles.col_project_overview_with_padding}>
            <h1 className="padding-none">Special projects</h1>
            <h2 className={styles.h2_custom}>
              Applications built from the ground up and addressing a complete use
              case.
            </h2>
            
             <SpecialProjectsMD/> 
          </div>
          <div className={"col col--5 flex-full-centered"+ " "+ styles.col_project_overview_with_padding}>
            <img src={SpecialProjectsPictureUrl} height={"595px"} alt={"Picture showing examples of Jupyter CAD projects in Jupyterlab."} />
          </div>
        </div>
      </div>
    );
  }