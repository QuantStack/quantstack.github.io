import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToContact({label}) {
  return (
    <div className="flex-full-centered">
      <Link
        className="link-to-button"
        href="/contact"
      >
        {label}
      </Link>
    </div>
  );
}
