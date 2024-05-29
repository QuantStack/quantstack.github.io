import styles from "./styles.module.css";
import Openness from "./values/openness.md";
import Science from "./values/science.md";
import Integrity from "./values/integrity.md";
import Optimism from "./values/optimism.md";
import { valuesDetails } from "./values/valuesDetails";
import ValueCard from "./ValueCard";

const ValuesDescriptions=[Openness, Science, Integrity, Optimism];

export default function FourValues() {
  return (
    <div className="container">
      <h1 className={styles.h1_custom}>Our values </h1>
      <div
        className="four_values_container">
        <ul className={"row" + " " + styles.row_custom}>
          {valuesDetails.map((value, index) => (
            <li className="cards_list" key={index}>
              <div className="col col--2">
                <ValueCard value={value} ValueComponent={ValuesDescriptions[index]}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
