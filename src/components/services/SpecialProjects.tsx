import styles from "./styles.module.css";
import SpecialProjectsMD from "./descriptions/SpecialProjects.md";
import SpecialProjectsIllustrationUrl from "@site/static/img/illustrations/special_projects.png";
import { useEffect, useState } from "react";
const breakpointValue: number = 996;

export function SpecialProjectsDesktop() {
  return (
    <div className={"container" + " " + styles.service_container}>
      <div className="row row--no-gutters">
        <div className="col col--4 col--offset-1">
          <h2>Special projects</h2>
          <SpecialProjectsMD />
        </div>
        <div className="col col--5 col--offset-1">
          <img src={SpecialProjectsIllustrationUrl} />
        </div>
      </div>
    </div>
  );
}

export function SpecialProjectsMobile() {
  return (
    <div className={"container" + " " + styles.service_container}>
      <div className="row row--no-gutters">
        <div className="col">
          <div className={styles.illustration_container}>
            <img src={SpecialProjectsIllustrationUrl} width={"214px"} />
            <div className={styles.illustration_container}></div>
          </div>
        </div>
      </div>
      <div className="row row--no-gutters">
        <div className="col">
          <h2 className={styles.services_title}>Special projects</h2>
          <div className={styles.services_description}>
            <SpecialProjectsMD />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpecialProjects() {
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
        {isDesktop ? <SpecialProjectsDesktop /> : <SpecialProjectsMobile />}
      </div>
    </div>
  );
}
