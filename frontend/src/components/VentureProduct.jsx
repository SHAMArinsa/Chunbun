import { ArrowUpRight, Database, FileSearch, Workflow } from "lucide-react";

const capabilities = [
  { icon: FileSearch, label: "Intelligent document processing" },
  { icon: Database, label: "Trusted, validated data" },
  { icon: Workflow, label: "ETL & workflow automation" },
];

export default function VentureProduct() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="rounded-[30px] overflow-hidden bg-[#071B3B] text-white grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-9 sm:p-12 lg:p-14">
            <p className="text-sm font-bold tracking-[0.16em] text-[#8DBDFF] uppercase">Our venture product</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#1A6BE8] flex items-center justify-center font-black text-xl">C</div>
              <span className="text-3xl sm:text-4xl font-bold tracking-tight">capture<span className="text-[#66B2FF]">.expert</span></span>
            </div>
            <h2 className="mt-7 text-3xl sm:text-4xl font-bold leading-tight max-w-xl">Turn complex information into enterprise-ready data.</h2>
            <p className="mt-5 max-w-xl text-[#C8D9F7] leading-7">Capture.expert is an AI-powered data intelligence platform for collecting, transforming, governing and accessing business data—with intelligent document processing and human-in-the-loop validation.</p>
            <a href="https://capture.expert/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-9 rounded-xl bg-white px-5 py-3.5 font-bold text-[#0B4FA9] hover:bg-[#DCEAFF] transition-colors">
              Explore Capture.expert <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#0C4FA9] to-[#0A275A] p-9 sm:p-12 flex flex-col justify-center gap-4">
            {capabilities.map(({ icon: Icon, label }, index) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center text-[#9DCAFF]">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#8DBDFF]">0{index + 1}</p>
                  <p className="mt-1 font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
