import PersonComponent from "../../components/about/PersonComponent";
import leadershipTeam from "../../components/about/Team/leadershipTeam";
import David from "@site/src/components/about/Team/David.md"


export default function DavidComponent() {
  return(
    <PersonComponent firstName={"David"} subTeam={leadershipTeam} BioComponent={David} ></PersonComponent>
  )
}
