import styles from "./styles.module.css";
import Topics from "./Topics";
import LinkToServices from "../LinkToServices";
import LinkToProjects from "../LinkToProjects";
import Section from "../../layout/Section";

export function WhatWeDo() {
  return (
    <Section fullHeight>
      <div className={styles.services_link_mobile}>
        <LinkToServices label="DISCOVER OUR SERVICES" />
      </div>
      <h2 className={`${styles.header} text--center`}>What we do</h2>
      <Topics />
      <div className={styles.projects_link}>
        <LinkToProjects label="DISCOVER ALL OF OUR PROJECTS" />
        <div className={styles.services_link_desktop}>
          <LinkToServices label="DISCOVER OUR SERVICES" />
        </div>
      </div>
    </Section>
  );
}

export default WhatWeDo;
