import styles from "./styles.module.css";
import Openness from "./Values/openness.md";
import Science from "./Values/science.md";
import Integrity from "./Values/integrity.md";
import Optimism from "./Values/optimism.md";
import { valuesDetails } from "./Values/valuesDetails";
import ValueCard from "./ValueCard";

const ValuesDescriptions = [Openness, Science, Integrity, Optimism];

export default function FourValues() {
  return (
    <div className="main-container-with-margins">
      <div className="four_values_container">
        <ul className={"row" + " " + styles.row_custom}>
          {valuesDetails.map((value, index) => (
            <li className="cards_list" key={index}>
              <div className="col">
                <ValueCard
                  value={value}
                  ValueComponent={ValuesDescriptions[index]}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
