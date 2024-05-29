import PersonComponent from "@site/src/components/about/PortraitPage";
import leadershipTeam from "@site/src/components/about/Team/leadershipTeam";
import Martin from "@site/src/components/about/Team/Martin.md"


export default function MartinComponent() {
  return(
    <PersonComponent firstName={"Martin"} subTeam={leadershipTeam} BioComponent={Martin} ></PersonComponent>
  )
}
