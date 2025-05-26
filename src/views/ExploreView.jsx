import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Map } from "lucide-react";
import { useDestinations } from "../context/DestinationContext";

const ExploreView = () => {
  const [activeTab, setActiveTab] = useState("mapa");
  const { destinations } = useDestinations();

  return (
    <PageLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="text-center py-10">
        <div className="mx-auto bg-orange-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
          <Map className="w-8 h-8 text-orange-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Explora Destinos</h1>
        <p className="text-gray-600 mb-4">
          Descubre nuevos lugares para tus próximas aventuras
        </p>
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <p className="text-gray-500">
            ¡Próximamente! Estamos trabajando en un mapa interactivo para que puedas explorar todos nuestros destinos.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default ExploreView;