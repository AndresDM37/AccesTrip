import { motion } from "framer-motion";

interface Props {
  setActiveTab: (tab: "secondlanding" ) => void;
  direction: number;
}

export default function MainLanding({ setActiveTab }: Props) {
  const handleStart = () => setActiveTab("secondlanding");

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      exit={{
        x: "-100%",
        opacity: 1,
        transition: { duration: 1.2, ease: "easeInOut" },
      }}
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
          <motion.h1
            className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          >
            La vida es breve,
            <br />
            pero el universo
            <br />
            es <span className="text-orange-400">inmenso.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-300 text-base md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
          >
            En AccessTrip, creamos conexiones auténticas entre viajeros y comunidades locales,
            ofreciendo experiencias únicas que enriquecen tanto a los visitantes como a los anfitriones.
          </motion.p>

          <motion.button
            onClick={handleStart}
            className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos a comenzar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
