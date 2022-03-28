import Link from "next/link";
import { useState } from "react";

import { DigspecData } from "../interfaces/Digspec";

interface CompareTableRowProps {
  category: string;
  data: DigspecData;

}

const Checkbox = ({ onClick, checked }: { onClick: any; checked: boolean }) => {
  return (
    <input
      type="checkbox"
      className="h-6 w-6 border-2 border-blue-500 rounded-md focus:outline-none focus:ring"
      onClick={onClick}
      checked={checked}
    />
  );
};

const CompareTableRow = ({
  data,
  category,


}: CompareTableRowProps) => {
  const [checked, setChecked] = useState<boolean>(false);

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
       
      </tr>
    );
  } else {
    return null;
  }
};

export default CompareTableRow;