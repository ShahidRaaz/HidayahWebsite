// TimeEvents.js — using adhan-js locally
import { useEffect, useMemo, useState } from "react";
import { useGeoSource } from "./useGeoL";
import { PrayerTimes, CalculationMethod, Madhab, Coordinates } from "adhan";

const fmtClock = (date, tz) =>
  new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true, timeZone: tz }).format(date); // display clock [16]

function toInstantInTz(baseDate, hours, minutes, tz) {
  const ymd = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(baseDate).split("-");
  const [Y, Mo, D] = ymd.map(Number);
  const wallUTC = Date.UTC(Y, Mo - 1, D, hours, minutes, 0);
  const fmt = (d, zone) => new Intl.DateTimeFormat("en-CA", { timeZone: zone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).format(d);
  const parse = (s) => s.replace(/[^\d]/g, " ").trim().split(/\s+/).map(Number);
  const [yT, mT, dT, hT, minT] = parse(fmt(new Date(wallUTC), tz));
  const [yU, mU, dU, hU, minU] = parse(fmt(new Date(wallUTC), "UTC"));
  const localMs = Date.UTC(yT, mT - 1, dT, hT, minT);
  const utcMs = Date.UTC(yU, mU - 1, dU, hU, minU);
  const offMin = Math.round((localMs - utcMs) / 60000);
  return new Date(wallUTC - offMin * 60000);
} // robust tz instant [16]

export default function TimeEvents() {
  const { status, coords, timezone } = useGeoSource({ allowIpFallback: false });
  const hasPermission = status === "granted";
  const { lat, lng } = coords || {};
  const tzPref = useMemo(() => timezone || Intl.DateTimeFormat().resolvedOptions().timeZone, [timezone]);
  const hasLocation = hasPermission && lat != null && lng != null;

  const [now, setNow] = useState(() => new Date());
  const [schedule, setSchedule] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    if (!hasLocation) return;
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, [hasLocation]); // live clock [16]

  useEffect(() => {
    if (!hasLocation) { setSchedule(null); return; }
    // Build prayer times with adhan
    const coordsObj = new Coordinates(lat, lng);
    const params = CalculationMethod.MuslimWorldLeague(); // choose your method; MWL is common [16]
    params.madhab = Madhab.Hanafi; // or Hanafi
    const todayLocal = new Date(new Date().toLocaleString("en-US", { timeZone: tzPref }));
    const pt = new PrayerTimes(coordsObj, todayLocal, params);

    const base = todayLocal;
    const asInstant = (d) => toInstantInTz(base, d.getHours(), d.getMinutes(), tzPref);

    setSchedule({
      Fajr: asInstant(pt.fajr),
      Sunrise: asInstant(pt.sunrise),
      Dhuhr: asInstant(pt.dhuhr),
      Asr: asInstant(pt.asr),
      Maghrib: asInstant(pt.maghrib),
      Isha: asInstant(pt.isha),
    });
  }, [hasLocation, lat, lng, tzPref]); // local calculation [16]

  useEffect(() => {
    if (!schedule) { setCurrentEvent(null); setNextEvent(null); return; }
    const t = schedule;
    const ordered = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"].filter(k => t[k]);
    const addMin = (d, m) => new Date(d.getTime() + m * 60000);
    const inRange = (a, b) => now >= a && now < b;
    const BUF = 5;

    let cur = null, nxt = null;
    const fajrEnd = addMin(t.Fajr, BUF);
    const asrEnd = addMin(t.Asr, BUF);

    if (inRange(t.Fajr, fajrEnd)) { cur = { name: "Fajr" }; nxt = { name: "Sunrise" }; }
    else if (inRange(fajrEnd, t.Sunrise)) { cur = { name: "Forbidden (after Fajr)" }; nxt = { name: "Sunrise" }; }
    else if (inRange(t.Sunrise, t.Dhuhr)) { cur = { name: "Duha" }; nxt = { name: "Dhuhr" }; }
    else if (inRange(t.Dhuhr, t.Asr)) { cur = { name: "Dhuhr" }; nxt = { name: "Asr" }; }
    else if (inRange(t.Asr, asrEnd)) { cur = { name: "Asr" }; nxt = { name: "Maghrib" }; }
    else if (inRange(asrEnd, t.Maghrib)) { cur = { name: "Forbidden (after Asr)" }; nxt = { name: "Maghrib" }; }
    else if (inRange(t.Maghrib, t.Isha)) { cur = { name: "Maghrib" }; nxt = { name: "Isha" }; }
    else if (now >= t.Isha || now < t.Fajr) { cur = { name: now >= t.Isha ? "Isha" : "—" }; nxt = { name: "Fajr" }; }
    else { // fallback
      for (let i = ordered.length - 1; i >= 0; i--) {
        const k = ordered[i];
        if (now >= t[k]) { cur = { name: k }; nxt = { name: ordered[i + 1] || "Isha" }; break; }
      }
      if (!cur) { cur = { name: "—" }; nxt = { name: ordered }; }
    }

    setCurrentEvent(cur); setNextEvent(nxt);
  }, [schedule, now]); // event logic [16]

  if (!hasPermission) return <div className="text-lg font-semibold text-gray-700">Give location permission to reveal.</div>;
  if (!hasLocation) return null;

  return (
    <div className="flex flex-col text-center md:text-left md:items-left">
      <div className="text-xl font-bold text-gray-800">{fmtClock(now, tzPref)}</div>
      {currentEvent && <div className="text-lg"><span className="text-br-color font-bold">Now: {currentEvent.name}</span></div>}
      {nextEvent && <div className="text-lg"><span className="font-medium text-[#444444] text-lg">Next: {nextEvent.name}</span></div>}
    </div>
  );
}
