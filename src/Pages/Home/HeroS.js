import { motion } from 'framer-motion';
import plogo from "../../assets/plogo.png";
import HIllust from "../../assets/hillust.png";
const HeroS = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, ease: 'easeInOut' }}
    viewport={{ once: true }}
    className="flex flex-col xl:flex-row items-center justify-between px-[5vw] py-[5vh] w-full mx-auto h-auto xl:h-[425px] xl:mt-20 gap-12 xl:gap-0"
  >
    {/* Left Content */}
    <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-2 w-full xl:w-1/2 ">
      <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-1 w-full">
        <img src={plogo} alt="plogo" className="h-14 md:h-20 lg:h-[100px] mb-2" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#444444] tracking-wide leading-snug">
          Products That Guide
        </h1>
        <p className="text-2xl sm:text-2xl md:text-3xl text-[#444444]">
          Crafting Digital Products with Purpose & Faith
        </p>
      </div>

      <div className="w-full flex flex-col items-center xl:items-start text-center xl:text-left gap-8 mt-6">
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-0 w-full">
          <h2 className="text-xl md:text-3xl font-normal flex flex-wrap justify-center xl:justify-start gap-2">
            At <span className="text-br-color font-semibold">Hidayah</span> we craft design & tech products
          </h2>
          <p className="text-xl md:text-3xl font-light">
            for global Muslim community.
          </p>
        </div>


        {/* Buttons */}
        <div className="flex flex-row gap-3 max-sm:flex-col">
          <button className="cursor-cta bg-br-color/10 text-base sm:text-lg relative overflow-hidden px-6 py-3 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Join the Waitlist</span>
            <span className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-300 group-hover:h-full" aria-hidden="true"></span>
          </button>

{/* 
          <button className="border-2 border-br-color/25 text-br-color px-6 py-3 rounded-full font-medium text-base sm:text-lg hover:bg-custom-teal transition">
            Explore Our Products
          </button> */}
        </div>
      </div>
    </div>

    {/* Right Illustration - Hidden on small screens */}
    <div className="hidden md:flex md:w-[75vw] xl:w-1/2 justify-center items-center">
      <img src={HIllust} alt="illustration" className="max-w-full h-auto" />
    </div>
  </motion.div>
);

export default HeroS;
