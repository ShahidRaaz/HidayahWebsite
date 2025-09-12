// TimeEvents.js
import { useState, useEffect, useMemo } from "react";
import { useGeoSource } from "./useGeoL";

const getPrayerAPIUrl = (lat, lng, tz) => {
  if (lat == null || lng == null) return null;
  const ts = Math.floor(Date.now() / 1000);
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    method: "2", // ISNA; change if desired
  });
  if (tz) params.set("timezonestring", tz);
  return `https://api.aladhan.com/v1/timings/${ts}?${params.toString()}`;
};

const fmtTime = (date, tz) =>
  new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit", // show seconds
    hour12: true,
    timeZone: tz,
  }).format(date);

const TimeEvents = () => {
  // Strict gate: do not allow IP fallback; require user-granted precise coords
  const { status, coords, timezone } = useGeoSource({ allowIpFallback: false });
  const hasPermission = status === "granted";
  const { lat, lng } = coords;

  const tz = useMemo(
    () => timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    [timezone]
  );

  const hasLocation = hasPermission && lat != null && lng != null;

  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [nextEvent, setNextEvent] = useState(null);

  // Live clock: tick every second once location is ready
  useEffect(() => {
    if (!hasLocation) return;
    const id = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(id);
  }, [hasLocation]); // interval best practice with cleanup [6][7]

  // Fetch daily timings from Aladhan when coords/tz change
  useEffect(() => {
    if (!hasLocation) {
      setPrayerTimes(null);
      return;
    }
    const url = getPrayerAPIUrl(lat, lng, tz);
    if (!url) return;

    setPrayerTimes(null);
    const ctrl = new AbortController();
    (async () => {
      try {
        const res = await fetch(url, { signal: ctrl.signal });
        const json = await res.json();
        setPrayerTimes(json?.data?.timings || null);
      } catch (e) {
        if (e?.name !== "AbortError") setPrayerTimes(null);
      }
    })();
    return () => ctrl.abort();
  }, [hasLocation, lat, lng, tz]); // aligns with Aladhan usage and tz passing [4][8]

  // Rename Dhuhr as Jum'ah when it is Friday in the user's tz
  const labelName = (name, date, tzLocal) => {
    if (name === "Dhuhr") {
      const day = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        timeZone: tzLocal,
      }).format(date);
      if (day === "Friday") return "Jum'ah";
    }
    return name;
  }; // relies on Intl timezone support [5]

  // Compute current and next event
  useEffect(() => {
    if (!hasLocation || !prayerTimes) {
      setCurrentEvent(null);
      setNextEvent(null);
      return;
    }
    const now = currentTime;

    const makeTime = (hhmm) => {
      if (!hhmm) return null;
      const [h, m] = hhmm.split(":").map(Number);
      const d = new Date(now);
      d.setHours(h, m, 0, 0);
      return d;
    };

    const t = {
      Imsak: makeTime(prayerTimes.Imsak),
      Fajr: makeTime(prayerTimes.Fajr),
      Sunrise: makeTime(prayerTimes.Sunrise),
      Dhuhr: makeTime(prayerTimes.Dhuhr),
      Asr: makeTime(prayerTimes.Asr),
      Maghrib: makeTime(prayerTimes.Maghrib),
      Isha: makeTime(prayerTimes.Isha),
      Midnight: makeTime(prayerTimes.Midnight),
    };

    const ordered = ["Imsak", "Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"].filter(
      (k) => t[k]
    );

    let cur = null;
    let nxt = null;

    if (t.Fajr && t.Sunrise && now >= t.Fajr && now < t.Sunrise) {
      cur = { name: "Forbidden (after Fajr)" };
      nxt = { name: "Sunrise" };
    } else if (t.Sunrise && t.Dhuhr && now >= t.Sunrise && now < t.Dhuhr) {
      cur = { name: "Duha" };
      nxt = { name: "Dhuhr" };
    } else if (t.Asr && t.Maghrib && now >= t.Asr && now < t.Maghrib) {
      cur = { name: "Forbidden (after Asr)" };
      nxt = { name: "Maghrib" };
    } else if (t.Isha && t.Fajr && (now >= t.Isha || now < t.Fajr)) {
      cur = { name: "Isha" };
      nxt = { name: "Fajr" };
    } else {
      for (let i = ordered.length - 1; i >= 0; i--) {
        const key = ordered[i];
        if (t[key] && now >= t[key]) {
          cur = { name: key };
          nxt = { name: ordered[i + 1] || "Imsak" };
          break;
        }
      }
      if (!cur && ordered.length) {
        cur = { name: "—" };
        nxt = { name: ordered };
      }
    }

    const curLabeled = cur ? { name: labelName(cur.name, now, tz) } : null;
    const nextLabeled = nxt ? { name: labelName(nxt.name, now, tz) } : null;

    setCurrentEvent(curLabeled);
    setNextEvent(nextLabeled);
  }, [hasLocation, currentTime, prayerTimes, tz]); // computes using Intl Friday rule [5]

  // Strict gate: permission must be granted to show any of the 3 entries
  if (!hasPermission) {
    return (
      <div className="flex flex-col text-center md:text-left md:items-left">
        <div className="text-lg font-semibold text-gray-700">
          Give location permission to see info.
        </div>
      </div>
    );
  } // matches Permissions/Geolocation best practices to gate UI [1][2][3]

  // Wait silently until precise coords exist after permission granted
  if (!hasLocation) {
    return null;
  }

  return (
    <div className="flex flex-col text-center md:text-left md:items-left">
      <div className="text-xl font-bold text-gray-800">{fmtTime(currentTime, tz)}</div>

      {currentEvent && (
        <div className="text-lg">
          <span className="text-br-color font-bold">Now: {currentEvent.name}</span>
        </div>
      )}

      {nextEvent && (
        <div className="text-lg">
          <span className="font-medium text-[#444444] text-lg">Next: {nextEvent.name}</span>
        </div>
      )}
    </div>
  );
};

export default TimeEvents;
