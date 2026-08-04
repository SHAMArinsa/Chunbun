import {
  ChevronRight,
  Send,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import arinsaLogo from "../assets/arinsa-logo.png";
import udyamMsmeLogo from "../assets/certifications/udyam-msme.png";
import isoLogo from "../assets/certifications/iso-9001.png";
import msmeLogo from "../assets/certifications/msme-india.jpg";
import dpiitLogo from "../assets/certifications/dpiit-startup-india.webp";
import iecLogo from "../assets/certifications/iec.png";

export function Certifications() {
  const credentials = [
    { image: isoLogo, alt: "ISO 9001 certified", label: "ISO 9001:2015", className: "w-[88px] h-[88px]" },
    { image: udyamMsmeLogo, alt: "Udyam and MSME registration", label: "Udyam Registered", className: "w-[142px] h-[84px]" },
    { image: dpiitLogo, alt: "DPIIT Startup India recognition", label: "DPIIT Recognised", className: "w-[142px] h-[84px]", whiteBackground: true },
    { image: msmeLogo, alt: "MSME India", label: "MSME India", className: "w-[142px] h-[84px]" },
    { image: iecLogo, alt: "IEC registration", label: "IEC Registered", className: "w-[88px] h-[88px]" },
  ];

  return (
    <section className="bg-black" aria-label="Registrations and certifications">
      <div className="max-w-[1180px] mx-auto px-6 py-11">
        <p className="mb-8 text-center text-xs font-bold tracking-[0.2em] text-white/65">
          OUR REGISTRATIONS & CERTIFICATIONS
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {credentials.map((credential) => (
            <div key={credential.label} className="flex flex-col items-center text-center">
              <div className={`h-[88px] flex items-center justify-center ${credential.whiteBackground ? "bg-white px-2" : ""}`}>
                <img src={credential.image} alt={credential.alt} className={`${credential.className} object-contain`} />
              </div>
              <p className="mt-3 text-sm font-bold text-[#E7A700]">{credential.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#FAFBFF] border-t border-[#E7EDF7]">

      {/* MAIN FOOTER */}

      <div className="max-w-[1320px] mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-6">

          {/* LOGO */}

          <div>

            <img
              src={arinsaLogo}
              alt="Arinsa AI Minds"
              className="w-[140px] object-contain"
            />

            <div className="mt-4 w-16 h-[3px] bg-[#0B5ED7] rounded-full"></div>

            <p className="mt-5 text-[#4A5D84] text-sm leading-7 max-w-[320px]">
              We help businesses leverage AI, automation and modern
              technologies to improve efficiency and accelerate growth.
            </p>

            <div className="flex gap-3 mt-8">

              {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                      w-10 h-10
                      rounded-full
                      bg-white
                      border border-[#E6ECF5]
                      flex items-center justify-center
                      text-[#0B5ED7]
                      shadow-sm
                      hover:bg-[#0B5ED7]
                      hover:text-white
                      transition-all duration-300
                      cursor-pointer
                    "
                  >
                    <Icon size={16} />
                  </div>
                )
              )}

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-[16px] font-semibold text-[#112B61]">
              COMPANY
            </h3>

            <div className="w-8 h-[3px] bg-[#0B5ED7] mt-3 mb-5 rounded-full"></div>

            <ul className="space-y-3">

              <li>
                <Link to="/capture-expert" className="flex justify-between items-center text-sm text-[#4A5D84] hover:text-[#0B5ED7] transition">
                  Capture.expert
                  <ChevronRight size={14} />
                </Link>
              </li>

              {[
                "About Us",
                "Our Team",
                "Careers",
                "Partners",
                "News",
              ].map((item) => (
                <li
                  key={item}
                  className="flex justify-between items-center text-sm text-[#4A5D84] hover:text-[#0B5ED7] cursor-pointer transition"
                >
                  {item}
                  <ChevronRight size={14} />
                </li>
              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-[16px] font-semibold text-[#112B61]">
              SERVICES
            </h3>

            <div className="w-8 h-[3px] bg-[#0B5ED7] mt-3 mb-5 rounded-full"></div>

            <ul className="space-y-3">

              {[
                "AI Consulting",
                "Generative AI",
                "AI Agents",
                "Automation",
                "Analytics",
                "Web Development",
              ].map((item) => (
                <li
                  key={item}
                  className="flex justify-between items-center text-sm text-[#4A5D84] hover:text-[#0B5ED7] cursor-pointer transition"
                >
                  {item}
                  <ChevronRight size={14} />
                </li>
              ))}

            </ul>

          </div>

          {/* INDUSTRIES */}

          <div>

            <h3 className="text-[16px] font-semibold text-[#112B61]">
              INDUSTRIES
            </h3>

            <div className="w-8 h-[3px] bg-[#0B5ED7] mt-3 mb-5 rounded-full"></div>

            <ul className="space-y-3">

              {[
                "Finance",
                "Healthcare",
                "Retail",
                "Manufacturing",
                "Education",
                "Logistics",
              ].map((item) => (
                <li
                  key={item}
                  className="flex justify-between items-center text-sm text-[#4A5D84] hover:text-[#0B5ED7] cursor-pointer transition"
                >
                  {item}
                  <ChevronRight size={14} />
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-[16px] font-semibold text-[#112B61]">
              CONTACT
            </h3>

            <div className="w-8 h-[3px] bg-[#0B5ED7] mt-3 mb-5 rounded-full"></div>

            <div className="flex h-[48px] border border-[#DCE4F2] rounded-xl overflow-hidden bg-white">

              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 text-sm outline-none"
              />

              <button className="w-12 bg-[#0B5ED7] flex items-center justify-center text-white">
                <Send size={15} />
              </button>

            </div>

            <div className="border-t border-[#E6ECF5] mt-5 pt-5 space-y-3">

              <div className="flex items-center gap-3 text-sm text-[#4A5D84]">
                <Mail size={15} className="text-[#0B5ED7]" />
                info@arinsaaiminds.com
              </div>

              <div className="flex items-center gap-3 text-sm text-[#4A5D84]">
                <Phone size={15} className="text-[#0B5ED7]" />
                +91 9123745946
              </div>

              <div className="flex items-start gap-3 text-sm text-[#4A5D84]">
                <MapPin size={15} className="text-[#0B5ED7] mt-1" />
                Kolkata, West Bengal
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="border-t border-[#E6ECF5]">

        <div className="max-w-[1320px] mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-3">

          <p className="text-xs text-[#66789A]">
            © 2026 Arinsa AI Minds. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-xs text-[#66789A]">
            <span className="cursor-pointer hover:text-[#0B5ED7]">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-[#0B5ED7]">
              Terms of Service
            </span>

            <span className="cursor-pointer hover:text-[#0B5ED7]">
              Cookie Policy
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#66789A]">
            Designed with
            <Heart size={13} className="text-[#0B5ED7]" />
            for a smarter future
          </div>

        </div>

      </div>

    </footer>
  );
}
