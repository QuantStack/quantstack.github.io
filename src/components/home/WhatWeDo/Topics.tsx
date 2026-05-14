import { topicsDetails } from "./topics/topicsDetails";
import { TopicsCard } from "./TopicsCard";
import JupyterMD from "./topics/Jupyter.md";
import SupplyChainMD from "./topics/SupplyChain.md";
import ComputingMD from "./topics/Computing.md";
import CardGrid from "../../layout/CardGrid";

const TopicsDescriptions = [JupyterMD, SupplyChainMD, ComputingMD];

export function Topics() {
  return (
    <CardGrid cols={3}>
      {topicsDetails.map((topics, index) => (
        <li key={index}>
          <TopicsCard
            topics={topics}
            TopicsDescriptionMD={TopicsDescriptions[index]}
          />
        </li>
      ))}
    </CardGrid>
  );
}

export default Topics;
