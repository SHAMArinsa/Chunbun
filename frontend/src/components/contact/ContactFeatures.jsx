import {
  Headphones,
  ShieldCheck,
  Users,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "We're Here To Help",
    desc: "Our team is ready to answer your questions and provide support.",
  },
  {
    icon: Trophy,
    title: "Your Success Is Our Priority",
    desc: "We deliver measurable business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    desc: "Your information is protected and handled securely.",
  },
  {
    icon: Users,
    title: "Global Support",
    desc: "Supporting clients across industries worldwide.",
  },
];

export default function ContactFeatures() {
  return (
    <section className="bg-[#F8F9FB] pb-20">

      <div className="max-w-[1600px] mx-auto px-8">

        <div className="grid lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-8"
              >

                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}