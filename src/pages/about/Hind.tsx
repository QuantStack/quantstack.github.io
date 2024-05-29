import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Hind from "@site/src/components/about/Team/Hind.md"


export default function HindComponent() {
  return(
    <PersonComponent firstName={"Hind"} subTeam={coreTeam} BioComponent={Hind} ></PersonComponent>
  )
}
