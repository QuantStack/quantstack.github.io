import PersonComponent from "../../components/about/PersonComponent";
import leadershipTeam from "../../components/about/Team/leadershipTeam";
import Darian from "@site/src/components/about/Team/Darian.md";
import styles from "./styles.module.css";

console.log('Darian:', Darian);

export default function DarianComponent() {
  return(
    <PersonComponent firstName={"Darian"} subTeam={leadershipTeam} BioComponent={Darian} ></PersonComponent>
  )
}
