import styles from "./styles.module.css";
import { blogpostsDetails } from "./blogpostsDetails";
import React, { useState } from "react";
import BlogpostCard from "./BlogpostCard";

export default function BlogsComponent() {
  const [searchField, setSearchField] = useState("");

  const filteredBlogPosts = blogpostsDetails.filter((blogpost) => {
    return (
      blogpost.title.toLowerCase().includes(searchField.toLowerCase()) ||
      blogpost.authors.toLowerCase().includes(searchField.toLowerCase()) ||
      blogpost.date.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="main-container-with-margins">
      <div
        className="container"
        style={{ marginTop: "var(--ifm-spacing-6xl)" }}
      >
        <div className="row">
          <div
            className="col col--10 col--offset-1"
            style={{ marginBottom: "var(--ifm-spacing-5xl)" }}
          >
            <h1 style={{ textAlign: "left" }}>
              {" "}
              Featured Posts by QuantStack Contributors
            </h1>
            <div>
              <input
                className={styles.search_input}
                type="search"
                placeholder="Search blog posts"
                onChange={handleChange}
              />
            </div>
          </div>

          <ul className="row">
            {filteredBlogPosts.map((blogpost, index) => (
              <li className="cards_list" key={index}>
                <div className="col col--2 col--offset-1">
                  <BlogpostCard blogpost={blogpost}></BlogpostCard>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
