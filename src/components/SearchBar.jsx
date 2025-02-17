import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-[700px] max-w-full">
      {" "}
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={22}
      />
      <input
        type="search"
        placeholder="Search APIs..."
        className="w-full pl-12 pr-4 py-3 border border-black  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
      />
    </div>
  );
};

export default SearchBar;
