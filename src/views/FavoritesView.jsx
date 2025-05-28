import { Heart, MapPin } from "lucide-react";

import PageLayout from "../components/layout/PageLayout";

export default function FavoritosDesktop() {
  const lugares = [
    {
      id: 1,
      nombre: "Niladri Reservoir",
      ubicacion: "Tekergat, Sunamganj",
      imagen:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      nombre: "Casa Las Tortugas",
      ubicacion: "Av Damero, Mexico",
      imagen:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      nombre: "Aonang Villa Resort",
      ubicacion: "Bastola, Islampur",
      imagen:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      nombre: "Rangauti Resort",
      ubicacion: "Sylhet, Airport Road",
      imagen:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&sat=-100",
    },
    {
      id: 5,
      nombre: "Kachura Resort",
      ubicacion: "Kachura Valley, Skardu",
      imagen:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      nombre: "Shakardu Resort",
      ubicacion: "Shakardu, Pakistan",
      imagen:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
    },
  ];

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
                  src={lugar.imagen}
                  alt={lugar.nombre}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Heart Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 group">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {lugar.nombre}
                </h3>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{lugar.ubicacion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no favorites) */}
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
            <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Explorar Lugares
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
