import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:akashgupta176463@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(
      form.message + "\n\nFrom: " + form.email
    )}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,150,255,0.15),transparent_70%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Let's Connect" />

        <p className="text-gray-300 max-w-xl mx-auto mt-4 text-center">
          Interested in collaborating or hiring me? Send me a message!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto mt-12 p-8 bg-[#020617]/60 backdrop-blur-xl 
                   border border-white/10 rounded-2xl shadow-xl 
                   shadow-blue-500/10"
      >
        {/* Name */}
        <div className="mb-6 text-left">
          <label className="text-gray-300 text-sm">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-3 bg-black/30 border border-white/10 
                       rounded-xl text-white placeholder-gray-500 
                       focus:border-cyan-400 focus:outline-none transition"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-6 text-left">
          <label className="text-gray-300 text-sm">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-3 bg-black/30 border border-white/10 
                       rounded-xl text-white placeholder-gray-500 
                       focus:border-cyan-400 focus:outline-none transition"
            placeholder="Enter your email"
          />
        </div>

        {/* Message */}
        <div className="mb-6 text-left">
          <label className="text-gray-300 text-sm">Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full mt-2 px-4 py-3 bg-black/30 border border-white/10 
                       rounded-xl text-white placeholder-gray-500 
                       focus:border-cyan-400 focus:outline-none transition"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Button */}
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </motion.form>
    </section>
  );
}
