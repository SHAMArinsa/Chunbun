// src/components/services/ProcessSection.jsx

import {
  Search,
  Target,
  Settings,
  TrendingUp,
  Handshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    desc: "We understand your business, challenges and objectives.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategize",
    desc: "We create a tailored solution strategy and implementation plan.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implement",
    desc: "Our experts build, integrate and deploy solutions with precision.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimize",
    desc: "We continuously monitor, refine and optimize for maximum impact.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Support",
    desc: "We provide ongoing support and ensure long-term success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F7F9FC] pb-24">

      <div className="max-w-[1500px] mx-auto px-8">

        <div
          className="
          bg-[#EEF3FA]
          rounded-[32px]
          p-12
          "
        >

          <div className="grid lg:grid-cols-6 gap-10 items-start">

            {/* Left Section */}

            <div className="lg:col-span-2">

              <p className="text-[#3B82F6] uppercase tracking-wider font-medium">
                Our Approach
              </p>

              <h2 className="text-[#08192F] text-5xl font-bold mt-4 leading-tight">
                A Proven Process
                <br />
                For Successful
                <br />
                Outcomes
              </h2>

              <p className="text-gray-600 mt-8 text-lg leading-8">
                We follow a structured approach to deliver
                solutions that meet your business goals
                and create measurable value.
              </p>

            </div>

            {/* Right Section */}

            <div className="lg:col-span-4">

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={index}>

                      {/* Icon */}

                      <div
                        className="
                        w-20
                        h-20
                        rounded-full
                        bg-white
                        shadow-sm
                        flex
                        items-center
                        justify-center
                        mb-6
                        "
                      >
                        <Icon
                          size={34}
                          className="text-[#3B82F6]"
                        />
                      </div>

                      {/* Step Number */}

                      <div className="mb-4">

                        <span
                          className="
                          text-[#3B82F6]
                          text-xl
                          font-bold
                          "
                        >
                          {step.number}
                        </span>

                      </div>

                      {/* Title */}

                      <h3 className="text-[#08192F] text-2xl font-bold">
                        {step.title}
                      </h3>

                      {/* Description */}

                      <p className="text-gray-600 mt-4 leading-8">
                        {step.desc}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}