import { useState } from "react";
import DestinationCard from "../destination/DestinationCard";
import PopularDestinationsChart from "../../views/PopularDestinationsChart"; // Asegúrate de importar el gráfico

export default function PopularDestinations({ destinations, onSelectDestination }) {
  const [mostrarChart, setMostrarChart] = useState(false);

  return (
    <div className="mb-8">
      {!mostrarChart ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Actividades</h2>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // evita recarga
                setMostrarChart(true); // cambia a la vista del gráfico
              }}
              className="text-orange-500 font-medium"
            >
              Ver todas
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
                onClick={onSelectDestination}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Destinos Populares (Gráfica)</h2>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMostrarChart(false); // volver a la vista de tarjetas
              }}
              className="text-orange-500 font-medium"
            >
              Volver
            </a>
          </div>
          <PopularDestinationsChart />
        </>
      )}
    </div>
  );
}
