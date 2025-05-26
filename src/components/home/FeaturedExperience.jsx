import { useState, useEffect } from "react";
import { motion } from "@motionone/react";

const FeaturedExperience = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Cuando el popup está activo, evitamos el scroll en el body
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Limpieza cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Experiencia Destacada
        </h2>
      </div>

      {/* Versión normal */}
      <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${isExpanded ? 'blur-sm' : ''}`}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/images/eje-cafetero.jpg"
              alt="Experiencia Destacada"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">
              Ruta del Café: Eje Cafetero
            </h3>
            <p className="text-gray-600 mb-4">
              Disfruta de paisajes espectaculares, aprende sobre el proceso del
              café y conoce la hospitalidad de la región cafetera de Colombia.
            </p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 font-medium">4.9</span>
                <span className="ml-2 text-gray-500">(128 reseñas)</span>
              </div>
              <div className="font-bold text-lg text-orange-500">
                $120/persona
              </div>
            </div>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium self-start hover:bg-orange-600 transition-colors cursor-pointer"
              onClick={handleToggleExpand}
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      {/* Overlay con blur para el fondo cuando el popup está activo */}
      {isExpanded && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={handleToggleExpand}
        />
      )}

      {/* Versión expandida como popup */}
      {isExpanded && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic en el popup
          >
            <div className="relative">
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10 cursor-pointer"
                onClick={handleToggleExpand}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src="/images/eje-cafetero.jpg"
                    alt="Experiencia Destacada"
                    className="w-full h-72 lg:h-full object-cover"
                  />
                </div>

                <div className="lg:w-1/2 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">
                      Ruta del Café: Eje Cafetero
                    </h3>

                    <div className="flex items-center mb-4">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-2 font-medium">4.9</span>
                      <span className="ml-2 text-gray-500">(128 reseñas)</span>
                    </div>

                    <div className="mb-6">
                      <p className="text-lg font-bold text-orange-500 mb-1">
                        $120/persona
                      </p>
                      <p className="text-sm text-gray-500">
                        Duración: 3 días / 2 noches
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mb-6"
                  >
                    <h4 className="font-bold text-lg mb-2">Descripción</h4>
                    <p className="text-gray-700 mb-4">
                      Disfruta de paisajes espectaculares, aprende sobre el
                      proceso del café y conoce la hospitalidad de la región
                      cafetera de Colombia. Esta experiencia única te llevará
                      por los mejores lugares del Eje Cafetero, declarado
                      Patrimonio Cultural de la Humanidad por UNESCO.
                    </p>
                    <p className="text-gray-700">
                      Visitarás fincas cafeteras tradicionales, aprenderás de
                      primera mano el proceso completo del café, desde la
                      siembra hasta la taza, y disfrutarás de hermosos paisajes
                      montañosos rodeados de naturaleza.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mb-6"
                  >
                    <h4 className="font-bold text-lg mb-2">Lo que incluye:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>Transporte desde aeropuerto</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>Alojamiento en finca cafetera</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>Tour por plantaciones de café</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>Taller de catación de café</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>Desayunos tradicionales</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex-1">
                      Reservar ahora
                    </button>
                    <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors flex-1">
                      Añadir a favoritos
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default FeaturedExperience;