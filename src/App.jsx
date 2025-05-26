import { useState } from "react";
import HomeView from "./views/Home";
import ExploreView from "./views/ExploreView";
import FavoritesView from "./views/FavoritesView";
import MessagesView from "./views/MessagesView";
import ProfileView from "./views/ProfileView";
import { DestinationProvider } from "./context/DestinationContext";

export default function App() {
  const [activeTab, setActiveTab] = useState("inicio");

  // Función para renderizar la vista activa según la pestaña seleccionada
  const renderActiveView = () => {
    switch (activeTab) {
      case "inicio":
        return <HomeView />;
      case "mapa":
        return <ExploreView />;
      case "favoritos":
        return <FavoritesView />;
      case "mensajes":
        return <MessagesView />;
      case "perfil":
        return <ProfileView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <DestinationProvider>
      <div className="flex min-h-screen bg-gray-100">
        {renderActiveView()}
      </div>
    </DestinationProvider>
  );
}