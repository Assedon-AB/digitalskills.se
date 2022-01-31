
import { useState } from "react";

interface ToplistRowProps {
  dataObject: {
    name: string,
      num: number,

      data: number,
 
      
    };
    show: string;

  
  }

const ToplistRow = ({ dataObject , show}: ToplistRowProps) => {
  console.log(dataObject)
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
                    {
                    show == "Trend 12 mån" ?  
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${dataObject.data > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {`${dataObject.data} %`} 
                  </span> :
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${dataObject.data > dataObject.num ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {dataObject.data}
                    </span> 
                     }
                   
                  </td>
                  
                
                </tr>
  );
};

export default ToplistRow;
