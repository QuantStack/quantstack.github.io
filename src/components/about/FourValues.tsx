import styles from "./styles.module.css";
import { ValueCard } from "@site/src/components/about/ValueCard";
import { valuesDetails } from "./Values/valuesDetails";

export default function FourValues() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className={"padding-none" + " " + "full-flex-centered"}>
            Our values{" "}
          </h1>
        </div>
      </div>
      <ul className={"cards-row " + styles.values_row}>
        {valuesDetails.map((value, index) => (
          <li key={index}>
            <ValueCard value={value} />
          </li>
        ))}
      </ul>
    </div>
  );
}
