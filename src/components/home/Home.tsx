
import Hero from "../blog/Hero";
import WhatWeDo from "./WhatWeDo";
import ProjectsOverview from "./ProjectsOverview";
import AboutQS from "./AboutQS";
import News from "./News";
import LearnMore from "./LearnMore";
import { useEffect, useState } from "react";
import LinkToServices from "./LinkToServices";
import LinkToProjects from "./LinkToProjects";

const breakpointValue: number = 996;

export default function Home() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <HomeDesktop /> : <HomeMobile />}</div>;
}

export function HomeDesktop(): JSX.Element {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProjectsOverview />
      <AboutQS />
      <News />
      <LearnMore/>
    </>
  );
}

export function HomeMobile(): JSX.Element {
  return (
    <>
      <Hero />
      <LinkToServices label={"DISCOVER OUR SERVICES"}/>
      <div className="spacing-2xl"/>
      <WhatWeDo />
      <div className="spacing-2xl"/>
      <LinkToProjects label={"DISCOVER ALL OF OUR PROJECTS"}/>
      <AboutQS />
      <LearnMore/>
    </>
  );
}
