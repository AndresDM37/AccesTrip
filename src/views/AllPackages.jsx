import { Calendar, Star } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

const AllPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Niladri Reservoir",
      price: 789,
      dates: "16 July-29 July",
      rating: 4.8,
      participantCount: 24,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=120&fit=crop&auto=format",
      participants: [
        { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face&auto=format" },
        { avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c265?w=24&h=24&fit=crop&crop=face&auto=format" },
        { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format" }
      ]
    },
    {
      id: 2,
      title: "Niladri Reservoir",
      price: 789,
      dates: "16 July-29 July",
      rating: 4.8,
      participantCount: 24,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c3e?w=120&h=120&fit=crop&auto=format",
      participants: [
        { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face&auto=format" },
        { avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c265?w=24&h=24&fit=crop&crop=face&auto=format" },
        { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format" }
      ]
    },
    {
      id: 3,
      title: "Niladri Reservoir",
      price: 789,
      dates: "16 July-29 July",
      rating: 4.8,
      participantCount: 24,
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=120&h=120&fit=crop&auto=format",
      participants: [
        { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face&auto=format" },
        { avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c265?w=24&h=24&fit=crop&crop=face&auto=format" },
        { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format" }
      ]
    }
  ];

  return (
    <PageLayout className="mx-auto bg-white min-h-screen p-6">
      {/* Header */}
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Todos los paquetes populares
      </h1>

      {/* Lista de paquetes */}
      <div className="space-y-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex gap-4">
              {/* Imagen */}
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Contenido */}
              <div className="flex-1">
                {/* Header con título y precio */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {pkg.title}
                  </h3>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium ml-2">
                    ${pkg.price}
                  </span>
                </div>

                {/* Fechas */}
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{pkg.dates}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(pkg.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{pkg.rating}</span>
                </div>

                {/* Participantes */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Avatares */}
                    <div className="flex -space-x-2">
                      {pkg.participants.map((participant, index) => (
                        <img
                          key={index}
                          src={participant.avatar}
                          alt={`Participant ${index + 1}`}
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-3">
                      {pkg.participantCount} Person Joined
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default AllPackages;