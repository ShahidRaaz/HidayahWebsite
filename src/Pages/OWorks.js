import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Smartphone, Globe, Palette, Film, Box, Image, Sparkles, Eye } from "lucide-react";

const categories = [
  { id: "all", name: "All Works", icon: Sparkles },
  { id: "wallpaper", name: "Wallpapers", icon: Image },
  { id: "social", name: "Social Media", icon: Palette },
  { id: "logo", name: "Branding", icon: Layers },
  { id: "ui", name: "UI/UX", icon: Smartphone },
  { id: "web", name: "Web", icon: Globe },
  { id: "mobile", name: "Mobile", icon: Smartphone },
];

const works = [
  {
    id: 1,
    title: "Dhikr Wallpaper Series",
    category: "wallpaper",
    description: "A stunning collection of Islamic wallpapers featuring beautiful Arabic calligraphy with Dhikr phrases, designed to inspire daily remembrance of Allah.",
    image: "https://w0.peakpx.com/wallpaper/860/701/HD-wallpaper-islamic-dhikr-of-allah-islam-thumbnail.jpg",
    icon: Image,
    tags: ["Calligraphy", "Mobile", "Desktop"],
    stats: { views: "12.5K", likes: "2.3K" },
  },
  {
    id: 2,
    title: "Ramadan Kareem Campaign",
    category: "social",
    description: "Complete social media design pack for Ramadan including Instagram posts, stories, and Facebook covers with elegant geometric patterns.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5dcd87140369873.6240b0ba5d411.jpg",
    icon: Palette,
    tags: ["Instagram", "Facebook", "Stories"],
    stats: { views: "8.2K", likes: "1.8K" },
  },
  {
    id: 3,
    title: "Al-Noor Mosque Identity",
    category: "logo",
    description: "Modern Islamic branding including logo design, typography system, color palette, and complete brand guidelines for Al-Noor Mosque.",
    image: "https://img.freepik.com/free-vector/islamic-logo-two-colors_23-2148627419.jpg?semt=ais_hybrid&w=740&q=80",
    icon: Layers,
    tags: ["Logo", "Branding", "Guidelines"],
    stats: { views: "6.8K", likes: "1.2K" },
  },
  {
    id: 4,
    title: "Salah Times App",
    category: "ui",
    description: "Clean and intuitive prayer times application with Qibla compass, Adhan notifications, and Hijri calendar integration.",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQE4kSsZQ-fTDg/feedshare-shrink_800/feedshare-shrink_800/0/1696502977434?e=2147483647&v=beta&t=T9eEzriMq04P2aLG2LDV1D-9PV6pMHhvqouRpilLht8",
    icon: Smartphone,
    tags: ["iOS", "Android", "Widget"],
    stats: { views: "15.3K", likes: "3.1K" },
  },
  {
    id: 5,
    title: "Islamic Learning Platform",
    category: "web",
    description: "Modern responsive e-learning platform for Quranic studies with interactive lessons, progress tracking, and certification system.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: Globe,
    tags: ["React", "LMS", "Responsive"],
    stats: { views: "9.7K", likes: "2.5K" },
  },
  {
    id: 6,
    title: "Quran Companion App",
    category: "mobile",
    description: "Feature-rich Quran app with tajweed color coding, multiple translations, bookmarks, and audio recitations by famous Qaris.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    icon: Smartphone,
    tags: ["Flutter", "Firebase", "Offline"],
    stats: { views: "22.1K", likes: "5.4K" },
  },
  {
    id: 7,
    title: "Geometric Art Collection",
    category: "wallpaper",
    description: "Intricate geometric patterns inspired by traditional Islamic art and architecture, available in multiple color themes.",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80",
    icon: Box,
    tags: ["Patterns", "Vector", "Print"],
    stats: { views: "7.4K", likes: "1.6K" },
  },
  {
    id: 8,
    title: "Eid Mubarak Collection",
    category: "social",
    description: "Vibrant Eid celebration templates featuring modern Islamic aesthetics, animated stories, and greeting card designs.",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800&q=80",
    icon: Film,
    tags: ["Animation", "Templates", "Greeting"],
    stats: { views: "11.2K", likes: "2.8K" },
  },
  {
    id: 9,
    title: "Zakat Calculator App",
    category: "mobile",
    description: "Comprehensive Zakat calculation app with asset tracking, payment reminders, and donation to verified Islamic charities.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    icon: Smartphone,
    tags: ["Finance", "Charity", "Tracking"],
    stats: { views: "5.9K", likes: "980" },
  },
  {
    id: 10,
    title: "Masjid Website Template",
    category: "web",
    description: "Beautiful mosque website template with prayer times widget, events calendar, donation integration, and sermon archive.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    icon: Globe,
    tags: ["WordPress", "Donations", "Events"],
    stats: { views: "8.3K", likes: "1.9K" },
  },
];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredWork, setHoveredWork] = useState(null);

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <div className="min-h-screen mt-[0px] md:mt-[50px] lg:mt-[50px] xl:mt-[75px] bg-[#f0f7f7]">
      {/* Hero Section */}
      <section className="px-[6vw] py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-br-color/10 text-br-color px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Creative Portfolio
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#333333] mb-6 leading-tight">
            Our <span className="text-br-color bg-gradient-to-r from-br-color to-teal-600 bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#555555] font-medium leading-relaxed max-w-3xl mx-auto">
            Crafting digital experiences that inspire faith and celebrate Islamic heritage through design.
          </p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="px-[6vw] pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Projects Completed", value: "150+" },
            { label: "Happy Clients", value: "80+" },
            { label: "Countries Served", value: "25+" },
            { label: "Years Experience", value: "5+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-br-color/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-br-color mb-1">{stat.value}</div>
              <div className="text-sm text-[#666666]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-[6vw] pb-10 sticky top-20 z-30 bg-[#f0f7f7]/95 backdrop-blur-sm py-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-br-color text-white shadow-lg shadow-br-color/30 scale-105"
                    : "bg-white text-[#555555] border border-gray-200 hover:border-br-color hover:text-br-color hover:shadow-md"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* Works Grid */}
      <section className="px-[6vw] py-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => {
              const Icon = work.icon;
              return (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredWork(work.id)}
                  onMouseLeave={() => setHoveredWork(null)}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-br-color/50 hover:shadow-2xl hover:shadow-br-color/15 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                        <Icon className="w-4 h-4 text-br-color" />
                        <span className="text-xs font-semibold text-br-color uppercase tracking-wide">
                          {categories.find((c) => c.id === work.category)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs">
                        <Eye className="w-3.5 h-3.5" />
                        {work.stats.views}
                      </div>
                    </div>

                    {/* View Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: hoveredWork === work.id ? 1 : 0, y: hoveredWork === work.id ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 right-4"
                    >
                      <div className="w-12 h-12 bg-br-color text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors shadow-xl">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#333333] mb-2 group-hover:text-br-color transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-2">
                      {work.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-br-color bg-br-color/10 px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-[6vw] py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-br-color via-teal-600 to-teal-700 rounded-[2.5rem] p-10 md:p-16"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Let's Collaborate
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              We're always excited to work on new Islamic projects. Let's create something meaningful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-cta bg-white text-br-color px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start a Project
              </button>
              <button className="cursor-cta bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300">
                View Process
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Works;
