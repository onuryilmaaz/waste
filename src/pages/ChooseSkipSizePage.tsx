import axios from "axios";
import { useEffect, useState, useRef } from "react";
import SkipCard from "../components/Card";
import type { ApiSkipResponse, Skip } from "../types/Skip";
import Footer from "../components/Footer";
import FilterAndSearch from "../components/FilterAndSearch";
import { motion, AnimatePresence } from "framer-motion";
import { Search, AlertCircle } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

const ChooseSkipSizePage = () => {
  const [data, setData] = useState<ApiSkipResponse[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [heavyWasteFilter, setHeavyWasteFilter] = useState<boolean | null>(
    null
  );
  const [roadAllowedFilter, setRoadAllowedFilter] = useState<boolean | null>(
    null
  );
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minYard, setMinYard] = useState<number | null>(null);
  const [maxYard, setMaxYard] = useState<number | null>(null);

  const skipCardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiSkipResponse[]>(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        setData(response.data);
        console.log("API Yanıtı:", response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        skipCardsContainerRef.current &&
        !skipCardsContainerRef.current.contains(event.target as Node)
      ) {
        const clickedElement = event.target as HTMLElement;
        const isSkipCardButton =
          clickedElement.tagName === "BUTTON" &&
          clickedElement.closest(".relative.max-w-sm");

        if (!isSkipCardButton) {
          setSelectedSkip(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip((prevSelectedSkip) =>
      prevSelectedSkip?.id === skip.id ? null : skip
    );
  };

  const filteredSkips = data?.filter((skip) => {
    const matchesSearch =
      skip.size.toString().includes(searchQuery.toLowerCase()) ||
      skip.area?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (searchQuery.toLowerCase().includes("heavy waste") &&
        skip.allows_heavy_waste) ||
      (searchQuery.toLowerCase().includes("light waste") &&
        !skip.allows_heavy_waste) ||
      (searchQuery.toLowerCase().includes("allowed on road") &&
        skip.allowed_on_road) ||
      (searchQuery.toLowerCase().includes("not allowed on road") &&
        !skip.allowed_on_road);

    const matchesHeavyWaste =
      heavyWasteFilter === null || skip.allows_heavy_waste === heavyWasteFilter;

    const matchesRoadAllowed =
      roadAllowedFilter === null || skip.allowed_on_road === roadAllowedFilter;

    const matchesMinPrice =
      minPrice === null || skip.price_before_vat >= minPrice;
    const matchesMaxPrice =
      maxPrice === null || skip.price_before_vat <= maxPrice;

    const matchesMinYard = minYard === null || skip.size >= minYard;
    const matchesMaxYard = maxYard === null || skip.size <= maxYard;

    return (
      matchesSearch &&
      matchesHeavyWaste &&
      matchesRoadAllowed &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesMinYard &&
      matchesMaxYard
    );
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-rose-500 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Oops! Something went wrong
          </h3>
          <p className="text-slate-600 mb-6">
            We couldn't load the skip data. Please try again later.
          </p>
          <p className="text-sm text-red-600 bg-red-50 rounded-2xl p-4 border border-red-200">
            Error: {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <main className="flex-grow container mx-auto p-4 py-8 pb-24">
        <FilterAndSearch
          onSearchChange={setSearchQuery}
          onHeavyWasteFilterChange={setHeavyWasteFilter}
          onRoadAllowedFilterChange={setRoadAllowedFilter}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          onMinYardChange={setMinYard}
          onMaxYardChange={setMaxYard}
          searchQuery={searchQuery}
          heavyWasteFilter={heavyWasteFilter}
          roadAllowedFilter={roadAllowedFilter}
          minPrice={minPrice}
          maxPrice={maxPrice}
          minYard={minYard}
          maxYard={maxYard}
        />

        <div
          ref={skipCardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center"
        >
          <AnimatePresence mode="wait">
            {filteredSkips && filteredSkips.length > 0 ? (
              filteredSkips.map((skip) => (
                <motion.div
                  key={skip.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="w-full"
                >
                  <SkipCard
                    skip={skip}
                    isSelected={selectedSkip?.id === skip.id}
                    onSelect={handleSkipSelect}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                key="no-skips"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="col-span-full text-center py-16"
              >
                <div className="bg-white backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No Skips Found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters to find more options.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {selectedSkip && <Footer selectedSkip={selectedSkip} />}
    </div>
  );
};

export default ChooseSkipSizePage;
