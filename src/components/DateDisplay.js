const DateDisplay = () => {
  const today = new Date();

  // Gregorian
  const gDay = today.toLocaleDateString("en-US", { weekday: "long" });
  const gDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const isFriday = gDay === "Friday";

  // Hijri (force order: day month year)
  const hParts = new Intl.DateTimeFormat("en-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(today);

  const hDay = hParts.find(p => p.type === "day")?.value;
  const hMonth = hParts.find(p => p.type === "month")?.value;
  const hYear = hParts.find(p => p.type === "year")?.value;

  const hDate = `${hDay} ${hMonth} ${hYear}`;

  return (
    <div className="flex flex-col text-center md:text-right md:items-right">
      <div className="font-bold text-[#444444] text-lg">
        {hDate}
      </div>

      <div className="font-bold text-br-color text-lg w-full">
        {isFriday ? "Friday • Jum'ah" : gDay}
      </div>
      
      <div className="font-medium text-[#444444] text-lg">
        {gDate}
      </div>
    </div>
  );
};

export default DateDisplay;
