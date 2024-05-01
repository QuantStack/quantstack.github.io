import PersonComponent from "../../components/about/PersonComponent";
import coreTeam from "../../components/about/Team/coreTeam";
import Gabriela from "@site/src/components/about/Team/Gabriela.md"


export default function GabrielaComponent() {
  return(
    <PersonComponent firstName={"Gabriela"} subTeam={coreTeam} BioComponent={Gabriela} ></PersonComponent>
  )
}
