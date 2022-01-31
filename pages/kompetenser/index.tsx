import type { NextPage } from "next";
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

const CompetencesOverview: NextPage = () => {
  return (
    <article className="max-w-6xl px-4 mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Sök kompetens"
          className="px-4 py-2 border rounded-l-md flex-grow"
        />
        <button className="bg-blue-600 font-bold text-white p-4 rounded-r-md">
          Sök
        </button>
      </div>

      <div className="bg-white p-4 w-full border rounded-md mb-4">
        <Line options={options} data={data} />
      </div>
      <p className="mb-16">
        <span className="text-blue-600 font-bold">Info!</span> Här kommer det
        att finnas information om modellen som använts för att prognosticera
        datan, information om resultat av backtester och genomsnittliga
        MAPE-värden.
      </p>

      <div className="bg-white p-4 w-full border rounded-md mb-4 flex">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p>Tillväxt React senaste månaden.</p>
          <h2 className="text-2xl">+12%</h2>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center">
          <p>Tillväxt React senaste året.</p>
          <h2 className="text-2xl">+28</h2>
        </div>
      </div>
    </article>
  );
};

export default CompetencesOverview;
