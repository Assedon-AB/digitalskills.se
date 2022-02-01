interface StatsCardProps {
  name: string;
  month: number;
  year: number;
}

export default function StatsCard({ name, month, year }: StatsCardProps) {
  return (
    <div className="bg-white px-8 py-8 w-full border rounded-md flex divide-x">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <p>
          Tillväxt <span className="text-blue-600 font-semibold">{name}</span>{" "}
          senaste månaden.
        </p>
        <h2
          className={`text-4xl font-bold mt-8 ${
            month >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {month > 0 ? "+" : ""}
          {month}%
        </h2>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        <p>
          Tillväxt <span className="text-blue-600 font-semibold">{name}</span>{" "}
          senaste året.
        </p>
        <h2
          className={`text-4xl font-bold mt-8 ${
            year >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {year > 0 ? "+" : ""}
          {year}%
        </h2>
      </div>
    </div>
  );
}
