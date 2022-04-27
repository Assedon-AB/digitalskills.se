import { Popover } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/solid";

const InfoPopover = ({
	title,
	text,
	isSmall,
	customTranslate,
}: {
	title: string;
	text: string;
	isSmall?: boolean;
	customTranslate?: string;
}) => {
	return (
		<Popover className="relative">
			<Popover.Button
				className="flex items-center"
				aria-label={"Mer information om: " + title}
			>
				{isSmall ? (
					<InformationCircleIcon className="h-5 w-5 text-gray-500 ml-2" />
				) : (
					<InformationCircleIcon className="h-7 w-7 text-gray-500 ml-2" />
				)}
			</Popover.Button>
			<Popover.Panel
				className={`absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 transform left-1/2 ${
					isSmall ? "lg:max-w-sm" : "lg:max-w-2xl"
				} ${customTranslate ? customTranslate : "-translate-x-1/2"}`}
			>
				<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
					<div className="p-4 bg-gray-50">
						<a
							href="##"
							className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 text-left"
						>
							<span className="flex items-center">
								<span className="text-sm font-medium text-gray-900">
									{title}
								</span>
							</span>
							<span className="text-sm font-normal text-gray-500 flex">
								{text}
							</span>
						</a>
					</div>
				</div>
			</Popover.Panel>
		</Popover>
	);
};

export default InfoPopover;
