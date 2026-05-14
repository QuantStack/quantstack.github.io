import Banner from "../layout/Banner";
import LinkToWTJ from "./LinkToWTJ";

export default function VisitWTJProfile() {
  return (
    <Banner bg="dark" cta={<LinkToWTJ label="OPEN OUR PROFILE" />}>
      Learn more on our Welcome to the Jungle web page.
    </Banner>
  );
}
