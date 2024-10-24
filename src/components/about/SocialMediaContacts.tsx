import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg";
import XPicture from "@site/static/img/socialmedias/X.svg";

export default function SocialMediaContacts({ person }) {
  return (
    <>
      <div className="flex-full-centered">
        <div>
          {person.onGithub === "true" ? (
            <Link href={person.githubLink}>{<GHPicture />}</Link>
          ) : (
            null
          )}
        </div>
        {person.onLinkedIn === "true" ? (
          <Link href={person.LinkedInLink}>{<LinkedInPicture />}</Link>
        ) : (
          null
        )}
        {person.onX === "true" ? (
          <Link href={person.XLink}>{<XPicture />}</Link>
        ) : (
          null
        )}
      </div>
      <div className="flex-full-centered">
        <Link href={person.githubLink} className={styles.githubname}>
          {person.githubName}
        </Link>
      </div>
    </>
  );
}
