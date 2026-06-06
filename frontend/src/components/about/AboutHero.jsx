import about1 from "../../assets/about_1.jpg";

export default function AboutHero() {
  return (
    <section className="relative h-[520px] overflow-hidden">

      {/* Background Image */}
      <img
        src={about1}
        alt="About ARINSA AI MINDS"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#03142E]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-8 h-full flex items-center">

        <div className="max-w-2xl">

          <p className="text-[#3B82F6] uppercase tracking-[4px] font-semibold">
            About Us
          </p>

          <h1 className="text-white text-7xl font-bold mt-4 leading-tight">
            Driving Innovation.
            <br />
            <span className="text-[#3B82F6]">
              Delivering Impact.
            </span>
          </h1>

          <p className="text-gray-300 text-xl mt-8 leading-8">
            ARINSA AI MINDS is a global technology and consulting
            company helping organizations unlock the power of AI,
            automation, digital transformation, and modern software
            solutions.
          </p>

        </div>

      </div>

    </section>
  );
}