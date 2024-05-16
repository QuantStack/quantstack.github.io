import styles from "./styles.module.css";
import { blogPostsDetails } from "./blogposts";
import React, { useState } from "react";
import BlogPostCard from "./BlogPostCard";


export default function BlogsComponent() {
  const [searchField, setSearchField] = useState("");

  const filteredBlogPosts = blogPostsDetails.filter((blogPost) => {
    return blogPost.title.toLowerCase().includes(searchField.toLowerCase()) || blogPost.authors.toLowerCase().includes(searchField.toLowerCase()) || blogPost.date.toLowerCase().includes(searchField.toLowerCase()) ;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  
  return (
    <div className="container" style={{ marginTop: "var(--ifm-spacing-6xl)" }}>
      <div className="row">
        <div className="col col--10 col--offset-1" style={{marginBottom:"var(--ifm-spacing-5xl)"}}>
          <h1 style={{ textAlign: "left" }}> Featured Posts by QuantStack Contributors</h1>
          <div>
        <input className={styles.search_input}
          type="search"
          placeholder="Search blog posts"
          onChange={handleChange}
        />
      </div>
        </div>

        <ul className="row">
          {filteredBlogPosts.map((blogPost, index) => (
            <li className="cards_list" key={index}>
              <div className="col col--2 col--offset-1">
                <BlogPostCard blogPost={blogPost}></BlogPostCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
