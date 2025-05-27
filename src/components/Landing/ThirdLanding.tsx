import { motion } from "framer-motion";

interface Props {
  setActiveTab: (tab: "mainlanding" | "secondlanding" | "thirdlanding" | "inicio") => void;
  direction: number;
}

export default function ThirdLanding({ setActiveTab, direction }: Props) {
  const handleNext = () => setActiveTab("inicio");

  const variants = {
    initial: {
      x: "100%", // Siempre entra desde la derecha
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    }),
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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/amazonas.jpg')",
          filter: "blur(4px) brightness(0.5)",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <div className="max-w-xl">
          <motion.h1 
            className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          >
            La gente no viaja,<br />
            los viajes llevan a<br />
            la <span className="text-orange-400">gente.</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-gray-300 text-base md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
          >
            Para disfrutar al máximo de tu aventura sólo tienes que salir e ir donde más te guste. Te esperamos.
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
            Iniciar Sesión
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}