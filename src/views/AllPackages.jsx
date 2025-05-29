import { Calendar, Star } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { useDestinations } from "../context/DestinationContext";

const AllPackages = () => {
  const { destinations } = useDestinations();

  return (
    <PageLayout className="mx-auto bg-white min-h-screen p-6">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Todos los paquetes populares
      </h1>

      <div className="space-y-4">
        {destinations.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.name} // O pkg.title, depende del campo
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {pkg.name} {/* o pkg.title */}
                  </h3>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium ml-2">
                    ${pkg.price}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{pkg.dates}</span>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(pkg.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    {pkg.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {pkg.participants?.map((participant, index) => (
                        <img
                          key={index}
                          src={participant.avatar}
                          alt={`Participant ${index + 1}`}
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-3">
                      {pkg.participantCount} Visitados por {pkg.views}
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
