import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Greg from "@site/src/components/about/Team/Greg.md"


export default function GregComponent() {
  return(
    <PersonComponent firstName={"Greg"} subTeam={coreTeam} BioComponent={Greg} ></PersonComponent>
  )
}
