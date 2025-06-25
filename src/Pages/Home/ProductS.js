const products = [
  {
    title: "Mobile Wallpapers",
    desc: "Beautiful, high-resolution Islamic wallpapers for both mobile and desktop use.",
    img: "https://images.unsplash.com/photo-1581276879432-15a57c1463c1", // Replace with an Islamic wallpaper image
    link: "#",
  },
  {
    title: "Mobile Themes",
    desc: "Elegant themes for your phone with soft colors, icons, and Islamic motifs.",
    img: "https://images.unsplash.com/photo-1617196038435-7fa6a0c85c8c", // UI/UX placeholder
    link: "#",
  },
  {
    title: "Widgets",
    desc: "Functional and aesthetic widgets like prayer times, daily duas, and calendar.",
    img: "https://images.unsplash.com/photo-1581276879432-15a57c1463c1", // clock/widget
    link: "#",
  },
  {
    title: "Graphics & Illustrations",
    desc: "Hand-crafted vector illustrations for Muslim creatives and educators.",
    img: "https://images.unsplash.com/photo-1593642532400-2682810df593", // abstract drawing
    link: "#",
  },
  {
    title: "Mobile Apps",
    desc: "Intuitive Islamic lifestyle and utility apps designed for a modern audience.",
    img: "https://images.unsplash.com/photo-1580894894512-df6c8b8d4845", // app showcase
    link: "#",
  },
  {
    title: "Websites",
    desc: "Responsive, purpose-driven websites for Islamic causes, products, and communities.",
    img: "https://images.unsplash.com/photo-1581091870622-5ec948f8ba6b", // web dev
    link: "#",
  },
];

export default function ProductSection() {
  return (
    <div className="px-3 lg:px-12 lg:py-12">
      <div className="max-full mx-auto flex flex-col gap-1 md:gap-2 lg:gap-4 mb-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444444]">
          Featured <span className="text-br-color">Products</span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-2xl lg:text-3xl text-[#444444] font-medium">
          Explore our most loved digital creations crafted with care and meaning.
        </p>
      </div>

    </div>
  );
}
