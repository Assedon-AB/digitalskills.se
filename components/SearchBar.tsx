export default function SearchBar() {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Sök kompetens"
        className="px-4 py-2 border rounded-l-md flex-grow"
      />
      <button className="bg-blue-600 font-bold text-white p-4 rounded-r-md">
        Sök
      </button>
    </div>
  );
}
