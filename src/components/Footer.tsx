import type { Skip } from "../types/Skip";
interface FooterProps {
  selectedSkip: Skip;
}
const Footer: React.FC<FooterProps> = ({ selectedSkip }) => {
  return (
    <div className="py-8 px-6">
      <div className="fixed bottom-0 left-0 right-0 bg-black border border-white rounded-2xl text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">
              {selectedSkip.size} Yard Skip{" "}
              <span className="text-blue-400">
                £{selectedSkip.price_before_vat}
              </span>
            </p>
            <p className="text-sm text-slate-400">
              {selectedSkip.hire_period_days} day hire
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition duration-300">
              Back
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
