import styles from "./styles.module.css";
import React, { useState } from "react";
import BlogpostCard from "./BlogpostCard";
import { blogpostsDetails } from "./blogpostsDetails";
import AtomOrange from "/img/icons/RSSOrange.svg";

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
    <div className="main-container-with-margins">
      <div className="container upper-container-with-margin-top">
        <div className={"row row-with-margin-bottom"}>
          <div
            className={"col col--8 col--offset-2"}
          >
            <div className="flex-full-centered">
              <h1 className="padding-none margin-none">
                Featured Posts by QuantStack Contributors
              </h1>
            <div style={{padding:"0 10px"}}>
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
          </div>
        </div>

        <ul className={"row" + " " + "flex-full-centered"}>
          {filteredBlogPosts.map((blogpost, index) => (
            <li className="cards-list" key={index}>
              <div className="col">
                <BlogpostCard
                  blogpost={blogpost}
                  timeIndex={numberOfBlogs - index}
                ></BlogpostCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
