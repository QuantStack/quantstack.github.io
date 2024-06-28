import styles from "./styles.module.css";
import SocialMediaContacts from "./SocialMediaContacts";
import { useEffect, useRef } from "react";

function getCenterOfViewport() {
  let horizontalCenter = Math.floor(window.innerWidth / 2);
  let verticalCenter = Math.floor(window.innerHeight / 2);
  return [horizontalCenter, verticalCenter];
}

export default function SmallPortraitCard({ person, avatarUrl }) {
  const elementRef = useRef(null);

  // Later in your component, you can access getBoundingClientRect

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
    }
  }, []);

  return (
    <div
      ref={elementRef}
      className={styles.small_portrait_card}
      id={person.firstName}
      onClick={()=> {
        const rect = elementRef.current.getBoundingClientRect();
        console.log('rect is:', rect)
      }}
    >
      <div className="flex-full-centered">
        <div className={styles.avatar}>
          <img src={avatarUrl} width={"160px"} height={"160px"} />
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
