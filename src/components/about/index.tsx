import styles from "./styles.module.css";
import { leadershipTeam, leadershipBioComponents, leadershipAvatarsUrls } from "./Team/leadershipTeam";
import { coreTeam, coreBioComponents, coreAvatarsUrls } from "./Team/coreTeam";
import {
  QSCollaboratorsTeam,
  QSCollaboratorsBioComponents,
  QSCollaboratorsAvatarsUrls
} from "./Team/QScollaborators";
import FourValues from "./FourValues";
import SubTeam from "./SubTeam";
import { useEffect, useState } from "react";
import LinkToContact from "../home/LinkToContact";

const breakpointValue: number = 996;

export default function About() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <AboutDesktop /> : <AboutMobile />}</div>;
}

export function AboutDesktop() {
  return (
    <div className={"container" + " " + styles.about_container}>
      <div className="row">
        <div className="col col--12">
          <h1 className={styles.h1_custom}>Our values </h1>
          <FourValues />
          <h1 className={styles.h1_custom}>Meet the QuantStack team</h1>
          <h4>
            A team of outliers, leaders in software projects adopted at the
            global scale, benefiting millions of people worldwide.
          </h4>
          <SubTeam
            description={"The leadership team"}
            subTeam={leadershipTeam}
            subTeamAvatarsUrls= {leadershipAvatarsUrls}
            subTeamBioComponents={leadershipBioComponents}
          />
          <SubTeam
            description={"The core team"}
            subTeam={coreTeam}
            subTeamAvatarsUrls = {coreAvatarsUrls}
            subTeamBioComponents={coreBioComponents}
          />
          <SubTeam
            description={"QuantStack collaborators"}
            subTeam={QSCollaboratorsTeam}
            subTeamAvatarsUrls = {QSCollaboratorsAvatarsUrls}
            subTeamBioComponents={QSCollaboratorsBioComponents}
          />
          <div className={styles.join_the_team_container}>
            <h1 className={styles.h1_custom}>Join the team</h1>
            <div className={styles.join_the_team_text}>
              QuantStack is seeking talents in the open-source scientific
              computing community. Join a team committed to open-science and
              free software.
            </div>
            <LinkToContact label={"JOIN THE TEAM!"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutMobile() {
  return (
    <div className={"container" + " " + styles.about_container}>
      <div className={"row" + " "+ styles.row_custom}>
        <div className={"col col--12" +" "+ styles.col_custom}>
          <h2 className={styles.h2_custom}>
            A team of outliers, leaders in software projects adopted at the
            global scale, benefiting millions of people worldwide.
          </h2>
        </div>
      </div>
      <div className="row">
        <div className={"col col--10 col--offset-1" +" "+ styles.col_custom}>
          <div className ={styles.four_values_div}>
          <FourValues />
          </div>

          <SubTeam
            description={"The leadership team"}
            subTeam={leadershipTeam}
            subTeamBioComponents={leadershipBioComponents}
          />
              <SubTeam
            description={"The core team"}
            subTeam={coreTeam}
            subTeamBioComponents={coreBioComponents}
          />
              <SubTeam
            description={"QuantStack collaborators"}
            subTeam={QSCollaboratorsTeam}
            subTeamBioComponents={QSCollaboratorsBioComponents}
          />
          <div className={styles.join_the_team_container}>
            <div className={styles.join_the_team_text}>
              QuantStack is seeking talents in the open-source scientific
              computing community. Join a team committed to open-science and
              free software.
            </div>
            <LinkToContact label={"JOIN THE TEAM!"} />
          </div>
        </div>
      </div>
    </div>
  );
}
