import styles from "./styles.module.css";
import React from "react";
import LinkToGetAQuote from "./LinkToGetAQuote";

export function LargeProjectCardContent({ project }) {
    return (
        <div className={"container"}>
            <div className={"row-padding-none"}>
                <div className="col col--12">
                    <div className={styles.large_project_card_title}>{project.title}</div>
                </div>
            </div>
            <div className="row">
                <div className="col col--12">
                    <div className={styles.large_project_card_text_container}>
                        <div className={styles.large_project_card_description_container}>
                            <div className={styles.large_project_card_description}>
                                <project.description />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function LargeProjectCard({ project }) {
    return (
        <div className={styles.large_project_card}>
            <LargeProjectCardContent project={project} />
            <div className="row">
                <div className="col col--12">
                   <div><LinkToGetAQuote label={"GET A QUOTE"} pageName={project.pageName} /></div>
                </div>
            </div>
        </div>
    );
}