// src/components/Hero.jsx

import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardOverlay from "./DashboardOverlay";

import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_2.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#04142D]">

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hero1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#04142D]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-10">

        <div className="grid lg:grid-cols-2 items-center min-h-[760px]">

          {/* LEFT SIDE */}
          <div className="max-w-[650px] -mt-8">

            <p className="text-[#3B82F6] tracking-[4px] mb-5 text-sm font-semibold uppercase">
              AI • AUTOMATION • DIGITAL TRANSFORMATION
            </p>

            <h1
              className="
              text-white
              font-extrabold
              leading-[1.08]
              text-[44px]
              lg:text-[54px]
              "
            >
              Transforming
              <br />
              Businesses Through
              <br />
              <span className="text-[#3B82F6]">
                AI-Powered
              </span>
              <br />
              Innovation
            </h1>

            <p
              className="
              text-gray-300
              text-[17px]
              lg:text-[19px]
              leading-8
              mt-7
              max-w-[600px]
              "
            >
              We help organizations accelerate growth through
              AI-powered solutions, intelligent automation,
              enterprise software development, and data-driven
              innovation.
            </p>

            <div className="flex gap-5 mt-10">

              {/* Primary Button */}
              <button
                onClick={() => navigate("/contact")}
                className="
                bg-[#3B82F6]
                text-white
                font-semibold
                px-8
                py-4
                rounded-xl
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#2563EB]
                hover:shadow-[0_15px_40px_rgba(59,130,246,0.45)]
                "
              >
                Schedule Consultation
                <ArrowRight size={18} />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => navigate("/services")}
                className="
                border
                border-[#3B82F6]
                text-white
                px-8
                py-4
                rounded-xl
                hover:bg-[#3B82F6]/10
                hover:border-[#60A5FA]
                transition-all
                duration-300
                "
              >
                Explore Services
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative h-full flex items-center justify-center">

            {/* Main Hero Image */}
            <img
              src={hero2}
              alt="ARINSA AI MINDS"
              className="
              w-[880px]
              rounded-[24px]
              shadow-2xl
              object-cover
              "
            />

            {/* Floating Dashboard */}
            <DashboardOverlay />

          </div>

        </div>

      </div>

    </section>
  );
}