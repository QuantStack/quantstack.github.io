import styles from "./styles.module.css";
import Topics from "./Topics";
import LinkToServices from "../LinkToServices";
import LinkToProjects from "../LinkToProjects";

export function WhatWeDo() {
  return (
    <div className={"container" + styles.whatwedo_container}>
      <div className="row flex-full-centered">
        <div className={styles.services_link_mobile}>
          <LinkToServices label={"DISCOVER OUR SERVICES"} />
        </div>
      </div>
      <div className={"row flex-full-centered"}>
        <h1 className={styles.header}> What we do </h1>
      </div>
      <div className={"row flex-full-centered"}>
        <Topics />
      </div>
      <div className="row flex-full-centered">
        <div className={styles.projects_link}>
          <LinkToProjects label={"DISCOVER ALL OF OUR PROJECTS"} />

          <div className={styles.services_link_desktop}>
            <LinkToServices label={"DISCOVER OUR SERVICES"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
