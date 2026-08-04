import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import QuoteModal from "./QuoteModal";
import arinsaLogo from "../assets/arinsa-logo.png";

export default function Navbar() {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [showQuoteModal, setShowQuoteModal] =
    useState(false);

  return (
    <>
      <nav
        className="
        bg-white
        border-b
        border-gray-200
        sticky
        top-0
        z-50
        shadow-sm
        "
      >
        <div
          className="
          max-w-[1500px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          "
        >
          <div
            className="
            flex
            items-center
            justify-between
            h-[70px]
            sm:h-[80px]
            lg:h-[90px]
            "
          >
            {/* LOGO */}

            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src={arinsaLogo}
                alt="ARINSA AI MINDS"
                className="
                h-12
                sm:h-14
                md:h-16
                lg:h-20
                w-auto
                object-contain
                "
              />
            </Link>

            {/* DESKTOP MENU */}

            <ul
              className="
              hidden
              lg:flex
              items-center
              gap-8
              text-[#071B3B]
              font-medium
              "
            >
              <li>
                <Link
                  to="/"
                  className={`hover:text-[#1E40AF] ${
                    location.pathname === "/"
                      ? "text-[#1E40AF] font-semibold"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className={`hover:text-[#1E40AF] ${
                    location.pathname === "/about"
                      ? "text-[#1E40AF] font-semibold"
                      : ""
                  }`}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/internship"
                  className={`hover:text-[#1E40AF] ${
                    location.pathname.startsWith("/internship")
                      ? "text-[#1E40AF] font-semibold"
                      : ""
                  }`}
                >
                  Internship
                </Link>
              </li>

              <li className="relative group">
                <Link
                  to="/services"
                  className="
                  flex items-center gap-1
                  hover:text-[#1E40AF]
                  "
                >
                  Services
                  <ChevronDown size={16} />
                </Link>

                <div
                  className="
                  absolute
                  top-full
                  left-0
                  mt-4
                  w-[340px]
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  border
                  border-gray-100
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-300
                  z-50
                  "
                >
                 <div className="p-3">

  <Link
    to="/services/ai-strategy"
    className="block px-4 py-3 rounded-xl hover:bg-gray-50"
  >
    AI Strategy & Consulting
  </Link>

  <Link
    to="/services/generative-ai"
    className="block px-4 py-3 rounded-xl hover:bg-gray-50"
  >
    Generative AI Solutions
  </Link>

  <Link
    to="/services/ai-agents"
    className="block px-4 py-3 rounded-xl hover:bg-gray-50"
  >
    AI Agents & Automation
  </Link>

  <Link
    to="/services/data-analytics"
    className="block px-4 py-3 rounded-xl hover:bg-gray-50"
  >
    Data Analytics & BI
  </Link>

  <Link
    to="/services/web-development"
    className="block px-4 py-3 rounded-xl hover:bg-gray-50"
  >
    Web Development & Mobile Apps
  </Link>

  <Link
    to="/services/cloud-devops"
    className="block px-4 py-3 rounded-xl hover:bg-gray-50"
  >
    Cloud & DevOps
  </Link>

  <Link
    to="/services"
    className="mt-2 block px-4 py-3 rounded-xl bg-blue-50 text-[#1E40AF] font-semibold"
  >
    View all services →
  </Link>

</div>
                </div>
              </li>

              <li className="relative group">
                <Link
                  to="/industries"
                  className={`flex items-center gap-1 hover:text-[#1E40AF] ${
                    location.pathname.startsWith("/industries")
                      ? "text-[#1E40AF] font-semibold"
                      : ""
                  }`}
                >
                  Industries
                  <ChevronDown size={16} />
                </Link>

                <div className="absolute top-full left-0 mt-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-3">
                    <p className="px-4 pt-2 pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Explore sectors</p>
                    {[
                      ["Finance & Banking", "/industries/finance-banking"], ["Retail & E-Commerce", "/industries/retail-ecommerce"], ["Healthcare & Life Sciences", "/industries/healthcare-life-sciences"], ["Manufacturing", "/industries/manufacturing"], ["Education", "/industries/education"], ["Insurance", "/industries/insurance"], ["Logistics & Transportation", "/industries/logistics-transportation"], ["Telecommunications", "/industries/telecommunications"], ["Real Estate", "/industries/real-estate"], ["Government", "/industries/government"],
                    ].map(([name, path]) => (
                      <Link key={path} to={path} className="block px-4 py-2.5 rounded-xl hover:bg-gray-50">{name}</Link>
                    ))}
                    <Link to="/industries" className="mt-2 block px-4 py-3 rounded-xl bg-blue-50 text-[#1E40AF] font-semibold">View all industries →</Link>
                  </div>
                </div>
              </li>

              <li className="relative group">
                <Link
                  to="/case-studies"
                  className={`flex items-center gap-1 hover:text-[#1E40AF] ${
                    location.pathname.startsWith("/case-studies")
                      ? "text-[#1E40AF] font-semibold"
                      : ""
                  }`}
                >
                  Case Studies
                  <ChevronDown size={16} />
                </Link>
                <div className="absolute top-full left-0 mt-4 w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"><div className="p-3"><p className="px-4 pt-2 pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Featured work</p>{[["AI-Powered Fraud Detection","/case-studies/ai-powered-fraud-detection"],["Recommendation Engine","/case-studies/personalized-recommendation-engine"],["Medical Image Analysis","/case-studies/medical-image-analysis"],["Manufacturing Knowledge Search","/case-studies/parts-intelligence-platform"],["Enterprise Knowledge Assistant","/case-studies/enterprise-knowledge-assistant"],["Procurement Automation","/case-studies/procurement-automation-system"]].map(([name,path])=><Link key={path} to={path} className="block px-4 py-2.5 rounded-xl hover:bg-gray-50">{name}</Link>)}<Link to="/case-studies" className="mt-2 block px-4 py-3 rounded-xl bg-blue-50 text-[#1E40AF] font-semibold">View all case studies →</Link></div></div>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={`hover:text-[#1E40AF] ${
                    location.pathname === "/blog"
                      ? "text-[#1E40AF] font-semibold"
                      : ""
                  }`}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={`hover:text-[#1E40AF] ${
                    location.pathname === "/contact"
                      ? "text-[#1E40AF] font-semibold"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* DESKTOP CTA */}

            <button
              onClick={() =>
                setShowQuoteModal(true)
              }
              className="
              hidden
              lg:flex
              items-center
              gap-2
              bg-[#1E40AF]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-[#1D4ED8]
              transition-all
              "
            >
              Get A Quote
              <ArrowRight size={18} />
            </button>

            {/* MOBILE BUTTON */}

            <button
              className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              "
              onClick={() =>
                setMobileMenuOpen(true)
              }
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}

      {mobileMenuOpen && (
        <div
          className="
          fixed
          inset-0
          bg-black/60
          backdrop-blur-sm
          z-[60]
          "
          onClick={() =>
            setMobileMenuOpen(false)
          }
        />
      )}

      {/* MOBILE DRAWER */}

      <div
        className={`
        fixed
        top-0
        right-0
        h-full
        w-[85%]
        max-w-[380px]
        bg-white
        z-[70]
        shadow-[0_0_40px_rgba(0,0,0,0.2)]
        transition-transform
        duration-500
        ease-in-out
        overflow-y-auto
        ${
          mobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >
        <div className="flex items-center justify-between p-5 border-b">

          <img
            src={arinsaLogo}
            alt="ARINSA AI MINDS"
            className="h-12 object-contain"
          />

          <button
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="
            w-10
            h-10
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
            "
          >
            <X size={22} />
          </button>

        </div>

        <div className="p-6">

          <div className="space-y-2">

            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Internship", path: "/internship" },
              { name: "Industries", path: "/industries" },
              { name: "Case Studies", path: "/case-studies" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className={`
                  block
                  px-4
                  py-3
                  rounded-xl
                  transition-all
                  ${
                    location.pathname === item.path
                      ? "bg-[#1E40AF] text-white"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}

          </div>

          <div className="mt-6 border-t pt-6">

            <h4 className="text-sm font-bold text-gray-500 uppercase mb-4">
              Services
            </h4>

            <div className="space-y-2">

              <div className="space-y-2">

  <Link
    to="/services/ai-strategy"
    onClick={() => setMobileMenuOpen(false)}
    className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
  >
    AI Strategy & Consulting
  </Link>

  <Link
    to="/services/generative-ai"
    onClick={() => setMobileMenuOpen(false)}
    className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
  >
    Generative AI Solutions
  </Link>

  <Link
    to="/services/ai-agents"
    onClick={() => setMobileMenuOpen(false)}
    className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
  >
    AI Agents & Automation
  </Link>

  <Link
    to="/services/data-analytics"
    onClick={() => setMobileMenuOpen(false)}
    className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
  >
    Data Analytics & BI
  </Link>

  <Link
    to="/services/web-development"
    onClick={() => setMobileMenuOpen(false)}
    className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
  >
    Web Development & Mobile Apps
  </Link>

  <Link
    to="/services/cloud-devops"
    onClick={() => setMobileMenuOpen(false)}
    className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
  >
    Cloud & DevOps
  </Link>

  <Link
    to="/services"
    onClick={() => setMobileMenuOpen(false)}
    className="block px-4 py-2 rounded-lg text-[#1E40AF] font-semibold hover:bg-blue-50"
  >
    View all services
  </Link>

</div>
            </div>

          </div>

          <div className="mt-6 border-t pt-6">
            <h4 className="text-sm font-bold text-gray-500 uppercase mb-4">Industries</h4>
            <div className="space-y-1">
              {[
                ["Finance & Banking", "/industries/finance-banking"], ["Retail & E-Commerce", "/industries/retail-ecommerce"], ["Healthcare & Life Sciences", "/industries/healthcare-life-sciences"], ["Manufacturing", "/industries/manufacturing"], ["Education", "/industries/education"], ["Insurance", "/industries/insurance"], ["Logistics & Transportation", "/industries/logistics-transportation"], ["Telecommunications", "/industries/telecommunications"], ["Real Estate", "/industries/real-estate"], ["Government", "/industries/government"], ["View all industries", "/industries"],
              ].map(([name, path]) => (
                <Link key={path} to={path} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">{name}</Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setShowQuoteModal(true);
              setMobileMenuOpen(false);
            }}
            className="
            mt-8
            w-full
            bg-[#1E40AF]
            text-white
            py-4
            rounded-xl
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            hover:bg-[#1D4ED8]
            transition-all
            "
          >
            Get A Quote
            <ArrowRight size={18} />
          </button>

        </div>
      </div>

      <QuoteModal
        isOpen={showQuoteModal}
        onClose={() =>
          setShowQuoteModal(false)
        }
      />
    </>
  );
}
