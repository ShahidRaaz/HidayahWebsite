import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import HLogo from "../../assets/hlogo.png";
import { ArrowRight, Home, Info, Briefcase, Package, Users, BookOpen, Mail, Phone, MapPin, Play } from 'lucide-react';

const navLinks = [
  { icon: Home, label: 'Home', to: '/', description: 'Welcome to Hidayah' },
  { icon: Info, label: 'About Us', to: '/about', description: 'Learn about our company & team' },
  { icon: Briefcase, label: 'Our Works', to: '/works', description: 'View our portfolio' },
  { icon: Package, label: 'Our Products', to: '/products', description: 'Explore our innovative products' },
  { icon: Users, label: 'Careers', to: '/careers', description: 'Join our team' },
  { icon: BookOpen, label: 'Blogs', to: '/blogs', description: 'Read latest articles' },
];

const MenuOverlay = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    // Disable body scroll when overlay is open
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleNavLinkClick = () => {
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transform transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="min-h-screen px-[5vw] py-[25px]">
        <div className="flex items-center justify-between content-center w-full mb-12">
          {/* Logo */}
          <button className="bg-br-color w-[56px] h-[56px] flex items-center justify-center rounded-full">
            <img src={HLogo} alt="Logo" className="h-8" />
          </button>

          <h1 className="text-[36px]">Hidayah</h1>

          <button onClick={handleClose} className="cursor-cta group w-[56px] h-[56px] flex items-center justify-center border-2 border-br-color rounded-full bg-custom-teal hover:bg-br-color transition duration-300">
            <svg width="18" height="18" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-br-color group-hover:text-white transition duration-300">
              <path d="M13 13.5L25 25.5M13 13.5L1 1.5M13 13.5L1 25.5M13 13.5L25 1.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      
        <div className="grid lg:grid-cols-2 gap-16 pb-12 overflow-y-auto" style={{ maxHeight: '80vh' }}>
          {/* Quick Links Section */}
          <div className="space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', color: '#008080' }}
                className="mb-3"
              >
                NAVIGATION
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3D3D3D' }}
              >
                Quick Links
              </motion.h2>
            </div>

            <nav className="space-y-3">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                  <NavLink
                      to={link.to}
                      onClick={handleNavLinkClick}
                      className={({ isActive }) =>
                        `flex items-center gap-4 p-5 rounded-2xl border-2 transition-all group ${
                          isActive
                            ? "border-br-color bg-custom-teal"
                            : "border-[#E8F4F4] bg-white hover:border-br-color hover:bg-[rgba(232,244,244,0.3)]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div 
                            className="w-14 h-14 rounded-xl flex items-center justify-center transition-all"
                            style={{ 
                              backgroundColor: isActive 
                                ? '#008080' 
                                : 'rgba(0, 128, 128, 0.1)' 
                            }}
                          >
                            <Icon 
                              className="w-6 h-6" 
                              style={{ color: isActive ? '#FFFFFF' : '#008080' }} 
                            />
                          </div>
                          <div className="flex-1">
                            <p style={{ 
                              fontSize: '1.125rem', 
                              fontWeight: isActive ? '700' : '600', 
                              color: '#3D3D3D' 
                            }}>
                              {link.label}
                            </p>
                            <p style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>
                              {link.description}
                            </p>
                          </div>
                          <ArrowRight 
                            className={`w-5 h-5 transform transition-all ${
                              isActive 
                                ? "opacity-0" 
                                : "opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1"
                            }`}
                            style={{ color: '#008080' }} 
                          />
                        </>
                      )}
                    </NavLink>

                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p
                style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', color: '#008080' }}
                className="mb-3"
              >
                GET IN TOUCH
              </p>
              <h3 className="mb-6" style={{ fontSize: '2rem', fontWeight: '700', color: '#3D3D3D' }}>
                Let's Work Together
              </h3>
              <p className="mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#6B6B6B' }}>
                Ready to bring your Islamic tech project to life? We're here to help you create meaningful digital experiences.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:info@hidayah.com" 
                  className="flex items-center gap-3 transition-colors group"
                  style={{ color: '#6B6B6B' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#008080';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6B6B6B';
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: '#008080' }} />
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: '500' }}>info@hidayah.com</span>
                </a>
                <a 
                  href="tel:+911234567890" 
                  className="flex items-center gap-3 transition-colors group"
                  style={{ color: '#6B6B6B' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#008080';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6B6B6B';
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                  >
                    <Phone className="w-5 h-5" style={{ color: '#008080' }} />
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: '500' }}>+91 123 456 7890</span>
                </a>
                <div className="flex items-center gap-3" style={{ color: '#6B6B6B' }}>
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: '#008080' }} />
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: '500' }}>Hyderabad, India</span>
                </div>
              </div>

              {/* Video Placeholder */}
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden border-2 cursor-pointer group"
                style={{ backgroundColor: '#E8F4F4', borderColor: '#008080' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center border-2 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#008080' }}
                    >
                      <Play className="w-7 h-7 ml-1" style={{ color: '#008080' }} />
                    </div>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: '#008080' }}>
                      Watch Our Story
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-6 rounded-2xl border-2" style={{ borderColor: '#E8F4F4', backgroundColor: '#FFFFFF' }}>
                  <p style={{ fontSize: '2.5rem', fontWeight: '700', color: '#008080' }}>
                    50+
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: '#6B6B6B' }}>Projects Delivered</p>
                </div>
                <div className="p-6 rounded-2xl border-2" style={{ borderColor: '#E8F4F4', backgroundColor: '#FFFFFF' }}>
                  <p style={{ fontSize: '2.5rem', fontWeight: '700', color: '#008080' }}>
                    10+
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: '#6B6B6B' }}>Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
