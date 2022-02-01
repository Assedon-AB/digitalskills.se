interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border rounded-l-md flex-grow"
      />
      <button className="bg-blue-800 font-bold text-white p-4 rounded-r-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
    </div>
  );
}
