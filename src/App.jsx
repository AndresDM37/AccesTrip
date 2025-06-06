import { useState, useEffect } from "react";
import LandingPage from "./views/LandingPage";
import SecondLanding from "./components/Landing/SecondLanding";
import Thirdlanding from "./components/Landing/ThirdLanding";
import Login from "./views/login";
import Registro from "./views/registro";
import RecuperarContr from "./views/RecuperContraseña";
import HomeView from "./views/Home";
import ExploreView from "./views/ExploreView";
import FavoritesView from "./views/FavoritesView";
import MessagesView from "./views/MessagesView";
import ProfileView from "./views/ProfileView";
import { DestinationProvider } from "./context/DestinationContext";
import Sidebar from "./components/layout/Sidebar";

// Mapea las rutas con tus tabs
const pathToTab = {
  "/": "landing",
  "/segunda": "secondlanding",
  "/tercera": "thirdlanding",
  "/login": "login",
  "/registro": "registro",
  "/recuperarContr": "recuperar",
  "/inicio": "inicio",
  "/mapa": "mapa",
  "/favoritos": "favoritos",
  "/mensajes": "mensajes",
  "/perfil": "perfil",
};

export default function App() {
  const [activeTab, setActiveTab] = useState("landing");

  // Esto se ejecuta al inicio: lee la URL actual y cambia el tab
  useEffect(() => {
    const currentPath = window.location.pathname;
    const tab = pathToTab[currentPath] || "landing";
    setActiveTab(tab);
  }, []);

  // Cambiar la URL cuando cambia el tab
  useEffect(() => {
    const currentPath = Object.entries(pathToTab).find(
      ([, tab]) => tab === activeTab
    )?.[0];

    if (currentPath && window.location.pathname !== currentPath) {
      window.history.pushState({}, "", currentPath);
    }
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      case "landing":
        return <LandingPage setActiveTab={setActiveTab} />;
      case "secondlanding":
        return <SecondLanding setActiveTab={setActiveTab} />
      case "thirdlanding":
        return <Thirdlanding setActiveTab={setActiveTab} />
      case "login":
        return <Login setActiveTab={setActiveTab} />
      case "registro":
        return <Registro setActiveTab={setActiveTab} />
      case "recuperar":
        return <RecuperarContr setActiveTab={setActiveTab} />
      case "inicio":
        return <HomeView activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "mapa":
        return <ExploreView activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "favoritos":
        return <FavoritesView activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "mensajes":
        return <MessagesView activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "perfil":
        return <ProfileView activeTab={activeTab} setActiveTab={setActiveTab} />;
      default:
        return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  return (
  <DestinationProvider>
    {["landing", "secondlanding", "thirdlanding", "login", "registro", "recuperar"].includes(activeTab) ? (
      renderActiveView()
    ) : (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1">{renderActiveView()}</div>
      </div>
    )}
  </DestinationProvider>
);
}
