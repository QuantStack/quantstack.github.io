import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

function GroupPhoto() {
  return (
    <div className={styles.photo_container}>
      <img src="/img/QuantStack-2000-58.png"></img>
    </div>
  );
}

export default function AboutQS() {
  return (
    <div className={"container" + " " + styles.about_us_container}>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--10 col--offset-1" + " " + styles.col_custom}>
          <div className={styles.text_container}>
            We are a team of expert of open-source developers, the very same
            people behind a number of technologies that you already use.
          </div>
        </div>
      </div>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--10 col--offset-1" + " " + styles.col_custom}>
          <div className={styles.picture_container}>
            <img src={"/img/QuantStack-2000-58.png"} />
          </div>
        </div>
      </div>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--10 col--offset-1" + " " + styles.col_custom}>
          <div className="link-container">
            <Link
              className={"link-to-button" + " " + styles.link_to_about_us}
              href="/about"
            >
              {" LEARN MORE ABOUT US "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
