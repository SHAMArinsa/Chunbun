import { ArrowUpRight, CheckCircle2, Database, FileSearch, ShieldCheck, Workflow } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import captureExpertLogo from "../assets/capture-expert-logo.png";

const capabilities = [
  { icon: FileSearch, title: "AI data capture & document intelligence", text: "Collect and extract accurate data from complex, unstructured information." },
  { icon: Database, title: "Enterprise ETL & transformation", text: "Transform raw data through intelligent pipelines into delivery-ready datasets." },
  { icon: Workflow, title: "Workflow automation with AI agents", text: "Manage data and compliance workflows through connected enterprise automation." },
  { icon: ShieldCheck, title: "Human validation & governance", text: "Maintain quality assurance, auditability and trusted delivery at scale." },
];

const differentiators = ["AI-powered document intelligence", "Intelligent ETL and data transformation", "Human-in-the-loop validation", "Enterprise workflow automation", "Secure API-first architecture", "Built-in governance and audit trails", "Scalable cloud-native infrastructure", "Enterprise-grade security and compliance"];
const industries = ["Financial Services", "Insurance", "Healthcare", "Manufacturing", "Logistics & Supply Chain", "Real Estate", "Telecommunications", "Government & Public Sector", "Professional Services", "Retail & E-commerce"];
const values = [
  ["Innovation first", "We continuously apply advances in AI and automation to solve complex enterprise challenges."],
  ["Accuracy matters", "Every workflow is designed to deliver trusted, high-quality data supported by intelligent validation."],
  ["Security by design", "Enterprise security, privacy and governance are embedded throughout the data lifecycle."],
  ["Customer-centric approach", "We build around real business challenges to create measurable value and long-term partnerships."],
  ["Scalable architecture", "Our cloud-native platform grows from focused pilots to enterprise-wide deployments."],
];

