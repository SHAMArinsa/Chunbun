import Navbar from "./Navbar";
import Hero from "./Hero";
import Clients from "./Clients";
import Stats from "./Stats";
import Services from "./Services";
import Workflow from "./Workflow";
import Industries from "./Industries";
import CaseStudies from "./CaseStudies";
import AnimatedSection from "./AnimatedSection";
import CTA from "./CTA";
import TrustBar from "./TrustBar";
import Footer, { Certifications } from "./Footer";
import SEO from "./SEO";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "./Reviews";
import PageTransition from "./PageTransition";

import BackToTop from "./BackToTop";



export default function Home() {
  return (
    <PageTransition>

      <SEO
        title="ARINSA AI MINDS | AI Development & Automation Company"
        description="ARINSA AI MINDS delivers Generative AI, AI Automation, LLM Applications, Web Development, Mobile Apps and Enterprise AI Solutions."
        keywords="AI Company India, Generative AI, AI Automation, OpenAI, ChatGPT, LLM Development, Web Development, Mobile Apps"
      />

      <Navbar />

      <main className="overflow-x-hidden">

        <Hero />

        <Clients />

        <Stats />

        <AnimatedSection>
          <Services />
        </AnimatedSection>

        <AnimatedSection>
          <Workflow />
        </AnimatedSection>

        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>

        <AnimatedSection>
          <Industries />
        </AnimatedSection>

        <AnimatedSection>
          <CaseStudies />
        </AnimatedSection>

        <AnimatedSection>
          <Reviews />
        </AnimatedSection>

        <AnimatedSection>
          <CTA />
        </AnimatedSection>

        <TrustBar />

      </main>
      <BackToTop />

      <Certifications />
      <Footer />

    </PageTransition>
  );
}
