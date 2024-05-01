import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Serge from "@site/src/components/about/Team/Serge.md"


export default function SergeComponent() {
  return(
    <PersonComponent firstName={"Serge"} subTeam={coreTeam} BioComponent={Serge} ></PersonComponent>
  )
}
