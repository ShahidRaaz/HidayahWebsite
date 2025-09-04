import { motion } from "framer-motion";

const images = {
  wallpaper: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  social: "https://img.freepik.com/free-vector/ramadan-kareem-background_53876-66667.jpg",
  logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Islamic_Crescent.svg",
  smartMosque: "https://cdn-icons-png.flaticon.com/512/484/484181.png",
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
  hidden: { opacity: 0, x: 90, scale: 0.85 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 25,
      duration: 1.2,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  hover: {
    scale: 1.05,
    y: -6,
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
    { title: "Smart Mosque UI", description: "Innovative digital signage for mosques.", imgUrl: images.smartMosque },
  ];

  return (
    <motion.section
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto px-6 mb-6">
        <motion.h2
          className="text-[#444444] text-4xl md:text-5xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Our <span className="text-br-color">Works</span>
        </motion.h2>
        <motion.p
          className="text-base sm:text-2xl lg:text-3xl text-[#444444] font-medium"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeInOut" }}
        >
          Explore some of our design and digital innovation that brings faith and creativity together.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center mt-10"
          variants={containerVariants}
        >
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="bg-[#f9fcfd] rounded-2xl border-2 border-br-color max-w-[300px] w-full flex flex-col cursor-pointer overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              tabIndex={0}
              custom={i}
            >
              <img
                src={work.imgUrl}
                alt={work.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-br-color text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-[#444444] text-base">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
