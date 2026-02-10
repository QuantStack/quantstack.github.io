// src/components/PageBanner.tsx
import React from 'react';
import styles from "./styles.module.css";
import LinkToNotebookLink from './LinkToNotebookLink';

export default function Banner() {
    return (
        <div>
            <div className={styles.banner_container_small}>
                <div className={styles.banner_text_overlay}>
                    <div className={styles.banner_text_overlay_title}>Introducing <span className={styles.notebook_link}>Notebook.link</span></div>
                    <div className={styles.banner_text_overlay_subtile}>The future of notebook sharing</div>
                    <LinkToNotebookLink label={"Get started"} />
                </div>
            </div>
            <div className={styles.banner_container_medium}>
                
                <div className={styles.banner_text_overlay}>
                    <div className={styles.banner_text_overlay_title}>Introducing <span className={styles.notebook_link}>Notebook.link</span></div>
                    <div className={styles.banner_text_overlay_subtile}>The future of notebook sharing</div>
                    <LinkToNotebookLink label={"Get started"} />
                </div>
            </div>
            <div className={styles.banner_container_large}>
                <div className={styles.banner_text_overlay}>
                    <div className={styles.banner_text_overlay_title}>Introducing <span className={styles.notebook_link}>Notebook.link</span></div>
                    <div className={styles.banner_text_overlay_subtile}>The future of notebook sharing</div>
                    <LinkToNotebookLink label={"Get started"} />
                </div>
            </div>
            <div className={styles.banner_container_very_large}>
                <div className={styles.banner_text_overlay}>
                    <div className={styles.banner_text_overlay_title}>Introducing <span className={styles.notebook_link}>Notebook.link</span></div>
                    <div className={styles.banner_text_overlay_subtile}>The future of notebook sharing</div>
                    <LinkToNotebookLink label={"Get started"} />
                </div>
            </div>
        </div>
    );
}
