import Link from "next/link";
import { useState } from "react";
import FilterDropdown from "./filterDropdown";
import ToplistRow from "./ToplistRow";
import { SortAscendingIcon } from "@heroicons/react/solid";

interface ToplistProps {
  data: {
    name: string;
    num: number;
    forecast3: number;
    forecast6: number;
    forecast12: number;
    trend3: number;
    trend6: number;
    trend12: number;
  }[];
  title: string;
  category: string;
}

const Toplist = ({ data, title, category }: ToplistProps) => {
  const [sortMode, setSortMode] = useState("Antal annonser");
  const [showMode, setShowMode] = useState("Prognos 3 mån");

  const branschData = {name: 'Branschen', numAds: "2798", forecast3: "2893", forecast6: "3060", forecast12: "3200", trend3:"32%",trend6: "64%",trend12: "92%"}

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const changeData = (arg: string) => {
    setShowMode(arg);
    setSortMode("Antal annonser");
  };
  function getShownBranschData() {
    var showData = branschData.forecast3
    switch(showMode) { 
      case "Prognos 3 mån": { 
        showData = branschData.forecast3
         break; 
      } 
      case "Prognos 6 mån": { 
        showData = branschData.forecast6
         break; 
      }
      case "Prognos 12 mån": { 
        showData = branschData.forecast12
        break; 
     } 
     case "Trend 3 mån": { 
      showData = branschData.trend3
      break; 
      } 
      case "Trend 6 mån": { 
        showData = branschData.trend6
        break; 
      } 
      case "Trend 12 mån": { 
        showData = branschData.trend12
        break; 
      } 
      
   } 
    return showData
  }

  function sortBy(arr: any[], mode: string, showWhat: string) {
    var prop = "num";
    var show = "forecast3";
    var filteredList: { name: string; num: number; data: number }[] = [];
    if (mode == "Antal annonser") {
      prop = "num";
    } else if (mode == "Prognos 3 mån") {
      prop = "forecast3";
    } else if (mode == "Prognos 6 mån") {
      prop = "forecast6";
    } else if (mode == "Prognos 12 mån") {
      prop = "forecast12";
    } else if (mode == "Trend 3 mån") {
      prop = "trend3";
    } else if (mode == "Trend 6 mån") {
      prop = "trend6";
    } else if (mode == "Trend 12 mån") {
      prop = "trend12";
    }
    else if (mode == "Namn") {
      
      prop = "name"
    }

    if (showWhat == "Prognos 3 mån") {
      show = "forecast3";
    } else if (showWhat == "Prognos 6 mån") {
      show = "forecast6";
    } else if (showWhat == "Prognos 12 mån") {
      show = "forecast12";
    } else if (showWhat == "Trend 3 mån") {
      show = "trend3";
    } else if (showWhat == "Trend 6 mån") {
      show = "trend6";
    } else if (showWhat == "Trend 12 mån") {
      show = "trend12";
    }
    console.log(prop)
    console.log(arr)
    data = arr.sort((a, b) => b[prop] - a[prop]);
    if (prop == "name") {
      data = arr.sort((a, b) => a['name'].localeCompare(b['name']));
    }
    console.log(data)
    for (const index in data) {
      filteredList.push({
        name: arr[index]["name"],
        num: arr[index]["num"],
        data: arr[index][show],
      });
    }

    return filteredList.map((dataObject, index) => (
      <ToplistRow
        key={"toplist-row-" + index}
        dataObject={dataObject}
        show={showMode}
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
        <a className="uppercase font-medium text-gray-500">se alla</a>
      </Link>
    );
  }

  return (
    <div className="flex flex-col pt-8 xl:px-4 py-8">
      <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    {category}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <FilterDropdown
                      initMode="Prognos 3 mån"
                      updateShow={changeData}
                    ></FilterDropdown>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className={classNames(
                      sortMode == "Namn" ? "text-blue-500" : "text-gray-500",
                      "py-3 px-6 text-left text-[10px] font-medium uppercase tracking-wider"
                    )}
                  >
                  
                   
                    <button onClick={() => setSortMode("Namn")}>
                    <div className="flex flex-row">
                    {title}
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode == "Namn"
                              ? "text-[#3A8DDE]"
                              : "text-gray-500"
                          } ml-2`}
                        />
                      </div>
                      </button>
                  </th>
                  <th
                    scope="col"
                    className={classNames(
                      sortMode != showMode && sortMode != "Namn" ? "text-blue-500" : "text-gray-500",
                      "py-3 px-6 text-left text-[10px] font-medium uppercase tracking-wider"
                    )}
                  >
                      <button onClick={() => setSortMode("Alla annonser")}>
                    <div className="flex flex-row">
                      Annonser
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode != showMode && sortMode != "Namn"
                              ? "text-[#3A8DDE]"
                              : "text-gray-500"
                          } ml-2`}
                        />
                    </div>
                      </button>
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium ${
                      sortMode == showMode ? "text-[#3A8DDE]" : "text-gray-500"
                    } uppercase tracking-wider`}
                  >
                      <button onClick={() => setSortMode(showMode)}>
                    <div className="flex flex-row">
                      {showMode}
                        <SortAscendingIcon
                          className={`h-5 w-5  ${
                            sortMode == showMode
                              ? "text-blue-500"
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
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                  {branschData.name}
                
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                  >
                   {branschData.numAds}
                  </th>
                  <th
                    scope="col"
                    className={`py-3 px-6 text-left text-[10px] font-medium "text-gray-500"
                    uppercase tracking-wider bg-[#3A8DDE]/25`}
                    
                  >
                    <span className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                       "bg-green-100 text-green-800"
                       
                    }`}>
                      {getShownBranschData()}
                    </span>
                     
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortBy(data, sortMode, showMode)}
              </tbody>
              <tr className="bg-gray-50">
                <td></td>
                <td className="px-6 py-4">{setRedirect(category)}</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toplist;
