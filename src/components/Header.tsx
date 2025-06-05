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
    <header className="relative bg-black text-white">
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative z-10 py-2 md:py-4 lg:py-8 px-1 md:px-4 lg:px-6">
        <div className="container mx-auto">
          <nav className="flex justify-center">
            <div className="bg-black rounded-lg md:rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-sm w-full">
              <ol className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <li key={step.id} className="flex items-center">
                    <div
                      className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-2 md:px-2 py-2 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 ${
                        "select-skip" === step.id
                          ? "bg-blue-600 text-white shadow-md"
                          : index <
                            steps.findIndex((s) => s.id === "select-skip")
                          ? "bg-green-600 text-white"
                          : "text-gray-400"
                      }`}
                    >
                      <step.icon className="w-5 h-5 md:w-7 md:h-7 sm:w-8 sm:h-8" />
                      <span className="hidden text-[10px] md:text-[12] md:block  lg:text-sm font-medium text-center">
                        {step.name}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`mx-2 lg:mx-3 w-4 lg:w-8 h-0.5 rounded-full ${
                          index < steps.findIndex((s) => s.id === "select-skip")
                            ? "bg-green-500"
                            : "bg-gray-600"
                        }`}
                      ></div>
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
