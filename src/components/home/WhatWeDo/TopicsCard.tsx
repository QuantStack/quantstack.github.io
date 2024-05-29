import styles from "./styles.module.css";

export function TopicsCard({ topics, TopicsDescriptionMD }) {
    return (
      <div className={"card " + " " + styles.topics_card}>
        <div className={styles.topics_header}>{topics.name}</div>
        <div className={styles.topics_text}>
          <TopicsDescriptionMD />
        </div>
      </div>
    );
  }