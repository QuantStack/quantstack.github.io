import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Thorsten from "@site/src/components/about/Team/Thorsten.md"


export default function ThorstenComponent() {
  return(
    <PersonComponent firstName={"Thorsten"} subTeam={coreTeam} BioComponent={Thorsten} ></PersonComponent>
  )
}
