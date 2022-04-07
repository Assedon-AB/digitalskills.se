import Link from "next/link";
import { useState } from "react";
import FilterDropdown from "./filterDropdown";
import ToplistRow from "./ToplistRow";
import { SortAscendingIcon } from "@heroicons/react/solid";

import { DigspecData, IndustryData } from "../interfaces/Digspec";
interface ToplistProps {
  data: DigspecData[];
  title: string;
  category: string;
  industry: IndustryData;
}

const Toplist = ({ data, title, category, industry }: ToplistProps) => {
  const [sortMode, setSortMode] = useState("Antal annonser");
  const [showMode, setShowMode] = useState("Trend 18 mån");

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const changeData = (arg: string) => {
    setShowMode(arg);
    setSortMode("Antal annonser");
  };
  function getShownBranschData() {
    var showData = industry.prediction_percentages.month_6;
    switch (showMode) {
      case "Prognos 6 mån": {
        showData = industry.prediction_percentages.month_6;
        break;
      }
      case "Prognos 12 mån": {
        showData = industry.prediction_percentages.month_12;
        break;
      }
      case "Prognos 18 mån": {
        showData = industry.prediction_percentages.month_18;
        break;
      }
      case "Trend 6 mån": {
        showData = industry.trend_percentages.month_6;
        break;
      }
      case "Trend 12 mån": {
        showData = industry.trend_percentages.month_12;
        break;
      }
      case "Trend 18 mån": {
        showData = industry.trend_percentages.month_18;
        break;
      }
    }
    return showData;
  }

  function sortBy(arr: DigspecData[], mode: string, showWhat: string) {
    var preProp: string = "";
    var prop = "num";
    var show = "forecast3";
    var filteredList: {
      name: string;
      num: number;
      data: number;
      id: string;
    }[] = [];
    if (mode == "Antal annonser") {
      preProp = "";
      prop = "num";
    } else if (mode == "Prognos 6 mån") {
      preProp = "prediction_percentages";
      prop = "month_6";
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

    if (showWhat == "Prognos 6 mån") {
      show = "month_6";
    } else if (showWhat == "Prognos 12 mån") {
      show = "month_12";
    } else if (showWhat == "Prognos 18 mån") {
      show = "month_18";
    } else if (showWhat == "Trend 6 mån") {
      show = "month_6";
    } else if (showWhat == "Trend 12 mån") {
      show = "month_12";
    } else if (showWhat == "Trend 18 mån") {
      show = "month_18";
    }
    let newData = [];
    if (preProp) {
        newData = arr.sort((a: any, b: any) => b[preProp][prop] - a[preProp][prop]);
    } else {
        newData = arr.sort((a: any, b: any) => b[prop] - a[prop]);
    }

    if (prop == "name") {
      newData = arr.sort((a, b) => a["name"].localeCompare(b["name"]));
    }
    for (const index in newData) {
      filteredList.push({
        id: arr[index]["_id"],
        name: arr[index]["name"],
        num: arr[index]["num"],
        data: arr[index][
          showWhat.includes("Prognos")
            ? "prediction_percentages"
            : "trend_percentages"
        ][show],
      });
    }

    return filteredList
      .slice(0, 15) // To only show top 15
      .map((dataObject, index) => (
        <ToplistRow
          key={dataObject.id}
          dataObject={dataObject}
          show={showMode}
          category={category}
        ></ToplistRow>
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
          <a tabIndex={0} className="uppercase font-medium text-gray-500 focus:ring hover:text-blue-800">se alla</a>
      </Link>
    );
  }

  return (
    <div className="flex flex-col pt-8 xl:px-4 py-8">
      <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    {category}
                  </th>
                  <div
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></div>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <FilterDropdown
                      initMode="Trend 18 mån"
                      updateShow={changeData}
                    ></FilterDropdown>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className={classNames(
                      sortMode == "Namn" ? "text-blue-800" : "text-gray-500",
                      "py-3 px-6 text-left text-[10px] font-medium uppercase tracking-wider"
                    )}
                  >
                    <button onClick={() => setSortMode("Namn")}>
                      <div className="flex flex-row">
                        {title}
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
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
                    className={classNames(
                      sortMode != showMode && sortMode != "Namn"
                        ? "text-blue-800"
                        : "text-gray-500",
                      "py-3 px-6 text-left text-[10px] font-medium uppercase tracking-wider"
                    )}
                  >
                    <button onClick={() => setSortMode("Alla annonser")}>
                      <div className="flex flex-row">
                        Annonser
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode != showMode && sortMode != "Namn"
                              ? "text-blue-800"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium ${
                      sortMode == showMode ? "text-blue-800" : "text-gray-500"
                    } uppercase tracking-wider`}
                  >
                    <button onClick={() => setSortMode(showMode)}>
                      <div className="flex flex-row">
                        {showMode}
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode == showMode
                              ? "text-blue-800"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                    </button>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium 
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    Branschen
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium 
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    {industry.num}
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium 
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                    <span
                      className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                        getShownBranschData() > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {getShownBranschData().toFixed(1) + " %"}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortBy(data, sortMode, showMode)}
                  <tr className="bg-gray-50">
                    <td></td>
                    <td className="px-6 py-4">
                      {setRedirect(category)}
                    </td>
                    <td></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toplist;
