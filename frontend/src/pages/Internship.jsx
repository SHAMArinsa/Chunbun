import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CircleDollarSign,
  Code2,
  CloudUpload,
  Info,
  Rocket,
  Sparkles,
  Trophy,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import internshipHero from "../assets/internship-hero-v2.png";

import { faq, plans } from "../data/internship";

import {
  Breadcrumbs,
  CTA,
  FAQ,
  SectionHeader,
} from "../components/services/ServiceUI";


/* ============================================================
   PROGRAM NOTICE
============================================================ */

const notice = (
  <div className="border border-blue-200 bg-[#f3f7ff] rounded-2xl p-5 md:p-6 text-[#071B3B] flex gap-4">

    <Info
      className="text-[#1559bd] shrink-0 mt-0.5"
      size={27}
    />

    <div>
      <p className="font-bold text-base">
        Important program notice
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-700">
        Programs are primarily self-paced and delivered through
        structured learning content, coding assignments, assessments
        and project work. Live classes and dedicated one-to-one
        mentorship are not included unless specifically stated for
        an applicable program.
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-700">
        Certificates are awarded only after successful completion
        of the applicable program requirements and evaluation.
        Interview and placement opportunities are subject to the
        applicable program terms, eligibility and participant
        performance.
      </p>
    </div>

  </div>
);


/* ============================================================
   PAYMENT NOTE
============================================================ */

const pricing = (
  <div className="border border-amber-200 bg-[#fffaf0] rounded-2xl p-5 md:p-6 text-[#071B3B] flex gap-4">

    <CircleDollarSign
      className="text-amber-500 shrink-0 mt-0.5"
      size={27}
    />

    <div>

      <p className="font-bold text-base">
        Pricing and payment note
      </p>

      <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700 list-disc pl-4">

        <li>
          GST is applicable to Indian participants as per
          prevailing Indian tax regulations.
        </li>

        <li>
          International participants are charged in USD.
        </li>

        <li>
          Payment gateway or currency-conversion charges may be
          determined by the participant’s bank or payment provider.
        </li>

        <li>
          Registration is confirmed only after successful payment
          verification.
        </li>

      </ul>

    </div>

  </div>
);


/* ============================================================
   HERO STAGES
============================================================ */

const stages = [
  {
    name: "Learn",
    text: "Self-paced learning and real-world concepts",
    icon: BookOpen,
    tone: "from-[#123f91] to-[#092756] border-blue-400/60",
  },

  {
    name: "Build",
    text: "Work on hands-on projects and assignments",
    icon: Code2,
    tone: "from-[#4a277c] to-[#20164b] border-violet-400/70",
  },

  {
    name: "Submit",
    text: "Submit your work and get evaluated",
    icon: CloudUpload,
    tone: "from-[#076476] to-[#06344d] border-cyan-400/70",
  },

  {
    name: "Evaluate",
    text: "Receive feedback and improve your skills",
    icon: Trophy,
    tone: "from-[#8d4127] to-[#372042] border-orange-400/70",
  },
];


/* ============================================================
   PROGRAM CARD VISUALS
============================================================ */

const programStyles = [
  {
    top: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconText: "text-amber-600",
    button: "bg-[#071B3B] hover:bg-[#1559bd]",
  },

  {
    top: "bg-slate-500",
    iconBg: "bg-slate-100",
    iconText: "text-slate-600",
    button: "bg-[#071B3B] hover:bg-[#1559bd]",
  },

  {
    top: "bg-[#1559bd]",
    iconBg: "bg-blue-50",
    iconText: "text-[#1559bd]",
    button: "bg-[#1559bd] hover:bg-[#0e479f]",
  },

  {
    top: "bg-violet-600",
    iconBg: "bg-violet-50",
    iconText: "text-violet-600",
    button: "bg-violet-700 hover:bg-violet-800",
  },
];


/* ============================================================
   PROGRAM ICONS
============================================================ */

const programIcons = [
  Rocket,
  BriefcaseBusiness,
  Sparkles,
  Trophy,
];


/* ============================================================
   INTERNSHIP HOME
============================================================ */

