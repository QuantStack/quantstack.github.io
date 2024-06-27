import styles from "./styles.module.css";
import SocialMediaContacts from "./SocialMediaContacts";

export default function SmallPortraitCard({ person, avatarUrl }) {
  return (
    <div className={styles.small_portrait_card}>
      <div className="flex-full-centered">
        <div className={styles.avatar}>
          <img src={avatarUrl} width={"160px"} height={"160px"}/>
        </div>
      </div>
      <div className={styles.small_card_complete_name}>
        {person.completeName}
      </div>
      <div className={styles.small_card_position}>{person.position}</div>
      <div style={{ marginTop: "var(--ifm-spacing-xl)" }}>
        <SocialMediaContacts person={person}></SocialMediaContacts>
      </div>
    </div>
  );
}
