import { MapPin } from "lucide-react";

export default function GlobalPresence() {
  return (
    <section className="bg-[#F7F9FC] py-20">

      <div className="max-w-[1500px] mx-auto px-8">

        <div className="grid lg:grid-cols-3 gap-8">

          <div>

            <h2 className="text-5xl font-bold text-[#08192F]">
              Our Global Presence
            </h2>

            <div className="w-16 h-1 bg-[#3B82F6] mt-4 mb-8" />

            <p className="text-gray-600 leading-8">
              We serve clients across the globe with strong
              regional presence and delivery excellence.
            </p>

          </div>

          <div className="flex items-center justify-center">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              className="opacity-60"
            />

          </div>

          <div
            className="
            bg-[#04142D]
            text-white
            rounded-3xl
            p-10
            "
          >

            <h3 className="text-4xl font-bold">
              Ready To Build
              <br />
              The Future Together?
            </h3>

            <p className="text-gray-300 mt-6">
              Let's collaborate and create intelligent
              solutions that drive real impact.
            </p>

            <button
              className="
              mt-8
              bg-[#3B82F6]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#2563EB]
              transition-all
              duration-300
              "
            >
              Work With Us
            </button>

            <div className="mt-10 space-y-4">

              <div className="flex gap-3 items-center">
                <MapPin className="text-[#3B82F6]" />
                North America
              </div>

              <div className="flex gap-3 items-center">
                <MapPin className="text-[#3B82F6]" />
                Europe
              </div>

              <div className="flex gap-3 items-center">
                <MapPin className="text-[#3B82F6]" />
                Asia Pacific
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}