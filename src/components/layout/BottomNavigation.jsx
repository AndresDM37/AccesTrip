import { Home, Map, Heart, MessageSquare, User } from "lucide-react";

export default function BottomNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-10">
      <div
        className={`flex flex-col items-center ${
          activeTab === "inicio" ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("inicio")}
      >
        <Home className="w-6 h-6" />
        <span className="text-xs mt-1">Inicio</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "mapa" ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("mapa")}
      >
        <Map className="w-6 h-6" />
        <span className="text-xs mt-1">Explorar</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "favoritos" ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("favoritos")}
      >
        <Heart className="w-6 h-6" />
        <span className="text-xs mt-1">Favoritos</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "mensajes" ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("mensajes")}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="text-xs mt-1">Mensajes</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "perfil" ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("perfil")}
      >
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Perfil</span>
      </div>
    </div>
  );
}