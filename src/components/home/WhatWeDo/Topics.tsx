import { topicsDetails } from "./topics/topicsDetails";
import { TopicsCard } from "./TopicsCard";
import JupyterMD from "./topics/Jupyter.md";
import SupplyChainMD from "./topics/SupplyChain.md";
import ComputingMD from "./topics/Computing.md";

const TopicsDescriptions = [JupyterMD, SupplyChainMD, ComputingMD];

export function Topics() {
  return (
    <div>
      <ul className="cards-row">
          {topicsDetails.map((topics, index) => (
            <li key={index}>
              <TopicsCard
                topics={topics}
                TopicsDescriptionMD={TopicsDescriptions[index]}
              />
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Topics;
