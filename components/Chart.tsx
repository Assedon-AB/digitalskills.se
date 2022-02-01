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
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

interface ChartProps {
  name: string;
  data: ChartData;
}

export default function Chart({ name, data }: ChartProps) {
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
      <div className="bg-white p-4 w-full border rounded-md mb-4">
        <Line options={options} data={data} />
      </div>
      <p className="mb-16">
        <span className="text-blue-600 font-bold">Info!</span> Här kommer det
        att finnas information om modellen som använts för att prognosticera
        datan, information om resultat av backtester och genomsnittliga
        MAPE-värden.
      </p>
    </>
  );
}
