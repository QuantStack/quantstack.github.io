import SplitSection from "../layout/SplitSection";
import ContactForm from "./ContactForm";
import ContactIllustration from "/img/illustrations/contact.svg";

export function Contact() {
  return (
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
  );
}
export default Contact;
