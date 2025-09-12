const DateDisplay = () => {
  const today = new Date();

  // Gregorian
  const gDay = today.toLocaleDateString("en-US", { weekday: "long" });
  const gDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
    <div className="flex flex-col items-end text-right min-w-[120px]">
      <div className="font-bold text-[#444444] text-lg">
        {hDate}
      </div>
      
      <div className="font-medium text-br-color text-lg">
        {gDay}
      </div>
      
      <div className="font-medium text-[#444444] text-lg">
        {gDate}
      </div>
    </div>
  );
};

export default DateDisplay;
