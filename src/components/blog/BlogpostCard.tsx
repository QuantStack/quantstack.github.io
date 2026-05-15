import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Card from "../layout/Card";

export default function BlogpostCard({ blogpost, timeIndex }) {
  return (
    <Card hover className={styles.blogpost_card}>
      <Link href={blogpost.url}>
        <div className={styles.blogpost_image + " flex-full-centered"}>
          <img
            src={useBaseUrl(blogpost.image)}
            id={blogpost.imageID}
            alt={"Illustration for the blog post."}
          />
        </div>
        <div className={styles.blogpost_header}>{blogpost.title}</div>
        <div className={styles.blogpost_summary}>
          {blogpost.summary.length < 200
            ? blogpost.summary
            : blogpost.summary.substring(0, 200) + "..."}
        </div>
        <div className={styles.blogpost_footer}>
          <div className={styles.blogpost_date}>
            <span className={styles.blogpost_date_dot} />
            {blogpost.date}
          </div>
          <div className={styles.blogpost_authors}>{blogpost.authors}</div>
        </div>
      </Link>
    </Card>
  );
}
