import { useState } from "react";
import { SortAscendingIcon } from "@heroicons/react/solid";

import { DigspecData, IndustryData } from "../interfaces/Digspec";
import CompareTableRow from "./CompareTableRow";

import InfoPopover from "./InfoPopover";

interface CompareTableProps {
  data: DigspecData[];
  title: string;
  category: string;
  industry: IndustryData;

}

const CompareTable = ({
  data,
  title,
  category,
  industry,

}: CompareTableProps) => {
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

    return newData.map((d) => (
      <CompareTableRow
        key={d._id}
        data={d}
        category={category}

      ></CompareTableRow>
    ));
  }

  return (
    <div className="flex flex-col pt-8  py-8">
      <div className="-my-2 overflow-x-scroll sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow max-h-screen overflow-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col" className="bg-gray-100"></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-gray-800 bg-gray-100"
                  >
                    <div className="flex items-center">
                      <p className="text-[10px] font-medium uppercase tracking-wider">Trend</p>
                        <InfoPopover isSmall={true} title="Vad betyder trend?" text="Trenden räknas fram genom att jämföra senast uppmätta månadsvärde historiskt över trendperioderna." />
                    </div>
                  </th>
                  <th scope="col" className="bg-gray-100"></th>
                  <th scope="col"></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-gray-500"
                  >
                    <div className="flex items-center">
                      <p className="text-[10px] font-bold uppercase tracking-wider">Prognos</p>
                        <InfoPopover isSmall={true} title="Vad betyder prognos?" text="Prognosen görs med hjälp av exponentiell utjämning över prognosperioderna framåt sett från senast uppmätta månadsvärde." />
                    </div>
                  </th>
               
                </tr>
                <tr>
                <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] font-medium ${
                      sortMode == "Namn" ? "text-blue-800" : "text-gray-500"
                    } uppercase tracking-wider`}
                  >
                    <button onClick={() => setSortMode("Namn")} className="flex flex-row hover:text-blue-800">
                        <span className="sr-only">Sortera efter </span>
                        <span>{title}</span>
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800  ${
                            sortMode == "Namn"
                              ? "text-blue-800"
                              : "text-gray-500"
                          } ml-2`}
                        />
                    </button>
                  </th>
                  
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] `}
                  >
                      <div className="flex items-center">
                        <button onClick={() => setSortMode("Alla annonser")} className={`flex flex-row items-center hover:text-blue-800 ${
                         sortMode == "Alla annonser"
                            ? "text-blue-800"
                            : "text-gray-500"
                        } `}>
                            <span className="sr-only">Sortera efter antal </span>
                            <span>Annonser</span>
                            <SortAscendingIcon
                              className={`h-5 w-5 hover:text-blue-800 ${
                                sortMode == "Alla annonser"
                                  ? "text-blue-800"
                                  : "text-gray-500"
                              }  ml-2`}
                            />
                        </button>
                        <InfoPopover isSmall={true} title="Vad betyder annonser?" text="Annonser är antalet annonser uppmätta den senaste månaden i datan." />
                    </div>
                  </th>

                  <th
                    scope="col"
                    className={`py-3 px-6 bg-gray-100 text-left text-[10px] `}
                  >
                    <button onClick={() => setSortMode("Trend 6 mån")} className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Trend 6 mån"
                        ? "text-blue-800"
                        : "text-gray-800"
                    } `}>
                        <span className="sr-only">Sortera efter trend </span>
                        <span>6 <abbr title="månader">mån</abbr></span>
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                           sortMode == "Trend 6 mån"
                              ? "text-blue-800"
                              : "text-gray-800"
                          }  ml-2`}
                        />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 bg-gray-100 text-left text-[10px] `}
                  >
                    <button onClick={() => setSortMode("Trend 12 mån")} className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Trend 12 mån"
                        ? "text-blue-800"
                        : "text-gray-800"
                    } `}>
                        <span className="sr-only">Sortera efter trend </span>
                        <span>12 <abbr title="månader">mån</abbr></span>
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Trend 12 mån"
                               ? "text-blue-800"
                               : "text-gray-800"
                           }  ml-2`}
                        />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 bg-gray-100 text-left text-[10px] `}
                  >
                    <button onClick={() => setSortMode("Trend 18 mån")} className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Trend 18 mån"
                        ? "text-blue-800"
                        : "text-gray-800"
                    } `}>
                        <span className="sr-only">Sortera efter trend </span>
                        <span>18 <abbr title="månader">mån</abbr></span>
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Trend 18 mån"
                               ? "text-blue-800"
                               : "text-gray-800"
                           }  ml-2`}
                        />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6  text-left text-[10px]`}
                  >
                    <button onClick={() => setSortMode("Prognos 6 mån")} className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Prognos 6 mån"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        <span className="sr-only">Sortera efter prognos </span>
                        <span>6 <abbr title="månader">mån</abbr></span>
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Prognos 6 mån"
                               ? "text-blue-800"
                               : "text-gray-500"
                           }  ml-2`}
                        />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6  text-left text-[10px]`}
                  >
                    <button onClick={() => setSortMode("Prognos 12 mån")} className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Prognos 12 mån"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        <span className="sr-only">Sortera efter prognos </span>
                        <span>12 <abbr title="månader">mån</abbr></span>
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Prognos 12 mån"
                               ? "text-blue-800"
                               : "text-gray-500"
                           }  ml-2`}
                        />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6  text-left text-[10px]`}
                  >
                    <button onClick={() => setSortMode("Prognos 18 mån")} className={`flex flex-row hover:text-blue-800 ${
                     sortMode == "Prognos 18 mån"
                        ? "text-blue-800"
                        : "text-gray-500"
                    } `}>
                        <span className="sr-only">Sortera efter prognos </span>
                        <span>18 <abbr title="månader">mån</abbr></span>
                        <SortAscendingIcon
                          className={`h-5 w-5 hover:text-blue-800 ${
                            sortMode == "Prognos 18 mån"
                               ? "text-blue-800"
                               : "text-gray-500"
                           }  ml-2`}
                        />
                    </button>
                  </th>

                </tr>
                <tr>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                      Annonser data/it
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
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                        industry.trend_percentages.month_6 > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {industry.trend_percentages.month_6.toFixed(1)}%
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
                      {industry.trend_percentages.month_12.toFixed(1)}%
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
                      {industry.trend_percentages.month_18.toFixed(1)}%
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
                      {industry.prediction_percentages.month_6.toFixed(1)}%
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
                      {industry.prediction_percentages.month_12.toFixed(1)}%
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
                      {industry.prediction_percentages.month_18.toFixed(1)}%
                    </span>
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

export default CompareTable;
