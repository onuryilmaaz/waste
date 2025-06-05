// FilterAndSearch.tsx
import React from "react";

interface FilterAndSearchProps {
  onSearchChange: (query: string) => void;
  onHeavyWasteFilterChange: (value: boolean | null) => void;
  onRoadAllowedFilterChange: (value: boolean | null) => void;
  searchQuery: string;
  heavyWasteFilter: boolean | null;
  roadAllowedFilter: boolean | null;
}

const FilterAndSearch: React.FC<FilterAndSearchProps> = ({
  onSearchChange,
  onHeavyWasteFilterChange,
  onRoadAllowedFilterChange,
  searchQuery,
  heavyWasteFilter,
  roadAllowedFilter,
}) => {
  return (
    <div className="bg-black p-6 rounded-2xl shadow-lg mb-10 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Search Input */}
        <div className="md:col-span-1">
          <label
            htmlFor="search"
            className="block text-white text-sm font-semibold mb-2"
          >
            Search Skip
          </label>
          <input
            type="text"
            id="search"
            placeholder="e.g., 4 yard, heavy waste"
            className="w-full p-3 rounded-xl bg-black text-white border border-white focus:outline-none focus:border-blue-500 transition duration-300"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Heavy Waste Filter */}
        <div className="md:col-span-1">
          <label
            htmlFor="heavyWaste"
            className="block text-white text-sm font-semibold mb-2"
          >
            Heavy Waste
          </label>
          <select
            id="heavyWaste"
            className="w-full p-3 rounded-xl bg-black text-white border border-white focus:outline-none focus:border-blue-500 transition duration-300"
            value={
              heavyWasteFilter === true
                ? "true"
                : heavyWasteFilter === false
                ? "false"
                : "null"
            }
            onChange={(e) => {
              const value = e.target.value;
              onHeavyWasteFilterChange(
                value === "true" ? true : value === "false" ? false : null
              );
            }}
          >
            <option value="null">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Allowed On Road Filter */}
        <div className="md:col-span-1">
          <label
            htmlFor="roadAllowed"
            className="block text-white text-sm font-semibold mb-2"
          >
            Allowed On Road
          </label>
          <select
            id="roadAllowed"
            className="w-full p-3 rounded-xl bg-black text-white border border-white focus:outline-none focus:border-blue-500 transition duration-300"
            value={
              roadAllowedFilter === true
                ? "true"
                : roadAllowedFilter === false
                ? "false"
                : "null"
            }
            onChange={(e) => {
              const value = e.target.value;
              onRoadAllowedFilterChange(
                value === "true" ? true : value === "false" ? false : null
              );
            }}
          >
            <option value="null">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearch;
