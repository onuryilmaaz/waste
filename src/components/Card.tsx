import type { Skip } from "../types/Skip";
import { Check, Clock, Ruler, MapPin, Truck } from "lucide-react";
import yard4 from "../assets/4-yarder-skip.jpg";
import yard5 from "../assets/5-yarder-skip.jpg";
import yard16 from "../assets/16-yarder-skip.jpg";
import yard20 from "../assets/20-yarder-skip.jpg";

const Card: React.FC<{
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}> = ({ skip, isSelected, onSelect }) => {
  // Calculate total price with VAT
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  const dailyPrice =
    Math.round((skip.price_before_vat / skip.hire_period_days) * 100) / 100;

  return (
    <div
      className={`relative w-full max-w-sm cursor-pointer group transition-transform duration-200 ease-out will-change-transform `}
      onClick={() => onSelect(skip)}
    >
      {/* Simple Selection Glow */}
      <div
        className={`absolute -inset-1 rounded-2xl transition-opacity duration-200 ${
          isSelected ? "bg-black/20 opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className={`relative bg-white rounded-2xl border transition-all duration-200 ease-out overflow-hidden ${
          isSelected
            ? "border-black shadow-xl"
            : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
        }`}
      >
        {/* Header Section */}
        <div
          className={`relative p-6 border-b transition-colors duration-200 ${
            isSelected ? "border-black/10 bg-gray-50/50" : "border-gray-100"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-3xl font-bold text-black">{skip.size}</h3>
                <span className="text-lg text-gray-500 font-medium">Yard</span>
              </div>
              <p className="text-sm text-gray-600">Skip Container</p>
            </div>

            {/* Enhanced Selection Indicator */}
            <div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                isSelected
                  ? "bg-black border-black scale-110"
                  : "border-gray-300 group-hover:border-gray-400"
              }`}
            >
              {isSelected && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative p-6 bg-gray-50">
          <div
            className={`bg-white rounded-xl p-4 border transition-shadow duration-200 ${
              isSelected ? "border-gray-200 shadow-md" : "border-gray-100"
            }`}
          >
            <img
              src={
                skip.size <= 7
                  ? yard4
                  : skip.size <= 11
                  ? yard5
                  : skip.size <= 15
                  ? yard16
                  : yard20
              }
              alt={`${skip.size} Yard Skip`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 space-y-4">
          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <Clock
                className={`w-4 h-4 mx-auto mb-1 transition-colors duration-200 ${
                  isSelected ? "text-black" : "text-gray-400"
                }`}
              />
              <div className="text-lg font-semibold text-black">
                {skip.hire_period_days}
              </div>
              <div className="text-xs text-gray-500">Days</div>
            </div>
            <div>
              <Ruler
                className={`w-4 h-4 mx-auto mb-1 transition-colors duration-200 ${
                  isSelected ? "text-black" : "text-gray-400"
                }`}
              />
              <div className="text-lg font-semibold text-black">
                {skip.size}yd³
              </div>
              <div className="text-xs text-gray-500">Volume</div>
            </div>
            <div>
              <MapPin
                className={`w-4 h-4 mx-auto mb-1 transition-colors duration-200 ${
                  isSelected ? "text-black" : "text-gray-400"
                }`}
              />
              <div
                className={`text-xs font-semibold ${
                  skip.allowed_on_road ? "text-green-600" : "text-red-600"
                }`}
              >
                {skip.allowed_on_road ? "Road OK" : "Private"}
              </div>
              <div className="text-xs text-gray-500">Location</div>
            </div>
          </div>

          {/* Features */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4 text-sm">
              <div
                className={`flex items-center gap-1 ${
                  skip.allows_heavy_waste ? "text-black" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    skip.allows_heavy_waste ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                Heavy Waste
              </div>
              <div
                className={`flex items-center gap-1 ${
                  skip.allowed_on_road ? "text-black" : "text-gray-500"
                }`}
              >
                <Truck className="w-3 h-3" />
                Road Access
              </div>
            </div>
          </div>

          {/* Enhanced Pricing */}
          <div
            className={`rounded-xl p-4 text-center transition-colors duration-200 ${
              isSelected ? "bg-black text-white" : "bg-gray-50"
            }`}
          >
            <div
              className={`text-2xl font-bold mb-1 ${
                isSelected ? "text-white" : "text-black"
              }`}
            >
              £{totalPrice}
            </div>
            <div
              className={`text-sm mb-2 ${
                isSelected ? "text-gray-200" : "text-gray-600"
              }`}
            >
              inc VAT • £{dailyPrice}/day
            </div>
            <div
              className={`text-xs ${
                isSelected ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {skip.hire_period_days} day hire period
            </div>
          </div>

          {/* Enhanced Action Button */}
          <button
            className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-200 ${
              isSelected
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-900 text-white hover:bg-black"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {isSelected ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Selected</span>
                </>
              ) : (
                <span>Select Skip</span>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
