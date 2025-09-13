// DateDisplay.js
import { useMemo } from "react";
import { useGeoSource } from "../useGeoL";

const DateDisplay = () => {
  const { status, timezone } = useGeoSource();

  // Hooks must be unconditional
  const tz = useMemo(
    () => timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    [timezone]
  );

  const today = new Date();

  // Prepare strings regardless of permission (no network, pure compute)
  const gDay = today.toLocaleDateString("en-US", { weekday: "long", timeZone: tz });
  const gDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: tz,
  });
  const isFriday = gDay === "Friday";

  const hParts = new Intl.DateTimeFormat("en-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: tz,
  }).formatToParts(today);
  const hDay = hParts.find((p) => p.type === "day")?.value || "";
  const hMonth = hParts.find((p) => p.type === "month")?.value || "";
  const hYear = hParts.find((p) => p.type === "year")?.value || "";
  const hDate = `${hDay} ${hMonth} ${hYear}`;

  // Render strictly only when permission is granted
  if (status !== "granted") {
    return (
      <div className="flex flex-col text-center md:text-right md:items-right">
        <div className="text-lg font-semibold text-gray-700">
          Give location permission to reveal.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col text-center md:text-right md:items-right">
      <div className="font-bold text-[#444444] text-lg">{hDate}</div>

      <div className="font-bold text-br-color text-lg w-full">
        {isFriday ? "Friday • Jum'ah" : gDay}
      </div>

      <div className="font-medium text-[#444444] text-lg">{gDate}</div>
    </div>
  );
};

export default DateDisplay;
