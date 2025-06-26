import styles from "./styles.module.css";
import ProgressBar from "./ProgressBar";
import { useHistory } from "@docusaurus/router";

export function SmallProjectCard({ project }) {
const history = useHistory();

  function openDialog() {
    const shortTitle = project.shortTitle.replace(/\s+/g, '');
    
    history.push({
      pathname: `/fundable/${shortTitle}`,
      state: { fromFundable: true, scrollY: window.scrollY, },
    });
  }


  return (
    <div onClick={openDialog}>
      <div className={"card" + " " + styles.fundable_project_card}>
        <div className="card__header">
          <div
            className={styles.project_title
            }
          >
            {project.title}
          </div>
        </div>
        <div className="card__body">
          <div style={{display: "flex"}}>
            <div>
              <div
                className={styles.project_catch_up_phrase}
              >
                {project.catchUpPhrase}

              </div>
              <div style={{ fontSize: "14px" }}>
                Indicative Price: {project.price} €
              </div>
             
              <div style={{ fontSize: "14px" }}>
                Shareable between {project.maxNbOfFunders} funders.
              </div>
              <div style={{ fontSize: "14px" }}>
                Currently this project is supported by {project.currentNbOfFunders} funders.
              </div>
               <div style={{ fontSize: "14px" }}>
                Financed at {project.currentFundingPercentage} %
              </div>
              <div>
               <ProgressBar value={project.currentFundingPercentage} color={'var(--ifm-color-primary-p1'}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}