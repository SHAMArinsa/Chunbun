import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";
import OurTeam from "../components/about/OurTeam";
import AboutStats from "../components/about/AboutStats";
import GlobalPresence from "../components/about/GlobalPresence";

import PageTransition from "../components/PageTransition";

import SEO from "../components/SEO";

export default function About() {
  return (
    <PageTransition>
      <SEO
  title="About Us | ARINSA AI MINDS"
  description="Learn about ARINSA AI MINDS, our team, expertise, mission and experience delivering AI, automation, software and digital transformation solutions."
  keywords="About ARINSA AI MINDS, AI Company Kolkata, Generative AI Company India, AI Development Team, AI Experts"
/>

      <Navbar />

      <AboutHero />

      <AboutContent />

      <OurTeam />

      <AboutStats />

      <GlobalPresence />

      <Footer />

    </PageTransition>
  );
}
