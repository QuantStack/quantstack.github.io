import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToAboutUs({label}) {
  return (
    <div className="link-container">
      <Link
        className={"link-to-button" + " " + styles.link_to_contact}
        href="/about"
      >
        {label}
      </Link>
    </div>
  );
}
