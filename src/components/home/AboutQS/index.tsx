import styles from "./styles.module.css";
import GroupPhotoUrl from "@site/static/img/group/QuantStack-2000-58.png";
import LinkToAboutUs from "../LinkToAboutUs";

export default function AboutQS() {
  return (
    <div className={"container" + " " + styles.aboutQS_container}>
      <div className={"row flex-full-centered padding-none"}>
        <div className={"col padding-none margin-none"}>
          <div className={styles.aboutQS_text}>
            We are a team of expert of open-source developers, the very same
            people behind a number of technologies that you already use.
          </div>
        </div>
      </div>
      <div className={"row flex-full-centered padding-none"}>
        <div className={"col padding-none margin-none"}>
          <div className="flex-full-centered">
            <img
              src={GroupPhotoUrl}
              alt={
                "Picture showing a group of Quantstack people in front of Saint-Maur's office, in Paris area."
              }
            />
          </div>
        </div>
      </div>
      <div className={"row flex-full-centered padding-none"}>
        <div className={"col padding-none"}>
          <div className={styles.learn_more_button_container}>
            <LinkToAboutUs label={"LEARN MORE ABOUT US"} />
          </div>
        </div>
      </div>
    </div>
  );
}
