import Link from "next/link";
import { useState } from "react";
import { SortAscendingIcon } from "@heroicons/react/solid";
import GeoTableRow from "./GeoTableRow";

interface GeoTableProps {
  data: {
    name: string;
    num: number;
    organisations_num: number;
  }[];
  title: string;
}

const GeoTable = ({ data, title }: GeoTableProps) => {
  const [sortMode, setSortMode] = useState("Antal annonser");

  function sortBy(arr: any[], mode: string) {
    var prop = "num";
    if (mode == "Antal annonser") {
      prop = "num";
    } else if (mode == "Antal rekryterande organisationer") {
      prop = "organisations_num";
    }

    data = arr.sort((a, b) => b[prop] - a[prop]);

    return data.map((dataObject, index) => (
      <GeoTableRow
        key={"geo-list-row-" + index}
        dataObject={dataObject}
      ></GeoTableRow>
    ));
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {title}
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium text-gray-500 ${
                      ["Antal rekryterande organisationer"].indexOf(sortMode) >=
                      0
                        ? "text-gray-500"
                        : "text-blue-500"
                    } uppercase tracking-wider`}
                  >
                    <div className="flex flex-row">
                      Annonser
                      <button onClick={() => setSortMode("Alla annonser")}>
                        <SortAscendingIcon
                          className={`h-5 w-5 ${
                            ["Antal rekryterande organisationer"].indexOf(
                              sortMode
                            ) >= 0
                              ? "text-gray-500"
                              : "text-blue-500"
                          }  text-gray-500 ml-2`}
                        />
                      </button>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] bg-gray-100 font-medium text-gray-500 ${
                      sortMode == "Antal rekryterande organisationer"
                        ? "text-blue-500"
                        : "text-gray-500"
                    } uppercase tracking-wider `}
                  >
                    <div className="flex flex-row">
                      Antal rekryterande organisationer
                      <button
                        onClick={() =>
                          setSortMode("Antal rekryterande organisationer")
                        }
                      >
                        <SortAscendingIcon
                          className={`h-5 w-5 text-gray-500 ${
                            sortMode == "Antal rekryterande organisationer"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortBy(data, sortMode)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoTable;
