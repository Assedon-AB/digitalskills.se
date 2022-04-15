import {useRef} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions
} from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
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
  data: ChartData;
}

export default function Chart({ name, data }: ChartProps) {
    const chartRef = useRef<any>();

    const resetZoom = () => {
        if (chartRef && chartRef.current) {
            chartRef.current.resetZoom();
        }
    }

    const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Antal förekomster av ${name} på månadsbasis`,
      },
        zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: "xy",
            },
            pan: {
                enabled: true,
                mode: "xy"
            },
      }
    },
  };

  return (
      <div
          className="bg-white p-4 w-full border rounded-md mb-4 hidden sm:block"
          role="img"
        aria-label={`Graf över ${name} förekomst övertid samt prognos.`}
      >
        <Line options={options} data={data} ref={chartRef} />
        <button className="block mx-auto mt-4 text-blue-800 hover:text-blue-500" onClick={resetZoom}>Återställ Zoom</button>
      </div>
  );
}
