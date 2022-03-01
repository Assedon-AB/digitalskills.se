export default function NavbarSearch() {
  return (
    <form className="relative mx-auto text-gray-600" method="GET" action="/sok">
      <input
        type="text"
        className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 sm:text-xs focus:outline-none focus:border-[#C1531B]"
        placeholder="Sök..."
        autoComplete="skillsAndOccupations"
        name="q"
      />
    </form>
  );
}
