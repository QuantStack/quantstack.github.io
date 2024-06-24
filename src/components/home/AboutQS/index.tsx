import styles from "./styles.module.css";
import GroupPhotoUrl from "@site/static/img/group/QuantStack-2000-58.png";
import LinkToAboutUs from "../LinkToAboutUs";

export default function AboutQS() {
  return (
    <div className={"container" + " " + styles.about_us_container}>
      <div
        className={
          "row" + " " + "row-flex-full-centered" + " " + "row-padding-none"
        }
      >
        <div
          className={"col" + " " + "col-padding-none" + " " + "col-margin-none"}
        >
          <div className={styles.text_container}>
            We are a team of expert of open-source developers, the very same
            people behind a number of technologies that you already use.
          </div>
        </div>
      </div>
      <div
        className={
          "row" + " " + "row-flex-full-centered" + " " + "row-padding-none"
        }
      >
        <div
          className={"col" + " " + "col-padding-none" + " " + "col-margin-none"}
        >
          <div className={styles.picture_container}>
            <img src={GroupPhotoUrl} />
          </div>
        </div>
      </div>
      <div
        className={
          "row" + " " + "row-flex-full-centered" + " " + "row-padding-none"
        }
      >
        <div
          className={"col" + " " + "col-padding-none" + " " + "col-margin-none"}
        >
          <LinkToAboutUs label={"LEARN MORE ABOUT US"} />
        </div>
      </div>
    </div>
  );
}
