import plogo from "../../assets/plogo.png";
import HIllust from "../../assets/hillust.png";

const services = [
  'Mobile & Desktop Wallpapers',
  'Mobile Themes',
  'Widgets',
  'Graphics & Illustrations',
  'Brand Logo',
  'Mobile Apps',
  'Websites',
];

const HeroS = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between px-[5vw] py-8 md:py-12 gap-6 w-full mx-auto">

    {/* Left Content */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 w-full lg:w-1/2">
      {/* Logo & Heading */}
      <img src={plogo} alt="plogo" className="h-14 md:h-20 lg:h-[100px]" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-700 tracking-wide leading-snug">
        Products That Guide
      </h1>

      <p className="text-2xl sm:text-2xl md:text-3xl text-neutral-700">
        Crafting Digital Products with Meaning & Faith
      </p>

      {/* Services */}
      <section className="text-gray-800 w-full">
        <h2 className="text-xl md:text-3xl font-light flex flex-wrap justify-center lg:justify-start gap-1">
          At <span className="text-br-color font-semibold">Hidayah</span> we craft
        </h2>

        <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
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

        <p className="mt-3 text-xl md:text-3xl font-light">
          and more for global Muslim community.
        </p>
      </section>

      {/* Buttons */}
      <div className="flex flex-row gap-3 pt-4">
        <button className="bg-br-color text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg hover:bg-teal-800 transition">
          Get in Touch
        </button>
        <button className="border-2 border-br-color text-br-color px-6 py-3 rounded-full font-medium text-base sm:text-lg hover:bg-custom-teal transition">
          Explore Our Products
        </button>
      </div>
    </div>

    {/* Right Illustration - Hidden on small */}
    <div className="hidden md:flex w-full lg:w-1/2 justify-center">
      <img
        src={HIllust}
        alt="illustration"
        className="h-[50vh] lg:h-[60vh] object-contain max-w-full"
      />
    </div>
  </div>
);

export default HeroS;
