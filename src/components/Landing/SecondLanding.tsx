import { motion } from "framer-motion";

interface Props {
  setActiveTab: (tab: "thirdlanding" ) => void;
  direction: number;
}

export default function SecondLanding({ setActiveTab, direction }: Props) {
  const handleNext = () => {
    setActiveTab("thirdlanding");
  };

  const variants = {
    initial: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%", // Si direction es -1, entra desde la izquierda
      opacity: 1,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      x: "-100%", // Siempre sale hacia la izquierda
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Fondo con imagen y overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/coveñas.jpg')",
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
            transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
          >
            El mundo te está
            <br />
            esperando, ve a
            <br />
            <span className="text-orange-400">descubrirlo.</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1.2, ease: "easeOut" }}
          >
            Embárquese en un viaje inolvidable aventurándose fuera de su zona de confort.
            El mundo está lleno de joyas ocultas que esperan ser descubiertas.
          </motion.p>
          <motion.button
            onClick={handleNext}
            className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Siguiente
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}