import PersonComponent from "../../components/about/PersonComponent";
import QSCollaborators from "../../components/about/Team/QScollaborators";
import Romain from "@site/src/components/about/Team/Romain.md"


export default function RomainComponent() {
  return(
    <PersonComponent firstName={"Romain"} subTeam={QSCollaborators} BioComponent={Romain} ></PersonComponent>
  )
}
