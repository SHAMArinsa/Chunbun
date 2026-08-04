import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  { company: "Nexora Logistics", industry: "Logistics & Supply Chain", feedback: "The team understood our workflow quickly and translated a complex automation requirement into a clear, usable product." },
  { company: "BluePeak Technologies", industry: "Software & SaaS", feedback: "From discovery to delivery, communication was structured, responsive, and focused on business outcomes." },
  { company: "FinEdge Consulting", industry: "Professional Services", feedback: "ARINSA helped us transform disconnected data into actionable business intelligence." },
  { company: "Vertex Manufacturing", industry: "Manufacturing", feedback: "The AI automation solution reduced manual work and improved operational efficiency across departments." },
  { company: "HealthSync Solutions", industry: "Healthcare Technology", feedback: "The document intelligence platform streamlined our processing while maintaining exceptional accuracy." },
  { company: "UrbanNest Properties", industry: "Real Estate", feedback: "Automation eliminated repetitive administrative tasks and improved team productivity significantly." },
  { company: "CrestWave Telecom", industry: "Telecommunications", feedback: "The team delivered a scalable platform that integrated seamlessly with our existing infrastructure." },
  { company: "PrimeGov Digital", industry: "Government & Public Sector", feedback: "Professional execution, transparent communication, and reliable delivery throughout the project lifecycle." },
  { company: "CloudAxis Systems", industry: "Cloud & Enterprise IT", feedback: "Their AI expertise accelerated our digital transformation and helped us launch ahead of schedule." },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % reviews.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setDirection(-1);
    setActive((current) => (current - 1 + reviews.length) % reviews.length);
  };
  const showNext = () => {
    setDirection(1);
    setActive((current) => (current + 1) % reviews.length);
  };
  const visibleReviews = [0, 1, 2].map((offset) => reviews[(active + offset) % reviews.length]);

  return (
    <section className="py-20 bg-[#F6F9FF]" aria-label="Client feedback">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-[0.16em] text-[#0B5ED7] uppercase">Trusted by teams across industries</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#102B63]">Built around real business needs.</h2>
          <p className="mt-4 text-[#5A6785] leading-7">Clear communication, practical delivery, and solutions that fit the way modern teams work.</p>
        </div>

        <div className="relative mt-11 max-w-[1180px] mx-auto overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -120 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid md:grid-cols-3 gap-5"
            >
              {visibleReviews.map((review) => (
                <article key={review.company} className="relative min-h-[330px] bg-white border border-[#E3EAF5] rounded-2xl p-7 text-center shadow-[0_14px_38px_rgba(11,43,97,0.08)] flex flex-col justify-center">
                  <Quote className="absolute left-6 top-6 text-[#DCEAFF]" size={38} fill="currentColor" aria-hidden="true" />
                  <div className="flex justify-center gap-1 text-[#E7A700]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}
                  </div>
                  <blockquote className="mt-6 text-[16px] leading-7 text-[#33496F] font-medium">“{review.feedback}”</blockquote>
                  <div className="mt-7 pt-5 border-t border-[#EDF1F7]">
                    <p className="font-bold text-[#102B63]">{review.company}</p>
                    <p className="mt-1 text-sm text-[#637596]">{review.industry}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          <button type="button" onClick={showPrevious} aria-label="Show previous review" className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[#DCE5F3] text-[#0B5ED7] shadow-md flex items-center justify-center hover:bg-[#0B5ED7] hover:text-white transition-colors">
            <ChevronLeft size={21} />
          </button>
          <button type="button" onClick={showNext} aria-label="Show next review" className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[#DCE5F3] text-[#0B5ED7] shadow-md flex items-center justify-center hover:bg-[#0B5ED7] hover:text-white transition-colors">
            <ChevronRight size={21} />
          </button>
        </div>

        <div className="mt-7 flex justify-center gap-2" aria-label="Select a review">
          {reviews.map((item, index) => (
            <button key={item.company} type="button" onClick={() => { setDirection(index > active ? 1 : -1); setActive(index); }} aria-label={`Show review from ${item.company}`} aria-current={index === active ? "true" : undefined} className={`h-2 rounded-full transition-all ${index === active ? "w-7 bg-[#0B5ED7]" : "w-2 bg-[#C5D2E6] hover:bg-[#8BA9D3]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
