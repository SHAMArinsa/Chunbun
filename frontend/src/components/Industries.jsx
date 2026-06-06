import {
  Building2,
  HeartPulse,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  Scale,
  Cpu,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "AI-powered diagnostics, document intelligence and patient engagement.",
  },
  {
    icon: Building2,
    title: "Finance & Banking",
    desc: "Fraud detection, risk assessment and intelligent automation.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    desc: "Personalized recommendations and customer analytics.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Predictive maintenance and quality inspection solutions.",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Supply chain optimization and route intelligence.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Learning assistants, AI tutors and content generation.",
  },
  {
    icon: Scale,
    title: "Legal",
    desc: "Contract analysis, compliance and document automation.",
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "AI-native applications and enterprise innovation platforms.",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#F7F9FC] py-28">

      <div className="max-w-[1500px] mx-auto px-8">

        <div className="text-center mb-20">

          <p className="text-[#3B82F6] uppercase tracking-[4px] font-semibold">
            Industries We Serve
          </p>

          <h2 className="text-[#08192F] text-6xl font-extrabold mt-4 leading-tight">
            Intelligent Solutions
            <br />
            For Every Industry
          </h2>

          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            We build AI-powered solutions tailored to the unique
            challenges of modern industries.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                rounded-[28px]
                p-8
                border
                border-gray-100
                shadow-sm
                hover:-translate-y-4
                hover:border-[#3B82F6]
                hover:shadow-[0_25px_70px_rgba(59,130,246,0.15)]
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
                  mb-6
                  "
                >
                  <Icon
                    size={32}
                    className="text-[#3B82F6]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#08192F]">
                  {industry.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {industry.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}