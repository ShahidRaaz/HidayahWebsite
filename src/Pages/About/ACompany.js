import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, Users, Award, Globe, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Faith-Driven", description: "Our work is an act of worship. We approach every project with sincerity (Ikhlas) and pursue excellence (Ihsan)." },
  { icon: Target, title: "Purpose First", description: "We only take on projects that align with Islamic values and benefit the Muslim community." },
  { icon: Zap, title: "Excellence", description: "Beauty and function go hand-in-hand. We craft experiences that are both aesthetically stunning and highly usable." },
  { icon: Users, title: "Community", description: "We're building more than products—we're nurturing a global community of Muslim creatives and technologists." },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "80+", label: "Happy Clients" },
  { value: "25+", label: "Countries Served" },
  { value: "5+", label: "Years Experience" },
];

const team = [
  {
    name: "Founder & Creative Director",
    role: "Design & Strategy",
    description: "Leads creative direction, brand systems, and visual language across all projects. Specializes in Islamic art and modern design fusion.",
    gradient: "from-br-color to-teal-600",
  },
  {
    name: "Co-Founder & Tech Lead",
    role: "Engineering & Development",
    description: "Heads engineering, architecture, and delivery. Expert in React, Flutter, and scalable cloud systems.",
    gradient: "from-teal-600 to-teal-700",
  },
];

export default function AboutCompany() {
  return (
    <div className="w-full">
      {/* Story Section */}
      <section className="px-[6vw] py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 leading-tight">
                Designing for the <span className="text-br-color">Ummah</span>
              </h2>
              <div className="space-y-4 text-lg text-[#555555] leading-relaxed">
                <p>
                  Hidayah was born from a simple observation: the Muslim community deserves world-class digital experiences that reflect our values and heritage.
                </p>
                <p>
                  We blend traditional Islamic art principles with modern design thinking to create websites, apps, and brands that inspire faith while driving results.
                </p>
                <p>
                  Our team combines deep Islamic knowledge with cutting-edge technical skills, ensuring every pixel and every line of code serves a purpose greater than itself.
                </p>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-br-color/10 to-teal-100/30 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-br-color mb-1">{stat.value}</div>
                      <div className="text-sm text-[#666666]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-br-color/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-100 rounded-full blur-lg" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="px-[6vw] py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-gradient-to-br from-br-color to-teal-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To be the global standard for Islamic-inspired design and technology—raising the bar for beauty, usability, and spiritual alignment in digital experiences.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
              <div className="w-14 h-14 bg-br-color/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-br-color" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">Our Mission</h3>
              <ul className="space-y-3 text-[#555555]">
                {[
                  "Design accessible, beautiful interfaces rooted in Islamic values",
                  "Build reliable, performant digital products that scale",
                  "Nurture Muslim creative talent and technical excellence",
                  "Serve the Ummah with integrity and purpose",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-br-color rounded-full mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-[6vw] py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
              Our <span className="text-br-color">Values</span>
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              The principles that guide everything we do at Hidayah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-br-color/5 to-teal-50 rounded-2xl p-6 border border-br-color/10 hover:border-br-color/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-br-color/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-br-color group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-br-color group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">{value.title}</h3>
                  <p className="text-[#666666] leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Leadership */}
      <section className="px-[6vw] py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
              Meet the <span className="text-br-color">Team</span>
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              The people behind Hidayah's mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-br-color/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-2xl`}>
                  {index === 0 ? "F" : "C"}
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-1">{member.name}</h3>
                <p className="text-br-color font-semibold mb-4">{member.role}</p>
                <p className="text-[#666666] leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-[6vw] py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-br-color via-teal-600 to-teal-700 rounded-[2.5rem] p-10 md:p-16 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Join Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Build Something Meaningful?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Let's create digital experiences that serve the Ummah and bring barakah to your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="cursor-cta bg-white text-br-color px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Start a Project
                </button>
              </a>
              <a href="/careers">
                <button className="cursor-cta bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300">
                  Join Our Team
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
