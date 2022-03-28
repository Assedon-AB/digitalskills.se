import { InformationCircleIcon } from "@heroicons/react/solid";



const CompareMissingInfo = ({ category }: { category: string; }) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow  sm:rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <InformationCircleIcon className="h-6 w-6 text-gray-500 ml-2" />
          <div className="flex flex-col ml-3 mr-8">
            <div className="font-medium text-sm leading-none">{`Välj ${category} att jämföra`}</div>
            <p className="text-xs text-gray-600 leading-none   mt-1">
            {`Klicka i de ${category} som du vill jämföra.`}
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareMissingInfo;
