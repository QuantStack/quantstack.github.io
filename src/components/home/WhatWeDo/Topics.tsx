import styles from "./styles.module.css";
import { topicsDetails } from "./topics/topicsDetails";
import { TopicsCardDesktop } from "./TopicsCard";
import { TopicsCardMobile } from "./TopicsCard";
import JupyterMD from "./topics/Jupyter.md";
import SupplyChainMD from "./topics/SupplyChain.md";
import ComputingMD from "./topics/Computing.md";
import { useEffect, useState } from "react";

const TopicsDescriptions = [JupyterMD, SupplyChainMD, ComputingMD];
const topicsCardColors = ["yellow", "white", "yellow", "white"];

export function TopicsDesktop() {
  return (
    <div>
      <div className={"container" + " " + styles.topics_container}>
        <ul className="row">
          {topicsDetails.map((topics, index) => (
            <li className="cards_list" key={index}>
              <div
                className={
                  "col" +
                  " " +
                  "col-flex-full-centered" +
                  " " +
                  styles.col_topics
                }
              >
                <TopicsCardDesktop
                  topics={topics}
                  TopicsDescriptionMD={TopicsDescriptions[index]}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TopicsMobile() {
  return (
    <div>
      <div className={"container" + " " + styles.topics_container}>
        {topicsDetails.map((topics, index) => (
          <ul className="row">
            <li className="cards_list" key={index}>

              <TopicsCardMobile
                topics={topics}
                TopicsDescriptionMD={TopicsDescriptions[index]}
                color = {topicsCardColors [index]}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

const breakpointValue: number = 996;

export default function Topics() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <TopicsDesktop /> : <TopicsMobile />}</div>;
}
