import Section from "../layout/Section";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <Section pageTop bg="yellow">
      <h1 className={styles.services_header_text}>
        Hire QuantStack to build upon the Jupyter, Mamba, and the PyData
        ecosystem.
      </h1>
    </Section>
  );
}