export function InternshipHome() {
  return (
    <>
      <SEO
        title="Industry Internship Program | ARINSA AI MINDS"
        description="A self-paced, project-based internship experience for practical software and AI development skills."
        canonical="/internship"
      />

      <Navbar />

      <main>

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#031534] text-white">

          <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_78%_20%,rgba(37,99,235,.45),transparent_25%),radial-gradient(circle_at_4%_90%,rgba(80,73,255,.4),transparent_30%),linear-gradient(125deg,transparent_70%,rgba(0,122,255,.17))]" />

          <div className="absolute -left-40 bottom-[-11rem] h-96 w-[52rem] rounded-[100%] border border-blue-400/25 blur-[1px]" />

          <div className="relative max-w-[1320px] mx-auto px-6 py-14 lg:py-[52px] grid lg:grid-cols-[300px_minmax(340px,430px)_minmax(410px,1fr)] xl:grid-cols-[340px_420px_1fr] gap-7 xl:gap-10 items-center">

            {/* Hero image */}

            <div className="hidden lg:block self-end -ml-10 xl:-ml-16">

              <img
                src={internshipHero}
                alt="Laptop displaying code for internship project work"
                className="w-[390px] xl:w-[455px] max-w-none mix-blend-screen [mask-image:radial-gradient(ellipse_at_35%_100%,black_28%,transparent_72%)]"
              />

            </div>


            {/* Hero text */}

            <div className="relative">

              <p className="text-[#65a7ff] uppercase tracking-[.17em] text-[11px] md:text-xs font-bold">
                ARINSA AI MINDS INDUSTRY INTERNSHIP PROGRAM™
              </p>

              <h1 className="max-w-[630px] text-4xl md:text-5xl xl:text-[3.45rem] leading-[1.08] font-bold mt-4">
                Build practical technology skills through structured project work.
              </h1>

              <p className="max-w-[620px] text-base md:text-[17px] leading-7 text-blue-100/90 mt-5">
                Develop software and AI development experience through
                self-paced learning content, coding assignments,
                assessments and project-based work.
              </p>

              <div className="flex gap-4 flex-wrap mt-7">

                <Link
                  to="/internship/register"
                  className="bg-[#1954e8] hover:bg-[#2b64f0] px-5 py-3 rounded-lg font-bold text-sm flex items-center gap-3 shadow-lg shadow-blue-950/30 transition-colors"
                >
                  Register for internship
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="#plans"
                  className="border border-white/65 hover:bg-white/10 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
                >
                  Compare programs
                </a>

              </div>

            </div>


            {/* Hero stages */}

            <div className="grid grid-cols-2 gap-4 max-w-[520px] justify-self-center lg:justify-self-end w-full">

              {stages.map(
                ({
                  name,
                  text,
                  icon: Icon,
                  tone,
                }) => (

                  <article
                    key={name}
                    className={`min-h-[180px] md:min-h-[198px] rounded-2xl border bg-gradient-to-br ${tone} p-5 md:p-6 flex flex-col shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_15px_45px_rgba(0,0,0,.2)]`}
                  >

                    <Icon
                      size={54}
                      strokeWidth={1.35}
                      className="text-blue-100 drop-shadow-[0_0_16px_rgba(73,159,255,.8)]"
                    />

                    <h2 className="font-bold text-lg mt-auto">
                      {name}
                    </h2>

                    <p className="text-blue-50/90 text-sm leading-5 mt-1 max-w-[160px]">
                      {text}
                    </p>

                    <span className="self-end -mt-6 border border-white/60 rounded-full p-1.5">
                      <ArrowRight size={15} />
                    </span>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* ======================================================
            PROGRAM NOTICE + PAYMENT
        ====================================================== */}

        <section className="py-6 md:py-8 bg-white">

          <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-5">

            {notice}

            {pricing}

          </div>

        </section>


        {/* ======================================================
            PROGRAMS
        ====================================================== */}

        <section
          id="plans"
          className="relative overflow-hidden bg-[#f7f9fc] py-20 md:py-24"
        >

          {/* Background decoration */}

          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

            <div className="absolute bottom-[-180px] left-[-100px] h-[420px] w-[420px] rounded-full bg-indigo-100/30 blur-3xl" />

          </div>


          <div className="relative max-w-[1380px] mx-auto px-6">

            {/* Header */}

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1559bd]">
                Choose your program
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl lg:text-[46px] leading-tight font-bold tracking-tight text-[#071B3B]">
                Choose the right program for your journey.
              </h2>

              <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 text-slate-600">
                From foundational learning to advanced product
                development and long-term career preparation, choose
                the level that matches your goals.
              </p>

            </div>


            {/* Four cards */}

            <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">

              {plans.map((plan, index) => {

                const style =
                  programStyles[index] || programStyles[0];

                const Icon =
                  programIcons[index] || Rocket;

                return (
                  <article
                    key={plan.slug}
                    className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      plan.highlighted
                        ? "border-[#1559bd] shadow-[0_20px_50px_rgba(21,89,189,0.14)]"
                        : "border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
                    } hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]`}
                  >

                    {/* Accent */}

                    <div
                      className={`h-1.5 w-full ${style.top}`}
                    />


                    <div className="flex flex-1 flex-col p-6">

                      {/* Number + category */}

                      <div className="flex items-center justify-between gap-3">

                        <span className="text-[11px] font-bold tracking-[0.16em] text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                          {plan.category}
                        </span>

                      </div>


                      {/* Badge */}

                      {plan.badge && (
                        <div className="mt-4 inline-flex w-fit rounded-full bg-[#eaf2ff] px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#1559bd]">
                          {plan.badge}
                        </div>
                      )}


                      {/* Icon */}

                      <div
                        className={`mt-5 flex h-11 w-11 items-center justify-center rounded-xl ${style.iconBg} ${style.iconText}`}
                      >
                        <Icon
                          size={21}
                          strokeWidth={2}
                        />
                      </div>


                      {/* Name */}

                      <h3 className="mt-5 min-h-[58px] text-[23px] font-bold leading-tight text-[#071B3B]">
                        {plan.name}
                      </h3>


                      {/* Duration */}

                      <div className="mt-2 flex items-center gap-2">

                        <span className="h-2 w-2 rounded-full bg-[#1559bd]" />

                        <span className="text-sm font-semibold text-[#1559bd]">
                          {plan.duration}
                        </span>

                      </div>


                      {/* Program title */}

                      <p className="mt-4 min-h-[48px] text-sm font-semibold leading-6 text-slate-800">
                        {plan.title}
                      </p>


                      {/* Description */}

                      <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-500">
                        {plan.description}
                      </p>


                      {/* Divider */}

                      <div className="my-5 h-px bg-slate-100" />


                      {/* Highlights */}

                      <div>

                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Program includes
                        </p>

                        <ul className="mt-4 space-y-2.5">

                          {plan.features
                            .slice(0, 6)
                            .map((feature) => (

                              <li
                                key={feature}
                                className="flex gap-2.5 text-sm leading-5 text-slate-600"
                              >

                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1559bd]" />

                                <span>
                                  {feature}
                                </span>

                              </li>

                            ))}

                        </ul>


                        {plan.features.length > 6 && (
                          <p className="mt-4 text-xs font-semibold text-[#1559bd]">
                            + {plan.features.length - 6} more program benefits
                          </p>
                        )}

                      </div>


                      {/* CTA */}

                      <div className="mt-auto pt-7">

                        <Link
                          to={`/internship/register?plan=${plan.slug}`}
                          className={`flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 ${style.button}`}
                        >
                          Choose{" "}
                          {plan.name
                            .replace(" Internship", "")
                            .replace(" Program", "")}

                          <ArrowRight
                            size={16}
                            className="ml-2"
                          />
                        </Link>

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>


            {/* Note */}

            <div className="mt-8 rounded-xl border border-blue-100 bg-white px-5 py-4 text-center shadow-sm">

              <p className="text-sm text-slate-500">
                Program coverage, project assignments and eligibility
                may vary by selected track and participant performance.
              </p>

            </div>

          </div>

        </section>


        {/* ======================================================
            TECHNOLOGIES
        ====================================================== */}

        <section className="py-20 bg-white">

          <div className="max-w-[1320px] mx-auto px-6">

            <SectionHeader
              eyebrow="Technologies and skills"
              title="Coverage depends on your selected program and assigned track."
              body="Participation does not guarantee mastery of every listed technology."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">

              {[
                [
                  "Programming & Backend",
                  "Python, FastAPI, REST APIs",
                ],

                [
                  "Frontend",
                  "React.js, Next.js, TypeScript",
                ],

                [
                  "Databases",
                  "SQL",
                ],

                [
                  "Workflow",
                  "Git, GitHub, documentation, code submission",
                ],

                [
                  "AI",
                  "AI applications, LLMs, prompt engineering, API integration",
                ],
              ].map(([title, description]) => (

                <div
                  key={title}
                  className="border border-slate-200 rounded-xl p-5 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
                >

                  <h3 className="font-bold text-[#071B3B]">
                    {title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-6 mt-3">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ======================================================
            JOURNEY
        ====================================================== */}

        <section className="py-20 bg-[#071B3B] text-white">

          <div className="max-w-[1320px] mx-auto px-6">

            <SectionHeader
              light
              eyebrow="Registration and completion journey"
              title="Clear stages, recorded status."
            />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3 mt-10">

              {[
                "Register",
                "Access portal",
                "Complete learning",
                "Complete assignments",
                "Build projects",
                "Submit work",
                "Final assessment",
                "Certificate eligibility",
                "Career / interview eligibility",
              ].map((item, index) => (

                <div
                  key={item}
                  className="border border-white/15 rounded-xl p-4 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >

                  <span className="text-blue-200 font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-semibold mt-5 text-sm leading-5">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ======================================================
            FAQ
        ====================================================== */}

        <section className="py-20 bg-white">

          <div className="max-w-[900px] mx-auto px-6">

            <SectionHeader
              eyebrow="Internship FAQ"
              title="Important program information."
            />

            <div className="mt-10">
              <FAQ items={faq} />
            </div>

            <Link
              to="/internship/faq"
              className="inline-block mt-8 text-[#1559bd] font-bold hover:underline"
            >
              View all program FAQs →
            </Link>

          </div>

        </section>


        {/* ======================================================
            CTA
        ====================================================== */}

        <CTA
          title="Start your practical project journey."
          body="Review the program requirements and choose the program that fits your current development goals."
        />

      </main>

      <Footer />
    </>
  );
}


/* ============================================================
   PROGRAM DETAIL PAGE
============================================================ */

export function InternshipPlan() {
  const { planSlug } = useParams();

  const plan = plans.find(
    (item) => item.slug === planSlug
  );

  if (!plan) {
    return <Navigate to="/internship" replace />;
  }

  return (
    <>
      <SEO
        title={`${plan.name} | ARINSA AI MINDS`}
        description={plan.description}
        canonical={`/internship/${plan.slug}`}
      />

      <Navbar />

      <main>

        {/* ======================================================
            DETAIL HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#071B3B] text-white py-16 md:py-20">

          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_80%_20%,rgba(37,99,235,.45),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(80,73,255,.35),transparent_35%)]" />

          <div className="relative max-w-[1000px] mx-auto px-6">

            <Breadcrumbs
              items={[
                {
                  label: "Home",
                  to: "/",
                },
                {
                  label: "Internship",
                  to: "/internship",
                },
                {
                  label: plan.name,
                },
              ]}
            />

            <div className="mt-10">

              <div className="flex flex-wrap items-center gap-3">

                <span className="inline-flex rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-200">
                  {plan.category}
                </span>

                {plan.badge && (
                  <span className="inline-flex rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-100">
                    {plan.badge}
                  </span>
                )}

              </div>


              <h1 className="text-4xl md:text-5xl font-bold mt-6">
                {plan.name}
              </h1>


              <p className="text-xl md:text-2xl text-blue-100 mt-4">
                {plan.title}
              </p>


              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2">

                <span className="h-2 w-2 rounded-full bg-blue-400" />

                <span className="font-semibold">
                  {plan.duration}
                </span>

              </div>


              <p className="max-w-3xl text-blue-50/80 leading-7 mt-7">
                {plan.description}
              </p>

            </div>

          </div>

        </section>


        {/* ======================================================
            DETAIL CONTENT
        ====================================================== */}

        <section className="py-16 md:py-20">

          <div className="max-w-[1000px] mx-auto px-6">

            {notice}


            <h2 className="text-3xl font-bold text-[#071B3B] mt-14">
              What is included
            </h2>


            <p className="text-slate-600 mt-3">
              Explore the learning, project and career-development
              components included in this program.
            </p>


            <div className="grid md:grid-cols-2 gap-4 mt-8">

              {plan.features.map(
                (feature, index) => (

                  <div
                    key={feature}
                    className="group flex gap-4 border border-slate-200 rounded-xl p-5 bg-white hover:border-blue-200 hover:shadow-md transition-all"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1559bd] text-xs font-bold">
                      {index + 1}
                    </span>

                    <span className="text-slate-700 leading-6">
                      {feature}
                    </span>

                  </div>

                )
              )}

            </div>


            <div className="mt-10">

              <Link
                to={`/internship/register?plan=${plan.slug}`}
                className="inline-flex items-center bg-[#1559bd] hover:bg-[#0e479f] text-white px-6 py-3.5 rounded-xl font-bold transition-colors"
              >
                Register for {plan.name}

                <ArrowRight
                  size={17}
                  className="ml-2"
                />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}


/* ============================================================
   REGISTRATION PAGE
============================================================ */

export function InternshipRegister() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO
        title="Register for Internship | ARINSA AI MINDS"
        description="Internship registration interface."
        canonical="/internship/register"
      />

      <Navbar />

      <main className="bg-[#f6f9ff] py-16 md:py-20">

        <div className="max-w-[760px] mx-auto px-6">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1559bd]">
              Registration
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#071B3B] mt-3">
              Internship registration
            </h1>

            <p className="text-slate-600 mt-4 max-w-xl mx-auto leading-7">
              Select your preferred program and complete the
              registration requirements.
            </p>

          </div>


          <div className="mt-8">
            {pricing}
          </div>


          {submitted ? (

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">

              <p className="font-bold text-[#071B3B]">
                Registration integration is not configured yet.
              </p>

              <p className="text-sm text-slate-700 leading-6 mt-2">
                Your information has not been submitted. Please
                contact ARINSA AI MINDS for the approved registration
                process.
              </p>

            </div>

          ) : (

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="bg-white border border-slate-200 rounded-2xl p-7 md:p-8 mt-8 grid gap-5 shadow-sm"
            >

              <label className="text-sm font-semibold text-[#071B3B]">

                Full name

                <input
                  required
                  className="mt-2 w-full border border-slate-200 rounded-xl p-3.5 outline-none focus:border-[#1559bd] focus:ring-2 focus:ring-blue-100"
                  placeholder="Enter your full name"
                />

              </label>


              <label className="text-sm font-semibold text-[#071B3B]">

                Email address

                <input
                  required
                  type="email"
                  className="mt-2 w-full border border-slate-200 rounded-xl p-3.5 outline-none focus:border-[#1559bd] focus:ring-2 focus:ring-blue-100"
                  placeholder="you@example.com"
                />

              </label>


              <label className="text-sm font-semibold text-[#071B3B]">

                Preferred program

                <select
                  className="mt-2 w-full border border-slate-200 rounded-xl p-3.5 outline-none focus:border-[#1559bd] focus:ring-2 focus:ring-blue-100"
                  defaultValue={plans[0]?.slug}
                >

                  {plans.map((plan) => (

                    <option
                      key={plan.slug}
                      value={plan.slug}
                    >
                      {plan.name} — {plan.duration}
                    </option>

                  ))}

                </select>

              </label>


              <label className="flex gap-3 items-start text-sm text-slate-700 leading-6">

                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />

                <span>
                  I understand that the program is primarily
                  self-paced and that certificates require
                  successful completion of the applicable program
                  requirements.
                </span>

              </label>


              <label className="flex gap-3 items-start text-sm text-slate-700 leading-6">

                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />

                <span>
                  I agree to the applicable program terms and
                  registration requirements.
                </span>

              </label>


              <button
                type="submit"
                className="bg-[#1559bd] hover:bg-[#0e479f] text-white rounded-xl py-3.5 font-bold transition-colors"
              >
                Continue with registration
              </button>

            </form>

          )}

        </div>

      </main>

      <Footer />
    </>
  );
}


/* ============================================================
   FAQ PAGE
============================================================ */

export function InternshipFAQ() {
  return (
    <>
      <SEO
        title="Internship FAQ | ARINSA AI MINDS"
        description="Frequently asked questions about the ARINSA AI MINDS internship program."
        canonical="/internship/faq"
      />

      <Navbar />

      <main className="py-16 md:py-20 bg-white">

        <div className="max-w-[900px] mx-auto px-6">

          <div className="mb-10">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1559bd]">
              Internship FAQ
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#071B3B] mt-3">
              Frequently asked questions
            </h1>

            <p className="text-slate-600 mt-4 leading-7">
              Important information about programs, completion,
              certificates, project work and career opportunities.
            </p>

          </div>


          <FAQ items={faq} />

        </div>

      </main>

      <Footer />
    </>
  );
}
