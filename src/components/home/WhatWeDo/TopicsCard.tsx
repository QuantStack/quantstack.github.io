import styles from "./styles.module.css";

export function TopicsCard({ topics, TopicsDescriptionMD }) {
  return (
    <div className={"card" + " " + styles.topics_card}>
      <div className={"card__header" + " " + styles.topics_header}>
        {topics.name}
      </div>
      <div className="card__body">
        <TopicsDescriptionMD />
      </div>
    </div>
  );
}

export default TopicsCard;
