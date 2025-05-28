
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainLanding from "./MainLanding";
import SecondLanding from "./SecondLanding";
import ThirdLanding from "./ThirdLanding";
import Login from "../../views/login";

// Exportamos el tipo para que pueda ser importado en otros archivos
export type LandingTab =
  | "mainlanding"
  | "secondlanding"
  | "thirdlanding"
  | "login";

export default function LandingContainer() {
  const [activeTab, setActiveTab] = useState<LandingTab>("mainlanding");
  const [direction, setDirection] = useState(0);

  const handleChangeTab = (tab: LandingTab) => {
    const tabOrder: LandingTab[] = [
      "mainlanding",
      "secondlanding",
      "thirdlanding",
      "login"
    ];
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(tab);

    if (currentIndex !== -1 && newIndex !== -1) {
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

        {/* Puedes añadir otros tabs aquí si lo necesitas */}
      </AnimatePresence>
    </div>
  );
}
