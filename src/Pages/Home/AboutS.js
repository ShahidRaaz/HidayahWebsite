export default function AboutSection() {
  return (
    <div className="px-6 sm:px-4 lg:px-12 lg:py-12">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444444]">
          About <span className="text-br-color">Hidayah</span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-2xl lg:text-3xl text-[#444444] font-medium">
          Crafting with Meaning & Faith for the Muslim Ummah.
        </p>

        {/* First paragraph */}
        <p className="text-base sm:text-xl lg:text-2xl text-[#444444] px-2 sm:px-10 lg:px-16">
          At <span className="text-br-color font-semibold">Hidayah</span>, we create meaningful digital products designed to enrich the lives
          of Muslims around the world. Every item in our collection is built with purpose — blending beautiful design
          with Islamic values to inspire, guide, and connect. Whether it's a mobile app, a wallpaper, or a faith-focused
          widget, our goal is simple: to make digital tools that serve both the heart and the soul.
        </p>

        {/* Second paragraph */}
        <p className="text-base sm:text-xl lg:text-2xl text-[#444444] px-2 sm:px-10 lg:px-16">
          With Hidayah, you're not just using a product — you're experiencing faith through design.
        </p>
      </div>
    </div>
  );
}
