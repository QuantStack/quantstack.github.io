import styles from "./styles.module.css";
import { leadershipTeam } from "./Team/leadershipTeam";
import { coreTeam } from "./Team/coreTeam";
import { QSCollaboratorsTeam } from "./Team/QScollaborators";
import FourValues from "./FourValues";
import SubTeam from "./SubTeam";
import Link from "@docusaurus/Link";

export default function About() {
  return (
    <div className={"container" + " " + styles.about_container}>
      <FourValues />
      <h1 className={styles.h1_custom}>Meet the QuantStack team</h1>
      <h4>
        A team of outliers, leaders in software projects adopted at the global
        scale, benefiting millions of people worldwide.
      </h4>
      <SubTeam
        description={"The leadership team"}
        subTeamName={leadershipTeam}
      />
      <SubTeam description={"The core team"} subTeamName={coreTeam} />
      <SubTeam
        description={"QuantStack collaborators"}
        subTeamName={QSCollaboratorsTeam}
      />
      <div className={styles.join_the_team}>
        <h1 className={styles.h1_custom}>Join the team</h1>
        <div>
          QuantStack is seeking talents in the open-source scientific computing
          community. Join a team committed to open-science and free software.
        </div>
        <div className="link-box">
          <Link className="link-to-button" href="/contact">
            {" CONTACT US! "}
          </Link>
        </div>
      </div>
    </div>
  );
}
