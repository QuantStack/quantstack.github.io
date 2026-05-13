import SplitSection from "../layout/SplitSection";
import SpecialProjectsMD from "./descriptions/SpecialProjects.md";
import SpecialProjectsIllustration from "@site/static/img/illustrations/special_projects.svg";

export default function SpecialProjects() {
  return (
    <SplitSection
      ratio="50/50"
      bg="light"
      image={
        <SpecialProjectsIllustration
          alt="Picture showing an illustration of a group of people working together in an office."
          height={"300px"}
        />
      }
    >
      <h2>Special projects</h2>
      <SpecialProjectsMD />
    </SplitSection>
  );
}
