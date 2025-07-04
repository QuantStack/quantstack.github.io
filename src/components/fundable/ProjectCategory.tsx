import styles from "./styles.module.css";
import { SmallProjectCard } from "./SmallProjectCard";


export default function ProjectCategory({ projectCategoryName, projectCategory }) {
  return (
    <div className={styles.project_category_container}>
      <h2 className={styles.category_header} style={{margin: "0px"}}> {projectCategoryName }</h2>
      <div className={"container"}>
        <ul className="row padding-none row-with-margin-top">
          {projectCategory.map((project) => (
            <li className="cards-list" key={project.pageName}>
              <div className="col" style={{justifyContent: "left"}}>
                <SmallProjectCard project={project} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}