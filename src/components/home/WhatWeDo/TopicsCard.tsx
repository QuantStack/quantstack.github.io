import styles from "./styles.module.css";

export function TopicsCard({ topics, TopicsDescriptionMD }) {
  return (
    <div className={"content-card " + styles.topics_card}>
      <div className={styles.topics_header}>{topics.name}</div>
      <div><TopicsDescriptionMD /></div>
    </div>
  );
}

export default TopicsCard;
