import { useState } from "react";
import { SortAscendingIcon } from "@heroicons/react/solid";
import GeoTableRow from "./GeoTableRow";

interface GeoData {
    name: string;
    num: number;
    organisations_num: number;
    details: { num: number; name: string }[];
}

interface GeoTableProps {
  data: GeoData[];
  title: string;
}

const GeoTable = ({ data, title }: GeoTableProps) => {
  const [sortMode, setSortMode] = useState("Antal annonser");
  const [showMode, setShowMode] = useState("");

  const changeData = (arg: string) => {
    setShowMode(arg);
  };

  function sortBy(arr: GeoData[], mode: string) {
    var prop = "num";
    if (mode == "Antal annonser") {
      prop = "num";
    } else if (mode == "Antal rekryterande organisationer") {
      prop = "organisations_num";
    } else if (mode == "Kommun") {
      prop = "name";
    }

      data = arr.sort((a: any, b: any) => b[prop] - a[prop]);
    if (prop == "name") {
      data = arr.sort((a, b) => a["name"].localeCompare(b["name"]));
    }
    return data.map((dataObject, index) => (
      <GeoTableRow
        key={"geo-list-row-" + index}
        dataObject={dataObject}
        updateShow={changeData}
        incomingMode={showMode}
      ></GeoTableRow>
    ));
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] `}
                  >
                    <button aria-label="Sortera efter område" onClick={() => setSortMode("Kommun")} className={`flex flex-row ${
                     sortMode == "Kommun"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        <span aria-hidden="true">{title}</span>
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode == "Kommun"
                              ? "text-blue-800"
                              : "text-gray-500"
                          } ml-2`}
                        />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px]`}
                  >
                    <button aria-label="Sortera efter antal annonser" onClick={() => setSortMode("Alla annonser")} className={`flex flex-row ${
                     sortMode == "Alla annonser"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        <span aria-hidden="true">Annonser</span>
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode == "Alla annonser"
                              ? "text-blue-800"
                              : "text-gray-500"
                          } ml-2`}
                        />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px]`}
                  >
                    <button
                      aria-label="Sortera efter antal rekryterande organisationer"
                      onClick={() =>
                        setSortMode("Antal rekryterande organisationer")
                      }
                    className={`flex flex-row ${
                     sortMode == "Antal rekryterande organisationer"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        <span aria-hidden="true">Antal rekryterande organisationer</span>
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode == "Antal rekryterande organisationer"
                              ? "text-blue-800"
                              : "text-gray-500"
                          } ml-2`}
                        />
                    </button>
                  </th>
                  <th></th>
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
