import styles from "./styles.module.css";
import BloombergLogoUrl from "@site/static/img/logos/Bloomberg.png";
import SGLogoUrl from "@site/static/img/logos/SG.png";
import RapyutaLogoUrl from "@site/static/img/logos/Rapyuta.png";
import CFMLogoUrl from "@site/static/img/logos/CFM.png";
import EngieLogoUrl from "@site/static/img/logos/Engie.png";
import JRCLogoUrl from "@site/static/img/logos/JRC.png";
import ERDCLogoUrl from "@site/static/img/logos/ERDC.png";
import PandaLogoUrl from "@site/static/img/logos/Panda.png";
import UniversiteParisCiteLogoUrl from "@site/static/img/logos/UniversiteParisCite.png";
import AirbusLogoUrl from "@site/static/img/logos/Airbus.png";
import INRIALogoUrl from "@site/static/img/logos/INRIA.png";
import CNAMLogoUrl from "@site/static/img/logos/CNAM.png";
import NatixisLogoUrl from "@site/static/img/logos/Natixis.png";
import NumfocusLogoUrl from "@site/static/img/logos/Numfocus.png";
import RobocorpLogoUrl from "@site/static/img/logos/Robocorp.png";
import CalPolyLogoUrl from "@site/static/img/logos/CalPoly.png";
import MaxFordhamLogoUrl from "@site/static/img/logos/MaxFordham.png";
import GainTheoryUrl from "@site/static/img/logos/GainTheory.png";
import EnthoughtLogoUrl from "@site/static/img/logos/Enthought.png";
import CressetLogoUrl from "@site/static/img/logos/Cresset.png";
import TDKLogoUrl from "@site/static/img/logos/TDK.png";
import HarvardLogoUrl from "@site/static/img/logos/Harvard.png";
import EMBLLogoUrl from "@site/static/img/logos/EMBL.png";
import QuantCoUrl from "@site/static/img/logos/QuantCo.png";
import VoltronDataLogoUrl from "@site/static/img/logos/VoltronData.png";
import SafranLogoUrl from "@site/static/img/logos/Safran.png";
import DEShawLogoUrl from "@site/static/img/logos/DEShaw.png";
import UniversiteParisSaclayLogoUrl from "@site/static/img/logos/UniversiteParisSaclay.png";
import UnitedRoboticsLogoUrl from "@site/static/img/logos/UnitedRobotics.png";
import CEALogoUrl from "@site/static/img/logos/CEA.png";
import EcolePolytechniqueLogoUrl from "@site/static/img/logos/EcolePolytechnique.png";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useColorMode } from "@docusaurus/theme-common";

export default function SimpleSlider () {
 const { colorMode, setColorMode } = useColorMode();
  if (colorMode === "dark") {
    return (<SimpleSliderDark />);
  } else return <SimpleSliderLight />;
};

export function SimpleSliderLight() {
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
        <LogosTable1Light />
      </div>
      <div>
        <LogosTable2Light />
      </div>
      <div>
        <LogosTable3Light />
      </div>
    </Slider>
  );
}

export function SimpleSliderDark() {
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
        <LogosTable1Dark />
      </div>
      <div>
        <LogosTable2Dark />
      </div>
      <div>
        <LogosTable3Dark />
      </div>
    </Slider>
  );
}



export function LogosTable1Light() {
  return (
    <div className={"container" + " " + styles.table_with_12_customers}>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={BloombergLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={SGLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={RapyutaLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CFMLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={EngieLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={JRCLogoUrl}
            className={styles.customer_logo_light}
            style={{ width: "100px" }}
          />
        </div>
      </div>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={ERDCLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={PandaLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={UniversiteParisCiteLogoUrl}
            className={styles.customer_logo_light}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={AirbusLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={INRIALogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CNAMLogoUrl} className={styles.customer_logo_light} />
        </div>
      </div>
    </div>
  );
}

export function LogosTable1Dark() {
  return (
    <div className={"container" + " " + styles.table_with_12_customers}>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={BloombergLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={SGLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={RapyutaLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CFMLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={EngieLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={JRCLogoUrl}
            className={styles.customer_logo_dark}
            style={{ width: "100px" }}
          />
        </div>
      </div>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={ERDCLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={PandaLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={UniversiteParisCiteLogoUrl}
            className={styles.customer_logo_dark}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={AirbusLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={INRIALogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CNAMLogoUrl} className={styles.customer_logo_dark} />
        </div>
      </div>
    </div>
  );
}



export function LogosTable2Light() {
  return (
    <div className={"container" + " " + styles.table_with_12_customers}>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={NatixisLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={NumfocusLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={RobocorpLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CalPolyLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={MaxFordhamLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={GainTheoryUrl}
            className={styles.customer_logo_light}
            style={{ width: "60px" }}
          />
        </div>
      </div>

      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={EnthoughtLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CressetLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={TDKLogoUrl}
            className={styles.customer_logo_light}
            style={{ width: "60px" }}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={HarvardLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={EMBLLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={QuantCoUrl} className={styles.customer_logo_light} />
        </div>
      </div>
    </div>
  );
}
export function LogosTable2Dark() {
  return (
    <div className={"container" + " " + styles.table_with_12_customers}>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={NatixisLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={NumfocusLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={RobocorpLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CalPolyLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={MaxFordhamLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={GainTheoryUrl}
            className={styles.customer_logo_dark}
            style={{ width: "60px" }}
          />
        </div>
      </div>

      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={EnthoughtLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={CressetLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={TDKLogoUrl}
            className={styles.customer_logo_dark}
            style={{ width: "60px" }}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={HarvardLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={EMBLLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={QuantCoUrl} className={styles.customer_logo_dark} />
        </div>
      </div>
    </div>
  );
}
export function LogosTable3Light() {
  return (
    <div className={"container" + " " + styles.table_with_12_customers}>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={VoltronDataLogoUrl}
            className={styles.customer_logo_light}
            style={{ width: "140px" }}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={SafranLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={DEShawLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={UniversiteParisSaclayLogoUrl}
            className={styles.customer_logo_light}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={UnitedRoboticsLogoUrl} className={styles.customer_logo_light} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={CEALogoUrl}
            className={styles.customer_logo_light}
            style={{ width: "60px" }}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={EcolePolytechniqueLogoUrl}
            className={styles.customer_logo_light}
            style={{ width: "80px" }}
          />
        </div>
      </div>
    </div>
  );
}

export function LogosTable3Dark() {
  return (
    <div className={"container" + " " + styles.table_with_12_customers}>
      <div className="row row--no-gutters">
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={VoltronDataLogoUrl}
            className={styles.customer_logo_dark}
            style={{ width: "140px" }}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={SafranLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={DEShawLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={UniversiteParisSaclayLogoUrl}
            className={styles.customer_logo_dark}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img src={UnitedRoboticsLogoUrl} className={styles.customer_logo_dark} />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={CEALogoUrl}
            className={styles.customer_logo_dark}
            style={{ width: "60px" }}
          />
        </div>
        <div className={"col col--2" + " " + "col-flex-full-centered"}>
          <img
            src={EcolePolytechniqueLogoUrl}
            className={styles.customer_logo_light}
            style={{ width: "80px" }}
          />
        </div>
      </div>
    </div>
  );
}