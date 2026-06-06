import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://api.arinsaaiminds.com/contact", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="max-w-[1600px] mx-auto px-8">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">

          {/* FORM */}

          <div className="bg-white rounded-3xl border border-gray-200 p-10">

            <h2 className="text-5xl font-bold text-[#071B3B]">
              Get in Touch
            </h2>

            <div className="w-16 h-1 bg-[#3B82F6] mt-4 mb-6"></div>

            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back
              to you within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="border rounded-xl p-4"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="border rounded-xl p-4"
                  required
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="border rounded-xl p-4"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="border rounded-xl p-4"
                />

              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className="w-full border rounded-xl p-4"
                required
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you? *"
                className="w-full border rounded-xl p-4"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="
                bg-[#3B82F6]
                text-white
                hover:bg-[#2563EB]
                transition-all
                duration-300
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                "
              >
                {loading ? "Sending..." : "Send Message"}

                <ArrowRight size={18} />
              </button>

            </form>

          </div>

          {/* CONTACT INFO */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl border border-gray-200 p-10">

              <h2 className="text-5xl font-bold text-[#071B3B]">
                Contact Information
              </h2>

              <div className="w-16 h-1 bg-[#3B82F6] mt-4 mb-6"></div>

              <p className="text-gray-600 mb-8">
                We'd love to hear from you.
              </p>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <Mail />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Email Us
                    </h4>

                    <p className="text-gray-600">
                      info@arinsaaiminds.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <Phone />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Call Us
                    </h4>

                    <p className="text-gray-600">
                      +91 9123745946
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <MapPin />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Visit Us
                    </h4>

                    <p className="text-gray-600">
                      Kolkata, West Bengal, India
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <Clock3 />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Business Hours
                    </h4>

                    <p className="text-gray-600">
                      Monday - Friday
                    </p>

                    <p className="text-gray-600">
                      9:00 AM - 7:00 PM IST
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="bg-[#03142E] rounded-3xl p-8 text-white">

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-2xl font-semibold">
                    Schedule a Free Consultation
                  </h3>

                  <p className="text-white/70 mt-2">
                    Book a one-on-one consultation with our experts.
                  </p>

                </div>

                <button className="bg-[#3B82F6]
text-white
hover:bg-[#2563EB]
transition-all
duration-300 text-black px-6 py-3 rounded-xl font-semibold">
                  Schedule Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
