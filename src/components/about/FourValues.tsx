import styles from "./styles.module.css";
import ValueCard from "@site/src/components/about/ValueCard";
import OpennessMD from "@site/src/components/about/Values/openness.md";
import ScienceMD from "@site/src/components/about/Values/science.md";
import IntegrityMD from "@site/src/components/about/Values/integrity.md";
import OptimismMD from "@site/src/components/about/Values/optimism.md";
import OpennessPicture from "@site/static/img/values/openness.svg";
import SciencePicture from "@site/static/img/values/science.svg";
import OptimismPicture from "@site/static/img/values/optimism.svg";
import IntegrityPicture from "@site/static/img/values/integrity.svg";

const valuesDescriptions = [OpennessMD, ScienceMD, IntegrityMD, OptimismMD];
const valuesPictures = [OpennessPicture, SciencePicture, OptimismPicture, IntegrityPicture]
const valuesNames = [ "Openness", "Science", "Optimism", "Integrity"]


export default function FourValues() {
  return (
    <div className="main-container-with-margins">
      <div className="four_values_container">
        <ul className={"row" + " " + styles.row_custom}>
          {valuesNames.map((value, index) => (
            <li className="cards_list" key={index}>
              <div className="col">
                <ValueCard
                  value={value}
                  ValuePicture={valuesPictures[index]}
                  ValueComponent={valuesDescriptions[index]}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
