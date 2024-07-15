import RomainMD from "@site/src/components/about/Team/Romain.md";
import RomainAvatarUrl from "@site/static/img/avatars/Romain.png";
import SergeMD from "@site/src/components/about/Team/Serge.md";
import SergeAvatarUrl from "@site/static/img/avatars/Serge.png";

export const QSCollaboratorsTeam = [
  {
    completeName: "Serge Guelton",
    firstName: "Serge",
    position: "Scientific Software Developer",
    onGithub: "true",
    onLinkedIn: "true",
    onX: "false",
    githubLink: "https://github.com/serge-sans-paille",
    LinkedInLink: "",
    XLink: "",
    githubName: "@serge-sans-paille",
    avatarUrl: SergeAvatarUrl,
    distinctionTitle: [],
    distinctionLink: [],
    subTeamName: "QSCollaboratorsTeam",
    BioComponent: SergeMD,
  },
  {
    completeName: "Romain Menegaux",
    firstName: "Romain",
    position: "Scientific Software Developer",
    onGithub: "true",
    onLinkedIn: "true",
    onX: "true",
    githubLink: "https://github.com/rmenegaux",
    LinkedInLink: "https://www.linkedin.com/in/romain-menegaux-88a147134/",
    XLink: "https://twitter.com/RomainMenegaux",
    githubName: "@trmenegaux",
    avatarUrl: RomainAvatarUrl,
    distinctionTitle: [],
    distinctionLink: [],
    subTeamName: "QSCollaboratorsTeam",
    BioComponent: RomainMD
  },
];
export default QSCollaboratorsTeam;
