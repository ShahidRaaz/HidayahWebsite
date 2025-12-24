import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, User, Heart, MessageCircle, Share2, Sparkles, TrendingUp, Tag } from "lucide-react";

const categories = [
  { id: "all", name: "All Posts", icon: Sparkles },
  { id: "spirituality", name: "Spirituality", icon: Heart },
  { id: "design", name: "Design", icon: Tag },
  { id: "tech", name: "Technology", icon: TrendingUp },
  { id: "community", name: "Community", icon: MessageCircle },
];

const blogs = [
  {
    id: 1,
    title: "The Art of Islamic Calligraphy in Modern Design",
    excerpt: "Discover how traditional Islamic calligraphy is being reimagined for contemporary digital applications, branding, and user interfaces. We explore the intersection of heritage and innovation.",
    category: "design",
    author: "Ahmad Hassan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?w=800&q=80",
    featured: true,
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    title: "Building Apps That Strengthen Faith",
    excerpt: "How technology can be leveraged to create meaningful applications that help Muslims in their daily spiritual journey. From prayer reminders to Quran apps, technology serves faith.",
    category: "tech",
    author: "Fatima Ali",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "Dec 18, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    featured: true,
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    title: "Finding Peace Through Daily Dhikr",
    excerpt: "A comprehensive guide to incorporating remembrance of Allah into your daily routine for inner peace, mindfulness, and spiritual growth in the modern world.",
    category: "spirituality",
    author: "Sheikh Muhammad",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "Dec 15, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80",
    featured: false,
    likes: 312,
    comments: 67,
  },
  {
    id: 4,
    title: "Growing the Muslim Creator Community",
    excerpt: "How Muslim designers, developers and creators are coming together to build meaningful digital experiences that serve the Ummah worldwide.",
    category: "community",
    author: "Yusuf Khan",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    featured: false,
    likes: 156,
    comments: 28,
  },
  {
    id: 5,
    title: "Geometric Patterns: Sacred Mathematics in Design",
    excerpt: "Exploring the mathematical precision and spiritual significance behind Islamic geometric patterns and how to apply them in modern design projects.",
    category: "design",
    author: "Aisha Rahman",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80",
    featured: false,
    likes: 278,
    comments: 52,
  },
  {
    id: 6,
    title: "AI and Islam: Ethical Considerations",
    excerpt: "Navigating the intersection of artificial intelligence development and Islamic ethical principles. A thoughtful exploration of technology and faith.",
    category: "tech",
    author: "Omar Siddiqui",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: false,
    likes: 198,
    comments: 41,
  },
  {
    id: 7,
    title: "The Power of Gratitude in Islam",
    excerpt: "Understanding Shukr (gratitude) as a transformative practice that enhances our connection with Allah and brings barakah into our lives.",
    category: "spirituality",
    author: "Khadijah Malik",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    featured: false,
    likes: 345,
    comments: 78,
  },
  {
    id: 8,
    title: "Ramadan Design Resources Collection",
    excerpt: "A curated collection of free design resources, templates, and assets for creating beautiful Ramadan-themed content for your community.",
    category: "design",
    author: "Ahmad Hassan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "Dec 2, 2024",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1564769610726-59cead6a6f8f?w=800&q=80",
    featured: false,
    likes: 423,
    comments: 89,
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");

  const filteredBlogs =
    activeCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  const featuredBlogs = blogs.filter((blog) => blog.featured);

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
            <BookOpen className="w-4 h-4" />
            Knowledge & Inspiration
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#333333] mb-6 leading-tight">
            Islamic <span className="text-br-color">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#555555] font-medium leading-relaxed max-w-3xl mx-auto">
            Explore articles on design, technology, spirituality, and community from a Muslim perspective.
          </p>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="px-[6vw] pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {featuredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-br-color/30 hover:shadow-2xl hover:shadow-br-color/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-br-color to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </span>
                </div>

                {/* Content on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                    {categories.find((c) => c.id === blog.category)?.name}
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-2 leading-tight group-hover:text-br-color/90 transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#666666] leading-relaxed mb-5 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#333333]">{blog.author}</p>
                      <p className="text-xs text-[#888888]">{blog.date}</p>
                    </div>
                  </div>

                  {/* Stats & Read More */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 text-sm text-[#888888]">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> {blog.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" /> {blog.comments}
                      </span>
                    </div>
                    <button className="text-br-color font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-[6vw] py-8 sticky top-20 z-30 bg-[#f0f7f7]/95 backdrop-blur-sm">
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

      {/* Blog Grid */}
      <section className="px-[6vw] py-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-br-color/30 hover:shadow-2xl hover:shadow-br-color/10 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-br-color px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
                      {categories.find((c) => c.id === blog.category)?.name}
                    </span>
                  </div>

                  {/* Share Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Share2 className="w-4 h-4 text-br-color" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-[#888888] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#333333] mb-3 line-clamp-2 group-hover:text-br-color transition-colors duration-300 leading-snug">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#666666] text-sm leading-relaxed line-clamp-2 mb-5">
                    {blog.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.authorImage}
                        alt={blog.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-[#555555]">{blog.author}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-[#888888]">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5" /> {blog.likes}
                      </span>
                      <button className="text-br-color font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Load More */}
      <section className="px-[6vw] py-8 text-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white text-br-color px-8 py-4 rounded-full font-semibold border-2 border-br-color hover:bg-br-color hover:text-white transition-all duration-300"
        >
          Load More Articles
        </motion.button>
      </section>

      {/* Newsletter CTA */}
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Stay Updated with Islamic Insights
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly articles on design, technology, spirituality, and community updates.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 outline-none text-[#333333] placeholder:text-[#999999] shadow-xl"
              />
              <button
                type="submit"
                className="cursor-cta bg-white text-br-color px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-white/70 text-sm mt-6">
              Join 2,500+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Topics Cloud */}
      <section className="px-[6vw] py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#333333] mb-6">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Islamic Art", "Calligraphy", "Prayer", "Quran", "Mobile Apps", "Web Design", "Typography", "Ramadan", "Eid", "Dhikr", "Community", "AI Ethics", "UX Design", "Branding"].map((topic, idx) => (
              <span
                key={idx}
                className="bg-white text-[#555555] px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:border-br-color hover:text-br-color hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Blogs;
