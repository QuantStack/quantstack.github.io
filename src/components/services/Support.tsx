import styles from "./styles.module.css";
import SupportMD from "./descriptions/Support.md";
import SupportIllustration from "@site/static/img/illustrations/support.svg"

export default function Support() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col col--4 col--offset-1">
            <div className={styles.illustration_container}>
              <SupportIllustration
                width="350px"
                height="424px"
              />
            </div>
          </div>
          <div className={"col col--6"}>
            <h2>Professional Support</h2>
            <SupportMD />
          </div>
        </div>
      </div>
    </div>
  );
}
