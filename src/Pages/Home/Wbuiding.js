import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Image, Film, Music, Smartphone, Globe, Cpu, Palette, Download, ArrowRight } from "lucide-react";

const creativeAssets = [
  { icon: Image, label: "Stock Photos & Videos" },
  { icon: Palette, label: "Wallpapers & Themes" },
  { icon: Film, label: "Motion Graphics" },
  { icon: Music, label: "Audio & Nasheeds" },
  { icon: Download, label: "Design Templates" },
];

const innovativeSoftwares = [
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Globe, label: "Web Applications" },
  { icon: Cpu, label: "AI Tools" },
];

export default function IslamicEcosystem() {
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
          Our Ecosystem
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-4">
          What We're <span className="text-br-color">Building</span>
        </h2>
        <p className="text-xl md:text-2xl text-[#555555] max-w-3xl mx-auto">
          A complete ecosystem of Islamic-inspired designs and innovative software.
        </p>
      </motion.div>

      {/* Two Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Creative Assets */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-br-color via-teal-600 to-teal-700 rounded-3xl p-8 md:p-10"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Creative Assets</h3>
            </div>
            <p className="text-white/85 text-lg mb-6">
              Premium Islamic design resources for creators worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              {creativeAssets.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Innovative Software */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-br-color/10 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-br-color" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#333333]">Innovative Software</h3>
          </div>
          <p className="text-[#666666] text-lg mb-6">
            Purpose-built digital tools for the Muslim community.
          </p>
          <div className="flex flex-wrap gap-3">
            {innovativeSoftwares.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 bg-br-color/10 text-br-color px-4 py-2 rounded-full text-sm font-medium">
                  <Icon className="w-4 h-4" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-8 border border-purple-200/50"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
            <Palette className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#333333] mb-2">Creative Hub</h3>
          <p className="text-sm text-purple-600 font-semibold mb-3">Coming Soon</p>
          <p className="text-[#666666] leading-relaxed">
            The first Islamic creative marketplace—combining faith, creativity, and technology for meaningful design engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border border-blue-200/50"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
            <Cpu className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#333333] mb-2">AI Innovation</h3>
          <p className="text-sm text-blue-600 font-semibold mb-3">In Development</p>
          <p className="text-[#666666] leading-relaxed">
            AI-powered tools to empower Muslims with smarter, purposeful digital products enhancing productivity and spiritual growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
