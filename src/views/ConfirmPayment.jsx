import { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Plane,
  Calendar,
  Users,
  CheckCircle,
  Shield,
} from "lucide-react";

import PageLayout from "../components/layout/PageLayout";

export default function ConfirmarCompra() {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Datos del vuelo seleccionado (normalmente vendrían de props o estado global)
  const flightData = {
    codigo: "CTM 431",
    salida: "4:54 am",
    llegada: "8:00 am",
    duracion: "3h 46m",
    fecha: "29 de Mayo, 2025",
    escalas: "Sin escalas",
    pasajeros: 1,
    precio: 500000,
  };

  const handleInputChange = (field, value) => {
    setCardData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);
    const parts = [];
    for (let i = 0; i < cleaned.length; i += 4) {
      parts.push(cleaned.slice(i, i + 4));
    }
    return parts.join(" ");
  };

  const formatExpiry = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  const handleConfirmPurchase = async () => {
    setIsProcessing(true);
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      // Aquí redireccionar a página de confirmación
      alert("¡Pago procesado exitosamente!");
      window.location.href = "/inicio"; 
    }, 3000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <PageLayout className="min-h-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <a
              href="/reserva"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </a>
            <h1 className="text-3xl font-bold text-gray-900">
              Confirmar Compra
            </h1>
          </div>
          <p className="text-gray-600 ml-12">
            Revisa los detalles de tu vuelo y completa el pago
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resumen del vuelo */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Plane className="w-5 h-5 text-orange-500 mr-2" />
                Detalles del Vuelo
              </h2>
              <div className="bg-orange-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-orange-900 text-lg">
                    {flightData.codigo}
                  </span>
                  <span className="text-sm text-orange-700">
                    {flightData.duracion}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {flightData.salida}
                    </div>
                    <div className="text-sm text-gray-600">Salida</div>
                  </div>

                  <div className="flex-1 flex items-center justify-center mx-4">
                    <div className="w-full h-px bg-orange-300 relative">
                      <Plane className="w-4 h-4 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-50" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {flightData.llegada}
                    </div>
                    <div className="text-sm text-gray-600">Llegada</div>
                  </div>
                </div>

                <div className="text-center text-sm text-orange-700">
                  {flightData.escalas}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Fecha</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {flightData.fecha}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Plane className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Destino</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    Eje Cafetero
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Pasajeros</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {flightData.pasajeros} Adulto
                  </span>
                </div>

                <div className="border-t pt-3 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-orange-600">
                      {formatPrice(flightData.precio)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de seguridad */}
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-1">
                    Pago Seguro
                  </h4>
                  <p className="text-green-700 text-sm">
                    Tu información está protegida con encriptación SSL de 256
                    bits
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de pago */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <CreditCard className="w-5 h-5 text-orange-500 mr-2" />
              Método de Pago
            </h2>

            <div className="space-y-4">
              {/* Número de tarjeta */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Tarjeta
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardData.number}
                    onChange={(e) =>
                      handleInputChange(
                        "number",
                        formatCardNumber(e.target.value)
                      )
                    }
                    maxLength="19"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Nombre del titular */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Titular
                </label>
                <input
                  type="text"
                  placeholder="Nombre Apellido"
                  value={cardData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Fecha de expiración y CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de Expiración
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    value={cardData.expiry}
                    onChange={(e) =>
                      handleInputChange("expiry", formatExpiry(e.target.value))
                    }
                    maxLength="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={(e) =>
                        handleInputChange(
                          "cvv",
                          e.target.value.replace(/\D/g, "").slice(0, 4)
                        )
                      }
                      maxLength="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Resumen del precio */}
              <div className="bg-gray-50 rounded-xl p-4 mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">
                    {formatPrice(flightData.precio)}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Impuestos incluidos</span>
                  <span className="text-gray-900">$0</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-xl font-bold text-orange-600">
                      {formatPrice(flightData.precio)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botón de confirmar compra */}
              <button
                onClick={handleConfirmPurchase}
                disabled={
                  isProcessing ||
                  !cardData.number ||
                  !cardData.name ||
                  !cardData.expiry ||
                  !cardData.cvv
                }
                className={`
                  w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all mt-6
                  ${
                    isProcessing ||
                    !cardData.number ||
                    !cardData.name ||
                    !cardData.expiry ||
                    !cardData.cvv
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-[1.02]"
                  }
                `}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Procesando Pago...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2 cursor-pointer">
                    <CheckCircle className="w-5 h-5" />
                    <span>Confirmar Compra</span>
                  </div>
                )}
              </button>

              {/* Términos */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Al confirmar tu compra, aceptas nuestros{" "}
                <button className="text-orange-500 hover:text-orange-600 underline">
                  términos y condiciones
                </button>{" "}
                y{" "}
                <button className="text-orange-500 hover:text-orange-600 underline">
                  política de privacidad
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
