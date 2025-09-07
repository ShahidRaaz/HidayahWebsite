import { motion } from 'framer-motion';
export default function AboutSection() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.17, 0.67, 0.83, 0.67]}}
      viewport={{ once: true, amount: 0.2 }} 
      className="px-3 py-12 md:px lg:px-12 h-auto">

      <div className="max-full mx-2 md:mx-12 text-center flex flex-col items-center gap-4 lg:gap-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444444]">
          About <span className="text-br-color">Hidayah</span>
        </h2>

        {/* Subheading */}
        <p className="text-2xl lg:text-3xl text-[#444444] font-medium">
          Crafting with Purpose & Faith for the Muslim Ummah.
        </p>

        {/* First paragraph */}
        <p className="text-xl lg:text-2xl text-[#444444] px-2 sm:px-10 lg:px-16">
          <span className="text-br-color font-semibold">Hidayah</span> is India’s first Islamic design and technology company. Our mission is to create meaningful, faith-inspired digital experiences that empower Muslims worldwide to engage with technology in an authentic and spiritually enriching way.
        </p>

        <button className="cursor-cta bg-br-color/10 text-base sm:text-lg relative overflow-hidden px-6 py-3 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Read More</span>
            <span className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full" aria-hidden="true"></span>
          </button>
      </div>
    </motion.div>
  );
}
