import { ChevronRight, Send, Mail, Phone, MapPin, Heart, Newspaper } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

import arinsaLogo from "../assets/arinsa-logo.png";
import udyamMsmeLogo from "../assets/certifications/udyam-msme.png";
import isoLogo from "../assets/certifications/iso-9001.png";
import msmeLogo from "../assets/certifications/msme-india.jpg";
import dpiitLogo from "../assets/certifications/dpiit-startup-india.webp";
import iecLogo from "../assets/certifications/iec.png";

const companyLinks = [
  ["Capture.expert", "/capture-expert"], ["About Us", "/about"],
  ["Our Team", "/about#our-team"], ["Careers", "/internship"],
  ["News", "/blog"],
];

const serviceLinks = [
  ["AI Consulting", "/services/artificial-intelligence/ai-strategy-consulting"],
  ["Generative AI", "/services/artificial-intelligence/generative-ai-development"],
  ["AI Agents", "/services/artificial-intelligence/ai-agents"],
  ["Automation", "/services/data-automation/workflow-automation"],
  ["Analytics", "/services/data-automation/data-warehousing-analytics"],
  ["Web Development", "/services/software-product-engineering/web-application-development"],
];

const industryLinks = [
  ["Finance", "/industries/finance-banking"], ["Healthcare", "/industries/healthcare-life-sciences"],
  ["Retail", "/industries/retail-ecommerce"], ["Manufacturing", "/industries/manufacturing"],
  ["Education", "/industries/education"], ["Logistics", "/industries/logistics-transportation"],
];

function FooterLinkList({ links }) {
  return <ul className="space-y-3">{links.map(([label, to]) => (
    <li key={label}>
      <Link to={to} className="flex items-center justify-between text-sm text-[#4A5D84] transition hover:text-[#0B5ED7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5ED7]">
        <span>{label}</span><ChevronRight size={14} aria-hidden="true" />
      </Link>
    </li>
  ))}</ul>;
}

function FooterHeading({ children }) {
  return <><h2 className="text-[16px] font-semibold text-[#112B61]">{children}</h2><div className="mt-3 mb-5 h-[3px] w-8 rounded-full bg-[#0B5ED7]" /></>;
}

