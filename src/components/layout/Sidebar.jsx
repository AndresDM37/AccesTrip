import { Home, Map, Heart, MessageSquare, User } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 h-screen bg-white shadow-lg hidden md:flex flex-col justify-between">
      <div>
        <div className="p-4 flex items-center justify-center border-b">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <a href="/inicio" className="ml-2 font-bold text-lg">ACCESSTRIP</a>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { id: "inicio", label: "Inicio", icon: <Home className="w-5 h-5 mr-3" /> },
              { id: "mapa", label: "Explorar", icon: <Map className="w-5 h-5 mr-3" /> },
              { id: "favoritos", label: "Favoritos", icon: <Heart className="w-5 h-5 mr-3" /> },
              { id: "mensajes", label: "Mensajes", icon: <MessageSquare className="w-5 h-5 mr-3" /> },
              { id: "perfil", label: "Mi Perfil", icon: <User className="w-5 h-5 mr-3" /> },
            ].map((item) => (
              <li
                key={item.id}
                className={`flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer 
                  ${
                    activeTab === item.id
                      ? "bg-orange-50 text-orange-500 shadow"
                      : "text-gray-700 hover:bg-orange-100 hover:shadow-md"
                  }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-400 p-4 border-t">
        Accesstrip - ©2025
      </div>
    </div>
  );
}
