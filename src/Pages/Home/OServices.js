import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, Palette, Code, Megaphone, Fingerprint, Layers, Film, Box, Package, Brain, ArrowRight, Sparkles } from 'lucide-react';

export function Services() {
  const services = [
    { icon: Fingerprint, title: 'Brand Identity', description: 'Logo design, brand guidelines, and visual identity systems', color: 'from-pink-500 to-rose-500' },
    { icon: Layers, title: 'UI/UX Design', description: 'User-centered interfaces for apps and websites', color: 'from-purple-500 to-violet-500' },
    { icon: Film, title: 'Motion Graphics', description: 'Animated content and explainer videos', color: 'from-blue-500 to-cyan-500' },
    { icon: Box, title: '3D Design', description: 'Product visualization and 3D modeling', color: 'from-green-500 to-emerald-500' },
    { icon: Package, title: 'Print Design', description: 'Brochures, packaging, and marketing materials', color: 'from-orange-500 to-amber-500' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'iOS and Android app development', color: 'from-teal-500 to-cyan-500' },
    { icon: Globe, title: 'Web Development', description: 'Modern, responsive websites and web apps', color: 'from-indigo-500 to-purple-500' },
    { icon: Brain, title: 'AI Solutions', description: 'AI-powered features and automation', color: 'from-red-500 to-pink-500' },
  ];

  return (
    <section className="py-16 px-[6vw] bg-white">
      <div className="max-w-7xl mx-auto">
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
            What We Offer
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-4">
            Our <span className="text-br-color">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#555555] max-w-3xl mx-auto">
            Comprehensive design and development solutions tailored for Islamic brands and organizations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#f8fafa] hover:bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-gray-100 hover:border-br-color/30 hover:shadow-xl hover:shadow-br-color/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2 group-hover:text-br-color transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <button className="cursor-cta bg-gradient-to-r from-br-color to-teal-600 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto hover:shadow-xl hover:shadow-br-color/25 transition-all duration-300 hover:scale-105">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;