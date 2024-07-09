import styles from "./styles.module.css";
import { useEffect, useState } from "react";



export function TopicsCard({ topics, TopicsDescriptionMD }) {
  return (
    <div className={styles.topics_card}>
      <div className={styles.topics_header}>{topics.name}</div>
      <div className={styles.topics_text}>
        <TopicsDescriptionMD />
      </div>
    </div>
  );
}

export default TopicsCard;