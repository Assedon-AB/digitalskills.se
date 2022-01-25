
import { useState } from "react";

interface ToplistRowProps {
    person: {
    name: string,
      title: string,

      role: string,
 
      image: string
    };
  
  }

const ToplistRow = ({ person }: ToplistRowProps) => {
  
  return (
    <tr key={person.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                     
                      <div className="ml-0">
                        <div className="text-sm font-medium text-gray-900">{person.name}</div>

                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{person.title}</div>

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  
                
                </tr>
  );
};

export default ToplistRow;
