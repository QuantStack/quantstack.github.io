import PersonComponent from "../../components/about/PersonComponent";
import QScollaborators from "../../components/about/Team/QScollaborators";
import Alexis from "@site/src/components/about/Team/Alexis.md"


export default function AlexisComponent() {
  return(
    <PersonComponent firstName={"Alexis"} subTeam={QScollaborators} BioComponent={Alexis} ></PersonComponent>
  )
}
