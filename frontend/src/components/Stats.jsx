// src/components/Stats.jsx

import {
  Briefcase,
  Users,
  Award,
  Smile,
} from "lucide-react";

import CountUp from "react-countup";

const stats = [
  {
    icon: Briefcase,
    value: "72+",
    title: "Projects Delivered",
    desc: "Successful AI, automation and digital transformation projects.",
  },
  {
    icon: Users,
    value: "30+",
    title: "Global Clients",
    desc: "Trusted by businesses across multiple industries worldwide.",
  },
  {
    icon: Award,
    value: "6+",
    title: "Years Experience",
    desc: "Building intelligent enterprise-grade software solutions.",
  },
  {
    icon: Smile,
    value: "98%",
    title: "Client Satisfaction",
    desc: "Long-term partnerships built on quality and trust.",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#04142d] pb-32">

      <div className="max-w-[1600px] mx-auto px-10">

        <div
          className="
          bg-gradient-to-r
          from-[#08192f]
          to-[#0b2240]
          border
          border-white/10
          rounded-[32px]
          overflow-hidden
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          "
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                  p-10
                  border-r
                  border-white/10
                  last:border-r-0
                  hover:bg-white/5
                  transition-all
                  duration-300
                  "
                >

                  <div className="flex items-start gap-5">

                    <div
                      className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#2563EB]/10
                      flex
                      items-center
                      justify-center
                      "
                    >
                      <Icon
                        size={34}
                        className="text-[#1E40AF]"
                      />
                    </div>

                    <div>

                      <h2
                        className="
                        text-[#566baf]
                        text-4xl sm:text-5xl lg:text-6xl
                        font-bold
                        "
                      >
                        {item.value}
                      </h2>

                      <h3
                        className="
                        text-white
                        text-xl
                        font-semibold
                        mt-3
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                        text-gray-400
                        text-sm
                        mt-3
                        leading-6
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}