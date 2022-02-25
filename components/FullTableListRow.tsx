import Link from "next/link";

import { DigspecData } from "../interfaces/Digspec";

interface FullTableListRowProps {
  category: string;
  data: DigspecData;
}

const FullTableListRow = ({ data, category }: FullTableListRowProps) => {
  if (data.num) {
    return (
      <tr key={data._id}>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="ml-0">
              <div className="text-xs font-medium text-gray-900 w-28 capitalize hover:text-blue-500">
              <Link
                href={`/${category}/${data.name}-${data._id}`}
              >
                {data.name}
              </Link>
               
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-xs text-gray-900">{data.num}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              data.trend_percentages.month_3 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {`${data.trend_percentages.month_3.toFixed(1)} %`}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              data.trend_percentages?.month_6 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {`${data.trend_percentages.month_6.toFixed(1)} %`}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              data.trend_percentages.month_12 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {`${data.trend_percentages.month_12.toFixed(1)} %`}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              data.prediction_percentages.month_3 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {data.prediction_percentages.month_3.toFixed(1)}%
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              data.prediction_percentages.month_6 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {data.prediction_percentages.month_6.toFixed(1)}%
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              data.prediction_percentages.month_12 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {data.prediction_percentages.month_12.toFixed(1)}%
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <Link href={`/${category}/${data.name}-${data._id}`}>
            <a
              className={`px-2 inline-flex leading-5 text-[10px] font-medium text-gray-500 uppercase}`}
            >
              SE MER
            </a>
          </Link>
        </td>
      </tr>
    );
  } else {
    return null;
  }
};

export default FullTableListRow;
