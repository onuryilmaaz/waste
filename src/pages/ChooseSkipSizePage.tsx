import axios from "axios";
import { useEffect, useState, useRef } from "react";
import SkipCard from "../components/Card";
import type { ApiSkipResponse, Skip } from "../types/Skip";
import Footer from "../components/Footer";
import FilterAndSearch from "../components/FilterAndSearch";
import { motion, AnimatePresence } from "framer-motion";

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
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium text-gray-700">
        Veriler yükleniyor...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium text-red-600">
        Hata oluştu: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow container mx-auto p-4 py-8 pb-24">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-white">
          Choose Your Skip Size
        </h1>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Select the perfect skip for your waste disposal needs. All prices
          include VAT.
        </p>

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
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          <AnimatePresence mode="wait">
            {filteredSkips && filteredSkips.length > 0 ? (
              filteredSkips.map((skip) => (
                <motion.div
                  key={skip.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
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
                className="col-span-full text-center text-gray-500 text-xl py-10"
              >
                Hiç konteyner bulunamadı.
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
