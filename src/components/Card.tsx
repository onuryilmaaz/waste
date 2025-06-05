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
      className={`relative max-w-sm w-full cursor-pointer transition-all duration-500 transform ${
        isSelected
          ? "scale-105 shadow-3xl shadow-blue-500/40 z-0"
          : "hover:scale-102 hover:shadow-xl z-0"
      }`}
      onClick={() => onSelect(skip)}
    >
      <div
        className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
          isSelected
            ? "border-blue-600 bg-blue-50"
            : "border-gray-200 hover:border-blue-300"
        }`}
      >
        <div
          className={`relative p-4 transition-all duration-300 ${
            isSelected
              ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
              : "bg-amber-400 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold">{skip.size} Yard Skip</h3>
            <div
              className={`w-10 h-10 rounded-full border-3 border-white flex items-center justify-center transition-all duration-300 ${
                isSelected ? "bg-white" : "bg-transparent"
              }`}
            >
              {isSelected && <Check className="w-6 h-6 text-blue-600" />}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-8 px-6 flex justify-center items-center">
          <div className="relative">
            <img
              src={yard4}
              alt={`${skip.size} Yard Skip`}
              className="max-h-32 object-contain"
            />

            <div
              className={`absolute -bottom-4 -right-4 ${
                skip.allows_heavy_waste ? "bg-green-500" : "bg-red-500"
              }  text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg`}
            >
              {skip.allows_heavy_waste ? "Heavy Waste" : "Light Waste"}
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
            <div className="text-center flex flex-col items-center">
              <Clock className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-base font-semibold">
                {skip.hire_period_days} Days
              </div>
              <div className="text-xs text-gray-500">Hire Period</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Ruler className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-base font-semibold">
                {skip.area || `${skip.size}yd³`}
              </div>
              <div className="text-xs text-gray-500">Dimensions</div>
            </div>
          </div>
          <div
            className={`p-2 rounded-xl ${
              skip.allowed_on_road ? "bg-green-500" : "bg-yellow-500"
            }  text-white text-sm items-center justify-center flex space-x-2 mb-4`}
          >
            {skip.allows_heavy_waste ? (
              ""
            ) : (
              <Truck className="w-4 h-4 text-white text-sm" />
            )}
            <span className="font-semibold"></span>
            {skip.allows_heavy_waste
              ? "Allowed On The Road"
              : "Not Allowed On The Road"}
          </div>
          <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-4xl font-extrabold text-blue-700">
                  ${skip.price_before_vat}
                </span>
                <span className="text-blue-500 ml-2 text-lg font-medium">
                  inc VAT
                </span>
              </div>
              <div className="text-right text-sm text-blue-600 font-semibold">
                <div>
                  From $
                  {Math.round(
                    (skip.price_before_vat / skip.hire_period_days) * 100
                  ) / 100}
                  /day
                </div>
              </div>
            </div>
          </div>
          <button
            className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-100 ${
              isSelected
                ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
            }`}
          >
            {isSelected ? "Selected ✓" : "Select This Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
