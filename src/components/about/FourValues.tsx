import CardGrid from "../layout/CardGrid";
import { ValueCard } from "@site/src/components/about/ValueCard";
import { valuesDetails } from "./Values/valuesDetails";

export default function FourValues() {
  return (
    <>
      <h2>Our values</h2>
      <CardGrid cols={4}>
        {valuesDetails.map((value, index) => (
          <li key={index}>
            <ValueCard value={value} />
          </li>
        ))}
      </CardGrid>
    </>
  );
}
