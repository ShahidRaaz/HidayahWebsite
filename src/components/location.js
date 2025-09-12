// useUserLocation.js
import { useState, useEffect } from "react";

const useUserLocation = () => {
  const [location, setLocation] = useState({
    lat: null, lng: null, city: "", country: ""
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async pos => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lng: longitude });
        // You do not need city/country for your use-case
      }, () => {
        setLocation({ lat: null, lng: null });
      });
    }
  }, []);

  return location;
};

export default useUserLocation;
