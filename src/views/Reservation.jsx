import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react";

import PageLayout from "../components/layout/PageLayout";
import FlightDetailsModal from "../components/reservation/Modal";

export default function ReservaPaqueteViaje() {
  const [selectedDate, setSelectedDate] = useState(22);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlightDetails, setSelectedFlightDetails] = useState(null);

  // Datos del calendario
  const diasSemana = ["S", "L", "M", "M", "J", "V", "S"];
  const diasMes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31,
  ];

  const offsetMes = Array(diasMes).fill(null);

  // Horarios disponibles
  const horarios = [
    {
      id: 1,
      codigo: "CTM 431",
      salida: "4:54 am",
      llegada: "8:00 am",
      duracion: "3h 46m",
      escalas: "Sin escalas",
      disponible: true,
    },
    {
      id: 2,
      codigo: "CTM 432",
      salida: "4:54 am",
      llegada: "8:15 am",
      duracion: "12h 00m",
      escalas: "Sin escalas",
      disponible: true,
    },
    {
      id: 3,
      codigo: "CTM 433",
      salida: "5:00 am",
      llegada: "8:30 am",
      duracion: "12h 00m",
      escalas: "Sin escalas",
      disponible: true,
    },
    {
      id: 4,
      codigo: "CTM 434",
      salida: "10:00 am",
      llegada: "3:00 pm",
      duracion: "12h 00m",
      escalas: "Con escala",
      disponible: true,
    },
  ];

  // Función para abrir el modal con los detalles del vuelo
  const handleVerDetalles = (horario) => {
    setSelectedFlightDetails(horario);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFlightDetails(null);
  };

  return (
    <PageLayout className="min-h-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Reservar Paquete de Viaje
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Selecciona la fecha y horario de tu preferencia
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="flex flex-col lg:grid-cols-2 gap-8">
          {/* Sección del Calendario */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            {/* Header del calendario */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                28 de Mayo
              </h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Días de la semana */}
            <div className="flex md:gap-26 mb-2 pl-6 sm:gap-16">
              {diasSemana.map((dia, index) => (
                <div
                  key={index}
                  className="text-center font-medium text-gray-800 py-2"
                >
                  {dia}
                </div>
              ))}
            </div>

            {/* Días del mes */}
            <div className="grid grid-cols-7">
              {offsetMes.map((_, index) => (
                <div key={`offset-${index}`} />
              ))}
              {diasMes.map((dia) => (
                <button
                  key={dia}
                  onClick={() => setSelectedDate(dia)}
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all
                    ${
                      selectedDate === dia
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {dia}
                </button>
              ))}
            </div>
          </div>

          {/* Sección de Horarios */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Horarios Disponibles
            </h3>

            <div className="space-y-4">
              {horarios.map((horario) => (
                <div
                  key={horario.id}
                  onClick={() => setSelectedHorario(horario.id)}
                  className={`
                    p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${
                      selectedHorario === horario.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          {horario.codigo}
                        </span>
                        <span className="text-xs text-gray-500">
                          {horario.duracion}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {horario.salida}
                          </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-full h-px bg-gray-300 relative">
                            <ArrowRight className="w-4 h-4 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {horario.llegada}
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 text-sm text-gray-600">
                        {horario.escalas}
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Evita que se seleccione el horario al hacer clic en "Ver detalles"
                        handleVerDetalles(horario);
                      }}
                      className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors ml-4 cursor-pointer"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón de continuar */}
        <div className="mt-8 text-center">
          <a
            href="/pago"
            disabled={!selectedHorario}
            className={`
              px-8 py-4 rounded-xl font-semibold text-lg transition-all cursor-pointer
              ${
                selectedHorario
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Continuar con la Reserva
          </a>
        </div>

        {/* Información adicional */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
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

      {/* Modal de detalles del vuelo */}
      <FlightDetailsModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        flightData={selectedFlightDetails}
      />
    </PageLayout>
  );
}