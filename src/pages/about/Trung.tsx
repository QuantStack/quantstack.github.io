import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Trung from "@site/src/components/about/Team/Trung.md"


export default function TrungComponent() {
  return(
    <PersonComponent firstName={"Trung"} subTeam={coreTeam} BioComponent={Trung} ></PersonComponent>
  )
}
