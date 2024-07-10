import styles from "./styles.module.css";
import {
  leadershipTeam,
  leadershipBioComponents,
  leadershipAvatarsUrls,
} from "./Team/leadershipTeam";
import { coreTeam, coreBioComponents, coreAvatarsUrls } from "./Team/coreTeam";
import {
  QSCollaboratorsTeam,
  QSCollaboratorsBioComponents,
  QSCollaboratorsAvatarsUrls,
} from "./Team/QScollaborators";
import FourValues from "./FourValues";
import SubTeam from "./SubTeam";
import LinkToContact from "../home/LinkToContact";


export function About() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.about_container}>
          <div className={"row"}>
            <div className={"col" + " " + "flex-full-centered"}>
              <FourValues />
            </div>
          </div>

          <div className="row">
            <div className="col col--10 col--offset-1">
              <h1 className="text--center">Meet the QuantStack team</h1>
              <div className={styles.team_description}>
                A team of outliers, leaders in software projects adopted at the
                global scale, benefiting millions of people worldwide.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <SubTeam
                description={"The leadership team"}
                subTeam={leadershipTeam}
                subTeamAvatarsUrls={leadershipAvatarsUrls}
                subTeamBioComponents={leadershipBioComponents}
              />
              <SubTeam
                description={"The core team"}
                subTeam={coreTeam}
                subTeamAvatarsUrls={coreAvatarsUrls}
                subTeamBioComponents={coreBioComponents}
              />
              <SubTeam
                description={"QuantStack collaborators"}
                subTeam={QSCollaboratorsTeam}
                subTeamAvatarsUrls={QSCollaboratorsAvatarsUrls}
                subTeamBioComponents={QSCollaboratorsBioComponents}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.join_the_team_container}>
        <h1
          className={
            "text--center" +
            " " +
            "padding-none" +
            " " +
            "h1-margin-none" +
            " " +
            styles.join_the_team_title
          }
        >
          Join the team
        </h1>
        <div className={styles.join_the_team_text}>
          QuantStack is seeking talents in the open-source scientific computing
          community. Join a team committed to open-science and free software.
        </div>
        <LinkToContact label={"JOIN THE TEAM!"} />
      </div>
    </div>
  );
}
