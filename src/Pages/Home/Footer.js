import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import PLogo from "../../assets/plogo.png";

const fadeLeft = {
  hidden: { opacity: 0, x: 22 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,  // how fast it snaps
      damping: 100,     // how much it resists/settles
      mass: 0.8        // tweak inertia feel
    }
  }
};

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,   // global start delay
      staggerChildren: 0.04 // gap between each child
    },
  },
}; // parent orchestrator

const Footer = forwardRef(function Footer(props, ref) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mnnbwvlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to submit email");

      setSuccess("Thank you! We'll reach out soon.");
      setEmail("");
    } catch (e) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const companyLinks = [
    "Home",
    "About",
    "Works",
    "Products",
    "Careers",
    "Contact",
    "Blog",
  ];

  const worksLinks = [
    "Wallpaper & Themes",
    "Social Media Design",
    "Logo Design",
    "Motion Design",
    "UI Design",
    "Web Design",
    "Widgets",
    "Mobile Apps",
  ];

  const industryLinks = [
    "Digital Design",
    "Print Design",
    "Software & Apps",
    "Artificial Intelligence",
  ];

  return (
    <footer ref={ref} id="site-footer" className="w-full px-[6vw] rounded-xl py-12">
      {/* Global orchestrator: all descendants with variants={fadeLeft} will stagger sequentially */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="w-full px-6 lg:px-10 py-8 bg-white text-gray-700 rounded-3xl"
      >
        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Column 1: Company */}
          <div>
            <motion.h4 variants={fadeLeft} className="text-br-color text-[20px] font-semibold leading-none mb-5">
              Company
            </motion.h4>

            <ul className="space-y-4 text-[18px]">
              {companyLinks.map((label) => (
                <motion.li key={label} variants={fadeLeft}>
                  <a href="#" className="group inline-block text-[#444444] hover:text-br-color transition-colors">
                    {label}
                    <span className="block max-w-0 bg-br-color transition-all duration-500 ease-out group-hover:max-w-full h-[1.5px] origin-bottom [transform:scaleY(0.75)]" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 2: Works */}
          <div>
            <motion.h4 variants={fadeLeft} className="text-br-color text-[20px] font-semibold leading-none mb-5">
              Works
            </motion.h4>

            <ul className="space-y-4 text-[18px]">
              {worksLinks.map((label) => (
                <motion.li key={label} variants={fadeLeft}>
                  <a href="#" className="group inline-block text-[#444444] hover:text-br-color transition-colors">
                    {label}
                    <span className="block max-w-0 bg-br-color transition-all duration-500 ease-out group-hover:max-w-full h-[1.5px] origin-bottom [transform:scaleY(0.75)]" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <motion.h4 variants={fadeLeft} className="text-br-color text-[20px] font-semibold leading-none mb-5">
              Industries
            </motion.h4>

            <ul className="space-y-4 text-[18px]">
              {industryLinks.map((label) => (
                <motion.li key={label} variants={fadeLeft}>
                  <a href="#" className="group inline-block text-[#444444] hover:text-br-color transition-colors">
                    {label}
                    <span className="block max-w-0 bg-br-color transition-all duration-500 ease-out group-hover:max-w-full h-[1.5px] origin-bottom [transform:scaleY(0.75)]" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter + socials */}
          <div className="pr-0 lg:pr-24 xl:pr-0">
            <motion.h4 variants={fadeLeft} className="text-br-color text-[20px] font-medium leading-none mb-5">
              Subscribe to our newsletter
            </motion.h4>

            <motion.form
              variants={fadeLeft}
              onSubmit={handleSubmit}
              className={`
                w-full rounded-full mb-2 justify-between flex items-center p-1
                border ${email ? "border-1 border-br-color" : "border border-br-color/50 hover:border-br-color/90"}
                focus-within:ring-1 focus-within:ring-br-color focus-within:border-br-color
                transition
              `}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Your email here"
                aria-invalid={!!error}
                aria-describedby={error ? "news-error" : undefined}
                className="w-[75%] bg-transparent outline-none px-4 py-2 rounded-l-full border-0"
              />

              <motion.button
                
                type="submit"
                disabled={loading}
                className="cursor-cta group w-[44px] h-[44px] pl-1 flex items-center justify-center border-2 border-br-color backdrop-blur-md rounded-full bg-custom-teal hover:bg-br-color transition duration-300 disabled:opacity-60"
              >
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" className="stroke-current text-br-color group-hover:text-white transition duration-300" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9L1.396 3.563C1.223 2.007 2.825 0.863996 4.24 1.535L16.184 7.193C17.709 7.915 17.709 10.085 16.184 10.807L4.24 16.466C2.825 17.136 1.223 15.994 1.396 14.438L2 9ZM2 9H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.form>

            <motion.p variants={fadeLeft} className="text-[14px] text-gray-500">
              By signing up, you agree to our privacy policy
              We respect your data. Unsubscribe anytime.
            </motion.p>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-br-color text-sm mt-2">{success}</p>}

            <div className="mt-8">
              <motion.div variants={fadeLeft} className="text-[20px] mb-4 font-medium text-br-color">
                Follow us on:
              </motion.div>

              <div className="flex gap-4">
                <motion.a
                  variants={fadeLeft}
                  href="https://www.behance.net/hidayahdesign2025"
                  target="_blank"
                  aria-label="Behance"
                  title="Behance"
                  className="cursor-cta group inline-flex h-14 w-14 items-center justify-center rounded-full border border-br-color text-br-color bg-custom-teal hover:text-white hover:bg-br-color transition-colors"
                >
                  <span className="sr-only">Behance</span>
                  <svg width="20" height="14" viewBox="0 0 20 14" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5.803 0.731018C6.392 0.731018 6.922 0.782018 7.408 0.886018C7.89 0.989352 8.30433 1.15868 8.651 1.39402C8.99433 1.62868 9.26233 1.94168 9.455 2.33302C9.642 2.72002 9.735 3.20402 9.735 3.77602C9.735 4.39602 9.59467 4.91302 9.314 5.32702C9.032 5.74168 8.61333 6.08002 8.058 6.34202C8.814 6.56202 9.37733 6.94402 9.748 7.48802C10.122 8.03702 10.305 8.69402 10.305 9.46402C10.305 10.0887 10.1857 10.6264 9.947 11.077C9.71702 11.5215 9.38283 11.9038 8.973 12.191C8.54893 12.4867 8.07502 12.7035 7.574 12.831C7.04879 12.9687 6.50797 13.038 5.965 13.037H0V0.731018H5.803ZM5.452 5.70302C5.932 5.70302 6.32933 5.58802 6.644 5.35802C6.956 5.13002 7.107 4.75402 7.107 4.23902C7.107 3.95235 7.05667 3.71668 6.956 3.53202C6.85916 3.35361 6.71483 3.20547 6.539 3.10402C6.35526 2.99552 6.15273 2.92258 5.942 2.88902C5.7122 2.8461 5.47876 2.82567 5.245 2.82802H2.71V5.70302H5.452ZM5.603 10.942C5.87 10.942 6.124 10.919 6.363 10.865C6.604 10.813 6.818 10.729 7 10.604C7.182 10.484 7.332 10.321 7.44 10.113C7.549 9.90702 7.602 9.63802 7.602 9.31502C7.60133 8.68168 7.42367 8.22902 7.069 7.95702C6.714 7.68702 6.238 7.55302 5.655 7.55302H2.71V10.943L5.603 10.942ZM14.168 10.901C14.5353 11.2597 15.0633 11.439 15.752 11.439C16.2453 11.439 16.6713 11.3147 17.03 11.066C17.384 10.817 17.6 10.551 17.683 10.276H19.838C19.492 11.348 18.967 12.114 18.249 12.575C17.54 13.038 16.677 13.268 15.669 13.268C14.9677 13.268 14.3343 13.1557 13.769 12.931C13.2252 12.7204 12.7341 12.3934 12.33 11.973C11.9325 11.5432 11.6249 11.0383 11.425 10.488C11.2054 9.8793 11.097 9.23608 11.105 8.58902C11.1057 7.92235 11.2153 7.30102 11.434 6.72502C11.6415 6.1695 11.9592 5.66166 12.368 5.23202C12.772 4.81202 13.2533 4.48068 13.812 4.23802C14.3995 3.98985 15.0323 3.86657 15.67 3.87602C16.4233 3.87602 17.083 4.02268 17.649 4.31602C18.1972 4.59767 18.6729 5.00219 19.039 5.49802C19.401 5.99135 19.662 6.55502 19.822 7.18902C19.982 7.82035 20.039 8.48135 19.993 9.17202H13.562C13.563 9.87602 13.8 10.543 14.168 10.901ZM16.98 6.22002C16.689 5.89802 16.197 5.72402 15.595 5.72402C15.205 5.72335 14.8803 5.78969 14.621 5.92302C14.3837 6.04378 14.1729 6.21071 14.001 6.41402C13.8511 6.59955 13.7396 6.81302 13.673 7.04202C13.6166 7.2335 13.5794 7.43015 13.562 7.62902H17.544C17.486 7.00502 17.272 6.54402 16.98 6.22002ZM13.062 1.55702H18.051V2.77202H13.062V1.55702Z" fill="currentColor" />
                  </svg>
                </motion.a>

                <motion.a
                  variants={fadeLeft}
                  href="https://www.instagram.com/hidayah.muslims"
                  target="_blank"
                  aria-label="Instagram"
                  title="Instagram"
                  className="cursor-cta group inline-flex h-14 w-14 items-center justify-center rounded-full border border-br-color text-br-color bg-custom-teal hover:text-white hover:bg-br-color transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 4.67C5.71 4.67 4.67 5.72 4.67 7C4.67 8.28 5.72 9.33 7 9.33C8.28 9.33 9.33 8.28 9.33 7C9.33 5.72 8.28 4.67 7 4.67ZM14 7C14 6.03 14 5.08 13.95 4.11C13.9 2.99 13.64 1.99 12.82 1.18C12 0.36 11.01 0.1 9.89 0.05C8.92 -4.84288e-08 7.97 0 7 0C6.03 0 5.08 -4.84288e-08 4.11 0.05C2.99 0.1 1.99 0.36 1.18 1.18C0.36 2 0.1 2.99 0.05 4.11C-4.84288e-08 5.08 0 6.03 0 7C0 7.97 -4.84288e-08 8.92 0.05 9.89C0.1 11.01 0.36 12.01 1.18 12.82C2 13.64 2.99 13.9 4.11 13.95C5.08 14 6.03 14 7 14C7.97 14 8.92 14 9.89 13.95C11.01 13.9 12.01 13.64 12.82 12.82C13.64 12 13.9 11.01 13.95 9.89C14.01 8.93 14 7.97 14 7ZM7 10.59C5.01 10.59 3.41 8.99 3.41 7C3.41 5.01 5.01 3.41 7 3.41C8.99 3.41 10.59 5.01 10.59 7C10.59 8.99 8.99 10.59 7 10.59ZM10.74 4.1C10.28 4.1 9.9 3.73 9.9 3.26C9.9 2.79 10.27 2.42 10.74 2.42C11.21 2.42 11.58 2.79 11.58 3.26C11.5825 3.36954 11.5625 3.47842 11.5212 3.57992C11.48 3.68141 11.4183 3.77333 11.34 3.85C11.2633 3.92827 11.1714 3.98997 11.0699 4.03125C10.9684 4.07253 10.8595 4.09253 10.75 4.09L10.74 4.1Z" fill="currentColor" />
                  </svg>
                </motion.a>

                <motion.a
                  variants={fadeLeft}
                  href="https://www.linkedin.com/company/hidayah-muslims"
                  target="_blank"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="cursor-cta group inline-flex h-14 w-14 items-center justify-center rounded-full border border-br-color text-br-color bg-custom-teal hover:text-white hover:bg-br-color transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg width="21" height="20" viewBox="0 0 21 20" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.037 20H15.885V13.504C15.885 11.954 15.859 9.96202 13.728 9.96202C11.568 9.96202 11.238 11.65 11.238 13.392V20H7.09V6.64002H11.07V8.46702H11.128C11.681 7.41702 13.036 6.30902 15.056 6.30902C19.26 6.30902 20.036 9.07502 20.036 12.673L20.037 20ZM2.409 4.81602C2.09257 4.81629 1.7792 4.75416 1.48681 4.63319C1.19441 4.51221 0.928743 4.33478 0.704994 4.11103C0.481245 3.88728 0.30381 3.62161 0.182839 3.32922C0.0618689 3.03683 -0.000262201 2.72345 8.31678e-07 2.40702C9.95919e-07 1.93085 0.141178 1.46537 0.405684 1.06942C0.67019 0.673469 1.04615 0.364828 1.48604 0.182514C1.92593 0.000199318 2.40999 -0.0476038 2.87704 0.0451475C3.34409 0.137899 3.77316 0.36704 4.11001 0.703605C4.44685 1.04017 4.67635 1.46905 4.76949 1.93602C4.86263 2.403 4.81523 2.8871 4.63328 3.32714C4.45133 3.76718 4.143 4.1434 3.74727 4.40823C3.35154 4.67307 2.88617 4.81463 2.41 4.81502M4.486 20H0.330001V6.64002H4.486V20Z" fill="currentColor" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — included in the same stagger */}
        <motion.div
          variants={fadeLeft}
          className="mt-8 pt-6 flex flex-col gap-6 md:flex-row justify-start md:items-center md:justify-between"
        >
          {/* Left: logo + copyright */}
          <div className="flex flex-col gap-2 text-[14px] text-gray-600">
            <img src={PLogo} alt="Hidayah Logo" className="h-10 w-32 md:mb-0" />
            <span>© {new Date().getFullYear()} Hidayah. All rights reserved</span>
          </div>

          {/* Middle: policy links */}
          <div className="flex flex-row ml-0 md:ml-12 lg:items-center gap-8 text-[14px] text-gray-600">
            <a className="text-[#444444] hover:text-br-color" href="#">
              Privacy Policy
            </a>
            <a className="text-[#444444] hover:text-br-color" href="#">
              Cookies Settings
            </a>
          </div>

          {/* Right: back to top */}
          <motion.button
            variants={fadeLeft}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group self-end md:self-auto md:pl-auto cursor-cta w-[44px] h-[44px] flex items-center justify-center border-2 border-br-color backdrop-blur-md rounded-full bg-custom-teal hover:bg-br-color transition duration-300 animate-float"
            aria-label="Scroll to top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current text-br-color group-hover:text-white transition">
              <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
});

export default Footer;
