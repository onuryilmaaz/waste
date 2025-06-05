import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";
import { useMemo, memo } from "react";

const Header = memo(() => {
  const steps = useMemo(
    () => [
      { name: "Postcode", icon: MapPin, id: "postcode" },
      { name: "Waste Type", icon: Trash2, id: "waste-type" },
      { name: "Select Skip", icon: Truck, id: "select-skip" },
      { name: "Permit Check", icon: Shield, id: "permit-check" },
      { name: "Choose Date", icon: Calendar, id: "choose-date" },
      { name: "Payment", icon: CreditCard, id: "payment" },
    ],
    []
  );

  const currentStepIndex = useMemo(
    () => steps.findIndex((s) => s.id === "select-skip"),
    [steps]
  );

  return (
    <header className="bg-black">
      <div className="py-6 px-4 lg:py-12 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex justify-center">
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-xl w-full max-w-6xl">
              <ol className="flex items-center justify-between gap-2">
                {steps.map((step, index) => {
                  const isActive = step.id === "select-skip";
                  const isCompleted = index < currentStepIndex;

                  return (
                    <li key={step.id} className="flex items-center flex-1">
                      <div
                        className={`flex flex-col items-center gap-2 px-2 py-3 md:px-4 rounded-xl w-full transition-colors duration-150 ${
                          isActive
                            ? "bg-black text-white"
                            : isCompleted
                            ? "bg-gray-300 text-black"
                            : "text-black hover:bg-gray-100"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-full ${
                            isActive
                              ? "bg-white/20"
                              : isCompleted
                              ? "bg-black/20"
                              : "bg-gray-200"
                          }`}
                        >
                          <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="hidden md:block text-sm font-semibold text-center">
                          {step.name}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="mx-2 lg:mx-4">
                          <div
                            className={`w-6 md:w-12 h-0.5 rounded-full transition-colors duration-150 ${
                              index < currentStepIndex
                                ? "bg-gray-400"
                                : "bg-gray-300"
                            }`}
                          />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
