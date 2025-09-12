// TimeEvents.js
import { useState, useEffect } from "react";

const getPrayerAPIUrl = (lat, lng) => (
  lat && lng
    ? `https://api.aladhan.com/v1/timings/${Math.floor(Date.now() / 1000)}?latitude=${lat}&longitude=${lng}&method=2`
    : null
);

const TimeEvents = ({ lat, lng }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState({});
  const [currentEvent, setCurrentEvent] = useState(null);
  const [nextEvent, setNextEvent] = useState(null);

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch prayer times
  useEffect(() => {
    const url = getPrayerAPIUrl(lat, lng);
    if (!url) return;
    fetch(url)
      .then(res => res.json())
      .then(data => setPrayerTimes(data.data.timings));
  }, [lat, lng]);

  // Determine current + next event
  useEffect(() => {
    if (!Object.keys(prayerTimes).length) return;

    const today = new Date();
    const makeTime = (str) => {
      const [h, m] = str.split(":").map(Number);
      return new Date(today.getFullYear(), today.getMonth(), today.getDate(), h, m);
    };

    const times = {};
    for (const [k, v] of Object.entries(prayerTimes)) {
      times[k] = makeTime(v);
    }

    let current = null;
    let next = null;

    if (currentTime >= times.Fajr && currentTime < times.Sunrise) {
      current = { name: "Forbidden (after Fajr)" };
      next = { name: "Sunrise" };
    } else if (currentTime >= times.Sunrise && currentTime < times.Dhuhr) {
      current = { name: "Duha" };
      next = { name: "Dhuhr" };
    } else if (currentTime >= times.Asr && currentTime < times.Maghrib) {
      current = { name: "Forbidden (after Asr)" };
      next = { name: "Maghrib" };
    } else if (currentTime >= times.Isha || currentTime < times.Fajr) {
      current = { name: "Tahajjud" };
      next = { name: "Fajr" };
    } else {
      const ordered = [
        "Imsak", "Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha",
      ].filter(k => times[k]);

      for (let i = ordered.length - 1; i >= 0; i--) {
        if (currentTime >= times[ordered[i]]) {
          current = { name: ordered[i] };
          next = { name: ordered[i + 1] || "Imsak" }; // loop back if last
          break;
        }
      }
    }

    setCurrentEvent(current);
    setNextEvent(next);
  }, [currentTime, prayerTimes]);

  return (
    <div className="flex flex-col items-start min-w-[120px]">
      {/* Current Time */}
      <div className="text-xl font-bold text-gray-800">
        {currentTime.toLocaleTimeString()}
      </div>

      {/* Current Event */}
      {currentEvent && (
        <div className="text-lg">
          <span className="font-medium text-[#444444]">Now: </span>
          <span className="text-br-color">{currentEvent.name}</span>
        </div>
      )}

      {/* Next Event */}
      {nextEvent && (
        <div className="text-lg">
          <span className="font-medium text-[#444444] text-lg">Next: </span>
          <span className="font-medium text-[#444444] text-lg">{nextEvent.name}</span>
        </div>
      )}
    </div>
  );
};

export default TimeEvents;
