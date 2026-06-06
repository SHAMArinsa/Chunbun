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
  useNavigate,
} from "react-router-dom";

import arinsaLogo from "../assets/arinsa-logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

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
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`
                    flex items-center gap-1
                    hover:text-[#1E40AF]
                    transition-all duration-300
                    ${
                      location.pathname === item.path
                        ? "text-[#1E40AF] font-semibold"
                        : ""
                    }
                  `}
                  >
                    {item.name}

                    {item.dropdown && (
                      <ChevronDown size={16} />
                    )}
                  </Link>

                  {location.pathname === item.path && (
                    <div
                      className="
                      absolute
                      -bottom-3
                      left-0
                      w-full
                      h-[3px]
                      rounded-full
                      bg-[#1E40AF]
                      "
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* DESKTOP BUTTON */}

            <button
              onClick={() => navigate("/contact")}
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
              Schedule Consultation
              <ArrowRight size={18} />
            </button>

            {/* MOBILE HAMBURGER */}

            <button
              className="
              lg:hidden
              text-[#071B3B]
              "
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
        w-[280px]
        sm:w-[320px]
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
        <div
          className="
          flex
          items-center
          justify-between
          p-5
          border-b
          "
        >
          <h3
            className="
            text-xl
            font-bold
            text-[#071B3B]
            "
          >
            Menu
          </h3>

          <button
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            <X size={26} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
              block
              text-base
              sm:text-lg
              font-medium
              text-[#071B3B]
              hover:text-[#1E40AF]
              "
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => {
              navigate("/contact");
              setMobileMenuOpen(false);
            }}
            className="
            w-full
            mt-6
            bg-[#1E40AF]
            text-white
            py-3
            rounded-xl
            font-semibold
            "
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </>
  );
}