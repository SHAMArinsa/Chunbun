// src/components/services/ServicesCards.jsx

import {
  Brain,
  Sparkles,
  Bot,
  BarChart3,
  Search,
  ScanText,
  Eye,
  Code2,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    desc: "Identify high-value AI opportunities and create a roadmap for digital transformation.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    desc: "Build AI-powered applications, copilots, chatbots and enterprise GenAI platforms.",
  },
  {
    icon: Bot,
    title: "AI Assistants & Copilots",
    desc: "Custom AI assistants that enhance productivity, customer engagement and decision-making.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    desc: "Automate workflows and business operations using intelligent AI agents.",
  },
  {
    icon: ScanText,
    title: "Document Intelligence & OCR",
    desc: "Extract, classify and process data from invoices, contracts and enterprise documents.",
  },
  {
    icon: Search,
    title: "AI Search & Knowledge Management",
    desc: "Enterprise search solutions powered by RAG, vector databases and intelligent retrieval.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    desc: "Transform data into actionable insights through dashboards, analytics and reporting.",
  },
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    desc: "Image processing, object detection, quality inspection and AI-powered visual intelligence.",
  },
  {
    icon: Code2,
    title: "Enterprise Software Development",
    desc: "Scalable web platforms, enterprise applications and custom software solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & AI Infrastructure",
    desc: "Secure cloud deployment, MLOps, DevOps pipelines and AI infrastructure management.",
  },
];

export default function ServicesCards() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F7F9FC] py-20">

      <div className="max-w-[1500px] mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#3B82F6] uppercase tracking-wider font-semibold">
            What We Offer
          </p>

          <h2 className="text-[#08192F] text-5xl font-bold mt-4">
            Comprehensive AI &
            <br />
            Digital Services
          </h2>

          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Helping organizations innovate, automate and scale
            through artificial intelligence, enterprise software
            and cloud technologies.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                rounded-[24px]
                p-8
                border
                border-gray-100
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[#3B82F6]
                transition-all
                duration-300
                "
              >

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#3B82F6]/10
                  flex
                  items-center
                  justify-center
                  mb-8
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#3B82F6]"
                  />
                </div>

                <h3 className="text-[#08192F] text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8">
                  {service.desc}
                </p>

                <button
                  onClick={() => navigate("/services")}
                  className="
                  mt-8
                  text-[#3B82F6]
                  font-medium
                  flex
                  items-center
                  gap-2
                  hover:text-[#2563EB]
                  transition-all
                  duration-300
                  "
                >
                  Learn More
                  <ArrowRight size={16} />
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}