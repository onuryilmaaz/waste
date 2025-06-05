import type { Skip } from "../types/Skip";
import { Check, Clock, Ruler, Truck } from "lucide-react";
import yard4 from "../assets/4-yarder-skip.jpg";

const Card: React.FC<{
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}> = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      className={`relative w-full max-w-xl cursor-pointer transition-all duration-300 ${
        isSelected ? "scale-105" : "hover:scale-102"
      }`}
      onClick={() => onSelect(skip)}
    >
      <div
        className={`bg-white rounded-2xl shadow-md border transition-all duration-300 overflow-hidden ${
          isSelected
            ? "border-blue-500 shadow-xl shadow-blue-100"
            : "border-gray-100 hover:border-gray-200 hover:shadow-lg"
        }`}
      >
        {/* Header */}
        <div className="relative px-6 py-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{skip.size}</h3>
              <p className="text-sm text-gray-600 font-medium">Yard Skip</p>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isSelected
                  ? "bg-blue-500 scale-110"
                  : "bg-gray-200 border-2 border-gray-300"
              }`}
            >
              {isSelected && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative p-6 bg-gray-50">
          <div className="flex justify-center">
            <img
              src={yard4}
              alt={`${skip.size} Yard Skip`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Waste Type Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                skip.allows_heavy_waste
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              {skip.allows_heavy_waste ? "Heavy Waste" : "Light Waste"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-base font-semibold text-gray-900">
                {skip.hire_period_days}
              </div>
              <div className="text-xs text-gray-500">Days</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Ruler className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-base font-semibold text-gray-900">
                {skip.area || `${skip.size}yd³`}
              </div>
              <div className="text-xs text-gray-500">Size</div>
            </div>
          </div>

          {/* Road Permission */}
          <div className="text-center">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                skip.allowed_on_road
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              <Truck className="w-4 h-4 mr-2" />
              {skip.allowed_on_road ? "Road Allowed" : "Private Land Only"}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  ${skip.price_before_vat}
                </span>
                <span className="text-gray-500 ml-2 text-sm">inc VAT</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  $
                  {Math.round(
                    (skip.price_before_vat / skip.hire_period_days) * 100
                  ) / 100}
                  <span className="text-gray-400">/day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 ${
              isSelected
                ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
                : "bg-gray-900 text-white hover:bg-gray-800 shadow-md"
            }`}
          >
            {isSelected ? "Selected ✓" : "Select Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
