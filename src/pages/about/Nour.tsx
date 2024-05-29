import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Nour from "@site/src/components/about/Team/Nour.md"


export default function NourComponent() {
  return(
    <PersonComponent firstName={"Nour"} subTeam={coreTeam} BioComponent={Nour} ></PersonComponent>
  )
}
