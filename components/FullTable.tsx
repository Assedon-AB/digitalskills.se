import { useState } from "react";
import FullTableListRow from "./FullTableListRow";
import { SortAscendingIcon } from "@heroicons/react/solid";

import InfoPopover from "./InfoPopover";

import { DigspecData, IndustryData } from "../interfaces/Digspec";

interface FullTableProps {
  data: DigspecData[];
  title: string;
  category: string;
  industry: IndustryData;
  updateCompareList: Function;
  compareList: string[];
  showModal: Function;
}

const FullTable = ({
  data,
  title,
  category,
  industry,
  updateCompareList,
  compareList,
  showModal,
}: FullTableProps) => {
  const [sortMode, setSortMode] = useState("Antal annonser");

  function sortBy(arr: DigspecData[], mode: string) {
    let preProp = "";
    var prop = "num";
    if (mode == "Antal annonser") {
      prop = "num";
      preProp = "";
    } else if (mode == "Prognos 6 mån") {
      prop = "month_6";
      preProp = "prediction_percentages";
    } else if (mode == "Prognos 12 mån") {
      preProp = "prediction_percentages";
      prop = "month_12";
    } else if (mode == "Prognos 18 mån") {
      preProp = "prediction_percentages";
      prop = "month_18";
    } else if (mode == "Trend 6 mån") {
      preProp = "trend_percentages";
      prop = "month_6";
    } else if (mode == "Trend 12 mån") {
      preProp = "trend_percentages";
      prop = "month_12";
    } else if (mode == "Trend 18 mån") {
      preProp = "trend_percentages";
      prop = "month_18";
    } else if (mode == "Namn") {
      prop = "name";
      preProp = "";
    }

    let newData = [];
    if (preProp) {
        newData = arr.sort((a: any, b: any) => {
        if (b[preProp] && a[preProp]) {
          return b[preProp][prop] - a[preProp][prop];
        } else {
          return -1;
        }
      });
    } else {
        newData = arr.sort((a: any, b: any) => b[prop] - a[prop]);
    }
    if (prop == "name") {
      newData = arr.sort((a, b) => a["name"].localeCompare(b["name"]));
    }

    return newData.map((d, index) => (
      <FullTableListRow
        key={d._id}
        data={d}
        category={category}
        callback={updateCompareList}
        compareList={compareList}
        showModal = {showModal}
      ></FullTableListRow>
    ));
  }

  return (
    <div className="flex flex-col pt-8  py-8">
      <div className="-my-2 overflow-x-scroll sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow max-h-screen overflow-y-scroll border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col" className="bg-gray-100"></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-gray-800 bg-gray-100 "
                  >
                    <div className="flex items-center">
                      <p className="font-medium text-[10px] uppercase tracking-wider">Trend</p>
                        <InfoPopover isSmall={true} title="Vad betyder trend?" text="Trenden räknas fram genom att jämföra senast uppmätta månadsvärde historiskt över trendperioderna." />
                    </div>
                  </th>
                  <th scope="col" className="bg-gray-100"></th>
                  <th scope="col"></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center  text-gray-500"
                  >
                    <div className="flex items-center">
                      <p className="text-[10px] font-medium uppercase tracking-wider">Prognos</p>
                        <InfoPopover isSmall={true} title="Vad betyder prognos?" text="Prognosen görs med hjälp av exponentiell utjämning över prognosperioderna framåt sett från senast uppmätta månadsvärde." />
                    </div>
                  </th>
                  <th scope="col"></th>
                  <th scope="col" className="px-6 py-3 text-center bg-gray-100 font-medium text-gray-800 uppercase tracking-wider"><p className="text-[10px]">Jämför</p></th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] font-medium ${
                      sortMode == "Namn" ? "text-blue-800" : "text-gray-500"
                    } uppercase tracking-wider`}
                  >
                    <button onClick={() => setSortMode("Namn")}>
                      <div className="flex flex-row hover:text-blue-800">
                        {title}
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800  ${
                            sortMode == "Namn"
                              ? "text-blue-800"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>

                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] `}
                  >
                    <button onClick={() => setSortMode("Alla annonser")}>
                        <div className={`flex items-center flex-row hover:text-blue-800 ${
                     sortMode == "Alla annonser"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        Annonser
                        <SortAscendingIcon
                            className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Alla annonser"
                              ? "text-blue-800"
                              : "text-gray-500"
                          }  ml-2`}
                        />
                        <InfoPopover isSmall={true} title="Vad betyder annonser?" text="Annonser är antalet annonser uppmätta den senaste månaden i datan." />
                      </div>
                    </button>
                  </th>

                  <th
                    scope="col"
                    className={`py-3 px-6 bg-gray-100 text-left text-[10px] `}
                  >
                    <button onClick={() => setSortMode("Trend 6 mån")}>
                        <div className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Trend 6 mån"
                        ? "text-blue-800"
                        : "text-gray-800"
                    } `}>
                        6 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                           sortMode == "Trend 6 mån"
                              ? "text-blue-800"
                              : "text-gray-800"
                          }  ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 bg-gray-100 text-left text-[10px] `}
                  >
                    <button onClick={() => setSortMode("Trend 12 mån")}>
                      <div className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Trend 12 mån"
                        ? "text-blue-800"
                        : "text-gray-800"
                    } `}>
                        12 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Trend 12 mån"
                               ? "text-blue-800"
                               : "text-gray-800"
                           }  ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 bg-gray-100 text-left text-[10px] `}
                  >
                    <button onClick={() => setSortMode("Trend 18 mån")}>
                      <div className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Trend 18 mån"
                        ? "text-blue-800"
                        : "text-gray-800"
                    } `}>
                        18 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Trend 18 mån"
                               ? "text-blue-800"
                               : "text-gray-800"
                           }  ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6  text-left text-[10px]`}
                  >
                    <button onClick={() => setSortMode("Prognos 6 mån")}>
                      <div className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Prognos 6 mån"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        6 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Prognos 6 mån"
                               ? "text-blue-800"
                               : "text-gray-500"
                           }  ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6  text-left text-[10px]`}
                  >
                    <button onClick={() => setSortMode("Prognos 12 mån")}>
                      <div className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Prognos 12 mån"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        12 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Prognos 12 mån"
                               ? "text-blue-800"
                               : "text-gray-500"
                           }  ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6  text-left text-[10px]`}
                  >
                    <button onClick={() => setSortMode("Prognos 18 mån")}>
                      <div className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Prognos 18 mån"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        18 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Prognos 18 mån"
                               ? "text-blue-800"
                               : "text-gray-500"
                           }  ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-[10px] bg-gray-100 font-medium text-gray-800 uppercase tracking-wider "
                  >
                    <button onClick={() => updateCompareList([])}>
                      <div className="flex flex-row underline hover:text-blue-800">
                        Rensa
                       
                      </div>
                    </button>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    Branschen
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    {industry.num}
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        industry.trend_percentages.month_6 > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {industry.trend_percentages.month_6.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                        industry.trend_percentages.month_12 > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {industry.trend_percentages.month_12.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                        industry.trend_percentages.month_18 > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {industry.trend_percentages.month_18.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                        industry.prediction_percentages.month_6 > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {industry.prediction_percentages.month_6.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                        industry.prediction_percentages.month_12 > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {industry.prediction_percentages.month_12.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                        industry.prediction_percentages.month_18 > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {industry.prediction_percentages.month_18.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  ></th>
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

export default FullTable;
