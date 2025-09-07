import React from "react";
import { motion } from "framer-motion";

const fadeScaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 0.1, ease: [0.17, 0.67, 0.83, 0.67] },
  viewport: { once: true, amount: 0.2 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 25,
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  hover: {
    scale: 1.05,
    y: 6,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.24,
      delayChildren: 0.35,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const parallaxVariants = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.5 },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function IslamicEcosystem() {
  const creativeDesigns = [
    "Digital Wallpapers & Themes",
    "Custom Icons & Illustrations",
    "Brand Identity Design",
    "UX/UI Design",
    "Motion Graphics",
    "3D Design",
    "Print & Packaging Design",
  ];

  const innovativeSoftwares = [
    "Cross-Device Widgets",
    "Browser Extensions",
    "Cross-Platform Mobile Apps",
    "Responsive Web Dev",
    "Desktop Applications",
    "AI-Powered Applications",
  ];

  return (
    <motion.div {...fadeScaleIn} className="h-auto flex flex-col items-center px-4 gap-6 pb-12">

      {/* Heading Section */}
      <div className="max-full mx-2 md:mx-12 text-center flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#444444] mb-2 text-center">
          What we are <span className="text-br-color">building</span>
        </h1>
        <p className="text-xl lg:text-3xl text-[#444444] font-medium">
          We're creating a complete ecosystem of Islamic-inspired designs and softwares.
        </p>
      </div>

      {/* Top Section - Two Cards Slide In Left & Right */}
       <motion.div variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
    className="w-[80vw] p-3 border-2 border-br-color/25 rounded-3xl flex flex-col lg:flex-row justify-start items-start gap-3 mt-3 transition-all duration-100 hover:border-br-color">
      
        <motion.div {...slideInLeft} className="w-full p-6 bg-white rounded-3xl flex flex-col justify-start items-center ">
          <h2 className="text-3xl font-semibold text-[#444444] mb-4 text-center">
            Creative <span className="text-br-color">Designs</span>
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap gap-3 items-center justify-center "
          >
            {creativeDesigns.map((item) => (
              <motion.span key={item} variants={childVariants} className="px-3 py-1 text-br-color rounded-full bg-custom-teal text-lg font-medium text-center border-2 border-br-color/25 hover:border-br-color">
                {item} 
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div {...slideInRight} className="w-full p-6 bg-white rounded-3xl flex flex-col justify-start items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Innovative <span className="text-br-color">Softwares</span>
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap gap-3 items-center justify-center"
          >
            {innovativeSoftwares.map((item) => (
              <motion.span key={item} variants={childVariants} className="px-3 py-1 text-br-color rounded-full bg-custom-teal text-lg font-medium text-center border-2 border-br-color/25 hover:border-br-color">
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Section - Parallax with animated paragraphs */}
      <motion.div variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
    className="w-[80vw] p-3 border-2 border-br-color/25 rounded-3xl flex flex-col lg:flex-row justify-start items-start gap-3 mt-3 transition-all duration-100 hover:border-br-color">

        <motion.div {...parallaxVariants} className="w-full p-6 bg-white rounded-3xl flex flex-col justify-start items-center">
          <h2 className="text-3xl font-semibold text-br-color text-center">
            Creative <span className="text-[#444444]">Hub</span>
          </h2>

          <motion.div variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="font-normal text-[#444444] mb-2 text-xl text-center">
            First Islamic Creative marketplace
          </motion.div>

          <motion.p variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="text-center text-[#444444] text-xl">
            A global destination for Muslim-focused design resources — combining faith, creativity, and technology to empower meaningful design engagement.
          </motion.p>
        </motion.div>

        <motion.div {...parallaxVariants} className="w-full p-6 bg-white rounded-3xl flex flex-col justify-start items-center">
          <h2 className="text-3xl font-semibold text-br-color text-center">
            AI <span className="text-[#444444]">Innovation</span>
          </h2>

          <motion.div variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="font-normal text-[#444444] mb-2 text-xl text-center">
            AI-powered Tools & Features
          </motion.div>

          <motion.p variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="text-center text-[#444444] text-xl">
            We're exploring how artificial intelligence can empower Muslims with smarter, purposeful digital products that enhance productivity, spiritual growth, and intuitive usage.
          </motion.p>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
