import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Joel from "@site/src/components/about/Team/Joel.md"


export default function JoelComponent() {
  return(
    <PersonComponent firstName={"Joel"} subTeam={coreTeam} BioComponent={Joel} ></PersonComponent>
  )
}
