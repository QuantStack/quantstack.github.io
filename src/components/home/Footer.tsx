import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg";
import XPicture from "@site/static/img/socialmedias/X.svg";
import AstronautPicture from "@site/static/img/quantstack/astronaut-footer.svg";

export default function Footer() {
  return (
    <div className={"container" + " " + styles.footer_container}>
      <div className={"row"}>
        <div className={"col"}>
          <div
            className={styles.astronaut_container}
          >
            <Link href={"/home"}>
              <div className="astronaut-footer" />
            </Link>
          </div>
        </div>

        <div className="col">
          <b>Menu</b> <br />
          <ul>
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/about"}>About us</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/careers"}>Careers</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <div>
            <Link href={"https://github.com/QuantStack"}>{<GHPicture />}</Link>
            <Link
              href={"https://www.linkedin.com/company/quantstack/mycompany"}
            >
              {<LinkedInPicture />}
            </Link>
            <Link href={"https://twitter.com/QuantStack"}>{<XPicture />}</Link>
          </div>
          <div className={styles.office_address}>
            <b>QuantStack office</b> <br />
            16, avenue Curti <br />
            94100 Saint-Maur-des-Fossés <br />
            France
          </div>
        </div>
      </div>
      <div className={"row"}>
        Copyright © 2024 · QuantStack website · Built with Docusaurus
      </div>
    </div>
  );
}
