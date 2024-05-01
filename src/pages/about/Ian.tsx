import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Ian from "@site/src/components/about/Team/Ian.md"


export default function IanComponent() {
  return(
    <PersonComponent firstName={"Ian"} subTeam={coreTeam} BioComponent={Ian} ></PersonComponent>
  )
}
