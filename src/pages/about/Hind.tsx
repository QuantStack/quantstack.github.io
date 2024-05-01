import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Hind from "@site/src/components/about/Team/Hind.md"


export default function HindComponent() {
  return(
    <PersonComponent firstName={"Hind"} subTeam={coreTeam} BioComponent={Hind} ></PersonComponent>
  )
}