export function Certifications() {
  const credentials = [
    { image: isoLogo, alt: "ISO 9001 certified", label: "ISO 9001:2015", className: "w-[88px] h-[88px]" },
    { image: udyamMsmeLogo, alt: "Udyam and MSME registration", label: "Udyam Registered", className: "w-[142px] h-[84px]" },
    { image: dpiitLogo, alt: "DPIIT Startup India recognition", label: "DPIIT Recognised", className: "w-[142px] h-[84px]", whiteBackground: true },
    { image: msmeLogo, alt: "MSME India", label: "MSME India", className: "w-[142px] h-[84px]" },
    { image: iecLogo, alt: "IEC registration", label: "IEC Registered", className: "w-[88px] h-[88px]" },
  ];
  return <section className="bg-black" aria-label="Registrations and certifications">
    <div className="mx-auto max-w-[1180px] px-6 py-11">
      <p className="mb-8 text-center text-xs font-bold tracking-[0.2em] text-white/65">OUR REGISTRATIONS & CERTIFICATIONS</p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">{credentials.map((credential) => (
        <div key={credential.label} className="flex flex-col items-center text-center">
          <div className={`flex h-[88px] items-center justify-center ${credential.whiteBackground ? "bg-white px-2" : ""}`}>
            <img src={credential.image} alt={credential.alt} className={`${credential.className} object-contain`} />
          </div>
          <p className="mt-3 text-sm font-bold text-[#E7A700]">{credential.label}</p>
        </div>
      ))}</div>
    </div>
  </section>;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-[#E7EDF7] bg-[#FAFBFF]">
    <div className="mx-auto max-w-[1320px] px-6 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] lg:gap-6">
        <div>
          <Link to="/" aria-label="ARINSA AI MINDS home" className="inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5ED7]">
            <img src={arinsaLogo} alt="ARINSA AI MINDS" className="w-[140px] object-contain" />
          </Link>
          <div className="mt-4 h-[3px] w-16 rounded-full bg-[#0B5ED7]" />
          <p className="mt-5 max-w-[320px] text-sm leading-7 text-[#4A5D84]">We help businesses leverage AI, automation and modern technologies to improve efficiency and accelerate growth.</p>
          <div className="mt-8 flex gap-3" aria-label="ARINSA AI MINDS online links">
            <a href="https://www.linkedin.com/company/arinsaaiminds" target="_blank" rel="noreferrer" aria-label="ARINSA AI MINDS on LinkedIn (opens in a new tab)" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6ECF5] bg-white text-[#0B5ED7] shadow-sm transition-all duration-300 hover:bg-[#0B5ED7] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5ED7]"><FaLinkedinIn size={16} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/newsletters/ai-evolution-arinsa-ai-minds-7311893536457601024" target="_blank" rel="noreferrer" aria-label="ARINSA AI MINDS newsletter (opens in a new tab)" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6ECF5] bg-white text-[#0B5ED7] shadow-sm transition-all duration-300 hover:bg-[#0B5ED7] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5ED7]"><Newspaper size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div><FooterHeading>COMPANY</FooterHeading><FooterLinkList links={companyLinks} /></div>
        <div><FooterHeading>SERVICES</FooterHeading><FooterLinkList links={serviceLinks} /></div>
        <div><FooterHeading>INDUSTRIES</FooterHeading><FooterLinkList links={industryLinks} /></div>
        <div>
          <FooterHeading>CONTACT</FooterHeading>
          <a href="https://www.linkedin.com/newsletters/ai-evolution-arinsa-ai-minds-7311893536457601024" target="_blank" rel="noreferrer" className="flex h-12 items-center justify-between overflow-hidden rounded-xl border border-[#DCE4F2] bg-white pl-4 text-sm font-semibold text-[#4A5D84] transition hover:border-[#0B5ED7] hover:text-[#0B5ED7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5ED7]">
            Read our newsletter<span className="flex h-full w-12 items-center justify-center bg-[#0B5ED7] text-white"><Send size={15} aria-hidden="true" /></span>
          </a>
          <address className="mt-5 space-y-3 border-t border-[#E6ECF5] pt-5 not-italic">
            <a href="mailto:info@arinsaaiminds.com" className="flex items-center gap-3 text-sm text-[#4A5D84] hover:text-[#0B5ED7]"><Mail size={15} className="shrink-0 text-[#0B5ED7]" aria-hidden="true" /><span className="break-all">info@arinsaaiminds.com</span></a>
            <a href="tel:+919123745946" className="flex items-center gap-3 text-sm text-[#4A5D84] hover:text-[#0B5ED7]"><Phone size={15} className="shrink-0 text-[#0B5ED7]" aria-hidden="true" />+91 91237 45946</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm text-[#4A5D84] hover:text-[#0B5ED7]"><MapPin size={15} className="mt-1 shrink-0 text-[#0B5ED7]" aria-hidden="true" />Kolkata, West Bengal, India</a>
          </address>
        </div>
      </div>
    </div>
    <div className="border-t border-[#E6ECF5]">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-6 py-4 lg:flex-row">
        <p className="text-xs text-[#66789A]">© {currentYear} ARINSA AI MINDS. All Rights Reserved.</p>
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-[#66789A]">
          <Link to="/privacy-policy" className="hover:text-[#0B5ED7]">Privacy Policy</Link><Link to="/terms-of-service" className="hover:text-[#0B5ED7]">Terms of Service</Link><Link to="/cookie-policy" className="hover:text-[#0B5ED7]">Cookie Policy</Link>
        </nav>
        <div className="flex items-center gap-2 text-xs text-[#66789A]">Designed with <Heart size={13} className="text-[#0B5ED7]" aria-hidden="true" /> for a smarter future</div>
      </div>
    </div>
  </footer>;
}
