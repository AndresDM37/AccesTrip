import { useState, useEffect } from "react";
import { DestinationProvider } from "./context/DestinationContext";
import { UserProvider } from "./context/UserContext";

import SecondLanding from "./components/Landing/SecondLanding";
import Thirdlanding from "./components/Landing/ThirdLanding";
import Sidebar from "./components/layout/Sidebar";
import BottomNavigation from "./components/layout/BottomNavigation"; // <-- IMPORTA el BottomNavigation aquí

import LandingPage from "./views/LandingPage";
import Login from "./views/login";
import Registro from "./views/registro";
import RecuperarContr from "./views/RecuperContraseña";
import CambiarContr from "./views/CambiarContr";
import HomeView from "./views/Home";
import ExploreView from "./views/ExploreView";
import FavoritesView from "./views/FavoritesView";
import MessagesView from "./views/MessagesView";
import ProfileView from "./views/ProfileView";
import AllPackages from "./views/AllPackages";
import Reservation from "./views/Reservation";
import ConfirmPayment from "./views/ConfirmPayment";

const pathToTab = {
  "/": "landing",
  "/segunda": "secondlanding",
  "/tercera": "thirdlanding",
  "/login": "login",
  "/registro": "registro",
  "/recuperarContr": "recuperar",
  "/cambiarContr": "cambiar",
  "/inicio": "inicio",
  "/mapa": "mapa",
  "/favoritos": "favoritos",
  "/mensajes": "mensajes",
  "/perfil": "perfil",
  "/paquetes": "paquetes",
  "/reserva": "reserva",
  "/pago": "pago",
};

const tabToPath = Object.entries(pathToTab).reduce((acc, [path, tab]) => {
  acc[tab] = path;
  return acc;
}, {});

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const initialPath = window.location.pathname;
    return pathToTab[initialPath] || "landing";
  });

  useEffect(() => {
    const handleRoute = () => {
      const currentPath = window.location.pathname;
      const tab = pathToTab[currentPath] || "landing";
      console.log("📍 Ruta actual:", currentPath);
      console.log("🧭 Tab resuelto:", tab);
      setActiveTab(tab);
    };

    window.addEventListener("popstate", handleRoute);
    return () => window.removeEventListener("popstate", handleRoute);
  }, []);

  useEffect(() => {
    const newPath = tabToPath[activeTab];
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, "", newPath);
    }
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      case "landing":
        return <LandingPage setActiveTab={setActiveTab} />;
      case "secondlanding":
        return <SecondLanding setActiveTab={setActiveTab} />;
      case "thirdlanding":
        return <Thirdlanding setActiveTab={setActiveTab} />;
      case "login":
        return <Login setActiveTab={setActiveTab} />;
      case "registro":
        return <Registro setActiveTab={setActiveTab} />;
      case "recuperar":
        return <RecuperarContr setActiveTab={setActiveTab} />;
      case "cambiar":
        return <CambiarContr setActiveTab={setActiveTab} />;
      case "inicio":
        return <HomeView activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "mapa":
        return (
          <ExploreView activeTab={activeTab} setActiveTab={setActiveTab} />
        );
      case "favoritos":
        return (
          <FavoritesView activeTab={activeTab} setActiveTab={setActiveTab} />
        );
      case "mensajes":
        return (
          <MessagesView activeTab={activeTab} setActiveTab={setActiveTab} />
        );
      case "perfil":
        return <ProfileView activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "paquetes":
        return <AllPackages activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "reserva":
        return <Reservation activeTab={activeTab} setActiveTab={setActiveTab} />;
      default:
        return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  // Aquí la clave:
  const isAuthLayout = !["landing", "secondlanding", "thirdlanding", "login", "registro", "recuperar", "cambiar"].includes(activeTab);

  return (
  <UserProvider>
    <DestinationProvider>
      {isAuthLayout ? (
        <div className="flex min-h-screen bg-gray-100 flex-col">
          <div className="flex flex-1">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1">{renderActiveView()}</div>
          </div>
          {/* BottomNavigation solo visible en móvil */}
          <div className="block md:hidden">
            <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      ) : (
        renderActiveView()
      )}
    </DestinationProvider>
  </UserProvider>
);
}
