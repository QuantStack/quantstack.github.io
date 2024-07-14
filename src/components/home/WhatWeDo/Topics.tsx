import { topicsDetails } from "./topics/topicsDetails";
import { TopicsCard } from "./TopicsCard";
import JupyterMD from "./topics/Jupyter.md";
import SupplyChainMD from "./topics/SupplyChain.md";
import ComputingMD from "./topics/Computing.md";

const TopicsDescriptions = [JupyterMD, SupplyChainMD, ComputingMD];

export function Topics() {
  return (
    <div>
      <div className={"container flex-full-centered"}>
        <ul className="row flex-full-centered">
          {topicsDetails.map((topics, index) => (
            <li className="cards-list" key={index}>
              <div className="col flex-full-centered">
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

export default Topics;
