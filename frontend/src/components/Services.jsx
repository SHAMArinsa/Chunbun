import {
  Brain,
  Bot,
  BarChart3,
  Cloud,
  Code2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description:
      "Develop an AI roadmap aligned with your business goals and digital transformation initiatives.",
  },
  {
    icon: Bot,
    title: "Generative AI Solutions",
    description:
      "Build intelligent applications powered by LLMs, RAG, AI Assistants and Copilots.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Automate repetitive workflows and business processes using autonomous AI agents.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Turn enterprise data into actionable insights with modern analytics solutions.",
  },
  {
    icon: Code2,
    title: "Web & Application Development",
    description:
      "Modern web platforms, SaaS applications and enterprise software solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines and modern deployment strategies.",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F7F9FC] py-16">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-12">

          <p className="text-[#1E40AF] text-sm font-semibold tracking-[3px] uppercase">
            Our Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#08192F] mt-3 leading-tight">
            End-to-End AI &
            <br />
            Digital Solutions
          </h2>

          <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto leading-7">
            Helping businesses innovate, automate and scale with
            modern AI-powered technologies.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid lg:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                rounded-[22px]
                p-6
                border
                border-gray-100
                shadow-sm
                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                hover:border-[#1E40AF]
                transition-all
                duration-500
                cursor-pointer
                group
                "
              >

                <div
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-[#1E40AF]/10
                  flex
                  items-center
                  justify-center
                  mb-5
                  transition-all
                  duration-500
                  group-hover:bg-[#1E40AF]
                  "
                >
                  <Icon
                    size={28}
                    className="
                    text-[#1E40AF]
                    group-hover:text-white
                    transition-all
                    duration-500
                    "
                  />
                </div>

                <h3 className="text-xl font-bold text-[#08192F]">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-7">
                  {service.description}
                </p>

                <button
                  onClick={() => navigate("/services")}
                  className="
                  flex
                  items-center
                  gap-2
                  mt-5
                  text-[#1E40AF]
                  text-sm
                  font-semibold
                  hover:text-[#3B82F6]
                  transition-colors
                  "
                >
                  Learn More
                  <ArrowRight size={15} />
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}