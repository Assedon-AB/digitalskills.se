
import { useState } from "react";

interface ToplistRowProps {
  dataObject: {
    name: string,
      num: number,

      forecast: number,
 
      
    };
  
  }

const ToplistRow = ({ dataObject }: ToplistRowProps) => {
  
  return (
    <tr key={dataObject.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                     
                      <div className="ml-0">
                        <div className="text-sm font-medium text-gray-900">{dataObject.name}</div>

                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{dataObject.num}</div>

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${dataObject.forecast > dataObject.num ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {dataObject.forecast}
                    </span>
                  </td>
                  
                
                </tr>
  );
};

export default ToplistRow;
