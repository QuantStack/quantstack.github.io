import React, { useState } from "react";
import CardGrid from "./layout/CardGrid";
import BlogpostCard from "./BlogpostCard";
import { blogpostsDetails } from "../pages/blogs/blogpostsDetails";
import styles from "../pages/blog.module.css";

export default function BlogGrid() {
  const [searchField, setSearchField] = useState("");

  const filtered = blogpostsDetails.filter((blogpost) =>
    [blogpost.title, blogpost.authors, blogpost.date, blogpost.summary]
      .some((field) => field.toLowerCase().includes(searchField.toLowerCase()))
  );

  return (
    <>
      <input
        className={styles.search_input}
        type="search"
        placeholder="Search for blog posts"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <CardGrid cols={3}>
        {filtered.map((blogpost, index) => (
          <li key={index}>
            <BlogpostCard blogpost={blogpost} />
          </li>
        ))}
      </CardGrid>
    </>
  );
}
