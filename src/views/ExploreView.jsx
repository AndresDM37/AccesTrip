import { Search, Mic, MapPin, Heart } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";

export default function BuscarLugaresDesktop() {
  const lugares = [
    {
      id: 1,
      nombre: "Niladri Reservoir",
      ubicacion: "Tekergat, Sunamganj",
      precio: "$594/Person",
      imagen:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      favorito: false,
    },
    {
      id: 2,
      nombre: "Casa Las Tortugas",
      ubicacion: "Av Damero, Mexico",
      precio: "$894/Person",
      imagen:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      favorito: false,
    },
    {
      id: 3,
      nombre: "Aonang Villa Resort",
      ubicacion: "Bastola, Islampur",
      precio: "$761/Person",
      imagen:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
      favorito: false,
    },
    {
      id: 4,
      nombre: "Rangauti Resort",
      ubicacion: "Sylhet, Airport Road",
      precio: "$857/Person",
      imagen:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&sat=-100",
      favorito: false,
    },
  ];

  return (
    <PageLayout className="min-h-screen bg-gray-50">
      {/* Filtros adicionales */}
      <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Filtrar por:
        </h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors">
            Precio
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            Ubicación
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            Popularidad
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            Accesibilidad
          </button>
        </div>
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
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200">
                  <Heart
                    className={`w-5 h-5 ${
                      lugar.favorito
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {lugar.nombre}
                </h3>

                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{lugar.ubicacion}</span>
                </div>

                {/* Precio */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    {lugar.precio}
                  </span>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón cargar más */}
        <div className="text-center mt-8">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            Cargar más lugares
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
