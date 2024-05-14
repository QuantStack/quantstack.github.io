import styles from "./styles.module.css";
import Openness from "./values/openness.md";
import Science from "./values/science.md";
import Integrity from "./values/integrity.md";
import Optimism from "./values/optimism.md";
import { valuesList } from "./values/valuesList";

export function ValueCard({ name, valuesList, ValueComponent }) {
  let selectedValue: any;
  valuesList.map((item) => {
    if (item.name === name) {
      selectedValue = { ...item };
    }
  });
  return (
    <div className={"card " + styles.value_card}>
      <div className={styles.value_image}>
        <img src={selectedValue.imageRoute}></img>
      </div>
      <div className={styles.value_header}>{selectedValue.name}</div>
      <div className={styles.value_text}>
        <ValueComponent />
      </div>
    </div>
  );
}

export default function ValuesComponent() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Our values </h1>
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
          <div className="col col--3">
            <ValueCard
              name={"Openness"}
              valuesList={valuesList}
              ValueComponent={Openness}
            ></ValueCard>
          </div>
          <div className="col col--3">
            <ValueCard
              name={"Science"}
              valuesList={valuesList}
              ValueComponent={Science}
            ></ValueCard>
          </div>
          <div className="col col--3">
            <ValueCard
              name={"Integrity"}
              valuesList={valuesList}
              ValueComponent={Integrity}
            ></ValueCard>
          </div>
          <div className="col col--3">
            <ValueCard
              name={"Optimism"}
              valuesList={valuesList}
              ValueComponent={Optimism}
            ></ValueCard>
          </div>
        </div>
      </div>
    </div>
  );
}
