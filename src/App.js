import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Routes, Route,useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics} from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";
import SplashScreen from "./components/Website/SplashScreen";
import CircleCursor from "./components/Website/cursor";
import Navbar from "./components/Website/Navbar";
import ScrollToTop from "./components/Website/stt";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Works from "./Pages/OWorks";
import Products from "./Pages/Products"; 
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Careers from "./Pages/Careers";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Footer from "./components/Website/Footer";
import { Scroll } from "lucide-react";

const mainPageVariants = {
  initial: { y: 5, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.1 } },
};

// Page transition variants for smooth navigation
const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: 0.25, ease: "easeIn" } 
  },
};

// Animated page wrapper component
const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageTransitionVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  

const { ref: footerRef, inView: footerInView } = useInView({
  root: null,                 // viewport
  threshold: 0.25,            // mobile-friendly trigger
  rootMargin: "75px 0px 0px 0px", // account for sticky navbar height
  trackVisibility: true,      // improves stability on mobile
  delay: 100,                 // small debounce
});


  const location = useLocation();

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
            className="bg-[#f0f7f7] pt-20 min-h-screen"
          >
            <Navbar hidden={footerInView} />
            <ScrollToTop />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                <Route path="/works" element={<AnimatedPage><Works /></AnimatedPage>} />
                <Route path="/products" element={<AnimatedPage><Products /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                <Route path="/blogs" element={<AnimatedPage><Blogs /></AnimatedPage>} />
                <Route path="/careers" element={<AnimatedPage><Careers /></AnimatedPage>} />
                <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
              </Routes>
            </AnimatePresence>
            <Footer ref={footerRef} key={location.pathname}/>
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
      <SpeedInsights/>
    </>
  );
}

export default App;
