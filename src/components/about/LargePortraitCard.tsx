import styles from "./styles.module.css";
import DistinctionIcon from "@site/static/img/icons/Distinction.svg";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg";
import BlueskyPicture from "@site/static/img/socialmedias/Bluesky.svg";
import MastodonPicture from "@site/static/img/socialmedias/Mastodon.svg";
import Link from "@docusaurus/Link";
import React from "react";

export default function LargePortraitCard({ person }) {
  const hasDistinction = person.distinctionTitle.length !== 0;

  return (
    <div className={styles.large_portrait_card}>
      <div className={"container"}>
        <div className={"row padding-none"}>
          <div className="col col--12 col--offset-1">
            <div className={styles.large_card_complete_name}>{person.completeName}</div>
            <div className={styles.large_card_position}>{person.position}</div>
          </div>
        </div>
        <div className="row">
          <div className={"col col--3 col--offset-1 flex-full-centered"}>
            <div style={{ marginBottom: "var(--ifm-spacing-md)" }}>
              <div className="flex-full-centered">
                <img
                  src={person.avatarUrl}
                  className={styles.avatar}
                  alt={`Avatar of ${person.completeName} working at QuantStack as a ${person.position}`}
                />
              </div>
            </div>
          </div>
          <div className="col col--7 col--offset-1">
            <div className={styles.bio_container}>
              <person.BioComponent />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--3 col--offset-1">
            <div className="flex-full-centered">
              {person.GitHubLink && <Link href={person.GitHubLink}><GHPicture /></Link>}
              {person.LinkedInLink && <Link href={person.LinkedInLink}><LinkedInPicture /></Link>}
              {person.BlueskyLink && <Link href={person.BlueskyLink}><BlueskyPicture /></Link>}
              {person.MastodonLink && <Link href={person.MastodonLink}><MastodonPicture /></Link>}
            </div>
            <div className="flex-full-centered">
              <Link href={person.GitHubLink} className={styles.GitHubName}>{person.GitHubName}</Link>
            </div>
          </div>
          <div className="col col--6 col--offset-1">
            {hasDistinction && (
              <ul style={{ paddingLeft: "0px" }}>
                {person.distinctionTitle.map((distinction, index) => (
                  <li className="items-list" key={person.pageName}>
                    <div>
                      <Link href={person.distinctionLink[index]}>
                        <DistinctionIcon className={styles.distinction_icon} />
                        {distinction}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
