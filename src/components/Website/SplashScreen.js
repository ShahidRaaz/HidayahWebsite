import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VideoOnceOnView from "./vanim";

const splashVariants = {
  initial: { y: 0, opacity: 1 },
  exit: { y: -150, opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
};

export default function SplashScreen() {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // speed of loading increment

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={splashVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
    >
      <h1 className="text-3xl font-medium text-br-color mb-4">Salaam 'Alaikum</h1>
      
      <VideoOnceOnView src="/videos/hidayahsa.mp4" alt="Hidayah animated logo" className="h-48 w-auto mb-4"/>

      <p className="text-br-color font-medium text-xl mb-2"> Loading {loading} %</p>
      {/* <p className="text-[#444444] text-xl">please wait...</p> */}
    </motion.div>
  );
}
