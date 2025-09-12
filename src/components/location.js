// useUserLocation.js
import { useState, useEffect } from "react";

const useUserLocation = () => {
  const [state, setState] = useState({
    loading: true,
    lat: null,
    lng: null,
    city: "",
    country: "",
    error: "",
  });

  useEffect(() => {
    const fail = (msg = "permission denied or unavailable") => {
      setState((s) => ({ ...s, loading: false, error: msg }));
    };

    if (!("geolocation" in navigator)) {
      fail("geolocation unsupported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;

          // Set lat/lng immediately
          setState((s) => ({
            ...s,
            lat: latitude,
            lng: longitude,
          }));

          // Reverse geocode to get city/country
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const addr = data?.address || {};

          const city =
            addr.city ||
            addr.town ||
            addr.village ||
            addr.suburb ||
            addr.state ||
            "";

          const country = addr.country || "";

          setState({
            loading: false,
            lat: latitude,
            lng: longitude,
            city,
            country,
            error: "",
          });
        } catch (e) {
          // If reverse geocode fails, still return lat/lng
          setState((s) => ({
            ...s,
            loading: false,
            city: "",
            country: "",
            error: "reverse geocode failed",
          }));
        }
      },
      () => fail(),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }, []);

  return state;
};

export default useUserLocation;
