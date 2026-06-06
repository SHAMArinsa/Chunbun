import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import partsIntelligenceImg from "../assets/case_studies_parts_intelligence.jpg";
import ragAssistantImg from "../assets/case_studies_rag_assistant.jpg";
import procurementAiImg from "../assets/case_studies_procurement_ai.jpg";

const caseStudies = [
  {
    title: "AI-Powered Parts Intelligence Platform",
    category: "Manufacturing",
    result: "65% Faster Part Discovery",
    image: partsIntelligenceImg,
  },
  {
    title: "RAG-Based Enterprise Knowledge Assistant",
    category: "Technology",
    result: "80% Reduction in Search Time",
    image: ragAssistantImg,
  },
  {
    title: "AI Procurement Automation System",
    category: "Supply Chain",
    result: "40% Operational Cost Savings",
    image: procurementAiImg,
  },
];

export default function CaseStudies() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#04142D] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center mb-10 md:mb-16">
          <p
            className="
            text-[#3B82F6]
            uppercase
            tracking-[3px]
            text-xs
            sm:text-sm
            font-semibold
            "
          >
            Success Stories
          </p>

          <h2
            className="
            text-white
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            mt-3
            leading-tight
            "
          >
            Featured
            <br />
            Case Studies
          </h2>

          <p
            className="
            text-gray-400
            text-sm
            sm:text-base
            lg:text-lg
            mt-4
            max-w-3xl
            mx-auto
            leading-7
            "
          >
            Discover how we help organizations transform
            operations using AI, automation, and modern
            digital solutions.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          lg:gap-8
          "
        >
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              flex
              flex-col
              hover:border-[#3B82F6]
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(59,130,246,0.25)]
              transition-all
              duration-500
              "
            >
              {/* Image */}

              <img
                src={study.image}
                alt={study.title}
                className="
                w-full
                h-[200px]
                sm:h-[220px]
                md:h-[240px]
                lg:h-[260px]
                object-cover
                "
              />

              {/* Content */}

              <div className="p-5 sm:p-6 flex flex-col flex-grow">

                <span
                  className="
                  text-[#3B82F6]
                  text-xs
                  uppercase
                  tracking-[2px]
                  font-semibold
                  "
                >
                  {study.category}
                </span>

                <h3
                  className="
                  text-white
                  text-lg
                  sm:text-xl
                  font-bold
                  mt-3
                  leading-snug
                  "
                >
                  {study.title}
                </h3>

                <p
                  className="
                  text-green-400
                  font-semibold
                  mt-3
                  text-sm
                  sm:text-base
                  "
                >
                  {study.result}
                </p>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => navigate("/case-studies")}
                    className="
                    flex
                    items-center
                    gap-2
                    text-[#3B82F6]
                    text-sm
                    font-semibold
                    hover:text-white
                    transition-colors
                    "
                  >
                    View Case Study
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}