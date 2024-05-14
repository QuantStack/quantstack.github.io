import styles from "./styles.module.css";
import Jupyter from "./topics/jupyter.md";
import SupplyChain from "./topics/supply_chain.md"
import Computing from "./topics/computing.md";
import {topicsList} from './topics/topicsList';

export function TopicsCard({ topics, topicsList, TopicsComponent }) {
  let selectedTopics: any;
  topicsList.map((item) => {
    if (item.topics === topics) {
      selectedTopics = { ...item };
    }
  });
  return (
    <div className={"card " + styles.topics_card}>
      <div className={styles.topics_header}>{selectedTopics.name}</div>
      <div className={styles.topics_text}>
        <TopicsComponent />
      </div>
    </div>
  );
}

export default function TopicsTable() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>What we do </h1>
      <div
        className="container"
        style={{
          margin: "var(--ifm-spacing-5xl) auto var(--ifm-spacing-5xl) 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="row">
          <div className="col col--4">
            <TopicsCard
              topics={"jupyter"}
              topicsList={topicsList}
              TopicsComponent={Jupyter}
            ></TopicsCard>
          </div>
          <div className="col col--4">
            <TopicsCard
              topics={"supplychain"}
              topicsList={topicsList}
              TopicsComponent={SupplyChain}
            ></TopicsCard>
          </div>
          <div className="col col--4">
            <TopicsCard
              topics={"computing"}
              topicsList={topicsList}
              TopicsComponent={Computing}
            ></TopicsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
