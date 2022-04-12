import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

interface FullTableListRowProps {
  dataObject: {
    name: string;
    num: number;
    organisations_num: number;
    details: { num: number; name: string }[];
  };
  updateShow: Function;
  incomingMode: string;
}

const FullTableListRow = ({
  incomingMode,
  dataObject,
  updateShow,
}: FullTableListRowProps) => {
  const [mode, setMode] = useState(incomingMode);

  useEffect(() => {
    updateShow(mode);
  }, [mode]);
  dataObject.details.sort((a, b) => b["num"] - a["num"]);
  return (
    <tr
      key={dataObject.name}
      
     
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-0">
            <div className="text-xs font-medium text-gray-900 flex flex-col ">
              {mode == dataObject.name ? (
                <div className="font-bold capitalize">{dataObject.name}</div>
              ) : (
                <div className="font-medium capitalize">{dataObject.name}</div>
              )}
              {mode == dataObject.name
                ? dataObject.details.map((detailObject, index) => (
                    <div
                      className="text-transparent py-1"
                      key={`empty-row-${index}-${dataObject.name}`}
                      aria-hidden="true"
                    >
                      {"empty"}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xs text-gray-900 flex flex-col">
          {mode == dataObject.name ? (
            <div className="font-bold">{dataObject.num}</div>
          ) : (
            <div>{dataObject.num}</div>
          )}
          {mode == dataObject.name
            ? dataObject.details.map((detailObject, index) => (
                <div key={`row-count-${index}`} className="py-1">
                  {detailObject.num}
                </div>
              ))
            : null}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xs text-gray-900 flex flex-col">
          {mode == dataObject.name ? (
            <div className="font-bold">{dataObject.organisations_num}</div>
          ) : (
            <div>{dataObject.organisations_num}</div>
          )}
          {mode == dataObject.name
            ? dataObject.details.map((detailObject, index) => (
                <div key={`row-org-geo-${index}`} className="py-1">
                  {detailObject.name}
                </div>
              ))
            : null}
        </div>
      </td>
      <td>
        <button className="text-gray-900 flex flex-col cursor-pointer" onClick={() => {
        mode == dataObject.name ? setMode("") : setMode(dataObject.name);
      }}>
          {mode == dataObject.name ? (
            <ChevronUpIcon
              className="mr-1 ml-2 h-5 w-5 stroke-gray-300"
              aria-hidden="true"
            />
          ) : (
            <ChevronDownIcon
              className="mr-1 ml-2 h-5 w-5 stroke-gray-300"
              aria-hidden="true"
            />
          )}
        </button>
      </td>
    </tr>
  );
};

export default FullTableListRow;
