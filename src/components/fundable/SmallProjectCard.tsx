import styles from "./styles.module.css";
import ProgressBar from "./ProgressBar";
import { useHistory } from "@docusaurus/router";
import IconContainer from "./IconContainer";
import FundersIcon from "@site/static/img/icons/Funders.svg";
import DollarIcon from "@site/static/img/icons/Dollar.svg";
import BlueCaretIcon from "@site/static/img/icons/BlueCaret.svg";

export function SmallProjectCard({ project }) {
  const history = useHistory();

  function openDialog() {
    const pageName = project.pageName;

    history.push({
      pathname: `/fundable/${pageName}`,
      state: { fromFundable: true, scrollY: window.scrollY },
    });
  }

  return (
    <div onClick={openDialog}>
      <div className={"card" + " " + styles.small_project_card}>
        <div className="card__body" style={{ padding: "0" }}>
          <div className="row" >
            <div className="col col--7">
              <div
                className={styles.project_title
                }
              >
                {project.title}
              </div>
              <div
                className={styles.project_catch_up_phrase}
              >
                {project.catchUpPhrase}
              </div>
              <div className={styles.project_information_container}>
                <BlueCaretIcon />
                <div className={styles.project_information}>
                  Open-source under relevant licenses
                </div>
              </div>
              <div className={styles.project_information_container}>
                <BlueCaretIcon />
                <div className={styles.project_information}>
                  The funding organization will be credited in communication about the project
                </div>
              </div>
              <div className={styles.note}>Note: Costs and features can be further adapted following discussion with the funding organization</div>

            </div>
            <div className={"col col--5"} style={{ backgroundColor: "rgba(217, 217, 217, 0.25" }}>
              <div className={styles.price_container}>
                <div className={styles.price}>
                  {project.price}
                </div>
              </div>
              <div className={styles.indicative_price_text}>
                Indicative price
              </div>

              <div className={styles.financed_at_text}>
                Financed at {project.currentFundingPercentage} %
              </div>
              <div>
                <ProgressBar value={project.currentFundingPercentage} color={'var(--ifm-color-secondary-s1'} />
              </div>
              <div className={styles.shareable_container}>
                <div><FundersIcon width="35px" height="26px" /></div>
                <div className={styles.shareable_text}>Shareable between {project.maxNbOfFunders} funder(s).
                </div>
              </div>
              <div className={styles.shareable_container}>
                <div><DollarIcon width="35px" height="26px" /></div>
                <div className={styles.shareable_text}>Supported by {project.currentNbOfFunders} funder(s).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}