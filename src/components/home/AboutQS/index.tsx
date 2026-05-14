import styles from "./styles.module.css";
import GroupPhotoUrl from "@site/static/img/group/QuantStack-2000-58.png";
import LinkToAboutUs from "../LinkToAboutUs";

export default function AboutQS() {
  return (
    <div className={styles.aboutQS_outer}>
      <div className="page-content">
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
      </div>
    </div>
  );
}
