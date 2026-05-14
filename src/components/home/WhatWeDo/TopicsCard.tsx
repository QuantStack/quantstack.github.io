import styles from "./styles.module.css";
import Card from "../../layout/Card";

export function TopicsCard({ topics, TopicsDescriptionMD }) {
  return (
    <Card bg="transparent" className={styles.topics_card}>
      <div className={styles.topics_header}>{topics.name}</div>
      <div><TopicsDescriptionMD /></div>
    </Card>
  );
}

export default TopicsCard;
