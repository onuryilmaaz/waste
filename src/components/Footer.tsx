import type { Skip } from "../types/Skip";
import { ArrowLeft, ArrowRight, Truck, Clock } from "lucide-react";

interface FooterProps {
  selectedSkip: Skip;
}

const Footer: React.FC<FooterProps> = ({ selectedSkip }) => {
  return (
    <div className="py-8 px-6">
      <div className="fixed bottom-6 left-6 right-6 bg-white backdrop-blur-xl border border-gray-200 rounded-3xl text-gray-800 shadow-2xl overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-white/50 to-gray-100/50"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/20 to-gray-50/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100/20 to-gray-50/20 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
          {/* Skip Details */}
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center shadow-lg">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">
                {selectedSkip.size} Yard Skip
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-2xl text-black">
                    £{selectedSkip.price_before_vat}
                  </span>
                  <span className="text-gray-500">inc VAT</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">
                    {selectedSkip.hire_period_days} days hire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 font-semibold shadow-lg">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-2xl transition-all duration-300 font-bold shadow-lg transform hover:scale-105">
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
