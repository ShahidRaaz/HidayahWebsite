import { useState } from "react";
import { Sparkles, Bell } from "lucide-react";
import Overlay from "../../components/Home/eaoverlay";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonGroupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const openOverlay = () => setOverlayOpen(true);
  const closeOverlay = () => setOverlayOpen(false);

  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm border border-[#008080] rounded-full mb-8 shadow-lg shadow-[#008080]/10"
            variants={itemVariants}
          >
            <Sparkles className="text-[#008080]" size={24} />
            <span className="text-md text-[#008080]">Introducing Our Flagship Product</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl mb-4 tracking-tight leading-[1.1]"
            variants={itemVariants}
          >
            World's First Islamic Marketplace<br />
            <span className="block mt-2 text-[#008080] text-4xl md:text-5xl lg:text-6xl font-bold">
              Hidayah Creative Hub
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            For Users to explore, download, share and use design & media assets.<br />
            For Creators to showcase and sell design & media assets to earn and grow.
          </motion.p>

          {/* CTA Button and Launching Soon Badge group */}
          <motion.div
            className="flex flex-col items-center gap-6 mt-8"
            variants={buttonGroupVariants}
          >
            <button
              onClick={openOverlay}
              className="cursor-cta bg-br-color/10 text-lg relative overflow-hidden px-6 py-3 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition max-w-xs"
            >
              <span className="relative z-10 transition-colors duration-500 flex items-center gap-2 group-hover:text-white">
                <Bell size={20} />
                Get Early Access
              </span>
              <span
                className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full"
                aria-hidden="true"
              ></span>
            </button>

            {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl">
            <div className="relative">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-amber-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm">
              <span className="text-amber-700">Launching Soon</span>
              <span className="text-gray-600 mx-2">•</span>
              <span className="text-gray-600">Be among the first to join</span>
            </span>
          </div>

          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOverlayOpen && <Overlay onClose={closeOverlay} />}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
