import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactFeatures from "../components/contact/ContactFeatures";

import SEO from "../components/SEO";

export default function Contact() {
  return (
    <PageTransition>

      <SEO
  title="Contact ARINSA AI MINDS"
  description="Contact ARINSA AI MINDS for AI Development, Automation, Web Development and Enterprise AI Solutions."
  keywords="Contact AI Company, AI Development India, ARINSA AI MINDS"
/>

      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactFeatures />
      <Footer />
    </PageTransition>
  );
}