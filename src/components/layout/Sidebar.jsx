import { Home, Map, Heart, MessageSquare, User } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 bg-white shadow-lg hidden md:flex flex-col">
      <div className="p-4 flex items-center justify-center border-b">
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          A
        </div>
        <a href="/inicio" className="ml-2 font-bold text-lg">ACCESSTRIP</a>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li
            className={`flex items-center p-3 rounded-lg ${
              activeTab === "inicio" ? "bg-orange-50 text-orange-500" : ""
            }`}
            onClick={() => setActiveTab("inicio")}
          >
            <Home className="w-5 h-5 mr-3" />
            <span className="font-medium cursor-pointer">Inicio</span>
          </li>
          <li
            className={`flex items-center p-3 rounded-lg ${
              activeTab === "mapa" ? "bg-orange-50 text-orange-500" : ""
            }`}
            onClick={() => setActiveTab("mapa")}
          >
            <Map className="w-5 h-5 mr-3" />
            <span className="font-medium cursor-pointer">Explorar</span>
          </li>
          <li
            className={`flex items-center p-3 rounded-lg ${
              activeTab === "favoritos" ? "bg-orange-50 text-orange-500" : ""
            }`}
            onClick={() => setActiveTab("favoritos")}
          >
            <Heart className="w-5 h-5 mr-3" />
            <span className="font-medium cursor-pointer">Favoritos</span>
          </li>
          <li
            className={`flex items-center p-3 rounded-lg ${
              activeTab === "mensajes" ? "bg-orange-50 text-orange-500" : ""
            }`}
            onClick={() => setActiveTab("mensajes")}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            <span className="font-medium cursor-pointer">Mensajes</span>
          </li>
          <li
            className={`flex items-center p-3 rounded-lg ${
              activeTab === "perfil" ? "bg-orange-50 text-orange-500" : ""
            }`}
            onClick={() => setActiveTab("perfil")}
          >
            <User className="w-5 h-5 mr-3" />
            <span className="font-medium cursor-pointer">Mi Perfil</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}