import styles from "./styles.module.css";
import { ValueCardMobile } from "@site/src/components/about/ValueCard";
import { ValueCardDesktop } from "@site/src/components/about/ValueCard";
import { useEffect, useState } from "react";
import { valuesDetails } from "./Values/valuesDetails";


const cardColors = ["white", "yellow", "white", "yellow"];

export function FourValuesMobile() {
  return (
    <div className={styles.four_values_container}>
      <ul className={"row" + " " + "flex-full-centered" + " " + "padding-none"}>
        {valuesDetails.map((value, index) => (
          <li className="cards-list" key={index}>
            <div className="col">
              <ValueCardMobile
                value={value.name}
                ValuePicture={value.pictureComponent}
                ValueComponent={value.DescriptionMD}
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
        {valuesDetails.map((value, index) => (
          <li className="cards-list" key={index}>
            <div className="col">
              <div className={styles.value_card_container}>
                <ValueCardDesktop
                  value={value.name}
                  ValuePicture={value.pictureComponent}
                  ValueComponent={value.DescriptionMD}
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
