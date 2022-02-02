interface FullTableListRowProps {
  dataObject: {
    name: string;
    num: number;
    organisations_num: number;
  };
}

const FullTableListRow = ({ dataObject }: FullTableListRowProps) => {
  return (
    <tr key={dataObject.name}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-0">
            <div className="text-xs font-medium text-gray-900">
              {dataObject.name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xs text-gray-900">{dataObject.num}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xs text-gray-900">
          {dataObject.organisations_num}
        </div>
      </td>
    </tr>
  );
};

export default FullTableListRow;
