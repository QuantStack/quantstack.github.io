import BlogpostCard from "../../blog/BlogpostCard";
import { blogpostsDetails } from "../../blog/blogpostsDetails";
import styles from "./styles.module.css";
import LinkToBlogs from "../LinkToBlogs";

export default function News() {
  const numberOfBlogs = blogpostsDetails.length;
  return (
    <div className={"container" + " " + styles.news_container}>
      <div className={"row flex-full-centerd"}>
        <div className="col col--10 col--offset-1">
          <h2 className="text--center">Recent blog contributions</h2>
        </div>
        <div className="spacing-2xl"></div>
      </div>
      <ul className={"row flex-full-centered"}>
        <li className="cards-list">
          <div className="col">
            <BlogpostCard
              blogpost={blogpostsDetails[0]}
              timeIndex={numberOfBlogs}
            />
          </div>
        </li>
        <li className="cards-list">
          <div className="col col--2 col--offset-1">
            <BlogpostCard
              blogpost={blogpostsDetails[1]}
              timeIndex={numberOfBlogs - 1}
            />
          </div>
        </li>
        <li className="cards-list">
          <div className="col col--2 col--offset-1">
            <BlogpostCard
              blogpost={blogpostsDetails[2]}
              timeIndex={numberOfBlogs - 2}
            />
          </div>
        </li>
      </ul>

      <LinkToBlogs label={"READ MORE POSTS"} />
    </div>
  );
}
