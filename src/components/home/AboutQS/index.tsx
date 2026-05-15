import styles from "./styles.module.css";
import GroupPhotoUrl from "@site/static/img/group/QuantStack-2000-58.png";
import LinkToAboutUs from "../LinkToAboutUs";
import Section from "../../layout/Section";

export default function AboutQS() {
  return (
    <Section bg="dark" fullHeight>
      <h2 className="text--center">About QuantStack</h2>
      <p className={styles.aboutQS_text}>
        We are a team of expert open-source developers, the very same
        people behind a number of technologies that you already use.
      </p>
      <div className="flex-full-centered">
        <img
          src={GroupPhotoUrl}
          alt="Picture showing a group of QuantStack people in front of Saint-Maur's office, in Paris area."
          style={{ width: "100%", maxWidth: "900px" }}
        />
      </div>
      <div className={styles.learn_more_button_container}>
        <LinkToAboutUs label="LEARN MORE ABOUT US" />
      </div>
    </Section>
  );
}
