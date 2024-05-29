import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Alexis from "@site/src/components/about/Team/Alexis.md"


export default function AlexisComponent() {
  return(
    <PersonComponent firstName={"Alexis"} subTeam={coreTeam} BioComponent={Alexis} ></PersonComponent>
  )
}
