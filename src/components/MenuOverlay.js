import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Our Products", to: "/products" },
  { name: "Contact Us", to: "/contact" },
  { name: "Blogs", to: "/blogs" },
];

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
      className={`fixed inset-0 z-50 bg-white transform transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={handleClose}
          className="w-10 h-10 rounded-full border-2 border-teal-600 flex items-center justify-center hover:bg-teal-100 transition duration-300"
        >
          &times;
        </button>
      </div>

      <ul className="flex flex-col items-center justify-center gap-6 text-lg font-semibold mt-12">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              onClick={handleClose}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition ${
                  isActive ? "bg-teal-600 text-white" : "text-gray-800 hover:text-teal-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
