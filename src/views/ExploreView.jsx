import { MapPin, Heart } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import SearchInput from "../components/ui/SearchInput";
import { useDestinations } from "../context/DestinationContext";
import { useState } from "react";

export default function BuscarLugaresDesktop() {
  const {
    searchDestinations,
    toggleFavorite,
    favorites,
    selectedFilter,
    setSelectedFilter,
  } = useDestinations();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = searchDestinations(searchQuery);

  return (
    <PageLayout className="min-h-screen bg-gray-50">
      <div className="mt-6 mb-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Filtrar por:
        </h3>
        <div className="flex flex-wrap gap-3">
          {["precio", "ubicación", "popularidad", "accesibilidad"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg hover:bg-orange-200 ${
                  selectedFilter === filter
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-2 gap-8">
          {filteredDestinations.map((lugar) => (
            <div
              key={lugar.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  src={lugar.imageUrl}
                  alt={lugar.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(lugar.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(lugar.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lugar.name}
                </h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{lugar.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    ${lugar.price}/Person
                  </span>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 cursor-pointer">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredDestinations.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No se encontraron destinos.
          </div>
        )}
      </div>
    </PageLayout>
  );
}
