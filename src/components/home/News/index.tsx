import BlogpostCard from "../../blog/BlogpostCard";
import blogpostsDetails from "@site/src/components/blog/blogpostsDetails.json";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function News() {
  const numberOfBlogs = blogpostsDetails.length;
  return (
    <div className={"container" + " " + styles.news_container}>
      <div className={"row" + " " + styles.row_custom}>
        <div className="col col--10 col--offset-1">
          <h2 className={styles.h2_custom}>Recent blog contributions</h2>
        </div>
      </div>
      <ul className={"row" + " " + styles.row_custom}>
        <li className="cards_list">
          <div className="col">
            <BlogpostCard
              blogpost={blogpostsDetails[0]}
              timeIndex={numberOfBlogs}
            />
          </div>
        </li>
        <li className="cards_list">
          <div className="col col--2 col--offset-1">
            <BlogpostCard
              blogpost={blogpostsDetails[1]}
              timeIndex={numberOfBlogs - 1}
            />
          </div>
        </li>
        <li className="cards_list">
          <div className="col col--2 col--offset-1">
            <BlogpostCard
              blogpost={blogpostsDetails[2]}
              timeIndex={numberOfBlogs - 2}
            />
          </div>
        </li>
      </ul>
      <div className="link-box">
        <Link
          className={"link-to-button" + " " + styles.blog_button}
          href="/blog"
        >
          {"READ MORE BLOGS! "}
        </Link>
      </div>
    </div>
  );
}