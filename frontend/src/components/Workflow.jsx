import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understand business goals, challenges and opportunities for AI adoption.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description:
      "Create architecture, workflows and user experiences tailored to your needs.",
  },
  {
    icon: Code2,
    title: "Develop",
    description:
      "Build scalable AI solutions, applications and automation systems.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "Launch securely with cloud infrastructure, monitoring and integrations.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description:
      "Continuously improve performance using analytics and feedback loops.",
  },
];

export default function Workflow() {
  return (
    <section className="bg-[#04142D] py-16">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-12">

          <p className="text-[#3B82F6] uppercase tracking-[3px] text-sm font-semibold">
            Our Process
          </p>

          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-3">
            How We Deliver
            <br />
            Successful Solutions
          </h2>

          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto leading-7">
            Our proven approach ensures every project is delivered
            efficiently, strategically and with measurable business value.
          </p>

        </div>

        {/* Workflow Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                relative
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
                  absolute
                  top-4
                  right-4
                  text-[#3B82F6]
                  text-3xl
                  font-bold
                  opacity-20
                  "
                >
                  0{index + 1}
                </div>

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
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-6">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}