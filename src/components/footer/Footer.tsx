import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg";
import BlueskyPicture from "@site/static/img/socialmedias/Bluesky.svg";
import MastodonPicture from "@site/static/img/socialmedias/Mastodon.svg"

export function SocialMediasQuantStack() {
  return (
    <div>
      <b>Follow us on</b> <br />
      <div style={{marginBottom: "var(--ifm-spacing-lg)"}}>
        <Link href={"https://github.com/QuantStack"}>{<GHPicture />}</Link>
        <Link href={"https://www.linkedin.com/company/quantstack/mycompany"}>
          {<LinkedInPicture />}
        </Link>
        <Link href={"https://bsky.app/profile/quantstack.bsky.social"}>{<BlueskyPicture />}</Link>
        <Link href={"https://mastodon.social/@QuantStack "}>{<MastodonPicture />}</Link>
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
            "col flex-horizontally-centered" + " " + styles.col_social_media_desktop
          }
        >
          <SocialMediasQuantStack />
        </div>
        <div className={"col flex-horizontally-centered"}>
          <div className={"container" + " " + styles.menu_container}>
            <div style={{ textAlign: "center" }}>
              <b>Menu</b> <br />
            </div>
            <div className="row">
              <div className="col flex-horizontally-centered">
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
              <div className="col flex-horizontally-centered">
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
            <div className="col flex-horizontally-centered">
                <ul>
                  <li>
                    <Link href={"/fundable"}>Fundable projects</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            "col flex-full-centered" + " " + styles.col_address_desktop
          }
        >
          <div>
            <div>
              <b>QuantStack</b> <br />
              16, avenue Curti <br />
              94100 Saint-Maur-des-Fossés <br />
              France
            </div>
          </div>
        </div>

        <div className={"col" + " " + styles.col_social_media_and_address_mobile}>
          <SocialMediasQuantStack />

          <div>
            <div>
              <b>QuantStack</b> <br />
              16, avenue Curti <br />
              94100 Saint-Maur-des-Fossés <br />
              France
            </div>
          </div>
        </div>
      </div>

      <div className={"row flex-full-centered"}>
        <div className={styles.copyright_container}>
          Copyright © 2025 · QuantStack
        </div>
      </div>
    </div>
  );
}
