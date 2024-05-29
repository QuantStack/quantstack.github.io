import PersonComponent from "@site/src/components/about/PortraitPage";
import QSCollaboratorsTeam from "@site/src/components/about/Team/QScollaborators";
import Serge from "@site/src/components/about/Team/Serge.md"


export default function SergeComponent() {
  return(
    <PersonComponent firstName={"Serge"} subTeam={QSCollaboratorsTeam} BioComponent={Serge} ></PersonComponent>
  )
}
