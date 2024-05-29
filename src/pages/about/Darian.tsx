import PersonComponent from "@site/src/components/about/PortraitPage";
import leadershipTeam from "@site/src/components/about/Team/leadershipTeam";
import Darian from "@site/src/components/about/Team/Darian.md";

console.log('Darian:', Darian);

export default function DarianComponent() {
  return(
    <PersonComponent firstName={"Darian"} subTeam={leadershipTeam} BioComponent={Darian} ></PersonComponent>
  )
}
