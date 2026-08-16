import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F7F9FC] py-12 md:py-20">

      <div
        className="
        max-w-[1400px]
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        "
      >

        <div
          className="
          relative
          overflow-hidden
          rounded-[24px]
          md:rounded-[32px]
          bg-gradient-to-r
          from-[#071B3B]
          to-[#0B2557]
          px-6
          py-12
          sm:px-10
          md:px-16
          md:py-16
          text-center
          "
        >

          {/* Glow Effects */}

          <div
            className="
            absolute
            -top-20
            -right-20
            w-[220px]
            h-[220px]
            md:w-[320px]
            md:h-[320px]
            bg-[#3B82F6]/10
            rounded-full
            blur-[120px]
            "
          />

          <div
            className="
            absolute
            -bottom-20
            -left-20
            w-[220px]
            h-[220px]
            md:w-[320px]
            md:h-[320px]
            bg-[#60A5FA]/10
            rounded-full
            blur-[120px]
            "
          />

          <div className="relative z-10">

            <p
              className="
              text-[#60A5FA]
              uppercase
              tracking-[3px]
              text-xs
              sm:text-sm
              font-semibold
              "
            >
              Ready To Transform?
            </p>

            <h2
              className="
              text-white
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              mt-4
              leading-tight
              "
            >
              Let's Build Intelligent
              <br />

              <span className="text-[#60A5FA]">
                Solutions Together
              </span>

            </h2>

            <p
              className="
              text-gray-300
              text-sm
              sm:text-base
              lg:text-lg
              mt-6
              max-w-3xl
              mx-auto
              leading-7
              "
            >
              Whether you're exploring Generative AI,
              automation, enterprise applications, or
              digital transformation, we're ready to help
              turn your ideas into measurable business value.
            </p>

            {/* Buttons */}

            <div
              className="
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-4
              mt-8
              "
            >

              <button
                onClick={() => navigate("/contact")}
                className="
                w-full
                sm:w-auto
                bg-[#3B82F6]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                hover:bg-[#2563EB]
                transition-all
                duration-300
                "
              >
                Schedule Consultation
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/services")}
                className="
                w-full
                sm:w-auto
                border
                border-white/20
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-white/10
                transition-all
                duration-300
                "
              >
                View Our Services
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}