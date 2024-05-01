import PersonComponent from "../../components/about/PersonComponent";
import leadershipTeam from "../../components/about/Team/leadershipTeam";
import Sylvain from "@site/src/components/about/Team/Sylvain.md"


export default function SylvainComponent() {
  return(
    <PersonComponent firstName={"Sylvain"} subTeam={leadershipTeam} BioComponent={Sylvain} ></PersonComponent>
  )
}
