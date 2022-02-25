import Link from "next/link";
import { useState } from "react";

import { DigspecData } from "../interfaces/Digspec";


interface FullTableListRowProps {
  category: string;
  data: DigspecData;
  callback: Function;
  compareList: string[];
}

const Checkbox = ({ onClick, checked }: { onClick: any; checked: boolean }) => {
  return (
    <div className="flex items-center relative">
      <input
        type="checkbox"
        className="opacity-0 absolute h-6 w-6"
        onClick={onClick}
        checked={checked}
      />
      <div className="bg-white border-2 rounded-md border-blue-500 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
        <svg
          className="fill-current hidden w-3 h-3 text-blue-500 pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(-9 -11)" fill="#C1531B" fillRule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

const FullTableListRow = ({ data, category, callback , compareList}: FullTableListRowProps) => {
  const [checked, setChecked] = useState<boolean>(false)


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

          <Checkbox onClick={() => {
            if(checked){
              setChecked(false)
              const index: number = compareList.indexOf(data._id, 0);
                if (index > -1) {
                  compareList.splice(index, 1);
                }
                callback(compareList)
            }
            else{
              setChecked(true)
              compareList.push(data._id)
              callback(compareList)
              
            }
          }} checked={checked}></Checkbox>

        </td>
      </tr>
    );
  } else {
    return null;
  }
};

export default FullTableListRow;
