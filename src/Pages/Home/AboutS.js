export default function AboutSection() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444444] mb-4">
          About <span className="text-br-color">Hidayah</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-[#444444] mb-6">
          Crafting with Meaning & Faith for Muslim Ummah.
        </p>

        {/* First paragraph */}
        <p className="text-base sm:text-lg lg:text-xl text-[#444444] leading-relaxed">
          At <span className="text-br-color font-semibold">Hidayah</span>, we create meaningful digital products designed to enrich the lives
          of Muslims around the world. Every item in our collection is built with purpose — blending beautiful design
          with Islamic values to inspire, guide, and connect. Whether it's a mobile app, a wallpaper, or a faith-focused
          widget, our goal is simple: to make digital tools that serve both the heart and the soul.
        </p>

        {/* Second paragraph */}
        <p className="text-base sm:text-lg lg:text-xl text-[#444444] leading-relaxed mt-6">
          With Hidayah, you're not just using a product — you're experiencing faith through design.
        </p>
      </div>
    </div>
  );
}
