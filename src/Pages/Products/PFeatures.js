import { Download, Upload, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Download,
    title: "For Users",
    subtitle: "Explore & Download",
    description: "Access a growing library of premium Islamic design and media assets. Browse, download, buy, and share authentic content created by talented Muslim designers worldwide.",
    benefits: [
      "Curated Islamic design assets",
      "Instant downloads with commercial licenses",
      "Free and premium content options",
      "Save favorites and create collections",
      "Share with your community"
    ],
    cta: "Join Waitlist"
  },
  {
    icon: Upload,
    title: "For Creators",
    subtitle: "Upload & Earn",
    description: "Monetize your Islamic creative work. Upload digital designs and media assets, set your prices, and earn generous commission on every sale with complete transparency.",
    benefits: [
      "Upload unlimited assets",
      "Earn fair commission on every sale",
      "Monthly payouts to your account",
      "Real-time analytics dashboard",
      "Marketing and promotional support"
    ],
    cta: "Register as Creator"
  },
  {
    icon: Users,
    title: "Community",
    subtitle: "Connect & Collaborate",
    description: "Join a thriving global community of Muslim creatives. Network with fellow designers, participate in challenges, access exclusive resources, and grow together.",
    benefits: [
      "Connect with Muslim creators worldwide",
      "Join design challenges and contests",
      "Access exclusive tutorials and resources",
      "Participate in community events",
      "Share knowledge and get inspired"
    ],
    cta: "Join Community"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#008080]/10 text-[#008080] rounded-full mb-6">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Everything You'll Need in One Platform
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're creating, exploring, or connecting, Hidayah Hub will have you covered
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#008080]/30 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-[#008080] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-[#008080] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#008080]/20">
                <feature.icon className="text-white" size={28} />
              </div>

              {/* Title */}
              <div className="mb-2 text-sm text-gray-500 tracking-wide uppercase">{feature.title}</div>
              <h3 className="text-2xl mb-4">{feature.subtitle}</h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 bg-[#008080]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#008080] rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full relative overflow-hidden px-6 py-3 text-[#008080] rounded-full group border-2 border-[#008080] hover:text-white transition mt-auto">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white flex items-center justify-center gap-2">
                  {feature.cta}
                  <ArrowRight size={16} />
                </span>
                <span
                  className="absolute left-0 bottom-0 w-full h-0 bg-[#008080] transition-all duration-500 group-hover:h-full"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;