import styles from "./styles.module.css";
import SupportMD from "./descriptions/Support.md";
import SupportIllustrationUrl from "@site/static/img/illustrations/support.png";
import { useEffect, useState } from "react";

const breakpointValue: number = 996;

export function SupportDesktop() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col col--4 col--offset-1">
            <div className={styles.illustration_container}>
              <img src={SupportIllustrationUrl}  />
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

export function SupportMobile() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col">
            <div className={styles.illustration_container}>
              <img src={SupportIllustrationUrl} width="172px" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
             <h2 className={styles.services_title}>Professional Support</h2>
            <div className={styles.services_description}>
              <SupportMD />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Support() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <div className={styles.all_projects_container}>
        {isDesktop ? <SupportDesktop /> : <SupportMobile />}
      </div>
    </div>
  );
}
