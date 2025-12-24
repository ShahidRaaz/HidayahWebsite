import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Sparkles, ExternalLink } from "lucide-react";

const works = [
  { 
    title: "Dhikr Wallpaper Collection", 
    description: "Beautiful Islamic wallpapers featuring Arabic calligraphy with Dhikr phrases for daily remembrance.",
    category: "Wallpapers",
    imgUrl: "https://w0.peakpx.com/wallpaper/860/701/HD-wallpaper-islamic-dhikr-of-allah-islam-thumbnail.jpg" 
  },
  { 
    title: "Ramadan Social Campaign", 
    description: "Complete social media design package for Ramadan and Eid campaigns.",
    category: "Social Media",
    imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5dcd87140369873.6240b0ba5d411.jpg" 
  },
  { 
    title: "Islamic Brand Identity", 
    description: "Modern logo and visual identity systems for Muslim organizations.",
    category: "Branding",
    imgUrl: "https://img.freepik.com/free-vector/islamic-logo-two-colors_23-2148627419.jpg?semt=ais_hybrid&w=740&q=80" 
  },
  { 
    title: "Prayer App Interface", 
    description: "Clean, intuitive UI design for an Islamic productivity and prayer app.",
    category: "UI/UX",
    imgUrl: "https://media.licdn.com/dms/image/v2/D4D22AQE4kSsZQ-fTDg/feedshare-shrink_800/feedshare-shrink_800/0/1696502977434?e=2147483647&v=beta&t=T9eEzriMq04P2aLG2LDV1D-9PV6pMHhvqouRpilLht8" 
  },
];

export default function OurWorkSection() {
  return (
    <section className="w-full px-[6vw] py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-br-color/10 text-br-color px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Our Portfolio
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-4">
          Featured <span className="text-br-color">Works</span>
        </h2>
        <p className="text-xl md:text-2xl text-[#555555] max-w-3xl mx-auto">
          Explore our design creations that bring faith and creativity together.
        </p>
      </motion.div>

      {/* Featured Work - Large */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-br-color to-teal-700 h-[400px] md:h-[500px]">
          <img 
            src={works[0].imgUrl} 
            alt={works[0].title} 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              {works[0].category}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {works[0].title}
            </h3>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-6">
              {works[0].description}
            </p>
            <button className="cursor-cta bg-white text-br-color px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              View Project <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Other Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {works.slice(1).map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl h-[320px] cursor-pointer"
          >
            <img 
              src={work.imgUrl} 
              alt={work.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                <Eye className="w-6 h-6 text-br-color" />
              </div>
            </div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {work.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                {work.title}
              </h3>
              <p className="text-white/75 text-sm line-clamp-2">
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link to="/works">
          <button className="cursor-cta bg-gradient-to-r from-br-color to-teal-600 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto hover:shadow-xl hover:shadow-br-color/25 transition-all duration-300 hover:scale-105">
            Explore All Works <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
