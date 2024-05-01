import PersonComponent from "../../components/about/PersonComponent";
import leadershipTeam from "../../components/about/Team/leadershipTeam";
import Martin from "@site/src/components/about/Team/Martin.md"


export default function MartinComponent() {
  return(
    <PersonComponent firstName={"Martin"} subTeam={leadershipTeam} BioComponent={Martin} ></PersonComponent>
  )
}
