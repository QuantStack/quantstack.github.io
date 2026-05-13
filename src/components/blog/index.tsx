import styles from "./styles.module.css";
import React, { useState } from "react";
import BlogpostCard from "./BlogpostCard";
import { blogpostsDetails } from "./blogpostsDetails";
import AtomOrange from "/img/icons/RSSOrange.svg";
import Section from "../layout/Section";

export default function BlogsComponent() {
  const numberOfBlogs = blogpostsDetails.length;
  const [searchField, setSearchField] = useState("");

  const filteredBlogPosts = blogpostsDetails.filter((blogpost) => {
    return (
      blogpost.title.toLowerCase().includes(searchField.toLowerCase()) ||
      blogpost.authors.toLowerCase().includes(searchField.toLowerCase()) ||
      blogpost.date.toLowerCase().includes(searchField.toLowerCase()) ||
      blogpost.summary.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Section pageTop>
      <div className="flex-full-centered" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
        <h1 className="padding-none margin-none">
          Featured Posts by QuantStack Contributors
        </h1>
        <div style={{ padding: "0 10px" }}>
          <a href={"/atom.xml"}>
            <AtomOrange width={"42px"} height={"42px"} />
          </a>
        </div>
      </div>
      <div>
        <input
          className={styles.search_input}
          type="search"
          placeholder="Search for blog posts"
          onChange={handleChange}
        />
      </div>

      <ul className="cards-row">
        {filteredBlogPosts.map((blogpost, index) => (
          <li key={index}>
            <BlogpostCard
              blogpost={blogpost}
              timeIndex={numberOfBlogs - index}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
