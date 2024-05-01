import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Joel from "@site/src/components/about/Team/Joel.md"


export default function JoelComponent() {
  return(
    <PersonComponent firstName={"Joel"} subTeam={coreTeam} BioComponent={Joel} ></PersonComponent>
  )
}
