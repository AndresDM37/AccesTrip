import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainLanding from "./MainLanding";
import SecondLanding from "./SecondLanding";
import ThirdLanding from "./ThirdLanding";

type LandingTab = "mainlanding" | "secondlanding" | "thirdlanding" | "inicio";

export default function LandingContainer() {
  const [activeTab, setActiveTab] = useState<LandingTab>("mainlanding");
  const [direction, setDirection] = useState(0);

  const handleChangeTab = (tab: LandingTab) => {
    // Lógica específica para las transiciones
    if (activeTab === "mainlanding" && tab === "secondlanding") {
      setDirection(-1); // SecondLanding entra desde la izquierda
    } else if (activeTab === "secondlanding" && tab === "thirdlanding") {
      setDirection(1); // ThirdLanding entra desde la derecha
    } else {
      // Para otras transiciones (navegación hacia atrás, etc.)
      const tabOrder: LandingTab[] = ["mainlanding", "secondlanding", "thirdlanding", "inicio"];
      const currentIndex = tabOrder.indexOf(activeTab);
      const newIndex = tabOrder.indexOf(tab);
      setDirection(newIndex > currentIndex ? 1 : -1);
    }
    
    setActiveTab(tab);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait" custom={direction}>
        {activeTab === "mainlanding" && (
          <MainLanding
            key="mainlanding"
            setActiveTab={handleChangeTab}
            direction={direction}
          />
        )}
        {activeTab === "secondlanding" && (
          <SecondLanding
            key="secondlanding"
            setActiveTab={handleChangeTab}
            direction={direction}
          />
        )}
        {activeTab === "thirdlanding" && (
          <ThirdLanding
            key="thirdlanding"
            setActiveTab={handleChangeTab}
            direction={direction}
          />
        )}
        {activeTab === "inicio" && (
          <motion.div 
            key="inicio" 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600"
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }}
            exit={{ x: "-100%", opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }}
          >
            <h1 className="text-white text-4xl font-bold">¡Bienvenido a AccessTrip!</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}