import styles from "./styles.module.css";

import OpennessMD from "@site/src/components/about/Values/openness.md";
import ScienceMD from "@site/src/components/about/Values/science.md";
import IntegrityMD from "@site/src/components/about/Values/integrity.md";
import OptimismMD from "@site/src/components/about/Values/optimism.md";
/*import OpennessPicture from "@site/static/img/values/openness-light.svg";
import SciencePicture from "@site/static/img/values/science-light.svg";
import OptimismPicture from "@site/static/img/values/optimism-light.svg";
import IntegrityPicture from "@site/static/img/values/integrity-light.svg";*/
import { ValueCardMobile } from "@site/src/components/about/ValueCard";
import { ValueCardDesktop } from "@site/src/components/about/ValueCard";
import { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

const valuesDescriptions = [OpennessMD, ScienceMD, IntegrityMD, OptimismMD];
const valuesPictures = [
  OpennessPicture,
  SciencePicture,
  OptimismPicture,
  IntegrityPicture,
];

export function SciencePicture() {
  return (
    <ThemedImage
      alt="Icon representing the science value, displaying an atom."
      sources={{
        light: useBaseUrl("/img/values/science-light.svg"),
        dark: useBaseUrl("/img/values/science-dark.svg"),
      }}
    />
  );
}

export function OpennessPicture() {
  return (
    <ThemedImage
      alt="Icon representing the openness value, four people connected together."
      sources={{
        light: useBaseUrl("/img/values/openness-light.svg"),
        dark: useBaseUrl("/img/values/openness-dark.svg"),
      }}
    />
  );
}

export function IntegrityPicture() {
  return (
    <ThemedImage
      alt="Icon representing the integrity value, with an heart inside a hand ."
      sources={{
        light: useBaseUrl("/img/values/integrity-light.svg"),
        dark: useBaseUrl("/img/values/integrity-dark.svg"),
      }}
    />
  );
}

export function OptimismPicture() {
  return (
    <ThemedImage
      alt="Icon representing the optimism value, with a smiling face ."
      sources={{
        light: useBaseUrl("/img/values/optimism-light.svg"),
        dark: useBaseUrl("/img/values/optimism-dark.svg"),
      }}
    />
  );
}
  */

const valuesNames = ["Openness", "Science", "Optimism", "Integrity"];
const cardColors = ["white", "yellow", "white", "yellow"];

export function FourValuesMobile() {
  return (
    <div className={styles.four_values_container}>
      <ul className={"row" + " " + "flex-full-centered" + " " + "padding-none"}>
        {valuesNames.map((value, index) => (
          <li className="cards-list" key={index}>
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
    <div className={styles.four_values_container}>
      <div className="row">
        <div className="col">
          <h1 className={"padding-none" + " "+ "full-flex-centered"}>Our values </h1>
        </div>
      </div>
      <ul
        className={"row" + " " + "padding-none" + " " + styles.row_with_margins+" "+ "flex-full-centered"}
      >
        {valuesNames.map((value, index) => (
          <li className="cards-list" key={index}>
            <div className="col">
              <div className={styles.value_card_container}>
                <ValueCardDesktop
                  value={value}
                  ValuePicture={valuesPictures[index]}
                  ValueComponent={valuesDescriptions[index]}
                />
              </div>
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
