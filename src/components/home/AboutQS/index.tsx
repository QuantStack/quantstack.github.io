import styles from "./styles.module.css";
import GroupPhotoUrl from "@site/static/img/group/QuantStack-2000-58.png";
import LinkToAboutUs from "../LinkToAboutUs";
import Section from "../../layout/Section";

export default function AboutQS() {
  return (
    <Section fullHeight>
      <h2 className="text--center">About us</h2>
      <div className="flex-full-centered">
        <img
          src={GroupPhotoUrl}
          alt="Picture showing a group of QuantStack people in front of Saint-Maur's office, in Paris area."
          style={{ width: "100%", maxWidth: "800px", marginBottom: "var(--ifm-spacing-2xl)" }}
        />
      </div>
      <p className={styles.aboutQS_text}>
        QuantStack was founded in 2016. Today we operate as collective of about 30 engineers contributing remotely or from our offices in Paris to the global open source stack or to our client's projects.
        Many of us have PhD-level research experience or deep engineering backgrounds.
        Our team combines decades of senior experience with the fresh creativity and energy from more recent contributors.
      </p>
      <div className={styles.learn_more_button_container}>
        <LinkToAboutUs label="Learn more" />
      </div>
    </Section>
  );
}
