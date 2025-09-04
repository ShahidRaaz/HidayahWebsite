import { useState } from "react";
import { NavLink } from "react-router-dom";
import HLogo from "../assets/hlogo.png";
import MenuOverlay from "./MenuOverlay";
import Cursor from "./cursor.js";
import { useRef } from "react";

const links = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Our Works", to: "/works" },
  { name: "Products", to: "/products" },
  { name: "Contact Us", to: "/contact" },
  { name: "Blogs", to: "/blogs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cursorRef = useRef();
   const handleNavClick = () => {
    if (cursorRef.current) cursorRef.current.setNavTapActive(true);
  };

  const handleNavMouseLeave = () => {
    if (cursorRef.current) cursorRef.current.setNavTapActive(false);
  };

  return (
    <>
     <Cursor ref={cursorRef} />
      <nav className="fixed z-50 flex items-center justify-between 
                py-[3vh] top-0
                w-full px-[5vw] max-sm:bg-white/2 bg-opacity-90 backdrop-blur-lg">

        {/* Logo */}
        <div className="bg-br-color w-[50px] h-[50px] flex items-center justify-center rounded-full" >
          <img src={HLogo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop links (visible on md+) */}
        <ul className="hidden md:flex gap-2 py-4 bg-custom-teal items-center rounded-[50px] backdrop-blur-md h-[50px]">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
              onClick={handleNavClick}
          onMouseLeave={handleNavMouseLeave}
                to={link.to}
                className={({ isActive }) =>
                  `justify-start text-lg item-center font-normal px-6 py-4 rounded-[50px] h-[50px] ${
                    isActive? "bg-br-color text-white justify-center items-center" : "text-gray-500 hover:bg-custom-teal hover:text-gray-700 transition"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Menu button (always visible) */}
        <button onClick={() => setMenuOpen(true)}
        className="cursor-cta group w-[50px] h-[50px] flex items-center justify-center border-2 border-br-color backdrop-blur-md rounded-full bg-custom-teal hover:bg-br-color transition duration-300">
        <svg width="24" height="24" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-br-color group-hover:text-white transition duration-300">
        <path d="M8 2H28M2 14H34H8M8 26H28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
       </button>

      </nav>

      {/* Fullscreen Overlay Menu for Mobile */}
      {menuOpen && <MenuOverlay links={links} onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
