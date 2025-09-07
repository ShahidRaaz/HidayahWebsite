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
  hidden: { opacity: 0, x: 40, scale: 0.85 },
  visible: { 
    opacity: 1, 
    x: 0, 
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
    { title: "Social Media Posts", description: "Creative posts for social engagement.", imgUrl: images.social },
    { title: "Logo Designs", description: "Unique logos tailored for Islamic brands.", imgUrl: images.logo },
    { title: "UI Design", description: "Visually appealing user interface design.", imgUrl: images.uidesign },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="px-[5vw]"
    >
      <div className="max-w-screen-xl mx-auto text-center px-4 md:px-8">
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
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="bg-[#f9fcfd] rounded-2xl border-2 border-br-color/25 p-6 flex flex-row cursor-pointer overflow-hidden transition-all duration-100 hover:border-br-color hover:shadow-md hover:shadow-br-color/10 gap-4"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              tabIndex={0}
              custom={i}
            >
              <div className="flex flex-col items-start w-full">
                <h3 className="text-br-color text-2xl font-semibold mb-2 text-left">{work.title}</h3>
                <p className="text-[#444444] text-xl text-left">{work.description}</p> 
              </div>
              <div className="h-[200px] w-[400px]">
                <img
                src={work.imgUrl}
                alt={work.title}
                className="rounded-xl fill object-cover h-full w-full"
                loading="lazy"
              />
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
