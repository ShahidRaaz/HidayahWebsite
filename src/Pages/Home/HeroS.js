import React, { useState } from "react";
import { motion } from "framer-motion";
import Overlay from "../../components/Home/eaoverlay";
import DateDisplay from "../../components/Home/DateDisplay";
import TimeEvents from "../../components/Home/TimeEvents";
import ScrollingWords from "./ScrollingWords";
import UserLocation from "./UserLocation";
import { useGeoSource } from "../../components/Home/useGeoL";

const AnimatedWords = ({ text, className }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
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
  const openOverlay = () => setOverlayOpen(true);
  const closeOverlay = () => setOverlayOpen(false);
  const { lat, lng } = useGeoSource();

  return (
    <>
      <div className="w-full h-auto">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center h-auto py-12 md:py-4 gap-6 md:gap-8 text-center w-full px-8"
        >
          <UserLocation/>
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-bold xl:font-extrabold text-[#444444]">
            <AnimatedWords text="Your trusted Islamic Hub" />
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-[#444444] font-medium w-full">
            <AnimatedWords text="We craft designs & build tech products for global Muslim community." />
          </p>

          {/* CTA Button */}
          <button
            
            className="cursor-cta bg-br-color/10 text-lg relative overflow-hidden px-6 py-3 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition max-w-xs mt-2"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Request a Project
            </span>
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full"
              aria-hidden="true"
            ></span>
          </button>
        </motion.div>

          <div className="flex md:flex-row flex-col justify-between items-center gap-3 w-full mt-6 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-[200px] bg-white rounded-2xl p-4"
            >
              <TimeEvents lat={lat} lng={lng} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="w-[200px] bg-white rounded-2xl p-4"
            >
              <DateDisplay lat={lat} lng={lng} />
            </motion.div>
          </div>

          <div className="w-full mt-6">
            <ScrollingWords/>
          </div>
          

      </div>
      

      {isOverlayOpen && <Overlay onClose={closeOverlay} />}
    </>
  );
};

export default HeroS;
