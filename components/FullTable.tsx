
import { reverse } from "dns";
import Link from "next/link";
import { useState } from "react";
import { setEnvironmentData } from "worker_threads";
import FilterDropdown from "./filterDropdown";
import FullTableListRow from "./FullTableListRow";
import {SortAscendingIcon} from '@heroicons/react/solid';

interface FullTableProps {
    data: {
    name: string,
      num: number,
      forecast: number,
      trend: number
    }[];
    title: string,
    category: string,
  
  }

const FullTable = ({ data, title , category}: FullTableProps) => {
  const [sortMode, setSortMode] = useState('Antal annonser')

  
  const changeData = (arg: string) => {
   
    setSortMode('Antal annonser')
  };
  
  function sortBy(arr: any[], mode: string) {
    var prop = 'num'
    if(mode == "Antal annonser") {prop = 'num'}
    else if(mode == "Prognos 12 mån") {prop = "forecast"}
    else if(mode == "Trend 12 mån") {prop = "trend"}
    
    data = arr.sort((a, b) => b[prop] - a[prop]);
    
    

    return data.map((dataObject) => (
      <FullTableListRow dataObject={dataObject} ></FullTableListRow>
    ));
  }

  function setRedirect(category: string) {
    var href = "/index"
    if(category == "Topplista kompetenser") {href = "/kompetenser"}
    else if(category == "Topplista yrken") {href ="/yrken"}
    return <Link href={href}>
    <a className="uppercase font-medium text-gray-500">se alla</a>
  </Link>
  }

  return (
    <div className="flex flex-col pt-8  py-8" >
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
                  className="py-3 px-6 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex flex-row">
                  Annonser
                  <button onClick={()=> setSortMode("Alla annonser")}><SortAscendingIcon className="h-5 w-5 text-gray-500 ml-2"/></button>
                 </div>
                  
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider "
                >
                  <div className="flex flex-row">Trend 12 mån
                  <button onClick={()=> setSortMode("Trend 12 mån")}><SortAscendingIcon className="h-5 w-5 text-gray-500 ml-2"/></button></div>
                  
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider "
                >
                  <div className="flex flex-row">Prognos 12 mån
                  <button onClick={()=> setSortMode("Prognos 12 mån")}><SortAscendingIcon className="h-5 w-5 text-gray-500 ml-2"/></button></div>
                  
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider "
                >
                
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

export default FullTable;
