import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics} from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";
import SplashScreen from "./components/Website/SplashScreen";
import CircleCursor from "./components/Website/cursor";
import Navbar from "./components/Website/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Works from "./Pages/OWorks";
import Products from "./Pages/Products"; 
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Footer from "./Pages/Home/Footer";

const mainPageVariants = {
  initial: { y: 5, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.1 } },
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  

  const { ref: footerRef, inView: footerInView } = useInView({
    /* trigger when footer is visible at all; tweak threshold as needed */
    threshold: 0.6,
    /* if the page has a sticky header height, set rootMargin to trigger earlier */
    root: null,
    rootMargin: "0px 0px 0px 0px",
  }); // observe footer [7][20]

  return (
    <>
      <CircleCursor />
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="main"
            variants={mainPageVariants}
            initial="initial"
            animate="animate"
            className="bg-[#F0F7F7] pt-20 min-h-screen"
          >
            <Navbar hidden={footerInView} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
            <Footer ref={footerRef}/>
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
      <SpeedInsights/>
    </>
  );
}

export default App;
