interface NavbarSearchProps {
    placeholder: string;
  }
  
  export default function NavbarSearch({ placeholder }: NavbarSearchProps) {
    return (
        <div className="relative mx-auto text-gray-600 lg:block hidden">
         <input type="text" id="email-adress-icon" className="block p-1 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:border-[#C1531B]" placeholder="Sök..."/>
    </div>
    );
  }
  