import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import ProjectsOverview from "./ProjectsOverview";
import AboutQS from "./AboutQS";
import News from "./News";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProjectsOverview />
      <AboutQS />
      <News />
    </>
  );
}
