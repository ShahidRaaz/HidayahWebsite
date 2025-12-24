import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

const HeroS = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-br-color/5 to-teal-100/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center py-16 md:py-20 gap-6 text-center w-full px-[6vw]"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-br-color/10 to-teal-100 text-br-color px-5 py-2 rounded-full text-sm font-semibold border border-br-color/20"
        >
          <Sparkles className="w-4 h-4" />
          Our Story
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-tight max-w-5xl">
          <span className="text-[#333333]">We are a</span>
          <br className="hidden md:block" />
          <span className="text-br-color bg-gradient-to-r from-br-color to-teal-600 bg-clip-text text-transparent"> Faith-First </span>
          <span className="text-[#333333]">Studio</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl text-[#555555] font-medium max-w-3xl leading-relaxed"
        >
          Crafting meaningful design & technology for the global Muslim community since 2019.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
          className="mt-8 w-12 h-12 flex items-center justify-center border-2 border-br-color/30 rounded-full text-br-color hover:bg-br-color hover:text-white transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroS;
