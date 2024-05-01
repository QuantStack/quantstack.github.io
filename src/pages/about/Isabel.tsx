import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Isabel from "@site/src/components/about/Team/Isabel.md"


export default function IsabelComponent() {
  return(
    <PersonComponent firstName={"Isabel"} subTeam={coreTeam} BioComponent={Isabel} ></PersonComponent>
  )
}
