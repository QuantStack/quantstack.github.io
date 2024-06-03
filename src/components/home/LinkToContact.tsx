import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToContact({label}) {
  return (
    <div className="link-container">
      <Link
        className={"link-to-button" + " " + styles.link_to_contact}
        href="/contact"
      >
        {label}
      </Link>
    </div>
  );
}
