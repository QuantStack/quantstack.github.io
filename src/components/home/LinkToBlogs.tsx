import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToBlogs({label}) {
  return (
    <div className="link-box">
    <Link
      className={"link-to-button" + " " + styles.link_to_blogs}
      href="/blog"
    >
      {label}
    </Link>
  </div>
  );
}
