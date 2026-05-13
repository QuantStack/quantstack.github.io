import styles from "./styles.module.css";
import { teams } from "./Team/team";
import FourValues from "./FourValues";
import SubTeam from "./SubTeam";
import LinkToContact from "../home/LinkToContact";

export function getTeamByPageName(name: string) {
  for (const [teamName, members] of Object.entries(teams)) {
    const person = members.find((person) => person.pageName === name);
    if (person) {
      return members;
    }
  }
  return null;
}

 
export function About() {
  return (
    <div>
      <div className="page-content upper-container-with-margin-top">
        <FourValues />

        <div className="row-with-margins">
          <h1>Meet the QuantStack team</h1>
          <div className={styles.team_description}>
            A team of outliers, leaders in software projects adopted at the
            global scale, benefiting millions of people worldwide.
          </div>
        </div>

        <SubTeam
          subTeamName={"The leadership team"}
          subTeam={teams.leadershipTeam}
        />
        <SubTeam subTeamName={"The core team"} subTeam={teams.coreTeam} />
        <SubTeam
          subTeamName={"QuantStack collaborators"}
          subTeam={teams.QSCollaboratorsTeam}
        />
      </div>
      <div className="blue-banner-container">
        <div className="blue-banner-header">Join the team</div>
        QuantStack is seeking talents in the open-source scientific computing
        community. Join a team committed to open-science and free software.
        <LinkToContact label={"JOIN THE TEAM!"} />
      </div>
    </div>
  );
}
