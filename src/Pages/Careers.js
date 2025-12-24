import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Users, Heart, Zap, Globe, CheckCircle, Building2, Laptop } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Remote First", description: "Work from anywhere in the world" },
  { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage" },
  { icon: Zap, title: "Learning Budget", description: "Annual budget for courses & books" },
  { icon: Users, title: "Great Team", description: "Collaborative and supportive culture" },
  { icon: Laptop, title: "Equipment", description: "Top-tier tools and equipment provided" },
];

const jobs = [
  {
    id: 1,
    title: "Senior UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Lead design projects for Islamic apps and websites. Create beautiful, intuitive interfaces that serve the Muslim community.",
    requirements: ["5+ years UI/UX experience", "Figma proficiency", "Portfolio required", "Arabic typography a plus"],
    featured: true,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build scalable web applications and APIs. Work with React, Node.js, and modern cloud technologies.",
    requirements: ["3+ years experience", "React & Node.js", "Database design", "API development"],
    featured: true,
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Develop cross-platform mobile apps using Flutter or React Native for Islamic productivity and lifestyle apps.",
    requirements: ["Flutter or React Native", "2+ years mobile dev", "Published apps", "iOS & Android"],
    featured: false,
  },
  {
    id: 4,
    title: "Graphic Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create stunning visual content for social media, branding, and marketing campaigns with Islamic aesthetics.",
    requirements: ["Adobe Creative Suite", "Social media design", "Brand identity", "Motion graphics a plus"],
    featured: false,
  },
  {
    id: 5,
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    description: "Write engaging blog posts, social media content, and marketing copy about Islamic topics, design, and technology.",
    requirements: ["Excellent writing skills", "SEO knowledge", "Islamic knowledge", "Research skills"],
    featured: false,
  },
  {
    id: 6,
    title: "Motion Graphics Artist",
    department: "Design",
    location: "Remote",
    type: "Contract",
    description: "Create animated content for social media, explainer videos, and marketing campaigns with Islamic themes.",
    requirements: ["After Effects", "Animation skills", "Video editing", "Creative storytelling"],
    featured: false,
  },
];

const values = [
  { title: "Faith-Driven", description: "Our work is an act of worship, serving Allah through serving His creation." },
  { title: "Excellence", description: "We pursue ihsan (excellence) in everything we do, from pixel to production." },
  { title: "Community", description: "We uplift the Ummah by creating tools and content that benefit Muslims worldwide." },
  { title: "Innovation", description: "We blend traditional Islamic art with modern technology and design thinking." },
];

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = ["all", "Design", "Engineering", "Marketing"];

  const filteredJobs = selectedDepartment === "all" 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

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
            <Briefcase className="w-4 h-4" />
            Join Our Team
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#333333] mb-6 leading-tight">
            Build for the <span className="text-br-color">Ummah</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#555555] font-medium leading-relaxed max-w-3xl mx-auto">
            Join a team of passionate Muslim creatives and technologists building meaningful products for the global Muslim community.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="px-[6vw] pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Team Members", value: "25+" },
            { label: "Countries", value: "12" },
            { label: "Open Roles", value: "6" },
            { label: "Remote First", value: "100%" },
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

      {/* Our Values */}
      <section className="px-[6vw] py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
              What drives us and shapes our culture at Hidayah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-br-color/5 to-teal-50 rounded-2xl p-6 border border-br-color/10"
              >
                <div className="w-12 h-12 bg-br-color rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">{value.title}</h3>
                <p className="text-[#666666] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="px-[6vw] py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
              Why Join <span className="text-br-color">Hidayah</span>?
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment for Muslim professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-br-color/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-br-color/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-br-color group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-br-color group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2">{benefit.title}</h3>
                  <p className="text-[#666666]">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="px-[6vw] py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
              Open <span className="text-br-color">Positions</span>
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Find your next opportunity to make an impact.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-br-color text-white shadow-lg shadow-br-color/30"
                    : "bg-gray-100 text-[#555555] hover:bg-br-color/10 hover:text-br-color"
                }`}
              >
                {dept === "all" ? "All Departments" : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-[#f0f7f7] rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg group ${
                  job.featured ? "border-br-color/30" : "border-gray-200 hover:border-br-color/30"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#333333] group-hover:text-br-color transition-colors">
                        {job.title}
                      </h3>
                      {job.featured && (
                        <span className="bg-br-color/10 text-br-color text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[#666666] mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#888888]">
                      <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
                        <Building2 className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="cursor-cta self-start lg:self-center bg-br-color text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-teal-700 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Requirements */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-xs text-[#666666] bg-white px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-3 h-3 text-green-500" /> {req}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-[6vw] py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-br-color via-teal-600 to-teal-700 rounded-[2.5rem] p-10 md:p-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Don't See Your Role?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your portfolio and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-cta bg-white text-br-color px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                Send Your Portfolio
              </button>
              <button className="cursor-cta bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300">
                Contact HR
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
