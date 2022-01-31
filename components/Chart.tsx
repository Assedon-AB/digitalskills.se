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
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Antal förekomster av React på månadsbasis",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "React",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function Chart() {
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
