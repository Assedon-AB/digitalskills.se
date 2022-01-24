import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="p-4 max-w-6xl mx-auto flex items-end">
      <Link href="/">
        <a className="text-2xl block">Digispec</a>
      </Link>
      <button
        className="md:hidden fixed top-4 right-4 z-50"
        onClick={() => setVisible(!visible)}
      >
        <svg viewBox="0 0 100 80" width="40" height="50">
          <g>
            <rect
              rx="8"
              width="80"
              height="10"
              className={`${
                visible
                  ? "rotate-45 -translate-y-2.5 -translate-x-2"
                  : "rotate-0"
              } origin-[0%_50%] transition duration-600 ease-in-out`}
            ></rect>
            <rect
              rx="8"
              y="25"
              width="80"
              height="10"
              className={`${
                visible ? "translate-x-full opacity-0" : "rotate-0 opacity-1"
              } transition duration-600 ease-in-out`}
            ></rect>
            <rect
              rx="8"
              y="50"
              width="80"
              height="10"
              className={`${
                visible
                  ? "-rotate-45 translate-y-2.5 translate-x-2"
                  : "rotate-0"
              } origin-[0%_50%] transition duration-600 ease-in-out`}
            ></rect>
          </g>
        </svg>
      </button>
      <ul
        className={`md:ml-8 p-8 pt-24 md:p-0 space-y-4 transition duration-400 min-h-screen bg-white fixed left-0 md:left-auto md:top-auto md:bottom-auto top-0 bottom-0 md:relative md:min-h-0 md:w-auto md:bg-transparent w-full md:flex md:space-x-8 md:space-y-0 z-40
          ${
            visible
              ? "translate-x-0 md:translate-x-0"
              : "translate-x-full md:translate-x-0"
          } duration-500 transition ease-in-out`}
      >
        <li>
          <Link href="/om-digspec">
            <a className="hover:text-blue-500">Om Digspec</a>
          </Link>
        </li>
        <li>
          <Link href="/kompetenser">
            <a className="hover:text-blue-500">Kompetenser</a>
          </Link>
        </li>
        <li>
          <Link href="/yrken">
            <a className="hover:text-blue-500">Yrken</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
