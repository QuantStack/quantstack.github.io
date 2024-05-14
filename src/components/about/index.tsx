import styles from "./styles.module.css";
import { leadershipTeam } from "./Team/leadershipTeam";
import { coreTeam } from "./Team/coreTeam";
import { QSCollaboratorsTeam } from "./Team/QScollaborators";
import ValuesComponent from "./ValuesComponent";
import SubTeamComponent from "./SubTeamComponent";
import Link from "@docusaurus/Link";

export default function About() {
  return (
    <div
      className="container"
      style={{ justifyContent: "center", marginTop: "var(--ifm-spacing-5xl)" }}
    >
      <ValuesComponent />
      <h1 style={{ textAlign: "center" }}>Meet the QuantStack team</h1>
      <h4>
        A team of outliers, leaders in software projects adopted at the global
        scale, benefiting millions of people worldwide.
      </h4>
      <SubTeamComponent
        description={"The leadership team"}
        subTeamName={leadershipTeam}
      ></SubTeamComponent>
      <SubTeamComponent
        description={"The core team"}
        subTeamName={coreTeam}
      ></SubTeamComponent>
      <SubTeamComponent
        description={"QuantStack collaborators"}
        subTeamName={QSCollaboratorsTeam}
      ></SubTeamComponent>
      <div className={styles.join_the_team}>
        <h1 style={{ textAlign: "center" }}>Join the team</h1>
        <div>
          QuantStack is seeking talents in the open-source scientific computing
          community. Join a team committed to open-science and free software.
        </div>
        <div className="link-box">
          <Link className="link-to-contact" href="/contact">
            {" CONTACT US! "}
          </Link>
        </div>
      </div>
    </div>
  );
}
