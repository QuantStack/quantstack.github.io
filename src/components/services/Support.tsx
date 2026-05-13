import SupportMD from "./descriptions/Support.md";
import SupportIllustration from "/img/illustrations/support.svg";

export default function Support() {
  return (
    <div className="page-content upper-container-with-margin-top">
      <div className="row">
        <div className="col col--6 flex-full-centered">
          <SupportIllustration height={"280px"} alt="Illustration for the support section, showing symbolically a person indicating the direction to take." />
        </div>
        <div className="col col--6">
          <h2>Professional Support</h2>
          <SupportMD />
        </div>
      </div>
    </div>
  );
}