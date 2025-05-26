import { Calendar, Users, MapPin, Home } from "lucide-react";

export default function DestinationServices() {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3">Incluye</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
            <Calendar className="w-5 h-5 text-orange-500" />
          </div>
          <span className="text-gray-700">5 días</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
            <Users className="w-5 h-5 text-orange-500" />
          </div>
          <span className="text-gray-700">Hasta 10 personas</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
            <MapPin className="w-5 h-5 text-orange-500" />
          </div>
          <span className="text-gray-700">Guía turístico</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
            <Home className="w-5 h-5 text-orange-500" />
          </div>
          <span className="text-gray-700">Alojamiento</span>
        </div>
      </div>
    </div>
  );
}