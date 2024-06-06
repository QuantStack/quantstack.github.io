import styles from "./styles.module.css";
import SpecialProjectsMD from "./descriptions/SpecialProjects.md";
import SpecialProjectsIllustration from "@site/static/img/illustrations/special_projects.svg";

export default function SpecialProjects() {
  return (
    <div className={"container" + " " + styles.service_container}>
      <div className="row row--no-gutters">
        <div className="col col--4 col--offset-1">
          <h2>Special projects</h2>
          <SpecialProjectsMD />
        </div>
        <div className="col col--5 col--offset-1">
          <SpecialProjectsIllustration />
        </div>
      </div>
    </div>
  );
}
