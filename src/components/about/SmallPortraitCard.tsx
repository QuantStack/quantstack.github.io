import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Avatar from "./Avatar";
import SocialMediaContacts from "./SocialMediaContacts";

export default function SmallPortraitCard({ person }) {
  return (
    <div className={styles.small_portrait_card}>
      <Avatar person={person} />
      <div className={styles.small_card_complete_name}>
        <Link href={"About/" + person.firstName}>{person.completeName}</Link>
      </div>
      <div className={styles.small_card_position}>
        <Link href={"About/" + person.firstName}>{person.position}</Link>
      </div>
      <div style={{marginTop: "var(--ifm-spacing-xl)"}}>
      <SocialMediaContacts person={person}></SocialMediaContacts>
      </div>
    </div>
  );
}
