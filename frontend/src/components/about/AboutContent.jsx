// src/components/AboutContent.jsx

import { CheckCircle } from "lucide-react";
import aboutImage from "../../assets/about_2.jpg";

export default function AboutContent() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-[1500px] mx-auto px-8">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* WHO WE ARE */}

          <div>

            <h2 className="text-5xl font-bold text-[#08192F]">
              Who We Are
            </h2>

            <div className="w-16 h-1 bg-[#3B82F6] mt-4 mb-8" />

            <p className="text-gray-600 leading-9">
              We are a team of technologists, innovators and
              problem-solvers passionate about leveraging AI and
              automation to solve complex business challenges.
            </p>

            <p className="text-gray-600 leading-9 mt-6">
              Our solutions are designed to drive efficiency,
              reduce costs and create new growth opportunities.
            </p>

          </div>

          {/* WHAT DRIVES US */}

          <div>

            <h2 className="text-5xl font-bold text-[#08192F]">
              What Drives Us
            </h2>

            <div className="w-16 h-1 bg-[#3B82F6] mt-4 mb-8" />

            <div className="space-y-6">

              <div className="flex gap-4 items-center">
                <CheckCircle className="text-[#3B82F6]" />
                <span>Innovation in everything we do</span>
              </div>

              <div className="flex gap-4 items-center">
                <CheckCircle className="text-[#3B82F6]" />
                <span>Client success is our priority</span>
              </div>

              <div className="flex gap-4 items-center">
                <CheckCircle className="text-[#3B82F6]" />
                <span>Integrity, transparency and trust</span>
              </div>

              <div className="flex gap-4 items-center">
                <CheckCircle className="text-[#3B82F6]" />
                <span>Excellence through collaboration</span>
              </div>

            </div>

          </div>

          {/* IMAGE */}

          <div>

            <img
              src={aboutImage}
              alt="About ARINSA AI MINDS"
              className="
              rounded-3xl
              h-full
              w-full
              object-cover
              shadow-xl
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}