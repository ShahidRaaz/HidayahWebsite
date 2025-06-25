import { motion } from 'framer-motion';
import plogo from "../../assets/plogo.png";
import HIllust from "../../assets/hillust.png";

const services = [
  'Mobile & Desktop Wallpapers',
  'Mobile Themes',
  'Widgets',
  'Graphics & Illustrations',
  'Mobile Apps',
  'Websites',
];
const HeroS = () => (
  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeInOut' }} viewport={{ once: true }}
  className="flex flex-col xl:flex-row items-center justify-between px-[5vw] gap-6 w-full mx-auto">

    {/* Left Content */}
    <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-6 w-full xl:w-1/2 lg:my-10">
      <div className="flex flex-col items-center xl:items-start text-center xl:text-left lg:gap-2 w-full">
        <img src={plogo} alt="plogo" className="h-14 md:h-20 lg:h-[100px] mb-2" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-700 tracking-wide leading-snug">
        Products That Guide</h1>
      <p className="text-2xl sm:text-2xl md:text-3xl text-neutral-700">
        Crafting Digital Products with Meaning & Faith
      </p>
    </div>

      {/* Services */}
      <section className="text-[#444444] w-full flex flex-col items-center xl:items-start text-center xl:text-left gap-3">
        <h2 className="text-xl md:text-3xl font-normal flex flex-wrap justify-center xl:justify-start gap-2">
          At <span className="text-br-color font-semibold">Hidayah</span> we craft
        </h2>

        <div className="flex flex-wrap justify-center xl:justify-start gap-2">
          {services.map((service, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-custom-teal text-br-color px-4 py-2 rounded-full border border-br-color hover:bg-br-color hover:text-white transition-all duration-200 text-lg sm:text-xl"
            >
              {service}
            </a>
          ))}
        </div>

        <p className="text-xl md:text-3xl font-light">
          and more for global Muslim community.
        </p>
      </section>

      {/* Buttons */}
      <div className="flex flex-row gap-3 max-sm:flex-col">
        <button className="bg-br-color text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg hover:bg-teal-800 transition">
          Get in Touch
        </button>
        <button className="border-2 border-br-color text-br-color px-6 py-3 rounded-full font-medium text-base sm:text-lg hover:bg-custom-teal transition">
          Explore Our Products
        </button>
      </div>
    </div>

    {/* Right Illustration - Hidden on small */}
    <div className="hidden md:flex w-[700px] justify-center mt-6 md:mt-0">
    <img src={HIllust} alt="illustration" className="max-w-full h-auto" />
    </div>
  </motion.div>
);

export default HeroS;
