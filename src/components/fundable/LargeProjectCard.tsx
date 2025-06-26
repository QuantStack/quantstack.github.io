import styles from "./styles.module.css";
import React from "react";

export default function LargeProjectCard({ project }) {
    return (
        <div className={styles.large_project_card}>
            <div className={"container"}>
                <div className={"row padding-none"}>
                    <div className="col col--12 col--offset-1">
                        <div className={styles.large_card_project_category}>
                            {project.category}
                        </div>
                        <div className={styles.large_card_project_title}>{project.title}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col--10 col--offset-1">
                        <div className={styles.large_project_card_text_container}></div>
                        <div className={styles.large_project_card_section_title}>Overview</div>
                        <div className={styles.large_project_card_text}>
                            <project.description />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
