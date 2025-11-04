import { motion } from 'motion/react';
import { Handshake, Sparkles, Brain, Users, Globe } from 'lucide-react';
import VideoOnceOnView from "../../components/Website/vanim";

const fadeScaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 0.1, ease: [0.17, 0.67, 0.83, 0.67] },
  viewport: { once: true, amount: 0.2 },
};

export default function AboutHidayah() {
  const purposes = [
    {
      icon: Handshake,
      title: 'Design & Tech Services',
      description: 'Providing comprehensive design and technology services to Islamic brands and Muslim businesses worldwide.',
      color: '#008080',
    },
    {
      icon: Sparkles,
      title: 'Product Development',
      description: 'Buidling innovative digital platform, tools and softwares for global muslim worldwide.',
      color: '#008080',
    },
  ];
  
  const highlights = [
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'First Islamic tech hub leveraging artificial intelligence',
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern Muslim community',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Built by Muslims, for Muslims worldwide',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Serving Islamic brands across the world',
    },
  ];

  return (
    <motion.div {...fadeScaleIn} className="h-auto flex flex-col w-full px-[6vw] items-center gap-6 pb-12">
        <section className="bg-white rounded-3xl px-4 lg:px-16 xl:px-16 w-full mx-2 md:mx-12 my-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 h-auto py-8 lg:py-16">
      {/* Left: Visual/Logo */}
      <div className="flex flex-col items-center justify-center w-[70vw] lg:w-1/2 h-full">
        <VideoOnceOnView src="/videos/hidayahsa.mp4" alt="Hidayah animated logo" className="h-100 w-auto mb-5 lg:mb-0"/>
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 h-auto gap-4">
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#444444] text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          First Islamic AI-Powered <br/>
          Design & Tech Hub
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-xl font-normal text-center lg:text-left"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
            At Hidayah, we are dedicated to crafting digital products that seamlessly blend purpose and faith. Our mission is to empower the global Muslim community through innovative design and technology solutions that resonate with Islamic values.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full flex flex-col items-center lg:items-start"
        >
          <button className="cursor-cta bg-br-color/10 text-base sm:text-lg relative overflow-hidden px-6 py-3 mt-4 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Read About Us</span>
            <span className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full" aria-hidden="true"></span>
          </button>
        </motion.div>
      </div>
    </section>

    {/* Two Main Purposes */}
          <div className="grid md:grid-cols-2 gap-8">
            {purposes.map((purpose, index) => {
              const Icon = purpose.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-sm group"
                  style={{ borderColor: '#E8F4F4' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#008080';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F4F4';
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: purpose.color }} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#3D3D3D' }} className="mb-4">
                    {purpose.title}
                  </h3>
                  <p style={{ fontSize: '1.25rem', color: '#6B6B6B', lineHeight: '1.6' }}>
                    {purpose.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

    {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border-2 transition-all"
                  
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#008080';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#008080' }} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#3D3D3D' }} className="mb-2">
                    {highlight.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: '1.6' }}>
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
    </motion.div>
    
  );
}
