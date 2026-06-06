import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ServicesHero from "../components/services/ServicesHero";
import ServicesCards from "../components/services/ServicesCards";
import ProcessSection from "../components/services/ProcessSection";

import PageTransition from "../components/PageTransition";

import SEO from "../components/SEO";

export default function Services() {
  return (
    <PageTransition>
      <SEO
  title="AI Services | ARINSA AI MINDS"
  description="Generative AI, AI Automation, Chatbots, RAG Systems, AI Agents, Web Development and Mobile App Development Services."
  keywords="AI Services, AI Automation, RAG, Chatbot Development, OpenAI Development"
/>

      <Navbar />

      <ServicesHero />

      <ServicesCards />

      <ProcessSection />

      <Footer />

    </PageTransition>
  );
}