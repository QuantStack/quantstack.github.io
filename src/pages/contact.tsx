import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import SplitSection from "../components/layout/SplitSection";
import ContactForm from "../components/ContactForm";
import ContactIllustration from "/img/illustrations/contact.svg";

export default function ContactPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>
        {() => (
          <SplitSection
            ratio="50/50"
            pageTop
            reverse
            image={
              <ContactIllustration
                height={"460px"}
                alt="Illustration for the contact page with a woman, a mobile phone and an envelope."
              />
            }
          >
            <h1>Contact us</h1>
            <ContactForm />
          </SplitSection>
        )}
      </BrowserOnly>
      <Footer />
    </Layout>
  );
}
