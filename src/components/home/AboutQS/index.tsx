import styles from "./styles.module.css";
import GroupPhotoUrl from "@site/static/img/group/QuantStack-2000-58.png";
import LinkToAboutUs from "../LinkToAboutUs";

export default function AboutQS() {
  return (
    <div className={"container" + " " + styles.about_us_container}>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--8 col--offset-2" + " " + styles.col_custom}>
          <div className={styles.text_container}>
            We are a team of expert of open-source developers, the very same
            people behind a number of technologies that you already use.
          </div>
        </div>
      </div>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col" + " " + styles.col_custom}>
          <div className={styles.picture_container}>
            <img src={GroupPhotoUrl} />
          </div>
        </div>
      </div>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--10 col--offset-1" + " " + styles.col_custom}>
          <LinkToAboutUs label={"LEARN MORE ABOUT US"} />
        </div>
      </div>
    </div>
  );
}
