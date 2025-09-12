import { motion } from "framer-motion";
import { useGeoSource } from "../../components/useGeoL";

const Location = () => {
  const { status, loading, city, country } = useGeoSource({ allowIpFallback: false });
  const hasPermission = status === "granted";
  const hasLocationText = hasPermission && !loading && (city || country);

  const content = hasPermission && loading ? (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-br-color bg-white border border-br-color">
      Detecting location…
    </span>
  ) : hasLocationText ? (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-br-color bg-white border border-br-color">
      {city ? `${city}, ${country || ""}` : country}
    </span>
  ) : (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-gray-500 bg-white border border-br-color">
      Location not available
    </span>
  );

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        {content}
      </motion.div>
    </section>
  );
};

export default Location;
