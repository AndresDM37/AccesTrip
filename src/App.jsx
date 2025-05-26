import { useState } from "react";
import HomeView from "./views/Home";
import ExploreView from "./views/ExploreView";
import FavoritesView from "./views/FavoritesView";
import MessagesView from "./views/MessagesView";
import ProfileView from "./views/ProfileView";
import { DestinationProvider } from "./context/DestinationContext";
import Sidebar from "./components/layout/Sidebar"; 

export default function App() {
  const [activeTab, setActiveTab] = useState("inicio");

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
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1">{renderActiveView()}</div>
      </div>
    </DestinationProvider>
  );
}
