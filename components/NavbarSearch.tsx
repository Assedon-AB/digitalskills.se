export default function NavbarSearch() {
  return (
    <form
      className="relative mx-auto flex"
      method="GET"
      action="/sok"
      role="search"
    >
      <input
        type="search"
        className="block p-2 pl-4 md:w-3/5 md:w-full text-gray-900 rounded-l-md border border-gray-300 sm:text-xs focus:outline-none focus:border-[#004A98]"
        placeholder="Sök efter kompetenser och yrken"
        autoComplete="skillsAndOccupations"
        aria-label="Sök efter kompetenser och yrken"
        name="q"
      />
      <button className="bg-[#004A98] font-bold text-white p-2 rounded-r-md" aria-label="Sök">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
}
