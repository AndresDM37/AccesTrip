export default function MainLanding({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const handleStart = () => {
    setActiveTab("inicio");
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/ponta-do-mangue.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          zIndex: 0,
        }}
      />

      {/* Overlay semitransparente para oscurecer */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-2xl px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-snug">
          La vida es breve,
          <br />
          pero el universo es <span className="text-orange-400">inmenso</span>.
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-300">
          En AccessTrip, creamos conexiones auténticas entre viajeros y comunidades locales,
          ofreciendo experiencias únicas que enriquecen tanto a los visitantes como a los anfitriones.
        </p>
        <button
          onClick={handleStart}
          className="mt-10 px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300"
        >
          Vamos a comenzar
        </button>
      </div>
    </div>
  );
}
