import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function SocialMediaContacts({ person }) {
  return (
    <>
      <div className = {styles.social_media_contacts_container}>
        <Link href={person.githubLink}>{<img src={"/img/socialmedias/GH.svg"}></img>}</Link>
        <Link href={person.LinkedInLink}>
          {<img src={"/img/socialmedias/LinkedIn.svg"}></img>}
        </Link>
        <Link href={person.XLink}>{<img src={"/img/socialmedias/X.svg"}></img>}</Link>
      </div>
      <Link href={person.githubLink} className={styles.githubname}>
        {" "}
        {person.githubName}
      </Link>
    </>
  );
}
