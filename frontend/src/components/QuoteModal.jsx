import { X, Send } from "lucide-react";
import { useState } from "react";

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
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

    setLoading(true);

    try {
      const response = await fetch(
        "https://chunbun-cx9u.onrender.com/quote", //"http://localhost:8000/quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:
              formData.firstName.trim() +
              " " +
              formData.lastName.trim(),

            email: formData.email.trim(),
            phone: formData.phone.trim(),
            company: formData.company.trim(),

            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,

            message: formData.message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        alert(
          "Thank you for sending your request for quotation. Our team will review your requirements and communicate with you through email within 3 - 4 business days."
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });

        onClose();
      } else {
        alert(
          data.detail ||
            data.message ||
            "Failed to send quotation request."
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while submitting your quotation request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      z-[999]
      flex
      items-center
      justify-center
      p-4
      "
    >
      <div
        className="
        bg-white
        w-full
        max-w-6xl
        rounded-3xl
        shadow-2xl
        relative
        p-8
        max-h-[90vh]
        overflow-y-auto
        "
      >
        <button
          onClick={onClose}
          className="
          absolute
          top-6
          right-6
          text-[#071B3B]
          "
        >
          <X size={28} />
        </button>

        <h2 className="text-4xl font-bold text-[#071B3B]">
          Get A Quote
        </h2>

        <p className="text-gray-600 mt-3 mb-8">
          Tell us about your project and receive a customized quotation,
          estimated project cost, timeline, and solution proposal.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border rounded-xl p-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border rounded-xl p-4"
            >
              <option value="">
                Select Service
              </option>

              <option>
                AI Strategy & Consulting
              </option>

              <option>
                Generative AI Solutions
              </option>

              <option>
                AI Agents & Automation
              </option>

              <option>
                Data Analytics & BI
              </option>

              <option>
                Web Development
              </option>

              <option>
                Mobile App Development
              </option>

              <option>
                Cloud & DevOps
              </option>

              <option>
                Custom Software Development
              </option>
            </select>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="border rounded-xl p-4"
            >
              <option value="">
                Budget Range
              </option>

              <option>
                Less than $5,000
              </option>

              <option>
                $5,000 - $10,000
              </option>

              <option>
                $10,000 - $25,000
              </option>

              <option>
                $25,000+
              </option>
            </select>

            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="border rounded-xl p-4"
            >
              <option value="">
                Timeline
              </option>

              <option>
                Immediately
              </option>

              <option>
                Within 1 Month
              </option>

              <option>
                Within 3 Months
              </option>

              <option>
                Just Exploring
              </option>
            </select>

          </div>

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            className="
            border
            rounded-xl
            p-4
            w-full
            mt-6
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
            mt-6
            bg-[#1E40AF]
            hover:bg-[#1D4ED8]
            text-white
            px-8
            py-4
            rounded-xl
            flex
            items-center
            gap-2
            font-semibold
            disabled:opacity-50
            disabled:cursor-not-allowed
            "
          >
            <Send size={18} />

            {loading
              ? "Submitting..."
              : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
