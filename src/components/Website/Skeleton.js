import React from "react";
import { motion } from "framer-motion";

/**
 * Skeleton loader component with shimmer animation
 * Maintains Hidayah's teal color theme
 */
const Skeleton = ({ 
  width = "100%", 
  height = "20px", 
  borderRadius = "8px",
  className = "",
  variant = "default" // default, circle, card
}) => {
  const baseClasses = "relative overflow-hidden bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200";
  
  const variantStyles = {
    default: {},
    circle: { borderRadius: "50%" },
    card: { borderRadius: "16px", height: "200px" },
  };

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...variantStyles[variant],
      }}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

/**
 * Skeleton for text content
 */
export const TextSkeleton = ({ lines = 3, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        width={i === lines - 1 ? "70%" : "100%"} 
        height="16px" 
      />
    ))}
  </div>
);

/**
 * Skeleton for cards with image
 */
export const CardSkeleton = ({ className = "" }) => (
  <div className={`bg-white rounded-2xl p-4 border border-gray-100 ${className}`}>
    <Skeleton variant="card" className="mb-4" />
    <Skeleton width="60%" height="24px" className="mb-2" />
    <TextSkeleton lines={2} />
  </div>
);

/**
 * Skeleton for prayer time cards
 */
export const PrayerTimeSkeleton = ({ className = "" }) => (
  <div className={`bg-white rounded-2xl p-5 border border-gray-100 ${className}`}>
    <Skeleton width="80px" height="14px" className="mb-2" />
    <Skeleton width="60px" height="28px" className="mb-3" />
    <Skeleton width="100px" height="12px" />
  </div>
);

/**
 * Skeleton for contact info cards
 */
export const ContactCardSkeleton = ({ className = "" }) => (
  <div className={`bg-white rounded-2xl p-6 border border-gray-100 ${className}`}>
    <Skeleton width="56px" height="56px" variant="circle" className="mb-4" />
    <Skeleton width="80%" height="20px" className="mb-2" />
    <Skeleton width="60%" height="16px" className="mb-1" />
    <Skeleton width="70%" height="14px" />
  </div>
);

/**
 * Loading overlay with brand spinner
 */
export const LoadingSpinner = ({ size = 40, className = "" }) => (
  <motion.div
    className={`flex items-center justify-center ${className}`}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className="text-br-color"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="80"
        strokeDashoffset="60"
      />
    </svg>
  </motion.div>
);

/**
 * Full page loading overlay
 */
export const PageLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#f0f7f7]/80 backdrop-blur-sm"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <LoadingSpinner size={48} />
      <motion.p
        className="text-br-color font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </motion.div>
  </motion.div>
);

export default Skeleton;
