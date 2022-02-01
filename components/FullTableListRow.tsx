
import { useState } from "react";

interface FullTableListRowProps {
  dataObject: {
    name: string,
      num: number,

      forecast: number,
      trend: number,
 
      
    };


  
  }

const FullTableListRow = ({ dataObject }: FullTableListRowProps) => {

  return (
    <tr key={dataObject.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                     
                      <div className="ml-0">
                        <div className="text-xs font-medium text-gray-900">{dataObject.name}</div>

                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-xs text-gray-900">{dataObject.num}</div>

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
               
                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${dataObject.trend > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {`${dataObject.trend} %`} 
                  </span>
                  
                   
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                   
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${dataObject.forecast > dataObject.num ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {dataObject.forecast}
                    </span> 
                  
                   
                   </td>
                   <td className="px-6 py-4 whitespace-nowrap">
                  <button>
                  <span className={`px-2 inline-flex leading-5 text-[10px] font-medium text-gray-500 uppercase}`}>
                      SE MER
                    </span> </button> 
                  
                   
                   </td>
                  
                
                </tr>
  );
};

export default FullTableListRow;
