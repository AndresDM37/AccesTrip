import { motion } from "framer-motion";

export default function Thirdlanding({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const handleNext = () => {
    setActiveTab("inicio");
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
      {/* Fondo con imagen y overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/ponta-do-mangue.jpg')",
          filter: "blur(4px) brightness(0.5)",
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-xl">
        <h1 className="text-white font-extrabold leading-tight tracking-tight text-4xl md:text-5xl">
          La gente no viaja,
          <br />
          los viajes llevan a 
          <br />
          la <span className="text-orange-400">gente.</span>
        </h1>
        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed text-center">
          Para disfrutar al máximo de tu aventura sólo tienes que salir e ir donde más te guste. te esperamos
        </p>
        <button
          onClick={handleNext}
          className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition duration-300"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
