import styles from "./styles.module.css";
import { useHistory } from "@docusaurus/router";
import BlueCaretIcon from "@site/static/img/icons/BlueCaret.svg";
import LinkToMoreInformation from "./LinkToMoreInformation";
import ProgressBar from "./ProgressBar";
import FundersIcon from "@site/static/img/icons/Funders.svg";
import DollarIcon from "@site/static/img/icons/Dollar.svg";

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
            <div className={"col col--7" + " " + styles.small_project_card_text_col}>
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
                <div className="flex-full-centered">
                  <BlueCaretIcon />
                </div>
                <div className={styles.project_information}>
                  <div>
                    {project.shortDescription.length < 250
                      ? project.shortDescription
                      : project.shortDescription.substring(0, 250) + "..."}
                  </div>
                </div>
              </div>
              <div>
                <LinkToMoreInformation label={"Read more"} pageName={project.pageName} />
              </div>
              <div className={styles.project_information_container}>
                <div className="flex-full-centered">
                  <BlueCaretIcon />
                </div>
                <div className={styles.project_information}>
                  Open-source under relevant licenses
                </div>
              </div>
              <div className={styles.project_information_container}>
                <div className="flex-full-centered">
                  <BlueCaretIcon />
                </div>
                <div className={styles.project_information}>
                  The funding organization will be credited in communication about the project
                </div>
              </div>

              <div className={styles.small_project_card_note}>Note: Costs and features can be further adapted following discussion with the funding organization</div>
            </div>
            <div className={"col col--5" + " " + styles.small_project_card_price_col}>
              <div className={styles.small_project_card_price_container}>
                <div className={styles.small_project_card_price}>
                  {project.price}
                </div>
              </div>
              <div className={styles.small_project_card_indicative_price_text}>
                Indicative price
              </div>
              <div>
                <div className={styles.small_project_card_financed_at_text}>
                  Financed at {project.currentFundingPercentage} %
                </div>
                <div>
                  <ProgressBar value={project.currentFundingPercentage} color={'var(--ifm-color-secondary-s1'} />
                </div>
                <div className={styles.shareable_container}>
                  <div><FundersIcon width="35px" height="26px" /></div>
                  <div className={styles.shareable_text}>{project.maxNbOfFunders === 1
                    ? 'Not shareable between funders'
                    : `Shareable between ${project.maxNbOfFunders} funders`
                  }
                  </div>
                </div>
                <div className={styles.shareable_container}>
                  <div><DollarIcon width="35px" height="26px" /></div>
                  <div className={styles.shareable_text}>
                    {project.currentNbOfFunders === 0
                      ? 'The project is not supported yet'
                      : `Supported by ${project.currentNbOfFunders} 
                   ${project.currentNbOfFunders === 1 ? 'funder' : 'funders'}
                    `}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}