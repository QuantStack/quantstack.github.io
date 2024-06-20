import styles from "./styles.module.css";

import OpennessMD from "@site/src/components/about/Values/openness.md";
import ScienceMD from "@site/src/components/about/Values/science.md";
import IntegrityMD from "@site/src/components/about/Values/integrity.md";
import OptimismMD from "@site/src/components/about/Values/optimism.md";
import OpennessPicture from "@site/static/img/values/openness.svg";
import SciencePicture from "@site/static/img/values/science.svg";
import OptimismPicture from "@site/static/img/values/optimism.svg";
import IntegrityPicture from "@site/static/img/values/integrity.svg";
import { ValueCardMobile } from "@site/src/components/about/ValueCard";
import { ValueCardDesktop } from "@site/src/components/about/ValueCard";
import { useEffect, useState } from "react";

const valuesDescriptions = [OpennessMD, ScienceMD, IntegrityMD, OptimismMD];
const valuesPictures = [
  OpennessPicture,
  SciencePicture,
  OptimismPicture,
  IntegrityPicture,
];
const valuesNames = ["Openness", "Science", "Optimism", "Integrity"];
const cardColors = ["yellow", "white", "yellow", "white"];

export function FourValuesMobile() {
  return (
    <div className="four_values_container">
      <ul className={"row" + " " + styles.row_custom}>
        {valuesNames.map((value, index) => (
          <li className="cards_list" key={index}>
            <div className="col">
              <ValueCardMobile
                value={value}
                ValuePicture={valuesPictures[index]}
                ValueComponent={valuesDescriptions[index]}
                color={cardColors[index]}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FourValuesDesktop() {
  return (
    <div className="four_values_container">
      <ul className={"row" + " " + styles.row_custom}>
        {valuesNames.map((value, index) => (
          <li className="cards_list" key={index}>
            <div className="col">
              <ValueCardDesktop
                value={value}
                ValuePicture={valuesPictures[index]}
                ValueComponent={valuesDescriptions[index]}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const breakpointValue: number = 996;

export default function FourValues() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <FourValuesDesktop /> : <FourValuesMobile />}</div>;
}
