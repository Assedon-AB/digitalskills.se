import Link from "next/link";
import { LinkIcon } from "@heroicons/react/outline";
import { DigspecData } from "../interfaces/Digspec";

interface CompareTableRowProps {
  category: string;
  data: DigspecData;

}

const CompareTableRow = ({
  data,
  category,


}: CompareTableRowProps) => {
  if (data.num) {
    return (
      <tr
        key={data._id}
        className="focus:outline-none focus:ring focus:ring-violet-300"
      >
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="ml-0">
              <div
                className="text-xs font-medium text-gray-900 w-28 capitalize hover:text-blue-500 focus:outline-none focus:ring focus:ring-violet-300"
                tabIndex={0}
              >
                <Link href={`/${category}/${encodeURI(data.name)}-${data._id}`}>
                    <a className="flex flex row items-center" target="_blank">
                        {data.name}
                        <LinkIcon  className="ml-1  h-3 w-3 " aria-hidden="true" />
                    </a>
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
              data.trend_percentages.month_6 > 0
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
              data.trend_percentages?.month_12 > 0
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
              data.trend_percentages.month_18 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {`${data.trend_percentages.month_18.toFixed(1)} %`}
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
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              data.prediction_percentages.month_18 > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {data.prediction_percentages.month_18.toFixed(1)}%
          </span>
        </td>
      </tr>
    );
  } else {
    return null;
  }
};

export default CompareTableRow;
