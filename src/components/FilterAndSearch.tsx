import React, { useState } from "react";
import {
  Search,
  Package,
  DollarSign,
  Ruler,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";

interface FilterAndSearchProps {
  onSearchChange: (query: string) => void;
  onHeavyWasteFilterChange: (value: boolean | null) => void;
  onRoadAllowedFilterChange: (value: boolean | null) => void;
  onMinPriceChange: (value: number | null) => void;
  onMaxPriceChange: (value: number | null) => void;
  onMinYardChange: (value: number | null) => void;
  onMaxYardChange: (value: number | null) => void;
  searchQuery: string;
  heavyWasteFilter: boolean | null;
  roadAllowedFilter: boolean | null;
  minPrice: number | null;
  maxPrice: number | null;
  minYard: number | null;
  maxYard: number | null;
}

const FilterAndSearch: React.FC<FilterAndSearchProps> = ({
  onHeavyWasteFilterChange,
  onRoadAllowedFilterChange,
  onMinPriceChange,
  onMaxPriceChange,
  onMinYardChange,
  onMaxYardChange,
  heavyWasteFilter,
  roadAllowedFilter,
  minPrice,
  maxPrice,
  minYard,
  maxYard,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mb-8 mx-auto max-w-4xl overflow-hidden">
      {/* Header */}
      <button
        className="w-full flex justify-between items-center px-8 py-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center">
            <Search className="text-blue-600" size={20} />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Filter & Search
          </h2>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-gray-400 w-5 h-5 transition-transform duration-200" />
        ) : (
          <ChevronDown className="text-gray-400 w-5 h-5 transition-transform duration-200" />
        )}
      </button>

      {/* Content */}
      <div
        className={`transition-all duration-300 ease-out ${
          isExpanded
            ? "max-h-screen opacity-100 pb-8"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Heavy Waste Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Package size={16} className="text-gray-500" />
                Heavy Waste
              </div>
              <div className="flex bg-gray-100 rounded-xl p-1">
                {[
                  { label: "All", value: null },
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ].map((option) => (
                  <button
                    key={option.label}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      heavyWasteFilter === option.value
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => onHeavyWasteFilterChange(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Road Allowed Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Star size={16} className="text-gray-500" />
                Allowed On Road
              </div>
              <div className="flex bg-gray-100 rounded-xl p-1">
                {[
                  { label: "All", value: null },
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ].map((option) => (
                  <button
                    key={option.label}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      roadAllowedFilter === option.value
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => onRoadAllowedFilterChange(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <DollarSign size={16} className="text-gray-500" />
                Price Range
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 outline-0"
                  value={minPrice !== null ? minPrice : ""}
                  onChange={(e) =>
                    onMinPriceChange(
                      e.target.value ? parseFloat(e.target.value) : null
                    )
                  }
                />
                <div className="w-3 h-px bg-gray-300"></div>
                <input
                  type="number"
                  placeholder="Max"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 outline-0"
                  value={maxPrice !== null ? maxPrice : ""}
                  onChange={(e) =>
                    onMaxPriceChange(
                      e.target.value ? parseFloat(e.target.value) : null
                    )
                  }
                />
              </div>
            </div>

            {/* Yard Size Range */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Ruler size={16} className="text-gray-500" />
                Yard Size Range
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 outline-0"
                  value={minYard !== null ? minYard : ""}
                  onChange={(e) =>
                    onMinYardChange(
                      e.target.value ? parseFloat(e.target.value) : null
                    )
                  }
                />
                <div className="w-3 h-px bg-gray-300"></div>
                <input
                  type="number"
                  placeholder="Max"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200 outline-0"
                  value={maxYard !== null ? maxYard : ""}
                  onChange={(e) =>
                    onMaxYardChange(
                      e.target.value ? parseFloat(e.target.value) : null
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearch;
