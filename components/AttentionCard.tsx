import { InformationCircleIcon } from "@heroicons/react/solid";



const AttentionCard = () => {
  return (
    <div className="flex flex-col p-4 bg-white shadow  sm:rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <InformationCircleIcon className="h-6 w-6 text-gray-500 ml-2" />
          <div className="flex flex-col ml-3 mr-8">
            <div className="font-medium text-sm leading-none">Hämtad senast</div>
            <p className="text-xs text-gray-600 leading-none   mt-1">
            Datan hämtades senast 2022-01-01 och sträcker sig till 2021-12-31.
            </p>
            <div className="font-medium text-sm leading-none pt-4">Vad menas med trend?</div>
            <p className="text-xs text-gray-600 leading-none mt-1">
            Trenden räknas fram genom att jämföra senast uppmätta månadsvärde historiskt över trendperioderna.
            </p>
            <div className="font-medium text-sm leading-none pt-4">Vad menas med prognos?</div>
            <p className="text-xs text-gray-600 leading-none mt-1">
            Prognosen görs med hjälp av exponentiell utjämning över prognosperioderna framåt sett från senast uppmätta månadsvärde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttentionCard;
