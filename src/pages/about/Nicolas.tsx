import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Nicolas from "@site/src/components/about/Team/Nicolas.md"


export default function NicolasComponent() {
  return(
    <PersonComponent firstName={"Nicolas"} subTeam={coreTeam} BioComponent={Nicolas} ></PersonComponent>
  )
}
