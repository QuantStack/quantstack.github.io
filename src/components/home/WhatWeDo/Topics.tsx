import { topicsDetails } from "./topics/topicsDetails";
import { TopicsCard } from "./TopicsCard";
import JupyterMD from "./topics/Jupyter.md";
import SupplyChainMD from "./topics/SupplyChain.md";
import ComputingMD from "./topics/Computing.md";

const TopicsDescriptions = [JupyterMD, SupplyChainMD, ComputingMD];

export function Topics() {
  return (
    <div>
      <div className="container flex-full-centered">
        <ul className="row flex-full-centered">
          {topicsDetails.map((topics, index) => (
            <li className="cards-list" key={index}>
              <TopicsCard
                topics={topics}
                TopicsDescriptionMD={TopicsDescriptions[index]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Topics;
