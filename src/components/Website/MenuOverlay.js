import { useEffect, useState } from "react";
import HLogo from "../../assets/hlogo.png";
// import { NavLink } from "react-router-dom";


// const links = [
//   { name: "Home", to: "/" },
//   { name: "About Us", to: "/about" },
//   { name: "Our Products", to: "/products" },
//   { name: "Contact Us", to: "/contact" },
//   { name: "Blogs", to: "/blogs" },
// ];

const MenuOverlay = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // match transition duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transform transition-transform duration-500 px-[5vw] py-[25px] ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between content-center w-full">
        {/* Logo */}
        <button className="bg-br-color w-[56px] h-[56px] flex items-center justify-center rounded-full" >
          <img src={HLogo} alt="Logo" className="h-8" />
        </button>

        <h1 className="text-[36px]">Hidayah</h1>

        <button onClick={handleClose} className="cursor-cta group w-[56px] h-[56px] flex items-center justify-center border-2 border-br-color rounded-full bg-custom-teal hover:bg-br-color transition duration-300">
        <svg width="18" height="18" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-br-color group-hover:text-white transition duration-300">
        <path d="M13 13.5L25 25.5M13 13.5L1 1.5M13 13.5L1 25.5M13 13.5L25 1.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
       </button>
      </div>

      


    </div>
  );
};

export default MenuOverlay;
