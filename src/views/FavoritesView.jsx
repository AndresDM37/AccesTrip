import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Heart } from "lucide-react";
import { useDestinations } from "../context/DestinationContext";
import DestinationCard from "../components/destination/DestinationCard";

const FavoritesView = () => {
  const [activeTab, setActiveTab] = useState("favoritos");
  const { getFavoriteDestinations } = useDestinations();
  const favoriteDestinations = getFavoriteDestinations();

  return (
    <PageLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="py-6">
        <h1 className="text-2xl font-bold mb-6">Mis Favoritos</h1>
        
        {favoriteDestinations.length === 0 ? (
          <div className="text-center py-10">
            <div className="mx-auto bg-orange-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <Heart className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No tienes favoritos</h2>
            <p className="text-gray-600">
              Guarda tus destinos favoritos para acceder a ellos rápidamente
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
                onClick={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default FavoritesView;