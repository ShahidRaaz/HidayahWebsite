import React, { useState } from "react";
import { motion } from "framer-motion";
import Overlay from "../../components/Home/eaoverlay";

const fadeLeft = {
  hidden: { opacity: 0, x: 22 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,  // how fast it snaps
      damping: 100,     // how much it resists/settles
      mass: 0.8        // tweak inertia feel
    }
  }
};

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
      <div className="w-full h-[400px] items-center justify-center relative overflow-hidden flex flex-col">
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

        </motion.div>

        <motion.button
      variants={fadeLeft}
      onClick={() => window.scrollBy({ top: 600, behavior: 'smooth' })}
      className="group self-end md:self-auto md:pl-auto cursor-cta w-[44px] h-[44px] mt-24 flex items-center justify-center border-2 border-br-color backdrop-blur-md rounded-full bg-custom-teal hover:bg-br-color transition duration-300 animate-float"
      aria-label="Scroll down 100px"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current text-br-color group-hover:text-white transition">
        <path d="M12 5v14m6-6l-6 6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
        
      </div>

      {isOverlayOpen && <Overlay onClose={closeOverlay} />}
    </>
  );
};

export default HeroS;
