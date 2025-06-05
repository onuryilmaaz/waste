import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";

const Header = () => {
  const steps = [
    { name: "Postcode", icon: MapPin, id: "postcode" },
    { name: "Waste Type", icon: Trash2, id: "waste-type" },
    { name: "Select Skip", icon: Truck, id: "select-skip" },
    { name: "Permit Check", icon: Shield, id: "permit-check" },
    { name: "Choose Date", icon: Calendar, id: "choose-date" },
    { name: "Payment", icon: CreditCard, id: "payment" },
  ];

  return (
    <header className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-black/50 to-gray-900/30"></div>
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/5 to-transparent"></div>

      <div className="relative z-10 py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Progress Steps */}
          <nav className="flex justify-center">
            <div className="backdrop-blur-xl bg-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-2xl border border-white/20 w-full max-w-6xl">
              <ol className="flex items-center justify-between gap-1 sm:gap-2 md:gap-0">
                {steps.map((step, index) => (
                  <li key={step.id} className="flex items-center flex-1">
                    <div
                      className={`flex flex-col items-center space-y-1 sm:space-y-2 px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-2 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-105 w-full ${
                        "select-skip" === step.id
                          ? "bg-white text-black shadow-xl shadow-white/25 scale-105 sm:scale-110"
                          : index <
                            steps.findIndex((s) => s.id === "select-skip")
                          ? "bg-gray-600 text-white shadow-lg"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`p-1.5 sm:p-2 md:p-2 lg:p-2 rounded-full ${
                          "select-skip" === step.id
                            ? "bg-black/10"
                            : index <
                              steps.findIndex((s) => s.id === "select-skip")
                            ? "bg-white/20"
                            : "bg-white/10"
                        }`}
                      >
                        <step.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
                      </div>
                      <span className="hidden md:flex text-xs sm:text-xs md:text-sm lg:text-sm font-semibold text-center leading-tight min-h-[2rem] items-center">
                        {step.name}
                      </span>
                      {/* Mobile step numbers */}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex items-center justify-center mx-0.5 sm:mx-1 md:mx-2 lg:mx-4 flex-shrink-0">
                        <div
                          className={`w-3 sm:w-6 md:w-8 lg:w-12 h-0.5 rounded-full transition-all duration-500 ${
                            index <
                            steps.findIndex((s) => s.id === "select-skip")
                              ? "bg-gradient-to-r from-gray-400 to-white shadow-sm"
                              : "bg-white/30"
                          }`}
                        ></div>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
