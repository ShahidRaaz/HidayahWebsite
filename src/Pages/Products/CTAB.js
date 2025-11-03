import { useState } from "react";
import { Sparkles, Bell } from "lucide-react";
import Overlay from "../../components/Home/eaoverlay";
import { AnimatePresence } from "framer-motion";

export function CTA() {
    const [isOverlayOpen, setOverlayOpen] = useState(false);
    const openOverlay = () => setOverlayOpen(true);
    const closeOverlay = () => setOverlayOpen(false);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#008080] text-white relative overflow-hidden rounded-3xl py-16 md:py-20">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1603522456939-a52d4adda873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwZ2VvbWV0cmljJTIwcGF0dGVybnxlbnwxfHx8fDE3NjIxMjkyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <Sparkles size={14} className="text-[#FFFFFF]" />
          <span className="text-xs text-[#FFFFFF]">Launching Soon</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
          Ready to Join the Islamic Creative Revolution?
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Be among the first to experience Hidayah Hub. Sign up now for early access and exclusive launch benefits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
          onClick={openOverlay}
          className="bg-white/10 text-lg relative overflow-hidden px-8 py-4 text-white rounded-full group border-2 border-white hover:text-[#008080] transition">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#008080] flex items-center justify-center gap-2">
              <Bell size={20} />
              Get Early Access
            </span>
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-500 group-hover:h-full"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-white">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free to Join</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Halal & Ethical</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Early Bird Benefits</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Credit Card Required</span>
          </div>
        </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOverlayOpen && <Overlay onClose={closeOverlay} />}
      </AnimatePresence>
    </section>
  );
}
