import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Overlay from "../../components/Home/eaoverlay";
import DateDisplay from "../../components/Home/DateDisplay";
import TimeEvents from "../../components/Home/TimeEvents";
import ScrollingWords from "./ScrollingWords";
import UserLocation from "./UserLocation";
import { useGeoSource } from "../../components/Home/useGeoL";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const AnimatedWords = ({ text, className }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };
  return (
    <motion.div
      aria-label={text}
      role="heading"
      aria-level={1}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline", whiteSpace: "pre-wrap" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: "inline-block",
            marginRight: index !== words.length - 1 ? "0.25em" : 0,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroS = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const closeOverlay = () => setOverlayOpen(false);
  const { lat, lng } = useGeoSource();

  return (
    <>
      <div className="w-full h-auto relative">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-br-color/5 to-teal-100/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center h-auto py-12 md:py-8 gap-6 md:gap-8 text-center w-full px-6 md:px-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-br-color/10 to-teal-100 text-br-color px-4 py-2 rounded-full text-sm font-semibold border border-br-color/20">
              <Sparkles className="w-4 h-4" />
              Trusted by 80+ Muslim Brands Worldwide
            </div>
          </motion.div>

          <UserLocation />

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold xl:font-extrabold leading-tight">
            <span className="text-[#333333]">Your Trusted</span>
            <br />
            <span className="text-br-color bg-gradient-to-r from-br-color to-teal-600 bg-clip-text text-transparent">Islamic Hub</span>
          </h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-[#555555] font-medium max-w-3xl leading-relaxed"
          >
            We craft stunning designs & build innovative tech products for the global Muslim community.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Link to="/contact">
              <button className="cursor-cta bg-gradient-to-r from-br-color to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-br-color/25 transition-all duration-300 hover:scale-105">
                Start a Project <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/works">
              <button className="cursor-cta bg-white text-br-color px-8 py-4 rounded-full font-semibold text-lg border-2 border-br-color/30 hover:border-br-color hover:shadow-lg transition-all duration-300">
                View Our Work
              </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-br-color to-teal-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#666666]">5.0 from 50+ reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Prayer Time & Date Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex md:flex-row flex-col justify-center items-center gap-4 w-full mt-8 px-6"
        >
          <div className="w-full max-w-[220px] bg-white rounded-2xl p-5 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-br-color/20 transition-all duration-300">
            <TimeEvents lat={lat} lng={lng} />
          </div>

          <div className="w-full max-w-[220px] bg-white rounded-2xl p-5 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-br-color/20 transition-all duration-300">
            <DateDisplay lat={lat} lng={lng} />
          </div>
        </motion.div>

        {/* Scrolling Words */}
        <div className="w-full mt-10">
          <ScrollingWords />
        </div>
      </div>

      {isOverlayOpen && <Overlay onClose={closeOverlay} />}
    </>
  );
};

export default HeroS;
