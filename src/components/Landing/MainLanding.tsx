import { motion } from "framer-motion";

interface Props {
  setActiveTab: (tab: "mainlanding" | "secondlanding" | "thirdlanding" | "inicio") => void;
  direction: number;
}

export default function MainLanding({ setActiveTab, direction }: Props) {
  const handleStart = () => setActiveTab("secondlanding");

  const variants = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <div className="max-w-xl">
          <h1 
            className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight"
          >
            La vida es breve,
            <br />
            pero el universo
            <br />
            es <span className="text-orange-400">inmenso.</span>
          </h1>
          <p 
            className="mt-6 text-gray-300 text-base md:text-lg"
          >
            En AccessTrip, creamos conexiones auténticas entre viajeros y comunidades locales,
            ofreciendo experiencias únicas que enriquecen tanto a los visitantes como a los anfitriones.
          </p>
          <button
            onClick={handleStart}
            className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Vamos a comenzar
          </button>
        </div>
      </div>
    </motion.div>
  );
}