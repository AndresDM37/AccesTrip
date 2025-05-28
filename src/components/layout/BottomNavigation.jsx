import { Home, Map, Heart, MessageSquare, User } from "lucide-react";

const tabs = [
  { id: "inicio", icon: Home, label: "Inicio" },
  { id: "mapa", icon: Map, label: "Explorar" },
  { id: "favoritos", icon: Heart, label: "Favoritos" },
  { id: "mensajes", icon: MessageSquare, label: "Mensajes" },
  { id: "perfil", icon: User, label: "Perfil" },
];

export default function BottomNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-10">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <div
            key={tab.id}
            className={`flex flex-col items-center cursor-pointer ${
              activeTab === tab.id ? "text-orange-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)} // Solo actualiza el estado
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}