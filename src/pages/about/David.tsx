import PersonComponent from "@site/src/components/about/PortraitPage";
import leadershipTeam from "@site/src/components/about/Team/leadershipTeam";
import David from "@site/src/components/about/Team/David.md"


export default function DavidComponent() {
  return(
    <PersonComponent firstName={"David"} subTeam={leadershipTeam} BioComponent={David} ></PersonComponent>
  )
}
