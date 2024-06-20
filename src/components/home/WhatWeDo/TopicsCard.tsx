import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const breakpointValue: number = 996;

export function TopicsCardDesktop({ topics, TopicsDescriptionMD }) {
  return (
    <div className={styles.topics_card}>
      <div className={styles.topics_header}>{topics.name}</div>
      <div className={styles.topics_text}>
        <TopicsDescriptionMD />
      </div>
    </div>
  );
}

export function TopicsCardMobile({ topics, TopicsDescriptionMD, color }) {
  return (
    <div
      className={
        "card " +
        " " +
        styles.topics_card +
        " " +
        (color === "yellow"
          ? styles.topics_card_yellow
          : styles.topics_card_white)
      }
    >
      <div className={styles.topics_header}>{topics.name}</div>
      <div className={styles.topics_text}>
        <TopicsDescriptionMD />
      </div>
    </div>
  );
}

export default function TopicsCard({ topics, TopicsDescriptionMD, color }) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <TopicsCardDesktop
          topics={topics}
          TopicsDescriptionMD={TopicsDescriptionMD}
        />
      ) : (
        <TopicsCardMobile
          topics={topics}
          TopicsDescriptionMD={TopicsDescriptionMD}
          color={color}
        />
      )}
    </div>
  );
}
