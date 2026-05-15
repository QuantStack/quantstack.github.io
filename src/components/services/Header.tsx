import Section from "../layout/Section";
import LinkToContact from "../home/LinkToContact";
import styles from "./styles.module.css";
import BackgroundScene from "../layout/BackgroundScene";

export default function Header() {
  return (
    <Section pageTop bg="yellow" background={<BackgroundScene variant="light" />}>
      <h1 className={styles.services_header_text}>
        Hire QuantStack for expert engineering at the frontier of open-source.
      </h1>
      <p>Expert-led development from the people who built and maintain the tools you depend on. Whether you need a custom feature, a support retainer, or hands-on engineering, you work directly with the upstream maintainers.</p>
      <LinkToContact label="Get in touch" />
    </Section>
  );
}
