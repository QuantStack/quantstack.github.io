// src/components/Card.js

import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function BlogpostCard({ blogpost, timeIndex }) {
  return (
    <div
      className={"card" + " " + styles.blogpost_card}
      style={{ marginBottom: "var(--ifm-spacing-lg)" }}
    >
      <Link href={blogpost.url}>
        <div className="container">
          <div
            className={
              "row" +
              " " +
              "flex-full-centered" +
              " " +
              "padding-none" +
              " " +
              "margin-none"
            }
          ></div>
          <div className="card__header">
            <div
              className={styles.blogpost_image + " " + "flex-full-centered"}
              style={{ height: "180px" }}
            >
              <img
                src={useBaseUrl(blogpost.image)}
                id={blogpost.imageID}
                alt={"Illustration for the blog post."}
              />
            </div>

            <div className={styles.blogpost_header}>{blogpost.title}</div>
          </div>

          <div className={"card__body"}>
            <div className={styles.blogpost_summary}>
              {blogpost.summary.length < 200
                ? blogpost.summary
                : blogpost.summary.substring(0, 200) + "..."}
            </div>
          </div>

          <div
            className={"row card__footer"}
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
