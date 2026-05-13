import SplitSection from "../layout/SplitSection";
import SupportMD from "./descriptions/Support.md";
import SupportIllustration from "/img/illustrations/support.svg";

export default function Support() {
  return (
    <SplitSection
      ratio="50/50"
      reverse
      image={
        <SupportIllustration
          height={"280px"}
          alt="Illustration for the support section, showing symbolically a person indicating the direction to take."
        />
      }
    >
      <h2>Professional Support</h2>
      <SupportMD />
    </SplitSection>
  );
}
