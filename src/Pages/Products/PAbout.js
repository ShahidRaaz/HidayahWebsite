import React from "react";
import { Heart, Shield, Globe2, Sparkles } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Islamic Ethics",
    description: "Every asset adheres to Islamic principles and values"
  },
  {
    icon: Heart,
    title: "Creator-First",
    description: "Empowering Muslim creators with fair compensation and support"
  },
  {
    icon: Globe2,
    title: "Global Unity",
    description: "Connecting the Muslim Ummah through creative collaboration"
  },
  {
    icon: Sparkles,
    title: "Quality Excellence",
    description: "Curated, high-quality content that inspires and uplifts"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#008080]/10 text-[#008080] rounded-full mb-6">
              About Hidayah Hub
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              Building the Future of
              <span className="block text-[#008080]">
                Islamic Creativity
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hidayah Hub will be the world's first creative marketplace dedicated exclusively to Islamic design and media. 
              We envision a vibrant ecosystem where Muslim creators can showcase their talents, earn sustainable income, 
              and contribute to the global Islamic creative economy.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform will be built on the principles of fairness, quality, and ethical practices. We're committed to 
              nurturing a community that respects Islamic values while fostering innovation and artistic excellence.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#008080]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-[#008080]" size={20} />
                  </div>
                  <div>
                    <h3>{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1724596314938-1fc2caf5f355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpc2xhbWljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjAxNTM1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Islamic architecture"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#008080]/30 to-transparent"></div>
            </div>

            {/* Floating Vision Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl hidden lg:block max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#008080] rounded-2xl flex items-center justify-center">
                  <Sparkles className="text-white" size={28} />
                </div>
                <div>
                  <div className="text-2xl">Our Vision</div>
                  <div className="text-sm text-gray-600">Coming Soon</div>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Empowering 100,000+ Muslim creators worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;