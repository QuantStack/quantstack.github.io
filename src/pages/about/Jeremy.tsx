import PersonComponent from "@site/src/components/about/PortraitPage";
import leadershipTeam from "@site/src/components/about/Team/leadershipTeam";
import Jeremy from "@site/src/components/about/Team/Jeremy.md"


export default function JeremyComponent() {
  return(
    <PersonComponent firstName={"Jeremy"} subTeam={leadershipTeam} BioComponent={Jeremy} ></PersonComponent>
  )
}
