import SupportMD from "./descriptions/Support.md";
import SupportIllustration from "/img/illustrations/support.svg";

export default function Support() {
  return (
    <div className="main-container-with-margins">
      <div className="container upper-container-with-margin-top">
        <div className="row">
          <div className="col col--4 col--offset-1">
            <div className="flex-full-centered" style={{marginBottom:"var(--ifm-spacing-xl)"}}>
              <SupportIllustration  height={"280px"} alt="Illustration for the support section, showing symbolically a person indicating the direction to take." />
            </div>
          </div>
          <div className={"col col--6"} style={{textAlign:"justify"}}>
            <h2>Professional Support</h2>
            <SupportMD />
          </div>
        </div>
      </div>
    </div>
  );
}