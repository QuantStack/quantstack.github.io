// src/components/Card.js

import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from '@docusaurus/useBaseUrl';

export function BlogpostPicture({ blogpost }) {
  return (
    <div className={styles.blogpost_image}>
      <img src={blogpost.image} style={{ height: "40%" }} />
    </div>
  );
}

export default function BlogpostCard({ blogpost, timeIndex }) {
  if (blogpost.image.includes("https://")){
  return (
    <div
      className={"card " + styles.blogpost_card}
      style={{ marginBottom: "var(--ifm-spacing-lg)" }}
    >
      <div className={styles.blog_time_index}>{timeIndex}</div>
      <Link href={blogpost.url}>
        <div className="container">
          <div className={"row" + " " + styles.row_custom}></div>

          <div className={styles.blogpost_image_container}>
            <div className={styles.blogpost_image}>
              <img src={blogpost.image} id={blogpost.imageID} width={blogpost.imageWidth} />
            </div>
          </div>

          <div className={styles.blogpost_header}>{blogpost.title}</div>

          <div className={styles.blogpost_summary}>
            {blogpost.summary.length < 200
              ? blogpost.summary
              : blogpost.summary.substring(0, 200) + "..."}
          </div>

          <div
            className="row"
            style={{ marginBottom: "var(--ifm-spacing-md)" }}
          >
            <div className="col" style={{ padding: "0px" }}>
              <div className={styles.blogpost_date}>{blogpost.date}</div>
              <div className={styles.blogpost_authors}>{blogpost.authors}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} else if(blogpost.image.includes('/img/'))
{
  return (
    <div
      className={"card " + styles.blogpost_card}
      style={{ marginBottom: "var(--ifm-spacing-lg)" }}
    >
      <div className={styles.blog_time_index}>{timeIndex}</div>
      <Link href={blogpost.url}>
        <div className="container">
          <div className={"row" + " " + styles.row_custom}></div>

          <div className={styles.blogpost_image_container}>
            <div className={styles.blogpost_image}>
              <img src={useBaseUrl(blogpost.image)} width={blogpost.imageWidth} id={blogpost.imageID} />
            </div>
          </div>

          <div className={styles.blogpost_header}>{blogpost.title}</div>

          <div className={styles.blogpost_summary}>
            {blogpost.summary.length < 200
              ? blogpost.summary
              : blogpost.summary.substring(0, 200) + "..."}
          </div>

          <div
            className="row"
            style={{ marginBottom: "var(--ifm-spacing-md)" }}
          >
            <div className="col" style={{ padding: "0px" }}>
              <div className={styles.blogpost_date}>{blogpost.date}</div>
              <div className={styles.blogpost_authors}>{blogpost.authors}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
}
