import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import PageTransition from "../components/PageTransition";

import {
  Landmark,
  ShoppingCart,
  HeartPulse,
  Factory,
  GraduationCap,
  Shield,
  Truck,
  RadioTower,
  Building2,
  Building,
  ArrowRight,
  Phone,
  Users,
} from "lucide-react";

import industriesBanner from "../assets/industries-banner.png";

export default function Industries() {
  const navigate = useNavigate();
  const industries = [
    {
      icon: <Landmark size={40} />,
      title: "Finance & Banking",
      desc: "AI-powered risk assessment, fraud detection, algorithmic trading, and customer insights.",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Retail & E-Commerce",
      desc: "Personalized customer experiences, demand forecasting, inventory optimization, and sales analytics.",
    },
    {
      icon: <HeartPulse size={40} />,
      title: "Healthcare & Life Sciences",
      desc: "Intelligent diagnostics, patient data analytics, drug discovery, and operational automation.",
    },
    {
      icon: <Factory size={40} />,
      title: "Manufacturing",
      desc: "Predictive maintenance, quality control, supply chain optimization, and process automation.",
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Education",
      desc: "Personalized learning, student analytics, automation of admin tasks, and academic insights.",
    },
    {
      icon: <Shield size={40} />,
      title: "Insurance",
      desc: "Automated claim processing, risk modeling, fraud detection, and policy analytics.",
    },
    {
      icon: <Truck size={40} />,
      title: "Logistics & Transportation",
      desc: "Route optimization, real-time tracking, demand forecasting, and fleet management.",
    },
    {
      icon: <RadioTower size={40} />,
      title: "Telecommunications",
      desc: "Network optimization, churn prediction, customer analytics, and service automation.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Real Estate",
      desc: "Market analysis, property valuation, lead scoring, and smart property management.",
    },
    {
      icon: <Building size={40} />,
      title: "Government",
      desc: "Citizen services automation, data-driven policy making, and smart city solutions.",
    },
  ];

  return (
      <PageTransition>
      <Navbar />

      {/* HERO */}

<section className="relative h-[430px] overflow-hidden">

  <img
  src={industriesBanner}
  alt="Industries"
  className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  "
/>

  <div
    className="
    absolute
    inset-0
    bg-[#03142E]/75
    "
  />

  <div
    className="
    relative
    z-20
    max-w-[1600px]
    mx-auto
    px-8
    h-full
    flex
    items-center
    "
  >

    <div className="max-w-[700px]">

      <p className="text-[#3B82F6] uppercase tracking-wider mb-5 font-medium">
        Industries We Serve
      </p>

      <h1
        className="
        text-white
        text-[68px]
        leading-[74px]
        font-bold
        "
      >
        Intelligent Solutions
        <br />

        <span className="text-[#3B82F6]">
          for Every Industry
        </span>
      </h1>

      <p
        className="
        text-white/80
        text-[22px]
        leading-10
        mt-8
        max-w-[650px]
        "
      >
        We combine AI, automation, and domain expertise
        to deliver industry-specific solutions that solve
        real-world challenges and drive measurable results.
      </p>

    </div>

  </div>

</section>

      {/* INDUSTRY CARDS */}

      <section className="bg-[#F8F9FB] py-14">

        <div className="max-w-[1600px] mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {industries.map((item, index) => (
              <div
  key={index}
  className="
  bg-white
  rounded-3xl
  p-8
  border
  border-gray-100
  shadow-sm
  hover:-translate-y-2
  hover:shadow-xl
  transition-all
  duration-300
  flex
  flex-col
  min-h-[340px]
  "
>
                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-[#3B82F6]/10
                  flex
                  items-center
                  justify-center
                  text-[#3B82F6]
                  mb-6
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-[20px] font-semibold text-[#3B82F6] mb-4">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-7 text-gray-600 flex-grow">
                  {item.desc}
                </p>

                <div className="mt-auto pt-6">
  <button onClick={() => navigate("/industries")}
    className="text-[#566fae] flex items-center gap-2 font-medium">
    Learn More
    <ArrowRight size={16} />
  </button>
</div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#F8F9FB] pb-16">

        <div className="max-w-[1600px] mx-auto px-8">

          <div
            className="
            bg-[#EEF2F7]
            rounded-3xl
            p-10
            grid
            lg:grid-cols-12
            items-center
            gap-8
            "
          >
            <div className="flex gap-6 items-center lg:col-span-5">

              <div
                className="
                w-24
                h-24
                rounded-full
                bg-[#071B3B]
                text-[#3B82F6]
                flex
                items-center
                justify-center
                "
              >
                <Users size={48} />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#3B82F6]">
                  Your Industry. Our Expertise. Real Impact.
                </h2>

                <p className="text-gray-600 mt-3">
                  No matter your industry, we have the
                  technology and expertise to help you
                  innovate, automate and grow.
                </p>
              </div>

            </div>

            <div className="flex justify-center lg:col-span-3">

              <button
                className="
                bg-[#3B82F6]
                text-white
                hover:bg-[#2563EB]
                transition-all
                duration-300
                px-10
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                "
              >
                Let's Work Together
                <ArrowRight size={18} />
              </button>

            </div>

            <div className="flex items-center gap-5 lg:col-span-4 border-l border-[#D8DEE8] pl-10">

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                "
              >
                <Phone size={36} />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#3B82F6]">
                  Have Questions?
                </h3>

                <p className="text-gray-600">
                  Let's discuss how we can help.
                </p>

                <p className="font-bold text-2xl mt-2">
                  +91 9123745946
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    
    </PageTransition>
  );
}