export default function CaptureExpert() {
  return (
    <>
      <SEO title="Capture.expert | AI Data Capture & Workflow Automation" description="Capture.expert is an AI-powered data intelligence platform for intelligent document processing, data transformation and workflow automation." canonical="/capture-expert" />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#06172F] text-white py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(33,119,255,0.42),transparent_30%),radial-gradient(circle_at_15%_100%,rgba(6,83,182,0.5),transparent_32%)]" />
          <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="relative">
              <p className="text-sm font-bold tracking-[0.18em] text-[#9DCAFF] uppercase">A joint venture by ARINSA AI MINDS & VOX Technologies</p>
              <div className="mt-5 inline-flex rounded-2xl bg-white p-2 shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
                <img src={captureExpertLogo} alt="Capture.Expert — Turning data into decisions" className="w-[250px] sm:w-[300px] h-auto" />
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">Enterprise-grade AI-powered data intelligence.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/90">Capture.expert enables organizations to collect, process, transform and deliver high-quality data through intelligent automation, document intelligence, ETL, compliance workflows and secure API-based delivery.</p>
              <div className="flex flex-wrap items-center gap-5 mt-9">
                <a href="https://capture.expert/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#0B4FA9] hover:bg-[#DCEAFF] transition-colors">Visit Capture.expert <ArrowUpRight size={18} /></a>
                <span className="text-sm text-blue-100/80">AI-powered · Human-validated · API-first</span>
              </div>
            </div>
            <div className="relative rounded-[28px] border border-white/15 bg-[#0B2855]/80 p-7 sm:p-9 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between"><p className="text-sm font-bold text-[#A9D5FF] uppercase tracking-[0.14em]">Intelligence core</p><span className="w-2.5 h-2.5 rounded-full bg-[#72D6A6] shadow-[0_0_14px_#72D6A6]" /></div>
              <h2 className="mt-4 text-2xl font-bold">The enterprise data lifecycle, connected.</h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[["01", "Capture", "AI-powered data capture"], ["02", "Transform", "Intelligent ETL pipelines"], ["03", "Govern", "Human validation & controls"], ["04", "Deliver", "Secure API-ready data"]].map(([number, title, text]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"><p className="text-xs font-bold text-[#83C3FF]">{number}</p><p className="mt-4 font-bold text-lg">{title}</p><p className="mt-1 text-sm leading-5 text-blue-100/70">{text}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.16em] text-[#0B5ED7] uppercase">About Capture.expert</p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-[#102B63] leading-tight">Turning enterprise data into actionable intelligence.</h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-[#526687]">
                <p>Capture.expert is an AI-powered enterprise data intelligence platform built to help organizations collect, understand, transform, validate and deliver high-quality business data at scale. It brings Artificial Intelligence, document intelligence, intelligent ETL pipelines, workflow automation and secure API delivery together in one unified ecosystem.</p>
                <p>From invoices, contracts and compliance records to financial statements, logistics documents, healthcare records and large enterprise datasets, Capture.expert replaces fragmented manual processes with intelligent workflows that improve accuracy, speed and operational efficiency.</p>
                <p>Built as a strategic joint venture between <strong className="text-[#102B63]">ARINSA AI MINDS</strong> and <strong className="text-[#102B63]">VOX Technologies</strong>, Capture.expert combines deep AI engineering expertise with global business experience for organizations across industries.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-14">
              <article className="rounded-3xl bg-[#0A2B60] p-8 sm:p-10 text-white"><p className="text-sm font-bold tracking-[0.15em] uppercase text-[#8DC7FF]">Our mission</p><h3 className="mt-4 text-2xl sm:text-3xl font-bold">Intelligent automation for trusted decisions.</h3><p className="mt-5 leading-8 text-blue-50/90">To empower organizations with intelligent data automation that turns complex information into trusted, actionable insights—reducing manual effort, improving operational efficiency and enabling faster business decisions.</p></article>
              <article className="rounded-3xl border border-[#D8E5F7] bg-[#F4F8FF] p-8 sm:p-10"><p className="text-sm font-bold tracking-[0.15em] uppercase text-[#0B5ED7]">Our vision</p><h3 className="mt-4 text-2xl sm:text-3xl font-bold text-[#102B63]">The trusted enterprise data platform.</h3><p className="mt-5 leading-8 text-[#526687]">To become the world’s most trusted AI-powered enterprise data platform, helping organizations automate the complete data lifecycle—from capture to intelligent delivery—through secure, scalable and responsible AI.</p></article>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F6F9FF]">
          <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div><p className="text-sm font-bold tracking-[0.16em] text-[#0B5ED7] uppercase">What makes us different</p><h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#102B63] leading-tight">One platform for the complete enterprise data lifecycle.</h2><p className="mt-5 leading-8 text-[#526687]">Unlike traditional OCR or ETL tools that solve only one part of the process, Capture.expert brings the full enterprise data lifecycle together in a single integrated platform.</p></div>
            <div className="grid sm:grid-cols-2 gap-3">
              {differentiators.map((item) => <div key={item} className="flex gap-3 bg-white border border-[#E1EAF6] rounded-xl p-4 text-[#30486F] font-semibold"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#0B5ED7]" />{item}</div>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F6F9FF]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="max-w-2xl"><p className="text-sm font-bold tracking-[0.16em] text-[#0B5ED7] uppercase">What Capture.expert does</p><h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#102B63]">One platform for the complete enterprise data lifecycle.</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-11">
              {capabilities.map(({ icon: Icon, title, text }, index) => <article key={title} className="group bg-white rounded-2xl border border-[#E3EAF5] p-6 hover:-translate-y-1 hover:shadow-xl transition-all"><div className="flex items-center justify-between"><div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0B5ED7] flex items-center justify-center"><Icon size={24} /></div><span className="text-xs font-bold text-[#A7B8D5]">0{index + 1}</span></div><h3 className="mt-6 font-bold text-xl text-[#102B63]">{title}</h3><p className="mt-3 leading-7 text-[#5A6785]">{text}</p></article>)}
            </div>
            <div className="mt-14 rounded-[28px] overflow-hidden border border-[#DCE7F7] bg-white grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[#0B5ED7] p-8 sm:p-10 text-white"><p className="text-sm font-bold tracking-[0.14em] uppercase text-blue-100">A strategic joint venture</p><h3 className="mt-4 text-3xl font-bold leading-tight">Built by ARINSA AI MINDS and VOX Technologies.</h3><p className="mt-5 leading-7 text-blue-50/90">Advanced AI engineering and global business expertise, brought together for enterprise data solutions.</p></div>
              <div className="p-8 sm:p-10 grid sm:grid-cols-2 gap-8"><div><p className="text-sm font-bold tracking-[0.14em] uppercase text-[#0B5ED7]">Technology & product partner</p><h3 className="mt-3 text-2xl font-bold text-[#102B63]">ARINSA AI MINDS</h3><p className="mt-3 leading-7 text-[#5A6785]">Leads product strategy, AI research, platform architecture, engineering, quality assurance and enterprise implementation.</p></div><div><p className="text-sm font-bold tracking-[0.14em] uppercase text-[#0B5ED7]">Global growth partner</p><h3 className="mt-3 text-2xl font-bold text-[#102B63]">VOX Technologies</h3><p className="mt-3 leading-7 text-[#5A6785]">Supports global sales, strategic partnerships, international marketing and business expansion outside India.</p></div></div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
            <div><p className="text-sm font-bold tracking-[0.16em] text-[#0B5ED7] uppercase">Built for modern enterprises</p><h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#102B63] leading-tight">Designed for high-volume, business-critical information.</h2><p className="mt-5 leading-8 text-[#526687]">Capture.expert supports organizations that manage information across multiple systems, teams and operating requirements.</p></div>
            <div className="flex flex-wrap content-start gap-3">{industries.map((industry) => <span key={industry} className="rounded-full border border-[#D8E5F7] bg-[#F6F9FF] px-4 py-2.5 text-sm font-semibold text-[#294C7B]">{industry}</span>)}</div>
          </div>

          <div className="max-w-[1180px] mx-auto px-6 mt-16"><p className="text-sm font-bold tracking-[0.16em] text-[#0B5ED7] uppercase">Our core values</p><div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-7">{values.map(([title, text], index) => <article key={title} className="border border-[#E2EAF5] rounded-2xl p-5"><p className="text-xs font-bold text-[#0B5ED7]">0{index + 1}</p><h3 className="mt-5 font-bold text-lg text-[#102B63]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#637596]">{text}</p></article>)}</div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
