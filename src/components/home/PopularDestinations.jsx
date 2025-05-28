import DestinationCard from "../destination/DestinationCard";

export default function PopularDestinations({
  destinations,
  onSelectDestination,
}) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Actividades</h2>
        <a href="/paquetes" className="text-orange-500 font-medium">
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
    </div>
  );
}
