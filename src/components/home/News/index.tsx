import styles from "./styles.module.css";
import BlogpostCard from "../../blog/BlogpostCard";
import { blogpostsDetails } from "../../blog/blogpostsDetails";
import CardGrid from "../../layout/CardGrid";
import Section from "../../layout/Section";
import LinkToBlogs from "../LinkToBlogs";

export default function News() {
  const numberOfBlogs = blogpostsDetails.length;
  return (
    <div className={styles.news_wrapper}>
      <Section>
        <h2 className="text--center">Recent blog contributions</h2>
        <CardGrid cols={3}>
          {[0, 1, 2].map((i) => (
            <li key={i}>
              <BlogpostCard
                blogpost={blogpostsDetails[i]}
                timeIndex={numberOfBlogs - i}
              />
            </li>
          ))}
        </CardGrid>
        <div className="flex-full-centered" style={{ marginTop: "var(--ifm-spacing-xl)" }}>
          <LinkToBlogs label="READ MORE POSTS" />
        </div>
      </Section>
    </div>
  );
}
