import Section from "../layout/Section";
import styles from "./styles.module.css";
import HeaderMD from "./descriptions/Header.md";

export default function Header() {
  return (
    <Section pageTop bg="light">
      <h1 className={styles.header_title}>Working in the open</h1>
      <div className={styles.header_text}>
        <HeaderMD />
      </div>
    </Section>
  );
}
