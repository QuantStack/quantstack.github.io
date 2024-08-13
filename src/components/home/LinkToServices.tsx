import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToServices({label}) {
  return (
    <div className="flex-full-centered">
      <Link
        className={"link-to-button" + " " + styles.link_to_services}
        href="/services/"
      >
        {label}
      </Link>
    </div>
  );
}
