import styles from "./styles.module.css";
import { customersLogos } from "./customersLogos";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <LogosTable1 />
      </div>
      <div>
        <LogosTable2 />
      </div>
      <div>
        <LogosTable3 />
      </div>
    </Slider>
  );
}

export function LogosTable() {
  return (
    <div className="container" style={{ marginTop: "var(--ifm-spacing-2xl)" }}>
      <ul className="row">
        {customersLogos.map((customer, index) => (
          <li className="cards_list" key={index}>
            <div className={"col col--2" + " " + styles.col_custom}>
              <img
                src={customer.logoRoute}
                style={{ width: customer.width }}
                className={styles.customer_logo}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LogosTable1() {
  return (
    <div className={styles.logos_table}>
      <div className={"container" + " " + styles.table_with_12_customers}>
        <div className="row row--no-gutters">
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Bloomberg.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/SG.jpg"
              className={styles.customer_logo}
              style={{ width: "240px" }}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Rapyuta.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/CFM.png" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/Engie.svg" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/JRC.jpg"
              className={styles.customer_logo}
              style={{ width: "100px" }}
            />
          </div>
        </div>
        <div className="row row--no-gutters">
          <div className={"col col--2 col" + " " + styles.col_custom}>
            <img src="/img/logos/ERDC.png" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/Panda.png" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Universite_Paris_Cite.png"
              className={styles.customer_logo}
            />
          </div>

          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/Airbus.png" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/Inria.png" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/CNAM.png" className={styles.customer_logo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LogosTable2() {
  return (
    <div className={styles.logos_table}>
      <div className={"container" + " " + styles.table_with_12_customers}>
        <div className="row row--no-gutters">
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Natixis.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Numfocus.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Robocorp.svg"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/CalPoly.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/MaxFordham.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Gain_Theory.png"
              className={styles.customer_logo}
              style={{ width: "60px" }}
            />
          </div>
        </div>
      </div>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + styles.col_custom}>
          <img
            src="/img/logos/Enthought.png"
            className={styles.customer_logo}
          />
        </div>
        <div className={"col col--2" + " " + styles.col_custom}>
          <img src="/img/logos/Cresset.png" className={styles.customer_logo} />
        </div>
        <div className={"col col--2" + " " + styles.col_custom}>
          <img
            src="/img/logos/TDK.svg"
            className={styles.customer_logo}
            style={{ width: "60px" }}
          />
        </div>
        <div className={"col col--2" + " " + styles.col_custom}>
          <img src="/img/logos/Harvard.svg" className={styles.customer_logo} />
        </div>
        <div className={"col col--2" + " " + styles.col_custom}>
          <img src="/img/logos/Numfocus.png" className={styles.customer_logo} />
        </div>
        <div className={"col col--2" + " " + styles.col_custom}>
          <img src="/img/logos/EMBL.png" className={styles.customer_logo} />
        </div>
      </div>
    </div>
  );
}

export function LogosTable3() {
  return (
    <div className={styles.logos_table}>
      <div className={"container" + " " + styles.table_with_12_customers}>
        <div className="row row--no-gutters">
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/QuantCo.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Voltron_Data.svg"
              className={styles.customer_logo}
              style={{ width: "140px" }}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/Safran.png" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img src="/img/logos/DEShaw.png" className={styles.customer_logo} />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Universite_Paris_Saclay.png"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/United_Robotics.jpg"
              className={styles.customer_logo}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/CEA.png"
              className={styles.customer_logo}
              style={{ width: "60px" }}
            />
          </div>
          <div className={"col col--2" + " " + styles.col_custom}>
            <img
              src="/img/logos/Ecole_Polytechnique.png"
              className={styles.customer_logo}
              style={{ width: "80px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
