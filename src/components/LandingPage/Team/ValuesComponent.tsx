import styles from "./styles.module.css";

export function ValuesTable() {
  return (
    <div
      className="container"
      style={{ margin: "var(--ifm-spacing-5xl) 0 var(--ifm-spacing-5xl) 0" }}
    >
      <div className="row">
        <div className="col col--3">
          <div className={"card " + styles.value_card}>
            <div className="card_image_custom">
              <img src="img/openness.svg" />
            </div>
            <div className={"card_header_custom"}>Openness</div>
            <div className={"card_body_custom"}>
              The greatest achievements stem from uniting diverse minds.
              <br />
              <br />
              Working in the open fosters cooperation by removing collaboration
              barriers.
            </div>
          </div>
        </div>
        <div className="col col --3">
          <div className={"card " + styles.value_card}>
            <div className="card_image_custom">
              <img src="img/science.svg" />
            </div>
            <div className={"card_header_custom"}>Science</div>
            <div className={"card_body_custom"}>
              We are driven by the pursuit of discovery, dedicated to advancing
              science, and passionate about fostering education to empower
              future generations.
            </div>
          </div>
        </div>
        <div className="col col --3">
          <div className={"card " + styles.value_card}>
            <div className="card_image_custom">
              <img src="img/integrity.svg" />
            </div>
            <div className={"card_body_custom"}>
              <div className={"card_header_custom"}>Integrity</div>
              Our unwavering commitment to honesty and ethical conduct underpins
              our work, fostering trust, inclusivity, and respect.
            </div>
          </div>
        </div>
        <div className="col col --3">
          <div className={"card " + styles.value_card}>
            <div className="card_image_custom">
              <img src="img/optimism.svg" />
            </div>
            <div className={"card_header_custom"}>Optimism</div>
            <div className={"card_body_custom"}>
              We embrace challenges with a positive outlook.
              <br />
              <br />
              Moonshots are impossible if you don’t believe they can be reached.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function ValuesComponent() {
  return (
    <div className="container" style={{marginTop:"var(--ifm-spacing-5xl)"}}>
      <h3 style={{textAlign:"center"}}>Our values </h3>
      <ValuesTable />
    </div>
  );
}
