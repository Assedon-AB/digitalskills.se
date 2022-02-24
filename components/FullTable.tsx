import Link from "next/link";
import { useState } from "react";
import FullTableListRow from "./FullTableListRow";
import { SortAscendingIcon } from "@heroicons/react/solid";

import { DigspecData } from "../interfaces/Digspec";

interface FullTableProps {
  data: DigspecData[];
  title: string;
  category: string;
  industry: any;
}

const FullTable = ({ data, title, category, industry }: FullTableProps) => {
  const [sortMode, setSortMode] = useState("Antal annonser");

  function sortBy(arr: any[], mode: string) {
    let preProp = "";
    var prop = "num";
    if (mode == "Antal annonser") {
      prop = "num";
      preProp = "";
    } else if (mode == "Prognos 3 mån") {
      prop = "month_3";
      preProp = "prediction_percentages";
    } else if (mode == "Prognos 6 mån") {
      preProp = "prediction_percentages";
      prop = "month_6";
    } else if (mode == "Prognos 12 mån") {
      preProp = "prediction_percentages";
      prop = "month_12";
    } else if (mode == "Trend 3 mån") {
      preProp = "trend_percentages";
      prop = "month_3";
    } else if (mode == "Trend 6 mån") {
      preProp = "trend_percentages";
      prop = "month_6";
    } else if (mode == "Trend 12 mån") {
      preProp = "trend_percentages";
      prop = "month_12";
    } else if (mode == "Namn") {
      prop = "name";
      preProp = "";
    }

    let newData = [];
    if (preProp) {
      newData = arr.sort((a, b) => {
        if (b[preProp] && a[preProp]) {
          return b[preProp][prop] - a[preProp][prop];
        } else {
          return -1;
        }
      });
    } else {
      newData = arr.sort((a, b) => b[prop] - a[prop]);
    }
    if (prop == "name") {
      newData = arr.sort((a, b) => a["name"].localeCompare(b["name"]));
    }

    return newData.map((d, index) => (
      <FullTableListRow
        key={d._id}
        data={d}
        category={category}
      ></FullTableListRow>
    ));
  }

  function setRedirect(category: string) {
    var href = "/index";
    if (category == "Topplista kompetenser") {
      href = "/kompetenser";
    } else if (category == "Topplista yrken") {
      href = "/yrken";
    }
    return (
      <Link href={href}>
        <a className="uppercase font-medium text-gray-500">se alla</a>{" "}
      </Link>
    );
  }

  return (
    <div className="flex flex-col pt-8  py-8">
      <div className="-my-2 overflow-y-hidden overflow-x-scroll sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow max-h-screen overflow-y-scroll border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col" className="bg-gray-100"></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-gray-500 uppercase bg-gray-100 tracking-wider"
                  >
                    <div className="flex flex-col ">
                      <p className="text-[10px]">Trend</p>
                    </div>
                  </th>
                  <th scope="col" className="bg-gray-100"></th>
                  <th scope="col"></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center  font-bold text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex flex-col ">
                      <p className="text-[10px]">Prognos</p>
                    </div>
                  </th>
                  <th scope="col"></th>
                  <th scope="col" className="bg-gray-100"></th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] font-medium ${
                      sortMode == "Namn" ? "text-blue-500" : "text-gray-500"
                    } uppercase tracking-wider`}
                  >
                    <button onClick={() => setSortMode("Namn")}>
                      <div className="flex flex-row">
                        {title}
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode == "Namn"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium text-gray-500 ${
                      [
                        "Trend 3 mån",
                        "Trend 6 mån",
                        "Trend 12 mån",
                        "Prognos 3 mån",
                        "Prognos 6 mån",
                        "Prognos 12 mån",
                        "Namn",
                      ].indexOf(sortMode) >= 0
                        ? "text-gray-500"
                        : "text-blue-500"
                    } uppercase tracking-wider`}
                  >
                    <button onClick={() => setSortMode("Alla annonser")}>
                      <div className="flex flex-row">
                        Annonser
                        <SortAscendingIcon
                          className={`h-5 w-5 ${
                            [
                              "Trend 3 mån",
                              "Trend 6 mån",
                              "Trend 12 mån",
                              "Prognos 3 mån",
                              "Prognos 6 mån",
                              "Prognos 12 mån",
                              "Namn",
                            ].indexOf(sortMode) >= 0
                              ? "text-gray-500"
                              : "text-blue-500"
                          }  text-gray-500 ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] bg-gray-100 font-medium text-gray-500 ${
                      sortMode == "Trend 3 mån"
                        ? "text-blue-500"
                        : "text-gray-500"
                    } uppercase tracking-wider `}
                  >
                    <button onClick={() => setSortMode("Trend 3 mån")}>
                      <div className="flex flex-row">
                        3 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 text-gray-500 ${
                            sortMode == "Trend 3 mån"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] bg-gray-100 font-medium text-gray-500 ${
                      sortMode == "Trend 6 mån"
                        ? "text-blue-500"
                        : "text-gray-500"
                    } uppercase tracking-wider `}
                  >
                    <button onClick={() => setSortMode("Trend 6 mån")}>
                      <div className="flex flex-row">
                        6 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 text-gray-500 ${
                            sortMode == "Trend 6 mån"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] bg-gray-100 font-medium text-gray-500 ${
                      sortMode == "Trend 12 mån"
                        ? "text-blue-500"
                        : "text-gray-500"
                    } uppercase tracking-wider `}
                  >
                    <button onClick={() => setSortMode("Trend 12 mån")}>
                      <div className="flex flex-row">
                        12 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 text-gray-500 ${
                            sortMode == "Trend 12 mån"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] font-medium text-gray-500 ${
                      sortMode == "Prognos 3 mån"
                        ? "text-blue-500"
                        : "text-gray-500"
                    } uppercase tracking-wider `}
                  >
                    <button onClick={() => setSortMode("Prognos 3 mån")}>
                      <div className="flex flex-row">
                        3 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 text-gray-500 ${
                            sortMode == "Prognos 3 mån"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] font-medium text-gray-500 ${
                      sortMode == "Prognos 6 mån"
                        ? "text-blue-500"
                        : "text-gray-500"
                    } uppercase tracking-wider `}
                  >
                    <button onClick={() => setSortMode("Prognos 6 mån")}>
                      <div className="flex flex-row">
                        6 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 text-gray-500 ${
                            sortMode == "Prognos 6 mån"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-[10px] font-medium text-gray-500 ${
                      sortMode == "Prognos 12 mån"
                        ? "text-blue-500"
                        : "text-gray-500"
                    } uppercase tracking-wider `}
                  >
                    <button onClick={() => setSortMode("Prognos 12 mån")}>
                      <div className="flex flex-row">
                        12 mån
                        <SortAscendingIcon
                          className={`h-5 w-5 text-gray-500 ${
                            sortMode == "Prognos 12 mån"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-[10px] bg-gray-100 font-medium text-gray-500 uppercase tracking-wider "
                  ></th>
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
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${"bg-green-100 text-green-800"}`}
                    >
                      {industry.trend_percentages.month_3.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${"bg-green-100 text-green-800"}`}
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
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${"bg-green-100 text-green-800"}`}
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
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${"bg-green-100 text-green-800"}`}
                    >
                      {industry.prediction_percentages.month_3.toFixed(1)} %
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${"bg-green-100 text-green-800"}`}
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
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${"bg-green-100 text-green-800"}`}
                    >
                      {industry.prediction_percentages.month_12.toFixed(1)} %
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
