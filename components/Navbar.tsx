import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import NavbarSearch from "./NavbarSearch";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

    const close = () => {
        setVisible(false);
    }

  return (
    <nav className="p-4 max-w-6xl mx-auto flex items-center">
        <p
          className="text-2xl block min-w-max"
        > {"digitalskills.se"}
        </p>
      <button
        className="md:hidden fixed top-4 right-4 z-50"
        aria-label="Visa navigations meny"
        aria-expanded={visible ? "false" : "true"}
        tabIndex={0}
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
          className={`md:ml-8 p-8 pt-24 md:p-0 space-y-4 transition duration-400 min-h-screen bg-white fixed left-0 md:left-auto md:top-auto md:bottom-auto top-0 bottom-0 md:relative md:min-h-0 md:bg-transparent w-full md:flex md:items-center md:space-x-8 md:space-y-0 z-40
          ${
            visible
              ? "translate-x-0 md:translate-x-0"
              : "translate-x-full md:translate-x-0"
          } duration-500 transition ease-in-out`}
      >
        <li
          className="focus:outline-none focus:ring focus:ring-violet-300"
        >
          <Link href="/">
            <a
              tabIndex={0}
              className={`pb-2 hover:text-[#004A98] font-medium text-sm ${
                router.pathname === "/" ? "border-b-2 border-[#004A98] text-[#004A98]" : ""
              }`}
              onClick={close}
            >
              Hem
            </a>
          </Link>
        </li>
        <li
          className="focus:outline-none focus:ring focus:ring-violet-300"
        >
          <Link href="/kompetenser">
            <a
              tabIndex={0}
              className={`pb-2 hover:text-[#004A98] font-medium text-sm ${
                router.pathname.includes("kompetenser")
                  ? "border-b-2 border-[#004A98] text-[#004A98]"
                  : ""
              }`}
              onClick={close}
            >
              Kompetenser
            </a>
          </Link>
        </li>
        <li
          className="focus:outline-none focus:ring focus:ring-violet-300"
        >
          <Link href="/yrken">
            <a
              tabIndex={0}
              className={`pb-2 hover:text-[#004A98] font-medium text-sm ${
                router.pathname.includes("yrken")
                  ? "border-b-2 border-[#004A98] text-[#004A98]"
                  : ""
              }`}
              onClick={close}
            >
              Yrken
            </a>
          </Link>
        </li>

        <li
          className="focus:outline-none focus:ring focus:ring-violet-300 flex-grow"
        >
          <Link href="/om-digitalskills">
            <a
              tabIndex={0}
              className={`pb-2 hover:text-[#004A98] font-medium text-sm ${
                router.pathname.includes("om-digitalskills")
                  ? "border-b-2 border-[#004A98] text-[#004A98]"
                  : ""
              }`}
              onClick={close}
            >
              Om digitalskills.se
            </a>
          </Link>
        </li>
        {!router.pathname.includes("sok") ? (
          <li className="">
            <NavbarSearch />
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
