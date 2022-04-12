import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {DigspecData} from "../interfaces/Digspec";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[] | { x: string; y: number }[];
    borderColor: string;
    backgroundColor: string;
    borderDash?: number[];
  }[];
}

interface ChartProps {
  name: string;
  digspecData: DigspecData[] | DigspecData;
  data: ChartData;
}

export default function Chart({ name, digspecData, data }: ChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Antal förekomster av ${name} på månadsbasis`,
      },
    },
  };

  return (
    <>
      <div
        className="bg-white p-4 w-full border rounded-md mb-4"
        aria-label={`Graf över ${name} förekomst övertid samt prognos.`}
      >
        <Line options={options} data={data} />
      </div>
      <div className="flex flex-wrap">
          {Array.isArray(digspecData) && digspecData.length > 0 ? (digspecData.map((obj) => (
              <div className="mb-4 mr-4 bg-white p-4 rounded-md border w-max" key={obj._id+"-chart-metadata"}>
                  <p className="capitalize text-lg">{obj.name}</p>
                  <p><span className="font-bold">Model:{" "}</span>{obj.model}</p>
                  <p><Link passHref={true} href="https://en.wikipedia.org/wiki/Mean_absolute_percentage_error"><a target="_blank" className="underline font-bold hover:text-blue-500"><abbr title="Mean absolute percentage error">MAPE</abbr></a></Link>:{" "}{obj.eval_mape}</p>
              </div>
            ))
          ) : (
              <div className="mb-16">
                  <p><span className="font-bold">Model:{" "}</span>{(digspecData as DigspecData).model}</p>
                  <p><Link passHref={true} href="https://en.wikipedia.org/wiki/Mean_absolute_percentage_error"><a target="_blank" className="underline font-bold hover:text-blue-500"><abbr title="Mean absolute percentage error">MAPE</abbr></a></Link>:{" "}{(digspecData as DigspecData).eval_mape}</p>
              </div>
          )}
      </div>
    </>
  );
}
