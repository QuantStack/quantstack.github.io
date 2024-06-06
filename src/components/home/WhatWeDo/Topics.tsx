import styles from "./styles.module.css";
import Jupyter from "./topics/jupyter.md";
import SupplyChain from "./topics/supply_chain.md";
import Computing from "./topics/computing.md";
import { topicsDetails } from "./topics/topicsDetails";
import { TopicsCard } from "./TopicsCard";
import JupyterMD from "./topics/Jupyter.md";
import SupplyChainMD from "./topics/SupplyChain.md";
import ComputingMD from "./topics/Computing.md";

const TopicsDescriptions = [JupyterMD, SupplyChainMD, ComputingMD];

export default function Topics() {
  return (
    <div>
      <div className={"container" + " " + styles.topics_container}>
        <ul className={"row" + " " + styles.row_custom}>
          {topicsDetails.map((topics, index) => (
            <li className="cards_list" key={index}>
              <div className={"col" + " " + styles.col_custom}>
                <TopicsCard
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
