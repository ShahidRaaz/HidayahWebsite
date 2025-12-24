import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, Sparkles, Brain, Users, Globe, ArrowRight, Rocket, Palette } from 'lucide-react';
import VideoOnceOnView from "../../components/Website/vanim";

export default function AboutHidayah() {
  const highlights = [
    { icon: Sparkles, title: 'AI-Powered', description: 'First Islamic tech hub with AI', color: 'from-purple-500 to-purple-600' },
    { icon: Brain, title: 'Innovation', description: 'Cutting-edge solutions', color: 'from-blue-500 to-blue-600' },
    { icon: Users, title: 'Community', description: 'Built for the Ummah', color: 'from-green-500 to-green-600' },
    { icon: Globe, title: 'Global', description: 'Serving 25+ countries', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="w-full px-[6vw] py-8">
      {/* Main About Card */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-gray-100 shadow-sm"
      >
        {/* Left: Video/Logo */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-br-color/20 to-teal-100/30 rounded-3xl blur-2xl" />
            <VideoOnceOnView 
              src="/videos/hidayahsa.mp4" 
              alt="Hidayah animated logo" 
              className="relative z-10 w-full max-w-[280px] rounded-2xl"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-br-color/10 text-br-color px-4 py-2 rounded-full text-sm font-semibold w-fit mx-auto lg:mx-0"
          >
            <Rocket className="w-4 h-4" />
            First of Its Kind
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
            First <span className="text-br-color">AI-Powered</span>
            <br />
            Islamic Design & Tech Hub
          </h2>

          <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl">
            At Hidayah, we blend faith with innovation—crafting beautiful digital products that empower the global Muslim community through purpose-driven design and cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/about">
              <button className="cursor-cta bg-gradient-to-r from-br-color to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-br-color/25 transition-all duration-300 hover:scale-105">
                About Us <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/works">
              <button className="cursor-cta bg-white text-br-color px-8 py-4 rounded-full font-semibold text-lg border-2 border-br-color/30 hover:border-br-color transition-all duration-300">
                View Works
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Two Purpose Cards */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-2 gap-6 mt-8"
      >
        {[
          {
            icon: Handshake,
            title: 'Design & Tech Services',
            description: 'Premium design and development services for Islamic brands, mosques, and Muslim businesses worldwide.',
            gradient: 'from-br-color to-teal-600',
          },
          {
            icon: Palette,
            title: 'Digital Products',
            description: 'Building innovative platforms, apps, and creative tools for the global Muslim community.',
            gradient: 'from-teal-600 to-teal-700',
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-br-color/30 hover:shadow-xl hover:shadow-br-color/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-3">{item.title}</h3>
              <p className="text-lg text-[#666666] leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Highlights Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
      >
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-br-color/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-1">{highlight.title}</h3>
              <p className="text-sm text-[#666666]">{highlight.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
