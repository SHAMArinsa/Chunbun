import {
  ShieldCheck,
  Lightbulb,
  Users,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We leverage the latest advancements in AI, automation, and cloud technologies to create future-ready solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    description:
      "Our solutions are designed with security, scalability, and performance at their core.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We work closely with clients to understand their goals and deliver measurable business outcomes.",
  },
  {
    icon: Rocket,
    title: "Accelerated Growth",
    description:
      "Helping organizations innovate faster, improve efficiency, and unlock new opportunities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#04142D] py-16">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-12">

          <p className="text-[#3B82F6] uppercase tracking-[3px] text-sm font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-3">
            Trusted Partner For
            <br />
            Digital Transformation
          </h2>

          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto leading-7">
            Combining business expertise, technical excellence,
            and innovation to deliver solutions that create
            long-term value.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                bg-white/5
                backdrop-blur-md
                border
                border-white/10
                rounded-[20px]
                p-5
                hover:border-[#3B82F6]
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >

                <div
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-[#3B82F6]/10
                  flex
                  items-center
                  justify-center
                  mb-4
                  "
                >
                  <Icon
                    size={26}
                    className="text-[#3B82F6]"
                  />
                </div>

                <h3 className="text-white text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-6">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}