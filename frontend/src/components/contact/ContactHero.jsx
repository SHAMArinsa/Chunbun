import contactImg from "../../assets/contact_img.png";

export default function ContactHero() {
  return (
    <section
  className="
  relative
  h-[320px]
  lg:h-[340px]
  overflow-hidden
  "
>
      {/* Background Image */}

      <img
        src={contactImg}
        alt="Contact Banner"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-[#03142E]/70
        "
      />

      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-[1600px]
        mx-auto
        px-8
        h-full
        flex
        items-center
        "
      >
        <div className="max-w-[620px]">

          <p
            className="
            text-[#3B82F6]
            uppercase
            tracking-[2px]
            text-lg
            font-medium
            mb-3
            "
          >
            Contact Us
          </p>

          <h1
            className="
            text-white
            text-[48px]
            lg:text-[60px]
            leading-[58px]
            lg:leading-[70px]
            font-bold
            "
          >
            Let's Build Intelligent
            <br />

            <span className="text-[#3B82F6]">
              Solutions Together.
            </span>
          </h1>

          <p
            className="
            text-white/80
            text-lg
            lg:text-xl
            leading-8
            
            mt-8
            max-w-[700px]
            "
          >
            Have a project in mind or need expert guidance?
            We're here to help you unlock the power of AI
            and drive real business impact.
          </p>

        </div>
      </div>
    </section>
  );
}