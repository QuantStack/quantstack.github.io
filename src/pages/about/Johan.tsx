import PersonComponent from "../../components/about/PersonComponent";
import leadershipTeam from "../../components/about/Team/leadershipTeam";
import Johan from "@site/src/components/about/Team/Johan.md"


export default function JohanComponent() {
  return(
    <PersonComponent firstName={"Johan"} subTeam={leadershipTeam} BioComponent={Johan} ></PersonComponent>
  )
}
