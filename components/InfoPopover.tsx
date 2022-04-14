import { Popover } from '@headlessui/react'
import { InformationCircleIcon } from "@heroicons/react/solid";

const InfoPopover = ({title, text}: {title: string; text: string;}) => {
    return (
        <Popover className="relative">
            <Popover.Button>
                <InformationCircleIcon className="h-7 w-7 text-gray-500 ml-2" />
            </Popover.Button>
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 lg:max-w-2xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-4 bg-gray-50">
                    <a
                      href="##"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                            {title}
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        {text}
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
        </Popover>
    );
}

export default InfoPopover;
