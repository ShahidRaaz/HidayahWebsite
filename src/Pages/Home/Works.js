import { motion } from "framer-motion";

const images = {
  wallpaper: "https://w0.peakpx.com/wallpaper/860/701/HD-wallpaper-islamic-dhikr-of-allah-islam-thumbnail.jpg",
  social: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5dcd87140369873.6240b0ba5d411.jpg",
  logo: "https://img.freepik.com/free-vector/islamic-logo-two-colors_23-2148627419.jpg?semt=ais_hybrid&w=740&q=80",
  uidesign: "https://media.licdn.com/dms/image/v2/D4D22AQE4kSsZQ-fTDg/feedshare-shrink_800/feedshare-shrink_800/0/1696502977434?e=2147483647&v=beta&t=T9eEzriMq04P2aLG2LDV1D-9PV6pMHhvqouRpilLht8",
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
    scale: 1.02,
    y: 6,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export default function OurWorkSection() {
  const works = [
    { title: "Wallpaper Designs", description: "Beautiful Islamic inspired wallpapers.", imgUrl: images.wallpaper },
    { title: "Social Media Designs", description: "Creative designs for social engagement.", imgUrl: images.social },
    { title: "Logo Designs", description: "Unique logos tailored for Islamic brands.", imgUrl: images.logo },
    { title: "UI Design", description: "Visually appealing user interface design.", imgUrl: images.uidesign },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full px-[6vw]"
    >
      <div className="w-full text-center">
        <motion.h2
          className="text-[#444444] text-4xl md:text-5xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Our <span className="text-br-color">Works</span>
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-[#444444] font-medium text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeInOut" }}
        >
          Explore some of our design and digital innovation that brings faith and creativity together.
        </motion.p>

        {/* Updated grid: 2 columns layout on small and up */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 mt-10"
          variants={containerVariants}
        >
          {works.map((work, index) => (
            <motion.div
              className="p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row relative border-2 border-br-color/25 rounded-3xl bg-white transition-all duration-100 hover:border-br-color hover:shadow-md hover:shadow-br-color/10 cursor-pointer gap-4"
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}>

              {/* Image first on mobile (order-1), second on large screens (order-2) */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img src={work.imgUrl} alt={work.title} className="rounded-xl object-cover w-full aspect-[4/3]" loading="lazy"/>
              </div>

              {/* Text second on mobile (order-2), first on large screens (order-1) */}
              <div className="flex flex-col items-start w-full lg:w-1/2 order-2 lg:order-1 gap-2">
                <h3 className="text-br-color text-xl sm:text-2xl font-semibold text-left">{work.title}</h3>
                <p className="text-[#444444] text-base sm:text-lg md:text-xl leading-relaxed text-left">{work.description}</p>
              </div>

            </motion.div>
))}

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full flex flex-col items-center mt-8"
        >
          <button className="cursor-cta bg-br-color/10 text-base sm:text-lg relative overflow-hidden px-6 py-3 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Explore All Works</span>
            <span className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full" aria-hidden="true"></span>
          </button>
        </motion.div>
         
      </div>
    </motion.section>
  );
}
