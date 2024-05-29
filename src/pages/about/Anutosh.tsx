import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Anutosh from "@site/src/components/about/Team/Anutosh.md"


export default function AnutoshComponent() {
  return(
    <PersonComponent firstName={"Anutosh"} subTeam={coreTeam} BioComponent={Anutosh} ></PersonComponent>
  )
}
