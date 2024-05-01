import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Denisa from "@site/src/components/about/Team/Denisa.md"


export default function DenisaComponent() {
  return(
    <PersonComponent firstName={"Denisa"} subTeam={coreTeam} BioComponent={Denisa} ></PersonComponent>
  )
}
