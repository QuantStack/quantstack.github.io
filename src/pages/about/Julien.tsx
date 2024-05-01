import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Julien from "@site/src/components/about/Team/Julien.md"


export default function JulienComponent() {
  return(
    <PersonComponent firstName={"Julien"} subTeam={coreTeam} BioComponent={Julien} ></PersonComponent>
  )
}
