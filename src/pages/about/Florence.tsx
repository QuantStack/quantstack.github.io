import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Florence from "@site/src/components/about/Team/Florence.md"


export default function FlorenceComponent() {
  return(
    <PersonComponent firstName={"Florence"} subTeam={coreTeam} BioComponent={Florence} ></PersonComponent>
  )
}
