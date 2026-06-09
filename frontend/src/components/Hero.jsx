import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DashboardOverlay from "./DashboardOverlay";
import QuoteModal from "./QuoteModal";

import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_2.jpg";

export default function Hero() {
  const navigate = useNavigate();

  const [showQuoteModal, setShowQuoteModal] =
    useState(false);

  return (
    <>
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

        {/* Overlay */}

        <div className="absolute inset-0 bg-[#04142D]/85" />

        {/* Content */}

        <div
          className="
          relative
          z-10
          max-w-[1600px]
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          "
        >
          <div
            className="
            grid
            lg:grid-cols-2
            items-center
            min-h-screen
            lg:min-h-[760px]
            py-16
            lg:py-0
            "
          >
            {/* LEFT CONTENT */}

            <div
              className="
              max-w-[650px]
              mx-auto
              lg:mx-0
              text-center
              lg:text-left
              "
            >
              <p
                className="
                text-[#3B82F6]
                tracking-[4px]
                mb-5
                text-xs
                sm:text-sm
                font-semibold
                uppercase
                "
              >
                AI • AUTOMATION • DIGITAL TRANSFORMATION
              </p>

              <h1
                className="
                text-white
                font-extrabold
                leading-tight
                text-[42px]
                sm:text-5xl
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
                text-[16px]
                lg:text-[19px]
                leading-8
                mt-6
                max-w-[600px]
                mx-auto
                lg:mx-0
                "
              >
                We help organizations accelerate growth through
                AI-powered solutions, intelligent automation,
                enterprise software development, and data-driven
                innovation.
              </p>

              {/* BUTTONS */}

              <div
                className="
                flex
                flex-col
                lg:flex-row
                items-center
                lg:items-center
                justify-center
                lg:justify-start
                gap-4
                mt-8
                "
              >
                {/* QUOTATION BUTTON */}

                <button
                  onClick={() =>
                    setShowQuoteModal(true)
                  }
                  className="
                  bg-[#3B82F6]
                  text-white
                  font-semibold

                  w-[220px]
                  lg:w-auto

                  px-4
                  py-3

                  sm:px-8
                  sm:py-4

                  rounded-xl

                  flex
                  items-center
                  justify-center
                  gap-2

                  text-sm
                  sm:text-base

                  transition-all
                  duration-300

                  hover:bg-[#2563EB]
                  hover:scale-[1.02]
                  "
                >
                  Get Your Quotation
                  <ArrowRight size={16} />
                </button>

                {/* SERVICES BUTTON */}

                <button
                  onClick={() =>
                    navigate("/services")
                  }
                  className="
                  border
                  border-[#3B82F6]
                  text-white

                  w-[220px]
                  lg:w-auto

                  px-4
                  py-3

                  sm:px-8
                  sm:py-4

                  rounded-xl

                  text-sm
                  sm:text-base

                  hover:bg-[#3B82F6]/10

                  transition-all
                  duration-300
                  "
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - DESKTOP ONLY */}

            <div
              className="
              hidden
              lg:flex
              relative
              h-full
              items-center
              justify-center
              "
            >
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

              <DashboardOverlay />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE MODAL */}

      <QuoteModal
        isOpen={showQuoteModal}
        onClose={() =>
          setShowQuoteModal(false)
        }
      />
    </>
  );
}
