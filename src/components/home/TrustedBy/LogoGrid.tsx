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
import ESALogoUrl from "@site/static/img/logos/ESA.png";
import CNESLogoUrl from "@site/static/img/logos/CNES.png";
import GatesFoundationLogoUrl from "@site/static/img/logos/GatesFoundation.png";
import SovereignTechAgencyLogoUrl from "@site/static/img/logos/SovereignTechAgency.png";

const logos = [
  { src: BloombergLogoUrl, alt: "Bloomberg" },
  { src: SGLogoUrl, alt: "Société Générale" },
  { src: AirbusLogoUrl, alt: "Airbus" },
  { src: DEShawLogoUrl, alt: "DE Shaw" },
  { src: HarvardLogoUrl, alt: "Harvard University" },
  { src: GatesFoundationLogoUrl, alt: "Gates Foundation" },
  { src: SovereignTechAgencyLogoUrl, alt: "Sovereign Tech Agency" },
  { src: NatixisLogoUrl, alt: "Natixis" },
  { src: CFMLogoUrl, alt: "CFM" },
  { src: NumfocusLogoUrl, alt: "NumFocus" },
  { src: INRIALogoUrl, alt: "INRIA" },
  { src: EngieLogoUrl, alt: "Engie" },
  { src: EMBLLogoUrl, alt: "EMBL" },
  { src: ESALogoUrl, alt: "ESA" },
  { src: CEALogoUrl, alt: "CEA" },
  { src: EcolePolytechniqueLogoUrl, alt: "École Polytechnique" },
  { src: UniversiteParisCiteLogoUrl, alt: "Université Paris Cité" },
  { src: UniversiteParisSaclayLogoUrl, alt: "Université Paris-Saclay" },
  { src: CNAMLogoUrl, alt: "CNAM" },
  { src: CalPolyLogoUrl, alt: "Cal Poly" },
  { src: RapyutaLogoUrl, alt: "Rapyuta" },
  { src: VoltronDataLogoUrl, alt: "Voltron Data" },
  { src: QuantCoUrl, alt: "QuantCo" },
  { src: EnthoughtLogoUrl, alt: "Enthought" },
  { src: SafranLogoUrl, alt: "Safran" },
  { src: UnitedRoboticsLogoUrl, alt: "United Robotics" },
  { src: RobocorpLogoUrl, alt: "Robocorp" },
  { src: TDKLogoUrl, alt: "TDK" },
  { src: CressetLogoUrl, alt: "Cresset" },
  { src: MaxFordhamLogoUrl, alt: "MaxFordham" },
  { src: GainTheoryUrl, alt: "Gain Theory" },
  { src: JRCLogoUrl, alt: "JRC" },
  { src: ERDCLogoUrl, alt: "ERDC" },
  { src: PandaLogoUrl, alt: "Panda" },
  { src: CNESLogoUrl, alt: "CNES" },
];

export default function LogoGrid() {
  return (
    <div className={styles.logo_grid}>
      {logos.map(({ src, alt }) => (
        <img key={alt} src={src} alt={`Logo of ${alt}`} className={styles.customer_logo} />
      ))}
    </div>
  );
}
