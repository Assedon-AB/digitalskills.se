interface StatsCardProps {
  name: string;
  month: number;
  month6: number;
  year: number;
  industryMonth: number;
  industryMonth6: number;
  industryYear: number;
}

export default function StatsCard({
  name,
  month,
  month6,
  year,
  industryMonth,
  industryMonth6,
  industryYear,
}: StatsCardProps) {
  return (
    <div className="bg-white px-4 py-4 w-full border rounded-md flex flex-col">
      <div className="pb-2">
        <p>Tillväxt </p>
      </div>
      <div className="flex divide-x">
        <div className="w-1/3 flex flex-col justify-center items-center">
          <p className="text-sm">
            <span className="text-blue-600 capitalize text-sm font-semibold">
              {name}
            </span>{" "}
            senaste 3 mån.
          </p>
          <h2
            className={`text-xl font-semibold mt-2 ${
              month >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {month > 0 ? "+" : ""}
            {month.toFixed(1)}%
          </h2>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
          <p className="text-sm">
            <span className="text-blue-600 capitalize text-sm font-semibold">
              {name}
            </span>{" "}
            senaste 6 mån.
          </p>
          <h2
            className={`text-xl font-semibold mt-2 ${
              month >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {month6 > 0 ? "+" : ""}
            {month6.toFixed(1)}%
          </h2>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center">
          <p className="text-sm">
            <span className="text-blue-600 capitalize text-sm font-semibold">
              {name}
            </span>{" "}
            senaste 12 mån.
          </p>
          <h2
            className={`text-xl font-semibold mt-2 ${
              year >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {year > 0 ? "+" : ""}
            {year.toFixed(1)}%
          </h2>
        </div>
      </div>
      <div className="flex divide-x pt-4">
        <div className="w-1/3 flex flex-col justify-center items-center">
          <p className="text-sm">
            <span className="text-orange-600 text-sm font-semibold">
              Branschen
            </span>{" "}
            senaste 3 mån.
          </p>
          <h2 className={"text-xl font-semibold mt-2 text-green-500 "}>
            {industryMonth > 0 ? "+" : ""}
            {industryMonth.toFixed(1)}%
          </h2>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
          <p className="text-sm">
            <span className="text-orange-600 text-sm font-semibold">
              Branschen
            </span>{" "}
            senaste 6 mån.
          </p>
          <h2 className={"text-xl font-semibold mt-2 text-green-500 "}>
            {industryMonth6 > 0 ? "+" : ""}
            {industryMonth6.toFixed(1)}%
          </h2>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center">
          <p className="text-sm">
            <span className="text-orange-600 text-sm font-semibold">
              Branschen
            </span>{" "}
            senaste 12 mån.
          </p>
          <h2 className={"text-xl font-semibold mt-2 text-green-500 "}>
            {industryYear > 0 ? "+" : ""}
            {industryYear.toFixed(1)}%
          </h2>
        </div>
      </div>
    </div>
  );
}
