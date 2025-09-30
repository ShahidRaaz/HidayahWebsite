import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  viewport: { once: true, amount: 0.3 },
};

export default function AboutCompany() {
  return (
    <section id="about-company" className="w-full px-[5vw] py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333]">
          About Company
        </motion.h2>

        {/* Who we are */}
        <motion.section
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.04 }}
          className="mt-6"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#333]">Who we are</h3>
          <p className="mt-3 text-lg md:text-xl text-[#555] leading-relaxed">
            Hidayah is a faith‑first design and technology studio crafting brand systems, interfaces, and digital products for the global Muslim community and values‑aligned organizations. Our practice blends Islamic design principles with modern engineering to deliver clarity, performance, and Barakah‑driven outcomes.
          </p>
        </motion.section>

        {/* Founder & Co‑founder */}
        <motion.section
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="mt-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#333]">Founder & Co‑founder</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <div className="text-xl font-semibold text-[#333]">Founder</div>
              <p className="mt-2 text-[#555]">
                Leads creative direction and product strategy—defining brand systems, visual language, and experience vision across web and apps.
              </p>
            </div>
            <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <div className="text-xl font-semibold text-[#333]">Co‑founder</div>
              <p className="mt-2 text-[#555]">
                Heads engineering and delivery—owning architecture, performance budgets, and reliable front‑end systems with React, Tailwind, and Framer Motion.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our vision */}
        <motion.section
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="mt-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#333]">Our vision</h3>
          <p className="mt-3 text-lg md:text-xl text-[#555] leading-relaxed">
            To be the trusted design‑and‑tech partner for Islamic creators, institutions, and purposeful brands—raising the standard for beauty, usefulness, and spiritual alignment in digital experiences.
          </p>
        </motion.section>

        {/* Mission */}
        <motion.section
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.16 }}
          className="mt-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#333]">Mission</h3>
          <ul className="mt-3 space-y-2 text-lg md:text-xl text-[#555] leading-relaxed list-disc pl-5">
            <li>Design clear, accessible interfaces that honor Islamic values.</li>
            <li>Build fast, reliable front‑ends that scale, convert, and endure.</li>
            <li>Ship consistently with strong systems, documented components, and measurable outcomes.</li>
          </ul>
        </motion.section>

        {/* Our belief */}
        <motion.section
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.20 }}
          className="mt-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#333]">Our belief</h3>
          <p className="mt-3 text-lg md:text-xl text-[#555] leading-relaxed">
            Excellence (Ihsan) is the baseline. Good work serves people, respects time, and reflects sincerity. Design is stewardship—every detail communicates values and intent.
          </p>
        </motion.section>

        {/* Our approach */}
        <motion.section
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.24 }}
          className="mt-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#333]">Our approach</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { k: "Systems first", v: "Tokens, components, and docs for repeatable quality and speed." },
              { k: "Build what matters", v: "Prioritize impact—reduce noise, ship essentials, then delight." },
              { k: "Performance by default", v: "Lean UIs, smooth motion, and measurable improvements." },
            ].map((item, i) => (
              <motion.div
                key={item.k}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.26 + i * 0.04 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <div className="text-xl font-semibold text-[#333]">{item.k}</div>
                <div className="text-[#555]">{item.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { k: "10+ years", v: "combined experience" },
            { k: "Design → Dev", v: "end‑to‑end capability" },
            { k: "Global", v: "remote-first workflow" },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.36 + i * 0.05 }}
              className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="text-2xl font-semibold text-br-color">{item.k}</div>
              <div className="text-[#555]">{item.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
