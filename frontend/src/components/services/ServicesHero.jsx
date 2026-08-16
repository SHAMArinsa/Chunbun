// src/components/services/ServicesHero.jsx

import servicesImage from "../../assets/services_1.jpg";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${servicesImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#03142E]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-8 h-full flex items-center">

        <div className="max-w-[700px]">

          <p className="text-[#3B82F6] uppercase tracking-wider font-medium">
            Our Services
          </p>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            End-To-End AI &
            <br />
            <span className="text-[#3B82F6]">
              Digital Solutions
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl mt-6 sm:mt-8 leading-7 sm:leading-8">
            We help businesses leverage the power of AI,
            automation and modern technology to streamline
            operations and accelerate growth.
          </p>

        </div>

      </div>

    </section>
  );
}
