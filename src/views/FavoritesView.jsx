import { Heart, MapPin } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { useDestinations } from "../context/DestinationContext";

export default function FavoritosDesktop() {
  const { getFavoriteDestinations, toggleFavorite, favorites } = useDestinations();
  const lugares = getFavoriteDestinations();

  return (
    <PageLayout className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900">Lugares Favoritos</h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-2 gap-8">
          {lugares.map((lugar) => (
            <div
              key={lugar.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={lugar.imageUrl}
                  alt={lugar.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Heart Button */}
                <button
                  onClick={() => toggleFavorite(lugar.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 group"
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

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {lugar.name}
                </h3>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{lugar.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {lugares.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No tienes lugares favoritos aún
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Explora nuevos destinos y guarda tus lugares favoritos para
              acceder a ellos fácilmente.
            </p>
            <a
              href="/explorar" // cambia esto si usas React Router
              className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Explorar Lugares
            </a>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
