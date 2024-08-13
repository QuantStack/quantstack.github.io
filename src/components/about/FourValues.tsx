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
      <ul className="row padding-none flex-full-centered row-with-margins">
        {valuesDetails.map((value, index) => (
          <li className="cards-list" key={index}>
            <div className="col">
              <ValueCard value={value} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
