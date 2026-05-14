import styles from "./styles.module.css";
import SplitSection from "../layout/SplitSection";

type Props = {
  project: any;
  bg?: "white";
};

export default function ProjectCard({ project, bg = "light" }: Props) {
  const picClass = styles[`project_picture_${project.name}`] ?? "";
  const isReverse = project.reverse === "true";

  return (
    <SplitSection
      bg={bg}
      reverse={isReverse}
      ratio="60/40"
      image={
        <div className={picClass}>
          <img
            src={project.pictureRoute}
            alt={project.pictureAltText}
            className={styles.project_logo}
          />
        </div>
      }
    >
      <div className={styles.project_title}>{project.title}</div>
      <div className={styles.project_description}>
        <project.ProjectMD />
      </div>
    </SplitSection>
  );
}
