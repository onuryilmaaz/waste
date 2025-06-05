// import axios from "axios";
// import { useEffect, useState, useRef } from "react";
// import SkipCard from "../components/Card";
// import type { ApiSkipResponse, Skip } from "../types/Skip";
// import Footer from "../components/Footer";

// const ChooseSkipSizePage = () => {
//   const [data, setData] = useState<ApiSkipResponse[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);
//   const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

//   const skipCardsContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<ApiSkipResponse[]>(
//           "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
//         );
//         setData(response.data);
//         console.log("API Yanıtı:", response.data);
//       } catch (err) {
//         setError(err as Error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         skipCardsContainerRef.current &&
//         !skipCardsContainerRef.current.contains(event.target as Node)
//       ) {
//         const clickedElement = event.target as HTMLElement;
//         const isSkipCardButton =
//           clickedElement.tagName === "BUTTON" &&
//           clickedElement.closest(".relative.max-w-sm");

//         if (!isSkipCardButton) {
//           setSelectedSkip(null);
//         }
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSkipSelect = (skip: Skip) => {
//     setSelectedSkip((prevSelectedSkip) =>
//       prevSelectedSkip?.id === skip.id ? null : skip
//     );
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-lg font-medium text-gray-700">
//         Veriler yükleniyor...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen text-lg font-medium text-red-600">
//         Hata oluştu: {error.message}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-black">
//       <main className="flex-grow container mx-auto p-4 py-8 pb-24">
//         <h1 className="text-4xl font-extrabold mb-8 text-center text-white">
//           Choose Your Skip Size
//         </h1>
//         <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
//           Select the perfect skip for your waste disposal needs. All prices
//           include VAT.
//         </p>
//         <div
//           ref={skipCardsContainerRef}
//           className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
//         >
//           {data && data.length > 0 ? (
//             data.map((skip) => (
//               <SkipCard
//                 key={skip.id}
//                 skip={skip}
//                 isSelected={selectedSkip?.id === skip.id}
//                 onSelect={handleSkipSelect}
//               />
//             ))
//           ) : (
//             <div className="col-span-full text-center text-gray-500 text-xl py-10">
//               Hiç konteyner bulunamadı.
//             </div>
//           )}
//         </div>
//       </main>

//       {selectedSkip && <Footer selectedSkip={selectedSkip} />}
//     </div>
//   );
// };

// export default ChooseSkipSizePage;

// ChooseSkipSizePage.tsx
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import SkipCard from "../components/Card";
import type { ApiSkipResponse, Skip } from "../types/Skip";
import Footer from "../components/Footer";
import FilterAndSearch from "../components/FilterAndSearch"; // Import the new component

const ChooseSkipSizePage = () => {
  const [data, setData] = useState<ApiSkipResponse[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // New state for search query
  const [heavyWasteFilter, setHeavyWasteFilter] = useState<boolean | null>(
    null
  ); // New state for heavy waste filter
  const [roadAllowedFilter, setRoadAllowedFilter] = useState<boolean | null>(
    null
  ); // New state for road allowed filter

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

  // Filtering logic
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

    return matchesSearch && matchesHeavyWaste && matchesRoadAllowed;
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

        {/* Filter and Search Component */}
        <FilterAndSearch
          onSearchChange={setSearchQuery}
          onHeavyWasteFilterChange={setHeavyWasteFilter}
          onRoadAllowedFilterChange={setRoadAllowedFilter}
          searchQuery={searchQuery}
          heavyWasteFilter={heavyWasteFilter}
          roadAllowedFilter={roadAllowedFilter}
        />

        <div
          ref={skipCardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {filteredSkips && filteredSkips.length > 0 ? (
            filteredSkips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={handleSkipSelect}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-xl py-10">
              Hiç konteyner bulunamadı.
            </div>
          )}
        </div>
      </main>

      {selectedSkip && <Footer selectedSkip={selectedSkip} />}
    </div>
  );
};

export default ChooseSkipSizePage;
