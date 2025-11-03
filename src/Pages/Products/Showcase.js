import { Sparkles, Users, Calendar, Lock } from "lucide-react";

const showcaseItems = [
  {
    icon: Sparkles,
    title: "Hidayah Originals",
    subtitle: "Exclusive Premium Collection",
    description: "Discover handcrafted Islamic design assets created by our in-house team of expert designers. From intricate calligraphy to modern geometric patterns, experience the finest in Islamic digital art.",
    image: "https://images.unsplash.com/photo-1657598329574-81eafc2adba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJ0JTIwcHJlbWl1bSUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxODUxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "Coming Soon"
  },
  {
    icon: Users,
    title: "Creators' Collections",
    subtitle: "Curated Community Showcases",
    description: "Explore themed collections from top-rated creators. Monthly featured collections highlighting the best Islamic designs, illustrations, templates, and creative works from our talented community.",
    image: "https://images.unsplash.com/photo-1517574394752-94986fc2c084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJ0JTIwZ2FsbGVyeSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzYyMTg1MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "Coming Soon"
  },
  {
    icon: Calendar,
    title: "Community Hub",
    subtitle: "Events, Blogs & Resources",
    description: "Join webinars, read inspiring stories from fellow creators, access tutorials, and participate in design challenges. Connect, learn, and grow with a supportive Muslim creative community.",
    image: "https://images.unsplash.com/photo-1761640864240-f793d7ec8348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNsaW0lMjBwZW9wbGUlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYyMTg1MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "Coming Soon"
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
            Showcase
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            What's Coming to Hidayah Hub
          </h2>
          <p className="text-xl text-gray-600">
            Exciting features and collections launching soon to enhance your creative journey
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="space-y-12">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#008080]/10 rounded-full mb-4">
                  <item.icon className="text-[#008080]" size={18} />
                  <span className="text-sm text-[#008080]">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl mb-4">
                  {item.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="inline-flex items-center gap-2 bg-[#008080] text-white px-6 py-2 text-sm rounded-full">
                  <Lock size={14} />
                  {item.status}
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Coming Soon Overlay */}
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-[#008080] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                          <Lock className="text-white" size={32} />
                        </div>
                        <div className="text-2xl mb-2">Coming Soon</div>
                        <div className="text-sm text-gray-600">Stay tuned for updates</div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#008080] rounded-3xl opacity-10 -z-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Showcase;