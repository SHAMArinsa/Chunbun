// src/components/TrustBar.jsx

import {
  ShieldCheck,
  Users,
  Lightbulb,
  Headphones,
} from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Trusted by Businesses",
      text: "Delivering reliable AI solutions trusted by 30+ clients globally.",
    },
    {
      icon: Users,
      title: "Expert Team",
      text: "A team of AI experts, data scientists & engineers.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      text: "Cutting-edge AI and automation tailored for your success.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      text: "We're here anytime you need us, every step of the way.",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="
          bg-white
          rounded-[28px]
          border border-[#E6ECF5]
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          overflow-hidden
        ">

          <div className="grid lg:grid-cols-4">

            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    flex items-center gap-5
                    px-8 py-8
                    ${index !== items.length - 1
                      ? "lg:border-r border-[#E6ECF5]"
                      : ""}
                  `}
                >
                  <div className="
                    w-16 h-16
                    rounded-full
                    bg-[#F5F8FF]
                    border border-[#E8EEF8]
                    flex items-center justify-center
                    shrink-0
                  ">
                    <Icon
                      size={30}
                      className="text-[#0B5ED7]"
                    />
                  </div>

                  <div>
                    <h3 className="
                      text-[18px]
                      font-semibold
                      text-[#102B63]
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      text-[15px]
                      leading-7
                      text-[#5A6785]
                      mt-1
                    ">
                      {item.text}
                    </p>
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