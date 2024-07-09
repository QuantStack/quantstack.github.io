import styles from "./styles.module.css";
import SupportMD from "./descriptions/Support.md";
import SupportIllustration from "/img/illustrations/support.svg";

export function Support() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col col--4 col--offset-1">
            <div className="flex-full-centered">
              <SupportIllustration   width={"280px"} alt="Illustration for the support section, showing symbolically a person indicating the direction to take." />
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

export default Support;