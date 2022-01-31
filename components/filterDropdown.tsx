
import { useEffect, useState } from "react";
import ToplistRow from "./ToplistRow";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface FilterDropdownProps {
   
    initMode: string,
    updateShow: Function,
  
  }

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

 
const FilterDropdown = ({ initMode, updateShow }: FilterDropdownProps) => {
  const [mode, setMode] = useState(initMode);


  const modes = ['Prognos 12 mån', 'Trend 12 mån']
  
  
  useEffect(() => {
    updateShow(mode);
  }, [mode]);

  
  return (
    <Menu as="div" className="relative inline-block text-left w-40 ">
    <div>
      <Menu.Button className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        {mode}
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 " aria-hidden="true" />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {modes.map((mode) => (
            <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setMode(mode)}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-xs w-full text-left'
                )}
              >
                {mode}
              </button>
            )}
          </Menu.Item>
          ))}
        
    
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  );
};

export default FilterDropdown;
