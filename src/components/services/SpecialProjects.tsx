import SpecialProjectsMD from "./descriptions/SpecialProjects.md";
import SpecialProjectsIllustration from "@site/static/img/illustrations/special_projects.svg";

export default function SpecialProjects() {
  return (
    <div className="main-container-with-margins">
      <div className="container upper-container-with-margin-top">
        <div className="row">
          <div className="col col--4 col--offset-2">
            <h2>Special projects</h2>
            <SpecialProjectsMD />
          </div>
          <div className={"col col--5 flex-full-centered"}>
            <SpecialProjectsIllustration
              alt={
                "Picture showing an illustration of a group of people working together in an office."
              }
              height={"300px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
