import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Avatar from "./Avatar";


export default function SmallPortraitCard({ person }) {
    return (
      <div className={styles.small_portrait_card}>
        <Avatar person={person} />
        <div className={styles.complete_name}>
          <Link href={"About/" + person.firstName}>{person.completeName}</Link>
        </div>
        <div className={styles.position}>
          <Link href={"About/" + person.firstName}>{person.position}</Link>
        </div>
        <div className={styles.social_icons_box}>
          <Link href={person.githubLink}>{<img src={"/img/GH.svg"}></img>}</Link>
          <Link href={person.LinkedInLink}>
            {<img src={"/img/LinkedIn.svg"}></img>}
          </Link>
          <Link href={person.XLink}>{<img src={"/img/X.svg"}></img>}</Link>
        </div>
        <Link href={person.githubLink} className={styles.githubname}>
          {" "}
          {person.githubName}
        </Link>
      </div>
    );
  }