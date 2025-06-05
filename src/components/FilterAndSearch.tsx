import React, { useState } from "react";
import {
  Package,
  DollarSign,
  Ruler,
  ChevronDown,
  ChevronUp,
  Star,
  Filter,
  Sparkles,
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 mb-12 mx-auto max-w-6xl overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/50 to-gray-100/50"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-100/20 to-gray-50/20 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100/20 to-gray-50/20 rounded-full translate-y-16 -translate-x-16"></div>

      {/* Header */}
      <button
        className="relative w-full flex justify-between items-center px-8 py-8 hover:bg-gray-50 transition-all duration-300 focus:outline-none group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-black rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Filter className="text-white w-6 h-6" />
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold text-black">Smart Filters</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-2xl border border-gray-200">
            <Sparkles className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Search</span>
          </div>
          <div
            className={`p-2 rounded-2xl transition-all duration-300 ${
              isExpanded ? "bg-black text-white" : "bg-gray-100 text-gray-500"
            }`}
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-6 h-6 transition-transform duration-300" />
            )}
          </div>
        </div>
      </button>

      {/* Content */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          isExpanded
            ? "max-h-screen opacity-100 pb-8"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Heavy Waste Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base font-bold text-gray-800">
                <div className="w-8 h-8 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Package size={18} className="text-white" />
                </div>
                Heavy Waste Capability
              </div>
              <div className="flex bg-gray-100 rounded-2xl p-1.5 shadow-inner">
                {[
                  { label: "All Types", value: null },
                  { label: "Heavy Only", value: true },
                  { label: "Light Only", value: false },
                ].map((option) => (
                  <button
                    key={option.label}
                    className={`flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      heavyWasteFilter === option.value
                        ? "bg-white text-black shadow-lg transform scale-105 border border-gray-200"
                        : "text-gray-600 hover:text-black hover:bg-white/50"
                    }`}
                    onClick={() => onHeavyWasteFilterChange(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Road Allowed Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base font-bold text-gray-800">
                <div className="w-8 h-8 bg-gray-700 rounded-xl flex items-center justify-center">
                  <Star size={18} className="text-white" />
                </div>
                Road Placement
              </div>
              <div className="flex bg-gray-100 rounded-2xl p-1.5 shadow-inner">
                {[
                  { label: "Any Location", value: null },
                  { label: "Road OK", value: true },
                  { label: "Private Only", value: false },
                ].map((option) => (
                  <button
                    key={option.label}
                    className={`flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      roadAllowedFilter === option.value
                        ? "bg-white text-black shadow-lg transform scale-105 border border-gray-200"
                        : "text-gray-600 hover:text-black hover:bg-white/50"
                    }`}
                    onClick={() => onRoadAllowedFilterChange(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base font-bold text-gray-800">
                <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center">
                  <DollarSign size={18} className="text-white" />
                </div>
                Price Range (£)
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Min £"
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-gray-500/20 focus:border-gray-400 transition-all duration-300 outline-none font-medium"
                    value={minPrice !== null ? minPrice : ""}
                    onChange={(e) =>
                      onMinPriceChange(
                        e.target.value ? parseFloat(e.target.value) : null
                      )
                    }
                  />
                </div>
                <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Max £"
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-gray-500/20 focus:border-gray-400 transition-all duration-300 outline-none font-medium"
                    value={maxPrice !== null ? maxPrice : ""}
                    onChange={(e) =>
                      onMaxPriceChange(
                        e.target.value ? parseFloat(e.target.value) : null
                      )
                    }
                  />
                </div>
              </div>
            </div>

            {/* Yard Size Range */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base font-bold text-gray-800">
                <div className="w-8 h-8 bg-gray-600 rounded-xl flex items-center justify-center">
                  <Ruler size={18} className="text-white" />
                </div>
                Skip Size (Yards)
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-gray-500/20 focus:border-gray-400 transition-all duration-300 outline-none font-medium"
                    value={minYard !== null ? minYard : ""}
                    onChange={(e) =>
                      onMinYardChange(
                        e.target.value ? parseFloat(e.target.value) : null
                      )
                    }
                  />
                </div>
                <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-gray-500/20 focus:border-gray-400 transition-all duration-300 outline-none font-medium"
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
    </div>
  );
};

export default FilterAndSearch;
