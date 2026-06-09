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

              {/* SERVICES */}

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
                      to="/services"
                      className="block px-4 py-3 rounded-xl hover:bg-gray-50"
                    >
                      AI Strategy & Consulting
                    </Link>

                    <Link
                      to="/services"
                      className="block px-4 py-3 rounded-xl hover:bg-gray-50"
                    >
                      Generative AI Solutions
                    </Link>

                    <Link
                      to="/services"
                      className="block px-4 py-3 rounded-xl hover:bg-gray-50"
                    >
                      AI Agents & Automation
                    </Link>

                    <Link
                      to="/services"
                      className="block px-4 py-3 rounded-xl hover:bg-gray-50"
                    >
                      Data Analytics & BI
                    </Link>

                    <Link
                      to="/services"
                      className="block px-4 py-3 rounded-xl hover:bg-gray-50"
                    >
                      Web Development & Mobile Apps
                    </Link>

                    <Link
                      to="/services"
                      className="block px-4 py-3 rounded-xl hover:bg-gray-50"
                    >
                      Cloud & DevOps
                    </Link>

                  </div>
                </div>
              </li>

              <li>
                <Link
                  to="/industries"
                  className="hover:text-[#1E40AF]"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  to="/case-studies"
                  className="hover:text-[#1E40AF]"
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#1E40AF]"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#1E40AF]"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA BUTTON */}

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

            {/* MOBILE MENU BUTTON */}

            <button
              className="lg:hidden"
              onClick={() =>
                setMobileMenuOpen(true)
              }
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}

      {mobileMenuOpen && (
        <div
          className="
          fixed
          inset-0
          bg-black/50
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
        w-[300px]
        bg-white
        z-[70]
        shadow-2xl
        transition-transform
        duration-300
        ${
          mobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >
        <div className="flex justify-between p-5 border-b">
          <h3 className="font-bold text-xl">
            Menu
          </h3>

          <button
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-5">

          <Link
            to="/"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="block"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="block"
          >
            About Us
          </Link>

          <details>
            <summary className="cursor-pointer">
              Services
            </summary>

            <div className="ml-4 mt-3 space-y-3">

              <Link to="/services">AI Strategy & Consulting</Link>
              <Link to="/services">Generative AI Solutions</Link>
              <Link to="/services">AI Agents & Automation</Link>
              <Link to="/services">Data Analytics & BI</Link>
              <Link to="/services">Web Development & Mobile Apps</Link>
              <Link to="/services">Cloud & DevOps</Link>

            </div>
          </details>

          <Link to="/industries">
            Industries
          </Link>

          <Link to="/case-studies">
            Case Studies
          </Link>

          <Link to="/blog">
            Blog
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <button
            onClick={() => {
              setShowQuoteModal(true);
              setMobileMenuOpen(false);
            }}
            className="
            w-full
            bg-[#1E40AF]
            text-white
            py-3
            rounded-xl
            font-semibold
            "
          >
            Get A Quote
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
