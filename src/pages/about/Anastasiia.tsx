import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Anastasiia from "@site/src/components/about/Team/Anastasiia.md"


export default function AnastasiiaComponent() {
  return(
    <PersonComponent firstName={"Anastasiia"} subTeam={coreTeam} BioComponent={Anastasiia} ></PersonComponent>
  )
}
