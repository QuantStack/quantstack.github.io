import styles from "./styles.module.css";
import LogoGrid from "./LogoGrid";
import Section from "../../layout/Section";

export default function TrustedBy() {
  return (
    <Section fullHeight>
      <h2 className="text--center">Trusted by</h2>
      <LogoGrid />
    </Section>
  );
}
