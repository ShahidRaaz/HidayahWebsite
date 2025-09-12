import { motion } from "framer-motion";
import useUserCityCountry from "../../components/location";

const Location = () => {
  const { loading, city, country } = useUserCityCountry();

  const locationText = !loading && (city || country) ? `${city ? city + ", " : ""}${country}` : "";

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center px-6">
      {/* Location tag */}
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2 px-3 rounded-full text-lg text-br-color bg-white border border-br-color">
            Detecting location…
          </span>
        ) : locationText ? (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-br-color bg-white border border-br-color">
            {/* <span className="inline-block w-1.5 h-1.5 rounded-full bg-br-color" /> */}
            {locationText}
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-br-color bg-white border border-br-color">
            Location
            <span className="text-gray-500">not available</span>
          </span>
        )}
      </motion.div>
    </section>
  );
};

export default Location;
