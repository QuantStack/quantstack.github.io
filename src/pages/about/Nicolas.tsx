import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Nicolas from "@site/src/components/about/Team/Nicolas.md"


export default function NicolasComponent() {
  return(
    <PersonComponent firstName={"Nicolas"} subTeam={coreTeam} BioComponent={Nicolas} ></PersonComponent>
  )
}
