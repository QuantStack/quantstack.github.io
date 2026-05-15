import Section from "../layout/Section";
import styles from "./styles.module.css";
import HeaderMD from "./descriptions/Header.md";
import BackgroundScene from "../layout/BackgroundScene";

export default function Header() {
  return (
    <Section pageTop bg="yellow" background={<BackgroundScene variant="light" />}>
      <h1 className={styles.header_title}>Working in the open</h1>
      <div className={styles.header_text}>
        <HeaderMD />
      </div>
    </Section>
  );
}
