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
import Footer from "./components/Website/Footer";
import { Scroll } from "lucide-react";

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
            className="bg-[#F0F7F7] pt-20 min-h-screen"
          >
            <Navbar hidden={footerInView} />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
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
