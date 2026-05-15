import styles from "./styles.module.css";
import { teams } from "./Team/team";
import FourValues from "./FourValues";
import SubTeam from "./SubTeam";
import Section from "../layout/Section";
import Banner from "../layout/Banner";
import SectionSeparator from "../layout/SectionSeparator";
import LinkToContact from "../home/LinkToContact";
import BackgroundScene from "../layout/BackgroundScene";

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
    <>
      <Section pageTop bg="yellow" background={<BackgroundScene variant="light" />}>
        <h1>About QuantStack</h1>
        <p>A small team of outliers — core maintainers of projects adopted globally by researchers, engineers, and educators. We believe open-source is the most powerful way to make high-quality tools available to everyone.</p>
      </Section>
      <SectionSeparator variant={4} />
      <Section>
        <FourValues />
      </Section>
      <SectionSeparator variant={5} />
      <Section>
        <h2>Meet the QuantStack team</h2>
        <div className={styles.team_description}>
          A team of outliers, leaders in software projects adopted at the
          global scale, benefiting millions of people worldwide.
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
      </Section>
      <Banner
        bg="dark"
        title="Join the team"
        cta={<LinkToContact label={"JOIN THE TEAM!"} />}
      >
        QuantStack is seeking talents in the open-source scientific computing
        community. Join a team committed to open-science and free software.
      </Banner>
    </>
  );
}
