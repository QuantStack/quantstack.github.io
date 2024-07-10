import styles from "./styles.module.css";
import { ValueCard } from "@site/src/components/about/ValueCard";
import { valuesDetails } from "./Values/valuesDetails";

export default function FourValues() {
  return (
    <div className={styles.four_values_container}>
      <div className="row">
        <div className="col">
          <h1 className={"padding-none" + " " + "full-flex-centered"}>
            Our values{" "}
          </h1>
        </div>
      </div>
      <ul
        className={
          "row" +
          " " +
          "padding-none" +
          " " +
          styles.row_with_margins +
          " " +
          "flex-full-centered"
        }
      >
        {valuesDetails.map((value, index) => (
          <li className="cards-list" key={index}>
            <div className="col">
              <div className={styles.value_card_container}>
                <ValueCard value={value} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
