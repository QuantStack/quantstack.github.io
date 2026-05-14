import styles from "./styles.module.css";
import React, { useState } from "react";
import BlogpostCard from "./BlogpostCard";
import { blogpostsDetails } from "./blogpostsDetails";
import AtomOrange from "/img/icons/RSSOrange.svg";
import Section from "../layout/Section";
import CardGrid from "../layout/CardGrid";

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
    <>
      <Section pageTop bg="yellow">
        <div className="flex-full-centered">
          <h1 className="padding-none margin-none">
            Featured posts by QuantStack contributors
          </h1>
          <div style={{ padding: "0 10px" }}>
            <a href={"/atom.xml"}>
              <AtomOrange width={"42px"} height={"42px"} />
            </a>
          </div>
        </div>
        <p className="text--center">Technical deep-dives, release notes, and perspectives from maintainers at the source. Read about the decisions, trade-offs, and discoveries that go into the tools powering modern science.</p>
      </Section>
      <Section>
        <div>
          <input
            className={styles.search_input}
            type="search"
            placeholder="Search for blog posts"
            onChange={handleChange}
          />
        </div>

        <CardGrid cols={3}>
          {filteredBlogPosts.map((blogpost, index) => (
            <li key={index}>
              <BlogpostCard
                blogpost={blogpost}
                timeIndex={numberOfBlogs - index}
              />
            </li>
          ))}
        </CardGrid>
      </Section>
    </>
  );
}
