import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToGetAQuote({label, pageName}) {
  const pathname = "/fundable/"+ pageName+ "/GetAQuote"
  return (
    <div className="flex-full-centered">
      <Link
        className={"link-to-button" + " " + styles.link_to_get_a_quote}
        href={pathname}
      >
        {label}
      </Link>
    </div>
  );
}
