// useGeoSource.js
import { useEffect, useMemo, useRef, useState, useCallback } from "react";

/*
  Options:
  - autoRequestOnLoad: call geolocation.getCurrentPosition on first mount to trigger prompt.
  - allowIpFallback: if permission isn’t granted, optionally use IP-based coords via GeoJS.
*/
export function useGeoSource({ autoRequestOnLoad = true, allowIpFallback = false } = {}) {
  const [status, setStatus] = useState("prompt"); // 'granted' | 'prompt' | 'denied'
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  // Keep timezone synced on mount
  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []); // [2]

  // Observe permission state; this does not prompt by itself
  useEffect(() => {
    let mounted = true;
    if (navigator.permissions?.query) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((perm) => {
          if (!mounted) return;
          setStatus(perm.state);
          const onChange = () => mounted && setStatus(perm.state);
          perm.onchange = onChange;
          if (perm.addEventListener) perm.addEventListener("change", onChange);
        })
        .catch(() => {});
    }
    return () => {
      mounted = false;
    };
  }, []); // [23][24]

  // Reverse geocode (Nominatim) with simple cache and policy-friendly headers
  const cacheRef = useRef(new Map()); // key: "lat,lng" -> { city, country }
  const reverseGeocode = useCallback(async (lat, lng) => {
    const key = `${lat.toFixed(4)},${lng.toFixed(4)}`;
    const cached = cacheRef.current.get(key);
    if (cached) return cached;

    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;
    const res = await fetch(url, {
      headers: {
        "Accept-Language": "en",
        "User-Agent": "YourSiteName/1.0 (contact@example.com)",
        "Referer": typeof window !== "undefined" ? window.location.origin : "",
      },
    });
    const data = await res.json();
    const a = data?.address || {};
    const result = {
      city: a.city || a.town || a.village || a.suburb || a.county || "",
      country: a.country || "",
    };
    cacheRef.current.set(key, result);
    return result;
  }, []); // [6][15][18][12]

  // One function that actually requests the position (causes the prompt)
  const requestLocationNow = useCallback(() => {
    setLoading(true);
    setError("");
    if (!("geolocation" in navigator)) {
      setError("geolocation unsupported");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setCoords({ lat, lng });
        try {
          const r = await reverseGeocode(lat, lng);
          setCity(r.city);
          setCountry(r.country);
        } catch {
          setCity("");
          setCountry("");
        }
        setLoading(false);
      },
      (err) => {
        setError(err?.message || "permission denied or unavailable");
        setLoading(false);
      },
      { enableHighAccuracy: true, maximumAge: 300000, timeout: 15000 }
    );
  }, [reverseGeocode]); // [1][2]

  // Prompt on load once
  const didAuto = useRef(false);
  useEffect(() => {
    // Must be HTTPS/localhost; some browsers may still throttle auto-prompts
    if (!autoRequestOnLoad || didAuto.current) return;
    didAuto.current = true;
    requestLocationNow();
  }, [autoRequestOnLoad, requestLocationNow]); // [1][21][22]

  // If already granted (e.g., user re-visits), fill silently on mount
  useEffect(() => {
    let cancelled = false;
    if (status === "granted" && !coords.lat && !coords.lng && !loading) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          if (cancelled) return;
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCoords({ lat, lng });
          try {
            const r = await reverseGeocode(lat, lng);
            if (!cancelled) {
              setCity(r.city);
              setCountry(r.country);
            }
          } catch {}
        },
        () => {},
        { enableHighAccuracy: true, maximumAge: 300000, timeout: 15000 }
      );
    }
    return () => {
      cancelled = true;
    };
  }, [status, coords.lat, coords.lng, loading, reverseGeocode]); // [1]

  // Optional IP fallback (kept off by default to honor “only after permission”)
  useEffect(() => {
    let cancelled = false;
    if (status !== "granted" && allowIpFallback && !coords.lat && !coords.lng && !loading) {
      setLoading(true);
      fetch("https://get.geojs.io/v1/ip/geo.json")
        .then((r) => r.json())
        .then(async (data) => {
          if (cancelled) return;
          const lat = parseFloat(data.latitude);
          const lng = parseFloat(data.longitude);
          if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
            setCoords({ lat, lng });
            try {
              const r = await reverseGeocode(lat, lng);
              if (!cancelled) {
                setCity(r.city);
                setCountry(r.country);
              }
            } catch {}
          }
          if (!cancelled) setLoading(false);
        })
        .catch(() => !cancelled && setLoading(false));
    }
    return () => {
      cancelled = true;
    };
  }, [status, allowIpFallback, coords.lat, coords.lng, loading, reverseGeocode]); // [25]

  const placeLabel = useMemo(() => [city, country].filter(Boolean).join(", "), [city, country]); // [2]

  return {
    status,       // 'granted' | 'prompt' | 'denied'
    loading,      // boolean
    error,        // string
    coords,       // { lat, lng }
    timezone,     // IANA zone
    city,
    country,
    placeLabel,
    requestLocation: requestLocationNow, // optional manual trigger
  };
}
