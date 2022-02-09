import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

interface FullTableListRowProps {
  dataObject: {
    name: string;
    num: number;
    organisations_num: number;
    details: {antal: number, organisation: string}[];
  };
  updateShow: Function;
  incomingMode: string;
}

const FullTableListRow = ({ incomingMode, dataObject, updateShow }: FullTableListRowProps) => {
  const [mode, setMode] = useState(incomingMode);

  useEffect(() => {
    updateShow(mode);
  }, [mode]);

  return (
    
    <tr key={dataObject.name} onClick={() => {mode == dataObject.name ? setMode(""): setMode(dataObject.name)}}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-0">
            <div className="text-xs font-medium text-gray-900 flex flex-col ">
              {mode == dataObject.name ? 
              <div className="font-bold">{dataObject.name}</div>
              :  <div className="font-medium">{dataObject.name}</div>}
              {mode == dataObject.name ? 
              dataObject.details.map((detailObject, index) => (
              <div className="text-transparent">{"empty"}</div>
              )): null}
         
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xs text-gray-900 flex flex-col">
        {mode == dataObject.name ? 
              <div className="font-bold">{dataObject.num}</div>
              :  <div>{dataObject.num}</div>}
        {mode == dataObject.name ? 
              dataObject.details.map((detailObject, index) => (
              <div>{detailObject.antal}</div>
              )): null}
   
         
         
        </div>
        
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-xs text-gray-900 flex flex-col">
      {mode == dataObject.name ? 
              <div className="font-bold">{dataObject.organisations_num}</div>
              :  <div>{dataObject.organisations_num}</div>}
        {mode == dataObject.name ? 
              dataObject.details.map((detailObject, index) => (
              <div>{detailObject.organisation}</div>
              )): null}
          

        </div>
     
      </td>
      <td>
      <div className="text-gray-900 flex flex-col">
        {mode == dataObject.name ? <ChevronUpIcon className="mr-1 ml-2 h-5 w-5 stroke-gray-300" aria-hidden="true" /> : <ChevronDownIcon className="mr-1 ml-2 h-5 w-5 stroke-gray-300" aria-hidden="true" />}
       
        
        </div>
        </td>
    </tr>
  );
};

export default FullTableListRow;
