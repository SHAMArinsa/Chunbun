import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import heroImage from "../../assets/ai-strategy-hero.png";

export default function AIStrategy() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO SECTION */}

        <section className="overflow-hidden">

          <div className="grid lg:grid-cols-2">

            <div className="flex items-center">

              <div className="px-8 lg:px-16 py-16 max-w-[750px]">

                <p className="text-sm text-gray-500 mb-6">
                  Home &gt; Services &gt; AI Strategy & Consulting
                </p>

                <p className="uppercase tracking-wider text-[#F4B400] font-semibold mb-4">
                  AI Strategy & Consulting
                </p>

                <h1 className="text-[58px] lg:text-[82px] font-bold leading-[0.95] text-[#071B3B]">
                  AI Strategy &
                  <br />
                  Consulting
                </h1>

                <div className="w-16 h-1 bg-[#F4B400] mt-8 mb-8"></div>

                <h2 className="text-3xl lg:text-[42px] font-semibold text-[#071B3B] leading-tight">
                  Transforming Vision Into Intelligent Business Strategy
                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  We help organizations identify high-impact AI opportunities,
                  build a clear roadmap, and create future-ready strategies
                  that drive measurable business value.
                </p>

                <div className="flex gap-4 flex-wrap mt-10">

                  <button className="bg-[#F4B400] hover:bg-[#e4aa00] px-8 py-4 rounded-xl font-semibold">
                    Schedule Consultation
                  </button>

                  <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50">
                    Explore Case Studies
                  </button>

                </div>

              </div>

            </div>

            <div className="h-[520px]">
              <img
                src={heroImage}
                alt="AI Strategy"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </section>

        {/* CAPABILITIES */}

        <section className="bg-[#F8FAFC] py-24">

          <div className="max-w-[1400px] mx-auto px-8">

            <div className="text-center mb-16">

              <p className="uppercase text-[#F4B400] font-semibold">
                Our Capabilities
              </p>

              <h2 className="text-5xl font-bold text-[#071B3B] mt-4">
                Strategic Guidance. Measurable Impact.
              </h2>

              <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                We combine industry expertise with AI-powered insights
                to craft strategies that drive innovation, efficiency,
                and sustainable growth.
              </p>

            </div>

            <div className="grid lg:grid-cols-4 gap-8">

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#071B3B]">
                  AI Opportunity Assessment
                </h3>
                <p className="mt-4 text-gray-600">
                  Identify high-impact use cases and prioritize initiatives.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#071B3B]">
                  Strategy & Roadmap Design
                </h3>
                <p className="mt-4 text-gray-600">
                  Build a tailored AI strategy aligned with business goals.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#071B3B]">
                  Change Management
                </h3>
                <p className="mt-4 text-gray-600">
                  Drive adoption through training and governance.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#071B3B]">
                  Technology Advisory
                </h3>
                <p className="mt-4 text-gray-600">
                  Recommend scalable AI architecture and platforms.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="py-24 bg-white">

          <div className="max-w-[1400px] mx-auto px-8">

            <div className="text-center mb-20">

              <p className="uppercase text-[#F4B400] font-semibold">
                Our Approach
              </p>

              <h2 className="text-5xl font-bold text-[#071B3B] mt-4">
                A Proven Framework for AI Success
              </h2>

            </div>

            <div className="grid lg:grid-cols-6 gap-8">

              {[
                "Discover",
                "Assess",
                "Strategize",
                "Design",
                "Implement",
                "Optimize",
              ].map((item, index) => (
                <div key={item} className="text-center">

                  <div className="w-24 h-24 mx-auto rounded-full border flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>

                  <h4 className="mt-6 text-xl font-semibold text-[#071B3B]">
                    {item}
                  </h4>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="pb-24 px-6">

          <div className="max-w-[1500px] mx-auto rounded-[32px] overflow-hidden bg-gradient-to-r from-[#03142E] to-[#002C74]">

            <div className="grid lg:grid-cols-5 gap-8 p-12 text-white">

              <div>

                <h2 className="text-5xl font-bold">
                  Delivering Impact
                  That Matters
                </h2>

                <p className="mt-5 text-white/70">
                  Trusted by enterprises to drive innovation
                  and measurable growth.
                </p>

              </div>

              <div className="text-center">
                <h3 className="text-6xl font-bold text-[#F4B400]">50+</h3>
                <p className="mt-2">AI Strategies Delivered</p>
              </div>

              <div className="text-center">
                <h3 className="text-6xl font-bold text-[#F4B400]">100+</h3>
                <p className="mt-2">Enterprise Clients</p>
              </div>

              <div className="text-center">
                <h3 className="text-6xl font-bold text-[#F4B400]">98%</h3>
                <p className="mt-2">Client Satisfaction</p>
              </div>

              <div className="text-center">
                <h3 className="text-6xl font-bold text-[#F4B400]">25+</h3>
                <p className="mt-2">Industries Served</p>
              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}