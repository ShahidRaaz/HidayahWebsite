import { motion } from "framer-motion";
import Wlogo from "../../assets/Wlogo.png";
import HLogo from "../../assets/hlogo.png";


const fadeScaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 0.1, ease: [0.17, 0.67, 0.83, 0.67] },
  viewport: { once: true, amount: 0.2 },
};

const container = {
  hidden: { opacity: 1 }, // keep container visible; children handle fade/scale
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28,     // second starts after first
      delayChildren: 0.02        // tiny lead-in for the first
    }
  }
};

const item = {
  hidden: { scale: 0.75, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.15,
      ease: "easeInOut"
      // For spring alternative:
      // type: "spring", stiffness: 60, damping: 18, mass: 1.1
    }
  }
};

export default function AboutHidayah() {
      const join = () => {
    window.open("https://chat.whatsapp.com/LROOO2AFWtN8qxPH5vb1do", "_blank", "noopener,noreferrer");
  };
  return (
    <motion.div {...fadeScaleIn} className="h-auto w-full flex flex-col items-center px-[6vw] my-12">
        <section className="bg-white rounded-3xl w-full px-4 lg:px-16 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 h-auto py-8 lg:py-16">
      
      {/* Left: Visual/Logo */}
      <motion.div
      className="flex flex-row items-center justify-center w-[70vw] lg:w-1/2 h-full"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        variants={item}
        className="bg-br-color w-[100px] h-[100px] flex items-center justify-center rounded-full"
      >
        <img src={HLogo} alt="Logo" className="h-14" />
      </motion.div>

      <motion.img
        variants={item}
        src={Wlogo}
        alt="WhatsApp Logo"
        className="w-[120px] h-[120px]"
      />
    </motion.div>


      {/* Right: Content */}
      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 h-auto gap-4">
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#444444] text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Join Our WhatsApp Community
        </motion.h2>

        <motion.div
          className="max-w-xl gap-2 flex flex-col"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
            <p className="text-lg md:text-xl text-gray-600 text-center lg:text-left">
            Be a part of the Hidayah family—connect with like‑minded creatives, get early product drops,
            and stay updated with our latest works and resources.
            </p>
            
            
            <p className="font-bold text-lg text-br-color text-center lg:text-left">
            Early access to design assets and tools
            <br/>
            Project updates and behind‑the‑scenes
            <br/>
            Community Q&amp;A and collaboration
            </p>
            
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full flex flex-col items-center lg:items-start"
        >
          <button onClick={join} className="cursor-cta bg-br-color/10 text-base sm:text-lg relative overflow-hidden px-6 py-3 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Join Now</span>
            <span className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full" aria-hidden="true"></span>
          </button>
        </motion.div>
      </div>
    </section>
    </motion.div>
    
  );
}
