import { motion } from 'motion/react';
import { Smartphone, Monitor, Globe, Palette, Code, Megaphone, Fingerprint, Layers, Film, Box, Package, Brain } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Fingerprint,
      title: 'Brand Identity Design',
      description: 'Complete branding solutions including logo design, brand guidelines, and visual identity for Islamic organizations.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
    },
    {
      icon: Layers,
      title: 'UX/UI Design',
      description: 'User-centered design solutions that create intuitive and beautiful experiences for Muslim audiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Film,
      title: 'Motion Graphics',
      description: 'Engaging animated content and motion design for Islamic brands and marketing campaigns.',
      features: ['2D Animation', 'Video Editing', 'Explainer Videos', 'Social Media Content'],
    },
    {
      icon: Box,
      title: '3D Design',
      description: 'Professional 3D modeling, rendering, and visualization for Islamic architecture and products.',
      features: ['3D Modeling', 'Product Rendering', 'Architectural Viz', 'Asset Creation'],
    },
    {
      icon: Package,
      title: 'Print & Packaging Design',
      description: 'Beautiful print materials and packaging solutions for Islamic products and businesses.',
      features: ['Print Design', 'Packaging', 'Brochures', 'Marketing Materials'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with Islamic values at the core.',
      features: ['Native Development', 'Cross-Platform', 'UI/UX Design', 'App Store Launch'],
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technology and SEO optimization.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast & Secure', 'CMS Integration'],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Islamic-compliant digital marketing strategies to help your brand reach the Muslim community effectively.',
      features: ['Social Media', 'Content Strategy', 'Email Marketing', 'Analytics'],
    },
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'Tailored software development services to solve unique challenges faced by Islamic organizations.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Cloud Solutions'],
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Integrate artificial intelligence and machine learning capabilities into your Islamic tech products.',
      features: ['AI Consulting', 'ML Models', 'Automation', 'Smart Features'],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">

          {/* Heading Section */}
      <div className="w-full text-center flex flex-col items-center gap-1 md:gap-2 lg:gap-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#444444] mb-2 text-center">
          Our <span className="text-br-color">services</span>
        </h1>
        <p className="text-xl lg:text-3xl text-[#444444] max-w-3xl mx-auto font-medium">
          Comprehensive design and development services tailored for Islamic brands and organizations worldwide.
        </p>
      </div>


          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-3xl p-6 border-2 transition-all hover:shadow-xl group"
                  style={{ borderColor: '#E8F4F4' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#008080';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F4F4';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#008080' }} />
                  </div>

                  {/* Content */}
                  <h3
                    style={{ fontSize: '1.25rem', fontWeight: '600', color: '#3D3D3D' }}
                    className="mb-3"
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: '1.6' }}
                    className="mb-4"
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: '#008080' }}
                        />
                        <span style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              className="px-12 py-4 rounded-full border-2 transition-all"
              style={{
                backgroundColor: 'transparent',
                borderColor: '#008080',
                color: '#008080',
                fontSize: '1.125rem',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 128, 128, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Request a Service Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Services;