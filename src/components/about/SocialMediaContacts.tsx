import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg";
import XPicture from "@site/static/img/socialmedias/X.svg";
import BlueskyPicture from "@site/static/img/socialmedias/Bluesky.svg";
import MastodonPicture from "@site/static/img/socialmedias/Mastodon.svg";

export default function SocialMediaContacts({ person }) {
  return (
    <>
      <div className="flex-full-centered">
        <div>
          {person.GitHubLink ? (
            <Link href={person.GitHubLink}>{<GHPicture />}</Link>
          ) : (
            null
          )}
        </div>
        {person.LinkedInLink ? (
          <Link href={person.LinkedInLink}>{<LinkedInPicture />}</Link>
        ) : (
          null
        )}
        {person.XLink ? (
          <Link href={person.XLink}>{<XPicture />}</Link>
        ) : (
          null
        )}
        {person.BlueskyLink ? (
          <Link href={person.BlueskyLink}>{<BlueskyPicture />}</Link>
        ) : (
          null
        )}
        {person.MastodonLink ? (
          <Link href={person.MastodonLink}>{<MastodonPicture />}</Link>
        ) : (
          null
        )}
      </div>
      <div className="flex-full-centered">
        <Link href={person.GitHubLink} className={styles.GitHubName}>
          {person.GitHubName}
        </Link>
      </div>
    </>
  );
}
