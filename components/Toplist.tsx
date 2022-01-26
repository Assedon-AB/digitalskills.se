
import { useState } from "react";
import FilterDropdown from "./filterDropdown";
import ToplistRow from "./ToplistRow";

interface ToplistProps {
    data: {
    name: string,
      num: number,
      forecast: number,
    }[];
    title: string,
    category: string,
  
  }

const Toplist = ({ data, title , category}: ToplistProps) => {
  
  return (
    <div className="flex flex-col pt-8">
    <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
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
                >
                 
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                 <FilterDropdown chosenMode="Antal annonser"></FilterDropdown>
                </th>
                
                
              </tr>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {title}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Antal annonser
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Prognos 3 mån
                </th>
                
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((dataObject) => (
                <ToplistRow dataObject={dataObject}></ToplistRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Toplist;
