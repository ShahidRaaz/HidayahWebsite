import { motion } from "motion/react";
import svgPaths from "../../assets/logosvg.js";
import { useState, useEffect } from "react";

function Vector() {
  return (
    <motion.div 
      className="h-[114px] relative shrink-0 w-[70px]" // Reduced from 228px to 114px (50%)
      data-name="Vector"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1, 
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.2 
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 228">
        <g id="Vector">
          <motion.path 
            d={svgPaths.p1b441100} 
            fill="var(--fill-0, #008080)" 
            id="Vector_2"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
          />
        </g>
      </svg>
    </motion.div>
  );
}

function Frame1() {
  return (
    <motion.div 
      className="h-[49.3px] relative shrink-0 w-[84.5px] overflow-hidden" // Reduced from 98.607px to 49.3px (50%)
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169 99">
        <defs>
          <clipPath id="revealClip">
            <motion.rect 
              x="0" 
              y="0" 
              height="99" 
              width="169"
              animate={{ x: [169, 0] }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut",
                delay: 1.8
              }}
            />
          </clipPath>
          <clipPath id="clip0_1_110">
            <rect fill="white" height="98.6068" width="169" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip0_1_110)" id="Frame 332">
          <path 
            d={svgPaths.p3ee7800} 
            fill="var(--fill-0, #008080)" 
            id="Rectangle 2"
            clipPath="url(#revealClip)"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[84.38px]"> {/* Reduced from 168.76px */}
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[84.38px]"> {/* Reduced from 168.76px */}
      <Vector />
      <Frame4 />
    </div>
  );
}

function Frame2() {
  const letters = [
    { char: "d", width: "88.772px" },  // Reduced by 50%
    { char: "a", width: "88.772px" },
    { char: "y", width: "92.0595px" },
    { char: "a", width: "88.772px" },
    { char: "h", width: "92.0595px" },
  ];

  return (
    <div className="content-stretch flex font-amiri gap-[10px] items-center leading-[0] relative shrink-0 text-[184.12px] text-[teal] tracking-[7.3648px]"> {/* Changed font-['Amiri...'] to font-amiri, reduced from 368.239px to 184.12px */}
      {letters.map((letter, index) => (
        <motion.div 
          key={index}
          className="flex flex-col h-[164.3925px] justify-end relative shrink-0" // Reduced from 328.785px
          style={{ width: letter.width }}
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 3.8 + (index * 0.15)
          }}
        >
          <p className="leading-[210px] font-bold italic">{letter.char}</p> {/* Reduced from 342.594px, added font-bold italic */}
        </motion.div>
      ))}
    </div>
  );
}

export default function Lanim() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative h-[400px] bg-white p-12"> {/* Reduced gap from 20px to 10px */}
      <div className="content-stretch flex gap-[10px] items-center"> {/* Reduced gap from 20px to 10px */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            opacity: { duration: 0.3 },
            x: { duration: 0.8, ease: "easeInOut", delay: 2.6 }
          }}
        >
          <Frame />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ 
            opacity: { duration: 0 },
            width: { duration: 0.8, ease: "easeInOut", delay: 2.6 }
          }}
          className="overflow-hidden"
        >
          <Frame2 />
        </motion.div>
      </div>
    </div>
  );
}
