import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-xl">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
          <div className="absolute inset-0 bg-gray-800 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
        </div>
        <h3 className="text-xl font-bold text-black mb-2">
          Loading Your Skips
        </h3>
        <p className="text-gray-600">
          Please wait while we fetch the best options for you...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
