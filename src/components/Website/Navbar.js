import { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import HLogo from "../../assets/hlogo.png";
import MenuOverlay from "./MenuOverlay";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Works", to: "/works" },
  { name: "Products", to: "/products" },
  { name: "Careers", to: "/careers" },
  { name: "Contact", to: "/contact" },
  { name: "Blogs", to: "/blogs" },
];

const Navbar = ({ hidden }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef();
  const location = useLocation();

  // Handle logo click - scroll to top if already on home page
  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = () => {
    if (cursorRef.current) cursorRef.current.setNavTapActive(true);
  };

  const handleNavMouseLeave = () => {
    if (cursorRef.current) cursorRef.current.setNavTapActive(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 px-[5vw] py-[25px]">

      {/* Animate whole navbar */}
      <motion.nav
        layout="position"
            initial={{ opacity: 0, scale:0.95,y: -12 }}
            animate={
              hidden
                ? { y: -80, opacity: 0}
                : { y: 0, opacity: 1, scale:1 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-between transform-gpu will-change-transform"
      >
        {/* Logo */}
        <NavLink 
          to="/" 
          onClick={handleLogoClick}
          aria-label="Hidayah - Go to homepage"
          className="bg-br-color w-[56px] h-[56px] flex items-center justify-center rounded-full cursor-pointer"
        >
          <motion.img 
            src={HLogo} 
            alt="Hidayah Logo" 
            className="h-8"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-2 bg-white/25 py-0 px-0.5 rounded-full h-[46px] items-center justify-center backdrop-blur-lg border-2 border-br-color/25">
          {links.map((link) => (
            <li key={link.to} className="h-[40px] flex cursor-cta">
              <NavLink
                onClick={handleNavClick}
                onMouseLeave={handleNavMouseLeave}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-center text-lg font-normal px-3 rounded-[50px] h-full ${
                    isActive
                      ? "bg-br-color text-white cursor-default "
                      : "text-[#444444] hover:bg-custom-teal hover:text-br-color transition"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="cursor-cta group w-[56px] h-[56px] flex items-center justify-center border-2 border-br-color backdrop-blur-md rounded-full bg-custom-teal hover:bg-br-color transition duration-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 36 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-br-color group-hover:text-white transition duration-300"
          >
            <path
              d="M8 2H28M2 14H34H8M8 26H28"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <MenuOverlay links={links} onClose={() => setMenuOpen(false)} />
      )}
    </div>
  );
};

export default Navbar;
