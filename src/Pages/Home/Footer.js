import { useState } from "react";
import { motion } from "framer-motion";
import PLogo from "../../assets/plogo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}; // staggered reveal on scroll [web:39][web:46][web:4]

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) return setError("Enter a valid email");
    try {
      await new Promise((r) => setTimeout(r, 500));
      setOk(true);
      setError("");
      setEmail("");
    } catch {
      setOk(false);
      setError("Something went wrong");
    }
  };

  return (
    <footer className=" w-full px-[6vw] rounded-xl">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full px-6 lg:px-10 py-8 bg-white text-gray-700 rounded-3xl"
      >
        {/* Grid: 3 link columns + newsletter */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1 */}
<motion.div variants={fadeUp}>
  <h4 className="text-br-color text-[20px] font-semibold leading-none mb-5">
    Company
  </h4>
  <ul className="space-y-4 text-[18px]">
    {[
      "Home",
      "About",
      "Works",
      "Products",
      "Creative Hub",
      "Blog",
      "Contacts",
      "Careers",
    ].map((label) => (
      <li key={label}>
        <a href="#" className="group inline-block text-[#444444] hover:text-br-color transition-colors">
          {label}
          <span className="block max-w-0 bg-br-color transition-all duration-300 ease-out group-hover:max-w-full h-[1.5px] origin-bottom [transform:scaleY(0.75)]"></span>
        </a>
      </li>
    ))}
  </ul>
</motion.div>

{/* Column 2 */}
<motion.div variants={fadeUp}>
  <h4 className="text-br-color text-[20px] font-semibold leading-none mb-5">
    Works
  </h4>
  <ul className="space-y-4 text-[18px]">
    {[
      "Wallpaper & Themes",
      "Social Media Design",
      "Logo Design",
      "Motion Design",
      "UI Design",
      "Web Design",
      "Widgets",
      "Mobile Apps",
    ].map((label) => (
      <li key={label}>
        <a href="#" className="group inline-block text-[#444444] hover:text-br-color transition-colors">
          {label}
          <span className="block max-w-0 bg-br-color transition-all duration-300 ease-out group-hover:max-w-full h-[1.5px] origin-bottom [transform:scaleY(0.75)]"></span>
        </a>
      </li>
    ))}
  </ul>
</motion.div>

{/* Column 3 */}
<motion.div variants={fadeUp}>
  <h4 className="text-br-color text-[20px] font-semibold leading-none mb-5">
    Industries
  </h4>
  <ul className="space-y-4 text-[18px]">
    {[
      "Digital Design",
      "Print Design",
      "Software & Apps",
      "Artificial Intelligence",
    ].map((label) => (
      <li key={label}>
        <a href="#" className="group inline-block text-[#444444] hover:text-br-color transition-colors">
          {label}
          <span className="block max-w-0 bg-br-color transition-all duration-300 ease-out group-hover:max-w-full h-[1.5px] origin-bottom [transform:scaleY(0.75)]"></span>
        </a>
      </li>
    ))}
  </ul>
</motion.div>


          {/* Column 4: Newsletter + socials */}
          <motion.div variants={fadeUp}>
            <h4 className="text-br-color text-[20px] font-semibold leading-none mb-5">
              Subscribe to our news and updates
            </h4>

            <form
          onSubmit={submit}
          className={`w-full rounded-full mb-2 justify-between focus-within:ring-1 focus-within:ring-br-color flex items-center p-1 ${
            email ? "border-1 border-br-color" : "border border-br-color/50 hover:border-br-color/90 transition"
          }`}
        >
          <input
            type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); setOk(false); }}
                placeholder="Your email here"
                aria-invalid={!!error}
                aria-describedby={error ? "news-error" : undefined}
            className="w-[75%] bg-transparent outline-none px-4 py-2 rounded-l-full border-0"
          />

          <button
                type="submit"
                className="cursor-cta inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-br-color text-white shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-br-color/40"
                aria-label="Submit email"
                title="Subscribe"
              >
                {/* Arrow icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h12M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
        </form>



            
            <p className="text-[14px] text-gray-500">
              By signing up, you agree to our <a className="underline decoration-gray-300 underline-offset-2 hover:text-gray-800" href="#">Privacy Policy</a>. We respect your data. Unsubscribe anytime.
            </p>
            {error && <div id="news-error" role="alert" className="mt-2 text-[13px] text-rose-600">{error}</div>}
            {ok && <div role="status" className="mt-2 text-[13px] text-emerald-600">Subscribed successfully!</div>}

            <div className="mt-8">
              <div className="text-[18px] mb-4 font-medium text-gray-900">Follow us on:</div>
              <div className="flex gap-4">
                {[
                  { label: "Dribbble", icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6.5a8.2 8.2 0 0 1-4.7 1.1c-.3-.6-.7-1.2-1.1-1.8 3.2-1.3 5.2.7 5.8.7ZM12 3.8a8.2 8.2 0 0 1 4.3 1.2c-2.2.9-3.9 1.5-5 1.9-1-1.4-1.9-2.3-2.7-2.9A8.1 8.1 0 0 1 12 3.8Zm-3.5 1.1c.7.6 1.7 1.6 2.8 3-3 .9-6.8 1.1-7.7 1.1a8.2 8.2 0 0 1 4.9-4.1ZM3.8 12.1c1.4 0 5.8-.2 9-.9.3.5.6 1.1.9 1.7-3.6 1.1-5.8 3.8-6.9 5.5A8.2 8.2 0 0 1 3.8 12.1Zm3.6 6.3c1-1.6 3.1-4 6.5-5 .8 1.9 1.4 4.1 1.8 6.6a8.2 8.2 0 0 1-8.3-1.6Zm9.9.8c-.4-2.3-1-4.4-1.7-6.2 1.6-.1 3.3.1 4.8.5a8.2 8.2 0 0 1-3.1 5.7Z"/></svg>
                  )},
                  { label: "Behance", icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M14.5 7H19v1.2h-4.5V7ZM8.8 11.9c.8-.2 1.3-.8 1.3-1.7 0-1.6-1.2-2.3-3.2-2.3H3v7.8h3.9c2.2 0 3.6-.8 3.6-2.6 0-1.2-.7-1.9-1.7-2.2Zm-2.7-2h1.6c.9 0 1.4.3 1.4 1s-.5 1-1.4 1H6.1v-2ZM17.8 13.7c-1 0-1.6-.6-1.7-1.6h5.1c0-2.2-1.2-3.7-3.5-3.7-2.1 0-3.7 1.5-3.7 3.9s1.5 3.8 3.8 3.8c1.7 0 2.7-.6 3.4-1.6l-1.3-.7c-.3.6-.9.9-2.1.9Zm-.2-4.1c.9 0 1.5.6 1.6 1.6h-3.4c.1-.9.8-1.6 1.8-1.6Z"/></svg>
                  )},
                  { label: "Instagram", icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>
                  )},
                  { label: "LinkedIn", icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.1c.7-1.3 2.3-2.7 4.7-2.7 5 0 5.9 3.3 5.9 7.6V24h-5v-7.9c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.3V24h-5V8Z"/></svg>
                  )},
                  { label: "X", icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.1 2H21l-6.4 7.3L22 22h-6.6l-4.1-5.8L6.5 22H3.6l6.9-7.9L2 2h6.7l3.7 5.2L18.1 2Zm-2.3 18h1.4L8.3 4H6.8l9 16Z"/></svg>
                  )},
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={s.label}
                    className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400 transition" /* circular outline buttons on white [web:238][web:241] */
                    title={s.label}
                  >
                    <span className="sr-only">{s.label}</span>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div variants={fadeUp} className="mt-16 flex flex-col items-center justify-between gap-4 pt-6 md:flex-row">
            <img src={PLogo} alt="Hidayah Logo" className="h-10 w-auto mb-4 md:mb-0" />
            <span>© {new Date().getFullYear()} Hidayah. All rights reserved</span>
          <div className="flex items-center gap-2 text-[14px] text-gray-600">
            <a className="text-[#444444] hover:text-br-color" href="#">
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-400">•</span>
            <a className="text-[#444444] hover:text-br-color" href="#">
              Cookies Settings
            </a>
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-br-color hover:border-br-color transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            title="Back to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
