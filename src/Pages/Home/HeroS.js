import { motion } from "framer-motion";

const AnimatedWords = ({ text, className }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
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
          style={{ display: "inline-block", marginRight: index !== words.length - 1 ? "0.25em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroS = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="flex flex-col items-center h-auto my-20 md:my-32 lg:my-24 xl:my-16 gap-6 md:gap-8 lg:gap-10 justify-center text-center w-full px-4"
  >
    <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold text-[#444444]">
      <AnimatedWords text="Your trusted Islamic Hub" />
    </h1>

    <p className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-[#444444] font-medium w-full">
      <AnimatedWords text="We craft designs & build tech products for global Muslim community." />
    </p>

    <button className="cursor-cta bg-br-color/10 text-lg relative overflow-hidden px-6 py-3 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition max-w-xs">
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        Join the Waitlist
      </span>
      <span
        className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full"
        aria-hidden="true"
      ></span>
    </button>
  </motion.div>
);

export default HeroS;
