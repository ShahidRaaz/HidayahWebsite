import React, { useState } from "react";
import { motion } from "framer-motion";
import Overlay from "../../components/Home/eaoverlay";

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
          
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-bold xl:font-extrabold text-[#444444]">
            <AnimatedWords text="We are faith first" />
            <br/>
            <AnimatedWords text="design & tech hub" />
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-[#444444] font-medium w-full">
            <AnimatedWords text="We craft designs & build tech products for global Muslim community." />
          </p>

        </motion.div>
        
      </div>
      

      {isOverlayOpen && <Overlay onClose={closeOverlay} />}
    </>
  );
};

export default HeroS;
