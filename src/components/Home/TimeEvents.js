// TimeEvents.js — adhan-js + fixed forbidden windows (20 min)
import { useEffect, useMemo, useState } from "react";
import { useGeoSource } from "./useGeoL";
import { PrayerTimes, CalculationMethod, Madhab, Coordinates } from "adhan";

// Display clock in given timezone
const fmtClock = (date, tz) =>
  new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: tz,
  }).format(date); // display in tz [1]

// Robust: create absolute instant for HH:MM on base day in tz
function toInstantInTz(baseDate, hours, minutes, tz) {
  const ymd = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(baseDate).split("-");
  const [Y, Mo, D] = ymd.map(Number);
  const wallUTC = Date.UTC(Y, Mo - 1, D, hours, minutes, 0);
  const fmt = (d, zone) =>
    new Intl.DateTimeFormat("en-CA", {
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(d);
  const parse = (s) => s.replace(/[^\d]/g, " ").trim().split(/\s+/).map(Number);
  const [yT, mT, dT, hT, minT] = parse(fmt(new Date(wallUTC), tz));
  const [yU, mU, dU, hU, minU] = parse(fmt(new Date(wallUTC), "UTC"));
  const localMs = Date.UTC(yT, mT - 1, dT, hT, minT);
  const utcMs = Date.UTC(yU, mU - 1, dU, hU, minU);
  const offMin = Math.round((localMs - utcMs) / 60000);
  return new Date(wallUTC - offMin * 60000); // exact instant [1]
}

export default function TimeEvents() {
  // Require precise geolocation
  const { status, coords, timezone } = useGeoSource({ allowIpFallback: false }); // gating [1]
  const hasPermission = status === "granted";
  const { lat, lng } = coords || {};
  const tzPref = useMemo(
    () => timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    [timezone]
  ); // preferred tz [1]
  const hasLocation = hasPermission && lat != null && lng != null;

  const [now, setNow] = useState(() => new Date());
  const [schedule, setSchedule] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    if (!hasLocation) return;
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, [hasLocation]); // live clock [1]

  // Calculate today’s prayer times locally (adhan-js)
  useEffect(() => {
    if (!hasLocation) {
      setSchedule(null);
      return;
    }
    const coordsObj = new Coordinates(lat, lng);
    const params = CalculationMethod.MuslimWorldLeague(); // choose method [1]
    params.madhab = Madhab.Hanafi; // choose madhab [1]

    // Use today's date in the target tz
    const todayLocal = new Date(
      new Date().toLocaleString("en-US", { timeZone: tzPref })
    );
    const pt = new PrayerTimes(coordsObj, todayLocal, params); // computed times (Date-like, local) [1]

    const base = todayLocal;
    const asInstant = (d) => toInstantInTz(base, d.getHours(), d.getMinutes(), tzPref);

    setSchedule({
      Fajr: asInstant(pt.fajr),
      Sunrise: asInstant(pt.sunrise),
      Dhuhr: asInstant(pt.dhuhr),
      Asr: asInstant(pt.asr),
      Maghrib: asInstant(pt.maghrib),
      Isha: asInstant(pt.isha),
    }); // convert to absolute instants for comparison [1]
  }, [hasLocation, lat, lng, tzPref]); // compute on coord/tz change [1]

  // Determine current and next events with 20-minute forbidden windows
  useEffect(() => {
    if (!schedule) {
      setCurrentEvent(null);
      setNextEvent(null);
      return;
    }
    const t = schedule;
    const zone = tzPref;

    const addMin = (d, m) => new Date(d.getTime() + m * 60000);
    const inRange = (a, b) => a && b && now >= a && now < b;

    // Forbidden windows (fixed 20-minute durations)
    const SUNRISE_FORBID_START = t.Sunrise;
    const SUNRISE_FORBID_END = addMin(t.Sunrise, 20); // 20 min after Sunrise [2]

    const PRE_DHUHR_FORBID_START = addMin(t.Dhuhr, -20); // 20 min before Dhuhr [2]
    const PRE_DHUHR_FORBID_END = t.Dhuhr; // ends at Dhuhr [2]

    const PRE_MAGHRIB_FORBID_START = addMin(t.Maghrib, -20); // 20 min before Maghrib [2]
    const PRE_MAGHRIB_FORBID_END = t.Maghrib; // ends at Maghrib [2]

    // Small buffers to label the prayer instant itself
    const BUF = 5; // 5-minute “instant” window [2]
    const fajrEnd = addMin(t.Fajr, BUF);
    const dhuhrEnd = addMin(t.Dhuhr, BUF);
    const asrEnd = addMin(t.Asr, BUF);
    const maghribEnd = addMin(t.Maghrib, BUF);
    const ishaEnd = addMin(t.Isha, BUF);

    let cur = null;
    let nxt = null;

    // Order of checks: prayer instants, forbidden windows, normal windows, night wrap
    if (inRange(t.Fajr, fajrEnd)) {
      cur = { name: "Fajr" };
      nxt = { name: "Sunrise" };
    } else if (inRange(SUNRISE_FORBID_START, SUNRISE_FORBID_END)) {
      cur = { name: "Sunrise" };
      nxt = { name: "Duha" };
    } else if (inRange(addMin(SUNRISE_FORBID_END, 0), PRE_DHUHR_FORBID_START)) {
      cur = { name: "Duha" };
      nxt = { name: "Zawal" };
    } else if (inRange(PRE_DHUHR_FORBID_START, PRE_DHUHR_FORBID_END)) {
      cur = { name: "Zawal" };
      nxt = { name: "Dhuhr" };
    } else if (inRange(t.Dhuhr, dhuhrEnd)) {
      cur = { name: "Dhuhr" };
      nxt = { name: "Asr" };
    } else if (inRange(t.Asr, asrEnd)) {
      cur = { name: "Asr" };
      nxt = { name: "Maghrib" };
    } else if (inRange(PRE_MAGHRIB_FORBID_START, PRE_MAGHRIB_FORBID_END)) {
      cur = { name: "Forbidden" };
      nxt = { name: "Maghrib" };
    } else if (inRange(t.Maghrib, maghribEnd)) {
      cur = { name: "Maghrib" };
      nxt = { name: "Isha" };
    } else if (inRange(addMin(maghribEnd, 0), t.Isha)) {
      cur = { name: "—" };
      nxt = { name: "Isha" };
    } else if (now >= t.Isha || now < t.Fajr) {
      cur = { name: now >= t.Isha ? "Isha" : "—" };
      nxt = { name: "Fajr" };
    } else {
      // Fallback: find last started event
      const ordered = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"].filter((k) => t[k]);
      for (let i = ordered.length - 1; i >= 0; i--) {
        const k = ordered[i];
        if (now >= t[k]) {
          cur = { name: k };
          nxt = { name: ordered[i + 1] || "Isha" };
          break;
        }
      }
      if (!cur && ordered.length) {
        cur = { name: "—" };
        nxt = { name: ordered };
      }
    } // applies fixed 20-minute forbidden windows [2]

    setCurrentEvent(cur);
    setNextEvent(nxt);
  }, [schedule, now, tzPref]); // logic in target tz [1]

  if (!hasPermission)
    return <div className="text-lg font-semibold text-gray-700">Give location permission to reveal.</div>; // UX gate [1]
  if (!hasLocation) return null; // wait for coords [1]

  return (
    <div className="flex flex-col text-center md:text-left md:items-left">
      <div className="text-xl font-bold text-gray-800">{fmtClock(now, tzPref)}</div>
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
}
