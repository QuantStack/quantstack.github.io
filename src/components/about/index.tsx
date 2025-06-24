import styles from "./styles.module.css";
import { teams } from "./Team/team";
import FourValues from "./FourValues";
import SubTeam from "./SubTeam";
import LinkToContact from "../home/LinkToContact";

export function getTeamByPersonName(name: string) {
  for (const [teamName, members] of Object.entries(teams)) {
    const person = members.find((person) => person.completeName.replace(/\s+/g, '').replace(/\s+/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '') === name);
    if (person) {
      return members;
    }
  }
  return null;
}

 
export function About() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className="container upper-container-with-margin-top">
          <div className={"row"}>
            <div className={"col flex-full-centered"}>
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
                subTeamName={"The leadership team"}
                subTeam={teams.leadershipTeam}
              />
              <SubTeam subTeamName={"The core team"} subTeam={teams.coreTeam} />
              <SubTeam
                subTeamName={"QuantStack collaborators"}
                subTeam={teams.QSCollaboratorsTeam}
              />
            </div>
          </div>
        </div>
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
