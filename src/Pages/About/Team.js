import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  viewport: { once: true, amount: 0.3 },
};

export default function AboutTeam() {
  const team = [
    { name: "Creative Direction", desc: "Brand systems, UI kits, motion, and visual identity for modern products." },
    { name: "Engineering", desc: "React, Tailwind, Framer Motion, performant frontends and integrations." },
    { name: "Islamic Content", desc: "Product features with Hijri dates, prayer times, and local context." },
  ];

  return (
    <section id="about-team" className="w-full px-[5vw] py-16 md:py-20 bg-black/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333]">
          Our Team
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-4 text-lg md:text-xl text-[#555] leading-relaxed"
        >
          A compact, senior team that ships fast with clarity—blending design craft with engineering precision and an Islamic design ethos.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 + i * 0.05 }}
              className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="text-xl font-semibold text-[#333]">{t.name}</div>
              <div className="text-[#555]">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
