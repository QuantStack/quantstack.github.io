import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg";
import XPicture from "@site/static/img/socialmedias/X.svg";

export function SocialMediasQuantStack() {
  return (
    <div>
      <b>Follow us on</b> <br />
      <div className={styles.social_media_links_quantstack}>
        <Link href={"https://github.com/QuantStack"}>{<GHPicture />}</Link>
        <Link href={"https://www.linkedin.com/company/quantstack/mycompany"}>
          {<LinkedInPicture />}
        </Link>
        <Link href={"https://twitter.com/QuantStack"}>{<XPicture />}</Link>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className={"container" + " " + styles.footer_container}>
      <div className={"row"} style={{ paddingBottom: "var(--ifm-spacing-xl)" }}>
        <div
          className={
            "col flex-full-centered" + " " + styles.social_media_desktop
          }
        >
          <SocialMediasQuantStack />
        </div>
        <div className={"col"}>
          <div className={"container" + " " + styles.menu_container}>
            <div style={{ textAlign: "center" }}>
              <b>Menu</b> <br />
            </div>
            <div className="row">
              <div className="col">
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
                </ul>
              </div>
              <div className="col">
                <ul>
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
            </div>
          </div>
        </div>

        <div className="col">
        <div className={styles.social_media_mobile}>
          <SocialMediasQuantStack/>
        </div>

          <div className={styles.office_address}>
            <b>QuantStack office</b> <br />
            16, avenue Curti <br />
            94100 Saint-Maur-des-Fossés <br />
            France
          </div>
        </div>
      </div>

      <div className={"row flex-full-centered"}>
        <div className={styles.copyright_container}>
          Copyright © 2024 · QuantStack website · Built with Docusaurus
        </div>
      </div>
    </div>
  );
}