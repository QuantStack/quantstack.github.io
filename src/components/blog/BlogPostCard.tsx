// src/components/Card.js

import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function BlogPostCard({ blogPost }) {
  return (
    <div
      className={"card " + styles.blogpost_card}
      style={{ marginBottom: "var(--ifm-spacing-lg)" }}
    >
      <Link href={blogPost.url}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className={styles.blogpost_image_box}>
              <div className={styles.blogpost_image}>
                <img src={blogPost.image}></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.blogpost_header}>
              {blogPost.title}
            </div>
            <div className={styles.blogpost_summary}>
              {blogPost.summary.length < 160
                ? blogPost.summary
                : blogPost.summary.substring(0, 160) + "..."}
            </div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "var(--ifm-spacing-md)" }}
          >
            <div className="col" style={{ padding: "0px" }}>
              <div className={styles.blogpost_date}>{blogPost.date}</div>
            </div>
            <div className="col">
              <div className={styles.blogpost_authors}>{blogPost.authors}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
