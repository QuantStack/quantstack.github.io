import PersonComponent from "@site/src/components/about/PortraitPage";
import QSCollaboratorsTeam from "@site/src/components/about/Team/QScollaborators";
import Romain from "@site/src/components/about/Team/Romain.md"


export default function RomainComponent() {
  return(
    <PersonComponent firstName={"Romain"} subTeam={QSCollaboratorsTeam} BioComponent={Romain} ></PersonComponent>
  )
}
