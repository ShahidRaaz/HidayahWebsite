import { motion } from "framer-motion";

const fadeScaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 0.1, ease: [0.17, 0.67, 0.83, 0.67] },
  viewport: { once: true, amount: 0.2 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.24,
      delayChildren: 0.35,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 25,
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  hover: {
    scale: 1.05,
    y: 6,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};


export default function TargetAudience() {
  const audienceData = [
    {
      title: "Muslim Creatives",
      description:
        "Designers, illustrators, and artists seeking authentic Islamic-inspired resources.",
    },
    {
      title: "Developers & Innovators",
      description:
        "Tech enthusiasts building apps, websites, and tools aligned with Islamic values.",
    },
    {
      title: "Educators & Communities",
      description:
        "Teachers, institutes, and community groups sharing faith-based knowledge digitally.",
    },
    {
      title: "Everyday Muslims",
      description:
        "Individuals looking for meaningful wallpapers, tools, and apps that bring faith into daily life.",
    },
  ];

  return (
    <motion.section
    className="w-full items-center justify-center px-[6vw]" initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants} >
      <div className="w-full text-center">
        {/* Section Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeScaleIn}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-[#444444]"
        >
          Our <span className="text-br-color">Target Audience</span>
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeScaleIn}
          viewport={{ once: true }}
          className="px-12 text-xl md:text-2xl lg:text-3xl text-[#444444] font-medium mb-6 leading-6"
        >
          We’re designing with purpose for a diverse Muslim community,
          empowering individuals and organizations with meaningful digital experiences.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-6 mb-12"
          variants={containerVariants}
        >
          {audienceData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              className="relative w-full border-2 border-br-color/25 rounded-3xl p-5 bg-white transition-all duration-100 hover:border-br-color hover:shadow-md hover:shadow-br-color/10 cursor-pointer"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-br-color leading-7 mb-2 px-12">{item.title}</h3>
              <p className="text-lg md:text-xl text-[#444444] leading-6 w-full">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
