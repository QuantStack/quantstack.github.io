import PersonComponent from "@site/src/components/about/PortraitPage";
import leadershipTeam from "@site/src/components/about/Team/leadershipTeam";
import Sylvain from "@site/src/components/about/Team/Sylvain.md"


export default function SylvainComponent() {
  return(
    <PersonComponent firstName={"Sylvain"} subTeam={leadershipTeam} BioComponent={Sylvain} ></PersonComponent>
  )
}
