import Section from "../layout/Section";
import LinkToContact from "../LinkToContact";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <Section pageTop bg="yellow">
      <h1 className={styles.services_header_text}>
        Hire the team that built the tools you depend on.
      </h1>
      <p>Bloomberg, AWS, Safran, ESA, and the Gates Foundation work with us because there is no shortcut to deep expertise. Whether you need a support retainer, a custom feature, or a long-term engineering partner — you talk to the people who wrote the code.</p>
      <LinkToContact label="Get in touch" />
    </Section>
  );
}
