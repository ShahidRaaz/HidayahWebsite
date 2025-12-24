import { motion } from "framer-motion";
import { ArrowRight, Users, Gift, MessageCircle, CheckCircle } from "lucide-react";
import Wlogo from "../../assets/Wlogo.png";
import HLogo from "../../assets/hlogo.png";

export default function WhatsAppCTA() {
  const join = () => {
    window.open("https://chat.whatsapp.com/JvXL4JNCrZt194e3aBENky", "_blank", "noopener,noreferrer");
  };

  const benefits = [
    { icon: Gift, text: "Early access to design assets" },
    { icon: MessageCircle, text: "Direct support & collaboration" },
    { icon: Users, text: "Network with Muslim creatives" },
  ];

  return (
    <section className="w-full px-[6vw] py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-[2.5rem] p-8 md:p-12 lg:p-16"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <img src={HLogo} alt="Hidayah Logo" className="w-12 md:w-14" />
            </div>
            <div className="text-white text-4xl md:text-5xl font-bold">×</div>
            <img src={Wlogo} alt="WhatsApp Logo" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-xl" />
          </motion.div>

          {/* Right: Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Join Our WhatsApp Community
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                Connect with 500+ Muslim creatives, get early access to resources, and be part of the Hidayah family.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Icon className="w-4 h-4" />
                    {benefit.text}
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={join}
              className="cursor-cta bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto lg:mx-0 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Join Now — It's Free <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
