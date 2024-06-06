import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg"
import XPicture from "@site/static/img/socialmedias/X.svg";


export default function SocialMediaContacts({ person }) {
  return (
    <>
      <div className = {styles.social_media_contacts_container}>
        <Link href={person.githubLink}>{<GHPicture/>}</Link>
        <Link href={person.LinkedInLink}>
          {<LinkedInPicture/>}
        </Link>
        <Link href={person.XLink}>{<XPicture/>}</Link>
      </div>
      <Link href={person.githubLink} className={styles.githubname}>
        {" "}
        {person.githubName}
      </Link>
    </>
  );
}
