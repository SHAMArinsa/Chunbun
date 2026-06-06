import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
   Briefcase,
  Users,
  Award,
  Smile,
  TrendingUp,
  Clock3,
  DollarSign,
  Phone,
  ArrowRight,
  SearchCheck,
} from "lucide-react";

import PageTransition from "../components/PageTransition";

import fraudImg from "../assets/case_studies_AI-Powered Fraud Detection System.png";
import recommendationImg from "../assets/case_studies_Personalized Recommendation Engine.png";
import medicalImg from "../assets/case_studies_AI-Based Medical Image Analysis.png";

import partsImg from "../assets/case_studies_parts_intelligence.jpg";
import ragImg from "../assets/case_studies_rag_assistant.jpg";
import procurementImg from "../assets/case_studies_procurement_ai.jpg";


import SEO from "../components/SEO";

export default function CaseStudies() {
  return (
    <PageTransition>

      <SEO
    title="ARINSA AI MINDS | AI Development & Automation Company"
    description="ARINSA AI MINDS delivers Generative AI, AI Automation, LLM Applications, Web Development, Mobile Apps and Enterprise AI Solutions."
    keywords="AI Company India, Generative AI, AI Automation, OpenAI, ChatGPT, LLM Development, Web Development, Mobile Apps"
  />


      <Navbar />

      <section className="bg-[#F8F9FB]">

        <div className="max-w-[1600px] mx-auto px-8 py-16">

          {/* HERO */}

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <div>
              <p className="text-[#3B82F6] uppercase mb-4">
                Case Studies
              </p>

              <h1 className="text-[64px] leading-[72px] font-bold text-[#0B1736]">
                Real Challenges.
                <br />
                <span className="text-[#3B82F6]">
                  Intelligent Solutions. Measurable Results.
                </span>
              </h1>

              <p className="mt-8 text-gray-600 text-xl leading-9 max-w-3xl">
                Explore how we help businesses across industries
                solve complex problems, drive efficiency, and
                achieve significant growth with AI and automation.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-8">

              <div>
                <Briefcase size={50} />
                <h2 className="text-[#3B82F6] text-5xl font-bold mt-4">
                  72+
                </h2>
                <h3 className="font-semibold mt-2">
                  Projects Delivered
                </h3>
              </div>

              <div>
                <Users size={50} />
                <h2 className="text-[#3B82F6] text-5xl font-bold mt-4">
                  30+
                </h2>
                <h3 className="font-semibold mt-2">
                  Happy Clients
                </h3>
              </div>

              <div>
                <Award size={50} />
                <h2 className="text-[#3B82F6] text-5xl font-bold mt-4">
                  6+
                </h2>
                <h3 className="font-semibold mt-2">
                  Years Excellence
                </h3>
              </div>

              <div>
                <Smile size={50} />
                <h2 className="text-[#3B82F6] text-5xl font-bold mt-4">
                  98%
                </h2>
                <h3 className="font-semibold mt-2">
                  Client Satisfaction
                </h3>
              </div>

            </div>

          </div>

          {/* FILTERS */}

          <div className="flex gap-5 mt-14 flex-wrap">

            <button className="bg-[#071B3B] text-white px-8 py-4 rounded-xl">
              All Case Studies
            </button>

            <button className="border px-8 py-4 rounded-xl">
              AI & Automation
            </button>

            <button className="border px-8 py-4 rounded-xl">
              Data Analytics
            </button>

            <button className="border px-8 py-4 rounded-xl">
              Cloud & DevOps
            </button>

            <button className="border px-8 py-4 rounded-xl">
              Industry Solutions
            </button>

          </div>

          {/* CARDS */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* CARD 1 */}

            <div
  className="
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
  transition-all
  duration-500
  cursor-pointer
  flex
  flex-col
  h-full
  "
>

              <img
  src={fraudImg}
  className="h-[260px] w-full object-cover"
  alt="AI-Powered Fraud Detection System"
/>

              <div className="p-8">

                <p className="text-[#3B82F6] uppercase text-sm">
                  Finance & Banking
                </p>

                <h2 className="text-2xl font-bold mt-3 leading-tight">
                  AI-Powered Fraud Detection System
                </h2>

                <p className="text-gray-600 mt-5">
                  Implemented an AI-driven fraud detection
                  system that analyzes real-time transactions
                  and reduces fraud losses.
                </p>

                <div className="grid grid-cols-3 mt-8 gap-5">

                  <div>
                    <TrendingUp />
                    <h3 className="text-[#3B82F6] text-4xl font-bold">
                      85%
                    </h3>
                    <p className="text-sm">
                      Reduction in Fraud
                    </p>
                  </div>

                  <div>
                    <Clock3 />
                    <h3 className="text-[#3B82F6] text-4xl font-bold">
                      60%
                    </h3>
                    <p className="text-sm">
                      Faster Detection
                    </p>
                  </div>

                  <div>
                    <DollarSign />
                    <h3 className="text-[#3B82F6] text-4xl font-bold">
                      2.5M+
                    </h3>
                    <p className="text-sm">
                      Saved
                    </p>
                  </div>

                </div>

                <button className="mt-8 text-[#3B82F6] flex gap-2 items-center">
                  Read Full Case Study
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

            {/* CARD 2 */}

<div
  className="
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
  transition-all
  duration-500
  cursor-pointer
  flex
  flex-col
  h-full
  "
>

  <img
    src={recommendationImg}
    className="h-[260px] w-full object-cover"
    alt="Personalized Recommendation Engine"
  />

  <div className="p-8 flex flex-col flex-1">

    <p className="text-[#3B82F6] uppercase text-sm">
      Retail & E-Commerce
    </p>

    <h2 className="text-2xl font-bold mt-3 leading-tight">
      Personalized Recommendation Engine
    </h2>

    <p className="text-gray-600 mt-5">
      Built a machine learning recommendation engine
      that improved customer engagement and boosted
      sales conversions.
    </p>

    <div className="grid grid-cols-3 mt-8 gap-5">

      <div>
        <TrendingUp />
        <h3 className="text-[#3B82F6] text-4xl font-bold">
          35%
        </h3>
        <p className="text-sm">
          Conversion Increase
        </p>
      </div>

      <div>
        <Users />
        <h3 className="text-[#3B82F6] text-4xl font-bold">
          28%
        </h3>
        <p className="text-sm">
          Higher Engagement
        </p>
      </div>

      <div>
        <DollarSign />
        <h3 className="text-[#3B82F6] text-4xl font-bold">
          3.2M+
        </h3>
        <p className="text-sm">
          Revenue Increase
        </p>
      </div>

    </div>

    <button className="mt-8 text-[#3B82F6] flex gap-2 items-center">
      Read Full Case Study
      <ArrowRight size={18} />
    </button>

  </div>

</div>

            {/* CARD 3 */}

<div
  className="
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
  transition-all
  duration-500
  cursor-pointer
  flex
  flex-col
  h-full
  "
>

  <img
    src={medicalImg}
    className="h-[260px] w-full object-cover"
    alt="AI-Based Medical Image Analysis"
  />

  <div className="p-8 flex flex-col flex-1">

    <p className="text-[#3B82F6] uppercase text-sm">
      Healthcare & Life Sciences
    </p>

    <h2 className="text-2xl font-bold mt-3 leading-tight">
      AI-Based Medical Image Analysis
    </h2>

    <p className="text-gray-600 mt-5">
      Developed an AI solution for medical image
      analysis that improves diagnostic accuracy
      and reduces manual workload.
    </p>

    <div className="grid grid-cols-3 mt-8 gap-5">

      <div>
        <TrendingUp />
        <h3 className="text-[#3B82F6] text-4xl font-bold">
          90%
        </h3>
        <p className="text-sm">
          Accuracy
        </p>
      </div>

      <div>
        <Clock3 />
        <h3 className="text-[#3B82F6] text-4xl font-bold">
          50%
        </h3>
        <p className="text-sm">
          Faster Analysis
        </p>
      </div>

      <div>
        <Users />
        <h3 className="text-[#3B82F6] text-4xl font-bold">
          1M+
        </h3>
        <p className="text-sm">
          Images Processed
        </p>
      </div>

    </div>

    <button className="mt-8 text-[#3B82F6] flex gap-2 items-center">
      Read Full Case Study
      <ArrowRight size={18} />
    </button>

  </div>

</div>




<div
  className="
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
  transition-all
  duration-500
  cursor-pointer
  flex
  flex-col
  h-full
  "
>

  <img
    src={partsImg}
    className="h-[260px] w-full object-cover"
    alt="AI-Powered Parts Intelligence Platform"
  />

  <div className="p-8 flex flex-col flex-1">

    <p className="text-[#3B82F6] uppercase text-sm">
      Manufacturing
    </p>

    <h2 className="text-2xl font-bold mt-3 leading-tight">
      AI-Powered Parts Intelligence Platform
    </h2>

    <p className="text-gray-600 mt-5">
      Built an intelligent platform enabling engineers
      and procurement teams to discover, classify and
      retrieve component information instantly.
    </p>

    <div className="mt-8">
      <h3 className="text-[#3B82F6] text-4xl font-bold">
        65%
      </h3>
      <p className="text-sm">
        Faster Part Discovery
      </p>
    </div>

    <button className="mt-8 text-[#3B82F6] flex gap-2 items-center">
      View Case Study
      <ArrowRight size={18} />
    </button>

  </div>

</div>


<div
  className="
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
  transition-all
  duration-500
  cursor-pointer
  flex
  flex-col
  h-full
  "
>

  <img
    src={ragImg}
    className="h-[260px] w-full object-cover"
    alt="RAG-Based Enterprise Knowledge Assistant"
  />

  <div className="p-8 flex flex-col flex-1">

    <p className="text-[#3B82F6] uppercase text-sm">
      Technology
    </p>

    <h2 className="text-2xl font-bold mt-3 leading-tight">
      RAG-Based Enterprise Knowledge Assistant
    </h2>

    <p className="text-gray-600 mt-5">
      Developed an enterprise knowledge assistant powered
      by Retrieval-Augmented Generation to deliver instant,
      context-aware answers from company data.
    </p>

    <div className="mt-8">
      <h3 className="text-[#3B82F6] text-4xl font-bold">
        80%
      </h3>
      <p className="text-sm">
        Reduction in Search Time
      </p>
    </div>

    <button className="mt-8 text-[#3B82F6] flex gap-2 items-center">
      View Case Study
      <ArrowRight size={18} />
    </button>

  </div>

</div>


<div
  className="
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-sm
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
  transition-all
  duration-500
  cursor-pointer
  flex
  flex-col
  h-full
  "
>

  <img
    src={procurementImg}
    className="h-[260px] w-full object-cover"
    alt="AI Procurement Automation System"
  />

  <div className="p-8 flex flex-col flex-1">

    <p className="text-[#3B82F6] uppercase text-sm">
      Supply Chain
    </p>

    <h2 className="text-2xl font-bold mt-3 leading-tight">
      AI Procurement Automation System
    </h2>

    <p className="text-gray-600 mt-5">
      Automated procurement workflows, supplier evaluation,
      document processing and purchasing operations using AI.
    </p>

    <div className="mt-8">
      <h3 className="text-[#3B82F6] text-4xl font-bold">
        40%
      </h3>
      <p className="text-sm">
        Operational Cost Savings
      </p>
    </div>

    <button className="mt-8 text-[#3B82F6] flex gap-2 items-center">
      View Case Study
      <ArrowRight size={18} />
    </button>

  </div>

</div>

</div> {/* END CASE STUDIES GRID */}

          {/* CTA */}

          <div className="bg-[#EEF2F7] rounded-3xl mt-14 p-10">

            <div className="grid lg:grid-cols-3 items-center">

              <div className="flex items-center gap-5">

                <div className="w-24 h-24 rounded-full bg-[#071B3B] flex items-center justify-center">
                  <SearchCheck
                    size={50}
                    className="text-[#3B82F6]"
                  />
                </div>

                <div>
                  <h2 className="text-4xl font-bold">
                    Have a Challenge Similar to These?
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Let's discuss how our AI solutions can
                    drive results for your business.
                  </p>
                </div>

              </div>

              <div className="text-center">
                <button
  className="
  bg-[#3B82F6]
  text-white
  px-8
  py-4
  rounded-xl
  font-semibold
  hover:bg-[#2563EB]
  hover:shadow-lg
  transition-all
  duration-300
  "
>
  Schedule a Consultation
</button>
              </div>

              <div className="flex items-center gap-5 justify-end">

                <Phone size={50} />

                <div>
                  <h3 className="text-3xl font-bold">
                    Talk to Our Experts
                  </h3>

                  <p className="text-gray-600">
                    Let's build intelligent solutions together.
                  </p>

                  <p className="font-bold text-3xl mt-2">
                    +91 9123745946
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </PageTransition>
  );
}