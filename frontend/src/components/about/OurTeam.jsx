import { FaLinkedinIn } from "react-icons/fa6";
import aritriPhoto from "../../assets/team/aritri-chakraborty.png";
import sayanPhoto from "../../assets/team/sayan-banerjee.png";

const founders = [
  {
    name: "Aritri Chakraborty",
    role: "Co-Founder & Director",
    initials: "AC",
    photo: aritriPhoto,
    linkedin: "https://www.linkedin.com/in/aritri-chakraborty-50a595267",
    description:
      "Aritri leads business strategy, innovation and organizational growth at ARINSA AI MINDS, shaping ideas into purposeful AI-powered products and solutions that create lasting value for clients.",
  },
  {
    name: "Sayan Banerjee",
    role: "Co-Founder & Director",
    initials: "SB",
    photo: sayanPhoto,
    linkedin: "https://www.linkedin.com/in/sayan-banerjee-886873126",
    description:
      "Sayan leads technology, AI, product development and engineering at ARINSA AI MINDS, guiding the creation of secure, scalable AI-powered solutions built for real-world business needs.",
  },
];

export default function OurTeam() {
  return (
    <section id="our-team" className="scroll-mt-24 bg-[#F7F9FC] py-20 lg:py-24" aria-labelledby="our-team-title">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-wider text-[#3B82F6]">
            The people behind ARINSA AI MINDS
          </p>
          <h2 id="our-team-title" className="mt-4 text-4xl font-bold text-[#08192F] sm:text-5xl">
            Our Team
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-[#3B82F6]" />
        </header>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-8 md:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group h-full overflow-hidden rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/50 hover:shadow-xl sm:p-8"
            >
              <div className="flex h-full flex-col gap-7 sm:flex-row sm:items-start">
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="h-28 w-28 shrink-0 rounded-3xl object-cover ring-4 ring-[#3B82F6]/10"
                />
                <div className="flex flex-1 flex-col">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#3B82F6]">
                    {founder.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#08192F] sm:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="mt-5 leading-7 text-gray-600">{founder.description}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${founder.name} on LinkedIn (opens in a new tab)`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#3B82F6] transition-colors hover:border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B82F6]"
                    >
                      <FaLinkedinIn size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
