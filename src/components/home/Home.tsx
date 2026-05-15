
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import WhatWeDo from "./WhatWeDo";
import ProjectsOverview from "./ProjectsOverview";
import NotebookLinkSpotlight from "./NotebookLinkSpotlight";
import AboutQS from "./AboutQS";
import News from "./News";
import LearnMore from "./LearnMore";
import SectionSeparator from "../layout/SectionSeparator";


export function Home(): JSX.Element {
  return (
   <>
      <Hero />
      <SectionSeparator variant={1} />
      <TrustedBy />
      <SectionSeparator variant={2} />
      <WhatWeDo />
      <SectionSeparator variant={3} />
      <ProjectsOverview />
      <NotebookLinkSpotlight />
      <AboutQS />
      <SectionSeparator variant={6} />
      <News />
      <LearnMore/>
   </>
  );
}

export default Home;
