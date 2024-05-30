import BlogpostCard from "../../blog/BlogpostCard";
import { blogpostsDetails } from "../../blog/blogpostsDetails";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function News() {
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
            <BlogpostCard blogpost={blogpostsDetails[1]} />
          </div>
        </li>
        <li className="cards_list">
          <div className="col col--2 col--offset-1">
            <BlogpostCard blogpost={blogpostsDetails[2]} />
          </div>
        </li>
        <li className="cards_list">
          <div className="col col--2 col--offset-1">
            <BlogpostCard blogpost={blogpostsDetails[3]} />
          </div>
        </li>
      </ul>
      <div className="link-box">
        <Link
          className={"link-to-button" + " " + styles.blog_button}
          href="/blog"
        >
          {"READ BLOGS! "}
        </Link>
      </div>
    </div>
  );
}
