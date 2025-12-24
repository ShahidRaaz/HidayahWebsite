import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Sparkles, ArrowRight, CheckCircle, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "contact@hidayah.design",
    subtext: "We'll respond within 24 hours",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 98765 43210",
    subtext: "Mon-Fri, 9am-6pm IST",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Hyderabad, India",
    subtext: "Available for meetings",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 9AM - 6PM",
    subtext: "Weekend: By appointment",
    color: "from-orange-500 to-orange-600",
  },
];

const services = [
  "Brand Identity Design",
  "UI/UX Design",
  "Mobile App Development",
  "Web Development",
  "Social Media Design",
  "Motion Graphics",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mnnbwvlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccess("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      setFormData({ name: "", email: "", service: "", budget: "", message: "" });
    } catch (e) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-[0px] md:mt-[50px] lg:mt-[50px] xl:mt-[75px] bg-[#f0f7f7]">
      {/* Hero Section */}
      <section className="px-[6vw] py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-br-color/10 text-br-color px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Let's Connect
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#333333] mb-6 leading-tight">
            Get in <span className="text-br-color">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#555555] font-medium leading-relaxed max-w-3xl mx-auto">
            Have a project in mind? Let's create something beautiful together for the Ummah.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="px-[6vw] pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-br-color/30 hover:shadow-xl hover:shadow-br-color/10 transition-all duration-400 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">{info.title}</h3>
                <p className="text-br-color font-semibold mb-1">{info.details}</p>
                <p className="text-sm text-[#888888]">{info.subtext}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-[6vw] py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-br-color to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">Send a Message</h2>
                <p className="text-[#888888]">We'd love to hear about your project</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#444444] mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-br-color focus:ring-4 focus:ring-br-color/10 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#444444] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-br-color focus:ring-4 focus:ring-br-color/10 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#444444] mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-br-color focus:ring-4 focus:ring-br-color/10 outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#444444] mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-br-color focus:ring-4 focus:ring-br-color/10 outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select budget</option>
                    <option value="$500-$1000">$500 - $1,000</option>
                    <option value="$1000-$5000">$1,000 - $5,000</option>
                    <option value="$5000-$10000">$5,000 - $10,000</option>
                    <option value="$10000+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#444444] mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-br-color focus:ring-4 focus:ring-br-color/10 outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm font-medium bg-red-50 px-5 py-4 rounded-xl border border-red-200"
                >
                  {error}
                </motion.div>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm font-medium bg-green-50 px-5 py-4 rounded-xl border border-green-200 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  {success}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="cursor-cta w-full bg-gradient-to-r from-br-color to-teal-600 text-white px-8 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-br-color/25 transition-all duration-300 disabled:opacity-60 hover:scale-[1.02]"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Social Links */}
            <div className="relative overflow-hidden bg-gradient-to-br from-br-color via-teal-600 to-teal-700 rounded-3xl p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Follow Us</h3>
                </div>
                <p className="text-white/85 mb-6 leading-relaxed">
                  Connect with us on social media for design inspiration, updates, and community content.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.behance.net/hidayahdesign2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <svg width="20" height="14" viewBox="0 0 20 14" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.803 0.731018C6.392 0.731018 6.922 0.782018 7.408 0.886018C7.89 0.989352 8.30433 1.15868 8.651 1.39402C8.99433 1.62868 9.26233 1.94168 9.455 2.33302C9.642 2.72002 9.735 3.20402 9.735 3.77602C9.735 4.39602 9.59467 4.91302 9.314 5.32702C9.032 5.74168 8.61333 6.08002 8.058 6.34202C8.814 6.56202 9.37733 6.94402 9.748 7.48802C10.122 8.03702 10.305 8.69402 10.305 9.46402C10.305 10.0887 10.1857 10.6264 9.947 11.077C9.71702 11.5215 9.38283 11.9038 8.973 12.191C8.54893 12.4867 8.07502 12.7035 7.574 12.831C7.04879 12.9687 6.50797 13.038 5.965 13.037H0V0.731018H5.803ZM5.452 5.70302C5.932 5.70302 6.32933 5.58802 6.644 5.35802C6.956 5.13002 7.107 4.75402 7.107 4.23902C7.107 3.95235 7.05667 3.71668 6.956 3.53202C6.85916 3.35361 6.71483 3.20547 6.539 3.10402C6.35526 2.99552 6.15273 2.92258 5.942 2.88902C5.7122 2.8461 5.47876 2.82567 5.245 2.82802H2.71V5.70302H5.452ZM5.603 10.942C5.87 10.942 6.124 10.919 6.363 10.865C6.604 10.813 6.818 10.729 7 10.604C7.182 10.484 7.332 10.321 7.44 10.113C7.549 9.90702 7.602 9.63802 7.602 9.31502C7.60133 8.68168 7.42367 8.22902 7.069 7.95702C6.714 7.68702 6.238 7.55302 5.655 7.55302H2.71V10.943L5.603 10.942ZM14.168 10.901C14.5353 11.2597 15.0633 11.439 15.752 11.439C16.2453 11.439 16.6713 11.3147 17.03 11.066C17.384 10.817 17.6 10.551 17.683 10.276H19.838C19.492 11.348 18.967 12.114 18.249 12.575C17.54 13.038 16.677 13.268 15.669 13.268C14.9677 13.268 14.3343 13.1557 13.769 12.931C13.2252 12.7204 12.7341 12.3934 12.33 11.973C11.9325 11.5432 11.6249 11.0383 11.425 10.488C11.2054 9.8793 11.097 9.23608 11.105 8.58902C11.1057 7.92235 11.2153 7.30102 11.434 6.72502C11.6415 6.1695 11.9592 5.66166 12.368 5.23202C12.772 4.81202 13.2533 4.48068 13.812 4.23802C14.3995 3.98985 15.0323 3.86657 15.67 3.87602C16.4233 3.87602 17.083 4.02268 17.649 4.31602C18.1972 4.59767 18.6729 5.00219 19.039 5.49802C19.401 5.99135 19.662 6.55502 19.822 7.18902C19.982 7.82035 20.039 8.48135 19.993 9.17202H13.562C13.563 9.87602 13.8 10.543 14.168 10.901ZM16.98 6.22002C16.689 5.89802 16.197 5.72402 15.595 5.72402C15.205 5.72335 14.8803 5.78969 14.621 5.92302C14.3837 6.04378 14.1729 6.21071 14.001 6.41402C13.8511 6.59955 13.7396 6.81302 13.673 7.04202C13.6166 7.2335 13.5794 7.43015 13.562 7.62902H17.544C17.486 7.00502 17.272 6.54402 16.98 6.22002ZM13.062 1.55702H18.051V2.77202H13.062V1.55702Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/hidayah.muslims"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 4.67C5.71 4.67 4.67 5.72 4.67 7C4.67 8.28 5.72 9.33 7 9.33C8.28 9.33 9.33 8.28 9.33 7C9.33 5.72 8.28 4.67 7 4.67ZM14 7C14 6.03 14 5.08 13.95 4.11C13.9 2.99 13.64 1.99 12.82 1.18C12 0.36 11.01 0.1 9.89 0.05C8.92 -4.84288e-08 7.97 0 7 0C6.03 0 5.08 -4.84288e-08 4.11 0.05C2.99 0.1 1.99 0.36 1.18 1.18C0.36 2 0.1 2.99 0.05 4.11C-4.84288e-08 5.08 0 6.03 0 7C0 7.97 -4.84288e-08 8.92 0.05 9.89C0.1 11.01 0.36 12.01 1.18 12.82C2 13.64 2.99 13.9 4.11 13.95C5.08 14 6.03 14 7 14C7.97 14 8.92 14 9.89 13.95C11.01 13.9 12.01 13.64 12.82 12.82C13.64 12 13.9 11.01 13.95 9.89C14.01 8.93 14 7.97 14 7ZM7 10.59C5.01 10.59 3.41 8.99 3.41 7C3.41 5.01 5.01 3.41 7 3.41C8.99 3.41 10.59 5.01 10.59 7C10.59 8.99 8.99 10.59 7 10.59ZM10.74 4.1C10.28 4.1 9.9 3.73 9.9 3.26C9.9 2.79 10.27 2.42 10.74 2.42C11.21 2.42 11.58 2.79 11.58 3.26C11.5825 3.36954 11.5625 3.47842 11.5212 3.57992C11.48 3.68141 11.4183 3.77333 11.34 3.85C11.2633 3.92827 11.1714 3.98997 11.0699 4.03125C10.9684 4.07253 10.8595 4.09253 10.75 4.09L10.74 4.1Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hidayah-muslims"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <svg width="21" height="20" viewBox="0 0 21 20" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.037 20H15.885V13.504C15.885 11.954 15.859 9.96202 13.728 9.96202C11.568 9.96202 11.238 11.65 11.238 13.392V20H7.09V6.64002H11.07V8.46702H11.128C11.681 7.41702 13.036 6.30902 15.056 6.30902C19.26 6.30902 20.036 9.07502 20.036 12.673L20.037 20ZM2.409 4.81602C2.09257 4.81629 1.7792 4.75416 1.48681 4.63319C1.19441 4.51221 0.928743 4.33478 0.704994 4.11103C0.481245 3.88728 0.30381 3.62161 0.182839 3.32922C0.0618689 3.03683 -0.000262201 2.72345 8.31678e-07 2.40702C9.95919e-07 1.93085 0.141178 1.46537 0.405684 1.06942C0.67019 0.673469 1.04615 0.364828 1.48604 0.182514C1.92593 0.000199318 2.40999 -0.0476038 2.87704 0.0451475C3.34409 0.137899 3.77316 0.36704 4.11001 0.703605C4.44685 1.04017 4.67635 1.46905 4.76949 1.93602C4.86263 2.403 4.81523 2.8871 4.63328 3.32714C4.45133 3.76718 4.143 4.1434 3.74727 4.40823C3.35154 4.67307 2.88617 4.81463 2.41 4.81502M4.486 20H0.330001V6.64002H4.486V20Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-br-color" />
                <h3 className="text-xl font-bold text-[#333333]">Why Choose Us?</h3>
              </div>
              <div className="space-y-4">
                {[
                  "24-hour response time",
                  "Free initial consultation",
                  "Flexible payment plans",
                  "Dedicated project manager",
                  "Post-launch support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-[#555555]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://chat.whatsapp.com/JvXL4JNCrZt194e3aBENky"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
                <p className="text-white/90 text-sm mb-4">
                  Connect with 500+ Muslim creators and get instant support.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  Join WhatsApp Group <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[6vw] py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Frequently Asked <span className="text-br-color">Questions</span>
            </h2>
            <p className="text-lg text-[#666666]">Quick answers to common questions about working with us.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A logo design might take 1-2 weeks, while a full website could take 4-8 weeks. We'll provide a detailed timeline during our initial consultation." },
              { q: "Do you work with clients internationally?", a: "Yes! We work with clients worldwide. We use video calls, email, and project management tools to ensure smooth communication across time zones." },
              { q: "What is your payment structure?", a: "We typically work with 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments." },
              { q: "Do you offer ongoing support after project completion?", a: "Absolutely! We offer maintenance packages and are always available for updates, changes, or new features after your project launches." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-br-color/30 transition-colors">
                <h4 className="text-lg font-bold text-[#333333] mb-2">{faq.q}</h4>
                <p className="text-[#666666] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
