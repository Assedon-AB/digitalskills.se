interface StatsCardProps {
  name: string;
  month: number;
  year: number;
}

export default function StatsCard({ name, month, year }: StatsCardProps) {
  return (
    <div className="bg-white px-4 py-4 w-full border rounded-md flex flex-col">
      <div className="pb-2"><p >Tillväxt </p></div>
    <div className="flex divide-x">
      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-sm">
          <span className="text-blue-600 text-sm font-semibold">{name}</span>{" "}
          senaste 3 mån.
        </p>
        <h2
          className={`text-xl font-semibold mt-2 ${
            month >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {month > 0 ? "+" : ""}
          {month}%
        </h2>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-sm">
          <span className="text-blue-600 text-sm font-semibold">{name}</span>{" "}
          senaste 6 mån.
        </p>
        <h2
          className={`text-xl font-semibold mt-2 ${
            month >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {month > 0 ? "+" : ""}
          {month}%
        </h2>
      </div>

      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-sm">
          <span className="text-blue-600 text-sm font-semibold">{name}</span>{" "}
          senaste 12 mån.
        </p>
        <h2
          className={`text-xl font-semibold mt-2 ${
            year >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {year > 0 ? "+" : ""}
          {year}%
        </h2>
      </div>
      </div>
      <div className="flex divide-x pt-4">
      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-sm">
          <span className="text-orange-600 text-sm font-semibold">Branschen</span>{" "}
          senaste 3 mån.
        </p>
        <h2
          className={"text-xl font-semibold mt-2 text-green-500 "}
        >
          {"+"}
          36%
        </h2>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-sm">
          <span className="text-orange-600 text-sm font-semibold">Branschen</span>{" "}
          senaste 6 mån.
        </p>
        <h2
          className={"text-xl font-semibold mt-2 text-green-500 "}
        >
          
          +54%
        </h2>
      </div>

      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-sm">
          <span className="text-orange-600 text-sm font-semibold">Branschen</span>{" "}
          senaste 12 mån.
        </p>
        <h2
          className={"text-xl font-semibold mt-2 text-green-500 "}
        >
          {"+76%"}
          
        </h2>
      </div>
      </div>
    </div>
  );
}
