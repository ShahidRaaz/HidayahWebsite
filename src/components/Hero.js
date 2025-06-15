const Hero = () => {
    return (
      <section className="min-h-screen bg-[url('/your-image.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white p-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Products with Meaning & Faith
          </h1>
          <p className="text-lg mt-4">For the Global Muslim Community</p>
          <div className="mt-6">
            <button className="bg-teal-600 text-white py-2 px-4 rounded mr-4 hover:bg-teal-700">
              Get in Touch
            </button>
            <button className="border border-white py-2 px-4 rounded hover:bg-white hover:text-teal-700">
              Explore Our Products
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  