import Link from "next/link";

interface ToplistRowProps {
  dataObject: {
    _id: string;
    name: string;
    num: number;

    data: number;
  };
  category: string;
  show: string;
}

const ToplistRow = ({ dataObject, show, category }: ToplistRowProps) => {
  const setRedirect = (dataName: string,dataId: string, cat: string) => {
    var retStr = "/index"
    if (category == "Topplista kompetenser") {
      retStr = `/kompetenser/${dataName}-${dataId}`
    }
    else if(category == "Topplista yrken") {
      retStr = `/yrken/${dataName}-${dataId}`
    }
    return retStr;
  }
  
  
  return (
    
    
      <Link href={setRedirect(dataObject.name, dataObject._id, category)}>
    <tr key={dataObject.name}>
       
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-0">
            <div className="text-xs font-medium text-gray-900 capitalize">
              {dataObject.name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xs text-gray-900">{dataObject.num}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {show.includes("Trend") ? (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              dataObject.data > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {`${dataObject.data.toFixed(1)} %`}
          </span>
        ) : (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              dataObject.data > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {dataObject.data.toFixed(1)}%
          </span>
        )}
      </td>
 
    </tr>
    </Link>
  );
};

export default ToplistRow;
