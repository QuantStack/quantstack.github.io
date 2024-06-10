import styles from "@site/src/components/projects/styles.module.css";
import Link from "@docusaurus/Link";
import ArrowLeft from "@site/static/img/icons/ArrowLeft.svg";

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
      <div className={styles.header_mobile}>
        <Link href={"/projects/"}>
          <ArrowLeft
            width={"32px"}
            height={"32px"}
            style={{ marginTop: "16px", marginLeft: "20px" }}
          />
        </Link>
      </div>

      <div className={styles.project_title_popup_container}>
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
