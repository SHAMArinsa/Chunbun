import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardOverlay from "./DashboardOverlay";
import QuoteModal from "./QuoteModal";
import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_2.jpg";

export default function Hero() {
  const navigate = useNavigate();
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#04142D]">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${hero1})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div className="absolute inset-0 bg-[#04142D]/85" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="grid min-h-screen items-center py-16 lg:min-h-[760px] lg:grid-cols-2 lg:py-0">
            <div className="mx-auto max-w-[650px] text-center lg:mx-0 lg:text-left">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-[#3B82F6] sm:text-sm">AI • AUTOMATION • DIGITAL TRANSFORMATION</p>
              <h1 className="text-[42px] font-extrabold leading-tight text-white sm:text-5xl lg:text-[54px]">Transforming<br />Businesses Through<br /><span className="text-[#3B82F6]">AI-Powered</span><br />Innovation</h1>
              <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-8 text-gray-300 lg:mx-0 lg:text-[19px]">We help organizations accelerate growth through AI-powered solutions, intelligent automation, enterprise software development, and data-driven innovation.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start">
                <button onClick={() => setShowQuoteModal(true)} className="flex w-[220px] items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2563EB] sm:px-8 sm:py-4 sm:text-base lg:w-auto">Get Your Quotation <ArrowRight size={16} /></button>
                <button onClick={() => navigate("/services")} className="w-[220px] rounded-xl border border-[#3B82F6] px-4 py-3 text-sm text-white transition-all duration-300 hover:bg-[#3B82F6]/10 sm:px-8 sm:py-4 sm:text-base lg:w-auto">Explore Services</button>
              </div>
            </div>
            <div className="relative hidden h-full items-center justify-center lg:flex">
              <img src={hero2} alt="ARINSA AI MINDS" className="w-[880px] rounded-[24px] object-cover shadow-2xl" />
              <DashboardOverlay />
            </div>
          </div>
        </div>
      </section>
      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </>
  );
}
