// Location.jsx
import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useGeoSource } from "../../components/Home/useGeoL";

// Session latch to avoid double-prompt within one app session (e.g., StrictMode re-mounts)
let GEO_PROMPTED_ONCE = false;

// Persistent keys
const GEO_LABEL_KEY = "geo.label.v1";     // { city, country }
const GEO_PROMPT_KEY = "geo.prompted.v1"; // "1" when we already asked on this browser

const Location = () => {
  // Important: do not auto-prompt from the hook; we control prompting here
  const { status, loading, city, country, requestLocation } = useGeoSource({
    autoRequestOnLoad: false,
    allowIpFallback: false,
  });

  // Live permission check from Permissions API via hook
  const hasPermission = status === "granted";

  // Hydrate any previously saved label (does not cause fetching)
  const saved = useMemo(() => {
    try {
      const raw = localStorage.getItem(GEO_LABEL_KEY);
      return raw ? JSON.parse(raw) : { city: "", country: "" };
    } catch {
      return { city: "", country: "" };
    }
  }, []); // read once on mount [3]

  // Prefer live label from hook, else saved
  const effectiveCity = city || saved.city || "";
  const effectiveCountry = country || saved.country || "";
  const hasLabel = !!(effectiveCity || effectiveCountry);

  // One-time prompt only if:
  // - Secure context
  // - No saved label exists (first visit)
  // - We haven't already prompted this browser
  // - We haven't already prompted in this session
  const didInit = useRef(false);
  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    if (!window.isSecureContext) return; // must be HTTPS/localhost [2]
    if (hasLabel) return; // already have a label, don’t prompt again

    if (GEO_PROMPTED_ONCE) return;
    const alreadyPrompted = localStorage.getItem(GEO_PROMPT_KEY);
    if (alreadyPrompted) return;

    // Mark and request once
    try {
      localStorage.setItem(GEO_PROMPT_KEY, "1");
    } catch {}
    GEO_PROMPTED_ONCE = true;
    requestLocation(); // must call geolocation.getCurrentPosition internally [2]
  }, [hasLabel, requestLocation]); // runs on first mount only due to latch

  // Persist any newly obtained label for future visits
  useEffect(() => {
    if (city || country) {
      try {
        localStorage.setItem(
          GEO_LABEL_KEY,
          JSON.stringify({ city: city || "", country: country || "" })
        );
      } catch {}
    }
  }, [city, country]); // write-through cache [3]

  // UI: reflect live permission; don’t hide the permission state even if a saved label exists
  let content;
  if (!hasPermission) {
    // If permission is not granted, communicate clearly; do not show a stale label
    content = (
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-gray-500 bg-white border border-br-color">
        Give location permission
      </span>
    );
  } else if (loading && !hasLabel) {
    content = (
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-br-color bg-white border border-br-color">
        Detecting location…
      </span>
    );
  } else if (hasLabel) {
    content = (
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-br-color bg-white border border-br-color">
        {effectiveCity
          ? `${effectiveCity}${effectiveCountry ? `, ${effectiveCountry}` : ""}`
          : effectiveCountry}
      </span>
    );
  } else {
    content = (
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg text-gray-500 bg-white border border-br-color">
        Location not available
      </span>
    );
  }

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
