import { motion } from "framer-motion";
import { Sparkles, Palette, Code, GraduationCap, Users } from "lucide-react";
import img1 from "../../assets/otaimg1.png"
import img2 from "../../assets/otaimg2.png"
import img3 from "../../assets/otaimg3.png"
import img4 from "../../assets/otaimg4.png"

const audienceData = [
  {
    imgsrc: img1,
    icon: Palette,
    title: "Muslim Creatives",
    description: "Designers and artists seeking authentic Islamic-inspired resources.",
    color: "from-pink-500 to-rose-500",
  },
  {
    imgsrc: img2,
    icon: Code,
    title: "Tech Innovators",
    description: "Developers building apps aligned with Islamic values.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    imgsrc: img3,
    icon: GraduationCap,
    title: "Educators",
    description: "Teachers sharing faith-based knowledge digitally.",
    color: "from-green-500 to-emerald-500",
  },
  {
    imgsrc: img4,
    icon: Users,
    title: "Muslim Community",
    description: "Individuals looking for meaningful faith-based tools.",
    color: "from-orange-500 to-amber-500",
  },
];

export default function TargetAudience() {
  return (
    <section className="w-full px-[6vw] py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-br-color/10 text-br-color px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Who We Serve
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-4">
          Our <span className="text-br-color">Audience</span>
        </h2>
        <p className="text-xl md:text-2xl text-[#555555] max-w-3xl mx-auto">
          Empowering the diverse Muslim community with meaningful digital experiences.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {audienceData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-br-color/30 hover:shadow-2xl hover:shadow-br-color/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.imgsrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#333333] mb-2 group-hover:text-br-color transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
