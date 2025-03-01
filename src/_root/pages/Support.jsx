import React, { useMemo, useState } from "react";
import Footer from "../../landing/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";

const TELEGRAM_BOT_ID = "7592250432:AAFdTgNnlYenISRZ9fFNRH9coOrAAbpjens";
const TELEGRAM_CHAT_ID = "7592250432";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    country: null,
  });

  const [loading, setLoading] = useState(false);
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption });
  };

  const sendToTelegram = async () => {
    setLoading(true);
    const { name, email, subject, message, country } = formData;

    // Ensure a valid chat ID
    const CHAT_ID = "1555615511"; // Replace this with your real chat ID

    const text = `📩 *New Contact Form Submission*\n\n👤 Name: ${name}\n📧 Email: ${email}\n🌍 Country: ${
      country ? country.label : "Not provided"
    }\n📌 Subject: ${subject}\n💬 Message: ${message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_ID}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID, // Ensure this is correct
            text: text,
            parse_mode: "Markdown",
          }),
        }
      );

      const result = await response.json();
      console.log("Telegram API Response:", result);

      if (response.ok) {
        toast.success("Message Received!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          country: null,
        });
      } else {
        alert("Failed to send message. Check the console.");
      }
    } catch (error) {
      console.error("Telegram API Error:", error);
      alert("An error occurred. Check the console.");
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToTelegram();
  };

  const sendEmail = () => {
    window.open(
      "mailto:amansinha1998@outlook.com?subject=Loop API Support&body=Description"
    );
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-neutral to-slate-500 min-h-[50svh] text-base-100 p-20 rounded-b-2xl">
        <h1 className="text-8xl pl-10 py-10 font-[100] font-sans leading-10">
          Drop us a line
        </h1>
        <p className="text-2xl pl-10 py-10 font-sans leading-10">
          We’d love to hear your thoughts, feedback, or even just news around
          your latest project.
        </p>
      </div>

      <div className="flex items-center min-h-[40svh] text-lg">
        {/* Contact Info */}
        <div className="p-20 w-1/2 flex flex-col justify-center items-center">
          <p className="text-3xl text-center max-w-2xl">
            For technical support, please reach out to{" "}
            <span
              className="text-blue-500 hover:underline hover:cursor-pointer"
              onClick={sendEmail}
            >
              amansinha1998@outlook.com
            </span>
            . For other inquiries, contact us via WhatsApp or please use the
            form to get in touch with us!
          </p>
          {/* WhatsApp Link */}
          <a
            href="https://wa.me/9779825284866"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 mt-3 flex items-center hover:underline"
          >
            <IoLogoWhatsapp className="text-7xl" />
            <p className="pl-3">Message us on WhatsApp</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="p-20 w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Country Dropdown */}
            <div>
              <Select
                options={options}
                value={formData.country}
                onChange={handleCountryChange}
                className="border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-slate-500 text-white p-3 rounded-md hover:bg-slate-600 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
