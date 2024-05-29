import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Denisa from "@site/src/components/about/Team/Denisa.md"


export default function DenisaComponent() {
  return(
    <PersonComponent firstName={"Denisa"} subTeam={coreTeam} BioComponent={Denisa} ></PersonComponent>
  )
}
