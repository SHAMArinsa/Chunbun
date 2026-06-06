// src/components/AboutStats.jsx

import {
  Lightbulb,
  Handshake,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export default function AboutStats() {
  const strengths = [
    {
      icon: Lightbulb,
      title: "Strategic Approach",
      description:
        "We focus on solving real business challenges by aligning technology initiatives with measurable outcomes and long-term goals.",
    },
    {
      icon: Handshake,
      title: "Trusted Partnership",
      description:
        "We work closely with our clients, fostering transparency, collaboration, and long-term relationships built on trust.",
    },
    {
      icon: Rocket,
      title: "Innovation Culture",
      description:
        "Our team continuously explores emerging technologies and modern methodologies to deliver future-ready solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Excellence in Delivery",
      description:
        "We prioritize quality, security, scalability, and performance in every solution we design and deliver.",
    },
  ];

  return (
    <section className="bg-[#04142D] py-24">

      <div className="max-w-[1500px] mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#3B82F6] uppercase tracking-wider font-semibold">
            Why Organizations Choose Us
          </p>

          <h2 className="text-white text-5xl font-bold mt-4 leading-tight">
            Built On Trust,
            <br />
            Driven By Innovation
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Combining business understanding, technical expertise,
            and a commitment to excellence to deliver meaningful
            outcomes for our clients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 gap-8">

          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                bg-white/5
                border
                border-white/10
                rounded-[28px]
                p-10
                hover:border-[#3B82F6]
                hover:-translate-y-2
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
                    size={32}
                    className="text-[#3B82F6]"
                  />
                </div>

                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}