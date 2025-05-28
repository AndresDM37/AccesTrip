import { X, Plane, AlertCircle } from "lucide-react";

export default function FlightDetailsModal({ isOpen, onClose, flightData }) {
  if (!isOpen || !flightData) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop con blur */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Detalles del Vuelo
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Información del vuelo */}
          <div className="bg-orange-50 rounded-xl p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Plane className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-orange-900">
                {flightData.codigo}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Salida:</span>
                <div className="font-semibold text-gray-900">
                  {flightData.salida}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Llegada:</span>
                <div className="font-semibold text-gray-900">
                  {flightData.llegada}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Duración:</span>
                <div className="font-semibold text-gray-900">
                  {flightData.duracion}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Escalas:</span>
                <div className="font-semibold text-gray-900">
                  {flightData.escalas}
                </div>
              </div>
            </div>
          </div>

          {/* Políticas y condiciones */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Términos y Condiciones</h3>
            
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <p>
                  El primer cambio sin penalidad es aplicable si se realiza al 
                  menos ocho días antes de la fecha de salida.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <p>
                  Los precios mostrados incluyen cargos de combustible, 
                  impuestos y tasas.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <p>
                  Consulta nuestra política de equipaje para vuelos operados 
                  por Copa Airlines. Pueden aplicar cargos adicionales en 
                  maletas extra, con sobrepeso, o sobredimensión, así como a 
                  ciertos artículos especiales.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <p>
                  No presentarse al vuelo conlleva penalidades.
                </p>
              </div>
            </div>
          </div>

          {/* Aviso importante */}
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">
                  Información Importante
                </h4>
                <p className="text-blue-700 text-sm">
                  Los horarios pueden cambiar por condiciones climáticas. Te 
                  notificaremos cualquier modificación 24 horas antes de tu viaje.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}