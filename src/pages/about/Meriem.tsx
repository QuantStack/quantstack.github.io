import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Meriem from "@site/src/components/about/Team/Meriem.md"


export default function MeriemComponent() {
  return(
    <PersonComponent firstName={"Meriem"} subTeam={coreTeam} BioComponent={Meriem} ></PersonComponent>
  )
}
