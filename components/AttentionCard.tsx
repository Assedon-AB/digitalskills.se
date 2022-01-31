
import {InformationCircleIcon} from '@heroicons/react/solid';



interface AttentionCardProps {
    title: string;
    description: string;
  
  }

const AttentionCard = ({ title, description}: AttentionCardProps) => {
  

  return (
    

<div className="flex flex-col p-4 bg-white shadow-md hover:shodow-lg sm:rounded-2xl">
	<div className="flex items-center justify-between">
		<div className="flex items-center">
        <InformationCircleIcon className="h-6 w-6 text-orange-500 ml-2"/>
			<div className="flex flex-col ml-3 mr-8">
				<div className="font-medium text-sm leading-none">{title}</div>
				<p className="text-xs text-gray-600 leading-none mt-1">{description}
				</p>
			</div>
		</div>
		
	</div>
</div>

  );
};

export default AttentionCard;









