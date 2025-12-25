import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Bell, UserCheck, Mail, Calendar } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you contact us or subscribe to our newsletter, we may collect your name, email address, phone number, and any other information you voluntarily provide."
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, and time spent on our site."
      },
      {
        subtitle: "Cookies & Tracking",
        text: "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from."
      }
    ]
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "To provide, maintain, and improve our design and development services, respond to your inquiries, and process your requests."
      },
      {
        subtitle: "Communication",
        text: "To send you updates about our services, newsletters (if subscribed), and respond to your messages. You can opt-out of marketing communications at any time."
      },
      {
        subtitle: "Analytics",
        text: "To analyze usage patterns, improve our website, and develop new features and services that better serve the Muslim community."
      }
    ]
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information."
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law."
      },
      {
        subtitle: "Third-Party Services",
        text: "We may use third-party services (like Vercel Analytics, Formspree) that collect and process data according to their own privacy policies."
      }
    ]
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access, update, or correct your personal information at any time by contacting us."
      },
      {
        subtitle: "Deletion",
        text: "You can request the deletion of your personal data. We will comply unless we have a legal obligation to retain it."
      },
      {
        subtitle: "Opt-Out",
        text: "You can opt-out of marketing communications by clicking the unsubscribe link in our emails or contacting us directly."
      }
    ]
  },
  {
    icon: Bell,
    title: "Updates to This Policy",
    content: [
      {
        subtitle: "Policy Changes",
        text: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated revision date."
      },
      {
        subtitle: "Continued Use",
        text: "Your continued use of our website after any changes indicates your acceptance of the updated Privacy Policy."
      }
    ]
  }
];

const PrivacyPolicy = () => {
  const lastUpdated = "December 25, 2024";

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
            <Shield className="w-4 h-4" />
            Your Privacy Matters
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#333333] mb-6 leading-tight">
            Privacy <span className="text-br-color">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#555555] font-medium leading-relaxed max-w-3xl mx-auto">
            We respect your privacy and are committed to protecting your personal data.
          </p>
          
          {/* Last Updated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-[#666666] border border-gray-200"
          >
            <Calendar className="w-4 h-4" />
            Last Updated: {lastUpdated}
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="px-[6vw] pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm"
        >
          <p className="text-lg text-[#555555] leading-relaxed mb-4">
            Welcome to Hidayah ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>hidayah.design</strong> or engage with our services.
          </p>
          <p className="text-lg text-[#555555] leading-relaxed">
            As a Muslim-owned company serving the global Ummah, we believe in conducting business with <strong>amanah</strong> (trustworthiness) and <strong>transparency</strong>. Please read this policy carefully to understand our practices regarding your personal data.
          </p>
        </motion.div>
      </section>

      {/* Policy Sections */}
      <section className="px-[6vw] py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:border-br-color/20 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-br-color to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-6 pl-0 md:pl-[72px]">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-br-color mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-[#666666] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-[6vw] py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-br-color via-teal-600 to-teal-700 rounded-[2.5rem] p-10 md:p-16 max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@hidayah.design"
                className="cursor-cta bg-white text-br-color px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                privacy@hidayah.design
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Information */}
      <section className="px-[6vw] pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#333333] mb-3">Children's Privacy</h3>
              <p className="text-[#666666] leading-relaxed">
                Our services are not directed to individuals under 13. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information immediately.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#333333] mb-3">International Transfers</h3>
              <p className="text-[#666666] leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
