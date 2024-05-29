import PersonComponent from "@site/src/components/about/PortraitPage";
import coreTeam from "@site/src/components/about/Team/coreTeam";
import Isabel from "@site/src/components/about/Team/Isabel.md"


export default function IsabelComponent() {
  return(
    <PersonComponent firstName={"Isabel"} subTeam={coreTeam} BioComponent={Isabel} ></PersonComponent>
  )
}
