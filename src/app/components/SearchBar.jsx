import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 pl-2 pr-5">
      <button
        type="button"
        aria-label="Search"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral text-white"
      >
        <IoSearch className="h-6 w-6 scale-x-[-1]" />{" "}
      </button>

      <input
        type="search"
        placeholder="Search breeds..."
        className="flex-1 min-w-0 h-12 rounded-full border border-gray-300 px-4 outline-none"
      />
    </div>
  );
};

export default SearchBar;
