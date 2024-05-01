import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Nour from "@site/src/components/about/Team/Nour.md"


export default function NourComponent() {
  return(
    <PersonComponent firstName={"Nour"} subTeam={coreTeam} BioComponent={Nour} ></PersonComponent>
  )
}
