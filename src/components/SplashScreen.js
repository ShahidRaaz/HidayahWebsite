import React from "react";
import { motion } from "framer-motion";
import hidayahLogo from "../assets/hidayahsa.gif";

const splashVariants = {
  initial: { y: 0, opacity: 1 },
  exit: { y: -150, opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
};

export default function SplashScreen() {
  return (
    <motion.div
      variants={splashVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
    >
      <h1 className="text-3xl font-bold text-br-color mb-4">Salaam 'Alaikum</h1>
      
      <img src={hidayahLogo} alt="Logo" className="h-48 w-auto mb-4" />
      <p className="text-[#444444] text-xl">Loading, please wait...</p>
    </motion.div>
  );
}
