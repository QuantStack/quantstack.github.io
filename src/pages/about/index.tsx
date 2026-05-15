import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "@site/src/components/footer/Footer";
import styles from "@site/src/components/about/styles.module.css";
import { teams } from "@site/src/pages/about/Team/team";
import { valuesDetails } from "@site/src/components/about/valuesDetails";
import { SmallPortraitCard } from "@site/src/components/about/SmallPortraitCard";
import Section from "@site/src/components/layout/Section";
import Banner from "@site/src/components/layout/Banner";
import CardGrid from "@site/src/components/layout/CardGrid";
import Card from "@site/src/components/layout/Card";
import SectionSeparator from "@site/src/components/layout/SectionSeparator";
import LinkToContact from "@site/src/components/LinkToContact";

export function getTeamByPageName(name: string) {
  for (const [, members] of Object.entries(teams)) {
    const person = members.find((person) => person.pageName === name);
    if (person) {
      return members;
    }
  }
  return null;
}

export function AboutContent() {
  return (
    <>
      <Section pageTop bg="yellow">
        <h1>About QuantStack</h1>
        <p>Founded in Paris in 2016, we are ~30 engineers and researchers who built the infrastructure layer of modern scientific computing. JupyterLab, Mamba, JupyterLite, emscripten-forge — tools reaching millions daily. Our founder received the ACM Software System Award, given to the same cohort as the creators of Unix, Java, and the World Wide Web. We do this because we believe open-source is the most powerful force for good in science and technology.</p>
      </Section>
      <SectionSeparator variant={4} />
      <Section>
        <h2>Our values</h2>
        <CardGrid cols={4}>
          {valuesDetails.map((value, index) => (
            <li key={index}>
              <Card className={styles.value_card}>
                <div className={styles.value_icon}>
                  <value.pictureComponent alt={value.alt} />
                </div>
                <div className={styles.value_header}>{value.name}</div>
                <div className={styles.value_text}>
                  <value.DescriptionMD />
                </div>
              </Card>
            </li>
          ))}
        </CardGrid>
      </Section>
      <SectionSeparator variant={5} />
      <Section>
        <h2>Meet the QuantStack team</h2>
        <div className={styles.team_description}>
          Most of us have PhDs or deep research backgrounds. We operate as a collective of principal contributors — everyone on the team ships code to the projects we maintain. No passengers.
        </div>
        {[
          { label: "The leadership team", members: teams.leadershipTeam },
          { label: "The core team", members: teams.coreTeam },
          { label: "QuantStack collaborators", members: teams.QSCollaboratorsTeam },
        ].map(({ label, members }) => (
          <div key={label} className={styles.subteam_container}>
            <h3 className="text--center">{label}</h3>
            <CardGrid cols={3}>
              {members.map((person) => (
                <li key={person.pageName}>
                  <SmallPortraitCard person={person} />
                </li>
              ))}
            </CardGrid>
          </div>
        ))}
      </Section>
      <Banner
        bg="dark"
        title="Join the team"
        cta={<LinkToContact label={"JOIN THE TEAM!"} />}
      >
        We're looking for researchers and engineers who want to work at the frontier of open-source scientific computing — and ship code that millions of people depend on.
      </Banner>
    </>
  );
}

export default function AboutPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <AboutContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
