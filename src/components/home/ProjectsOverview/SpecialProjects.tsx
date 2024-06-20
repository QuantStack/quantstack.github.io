import styles from "./styles.module.css";
import SpecialProjectsMD from "@site/src/components/home/ProjectsOverview/descriptions/SpecialProjects.md";
import SpecialProjectsPictureUrl from "@site/static/img/projects/jupytercad.png";

export default function SpecialProjects() {
    return (
      <div className={"container" + " " + styles.project_desktop}>
        <div className="row">
          <div className={"col col--5 col--offset-1" + " " + styles.col_project_overview_text}>
            <h1 className="h1-padding-none">Special projects</h1>
            <h2 className={styles.h2_custom}>
              Applications built from the ground up and addressing a complete use
              case.
            </h2>
            
             <SpecialProjectsMD/> 
          </div>
          <div className={"col col--5" + " " + styles.col_project_overview_picture}>
            <img src={SpecialProjectsPictureUrl} />
          </div>
        </div>
      </div>
    );
  }