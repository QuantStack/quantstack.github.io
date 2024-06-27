import styles from "@site/src/components/projects/styles.module.css";
import Link from "@docusaurus/Link";
import ArrowLeftHeader from "../../about/ArrowLeftHeader";

export default function ProjectPopup({
  projectDetails,
  name,
  ProjectDescription,
}) {
  let project: any;
  projectDetails.map((item) => {
    if (item.name === name) {
      project = { ...item };
    }
  });

  return (
    <div>
      <ArrowLeftHeader route={"/projects/"}/>
      <div className="padding-none">
        <div className={styles.project_title_popup}>{project.name}</div>
      </div>
      <div className={styles.project_image_container}>
        <img src={project.pictureRoute} width={"138px"} />
      </div>
      <div className={styles.project_description_container}>
        <ProjectDescription />
      </div>
    </div>
  );
}
