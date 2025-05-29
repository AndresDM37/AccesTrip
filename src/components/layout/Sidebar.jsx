import { Home, Map, Heart, MessageSquare, User, LogOut } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const handleLogout = () => {
    // localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-white shadow-lg hidden md:flex flex-col justify-between">
      <div className="flex-1 flex flex-col">
        {/* Header con logo y nombre */}
        <div className="pt-6 pb-3 px-4 flex items-center justify-center border-b border-gray-300">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <a href="/inicio" className="ml-3 font-bold text-2xl" title="Inicio">
            ACCESSTRIP
          </a>
        </div>

        {/* Navegación */}
        <nav className="px-4 pt-8 pb-4 flex-1">
          <ul className="space-y-4">
            {[
              { id: "inicio", label: "Inicio", icon: <Home className="w-6 h-6 mr-3" /> },
              { id: "mapa", label: "Explorar", icon: <Map className="w-6 h-6 mr-3" /> },
              { id: "favoritos", label: "Favoritos", icon: <Heart className="w-6 h-6 mr-3" /> },
              { id: "mensajes", label: "Mensajes", icon: <MessageSquare className="w-6 h-6 mr-3" /> },
              { id: "perfil", label: "Mi Perfil", icon: <User className="w-6 h-6 mr-3" /> },
            ].map((item) => (
              <li
                key={item.id}
                className={`flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer
                  ${
                    activeTab === item.id
                      ? "bg-orange-50 text-orange-500 shadow-lg"
                      : "text-gray-700 hover:bg-orange-100 hover:shadow-md"
                  }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                <span className="font-medium text-base">{item.label}</span>
              </li>
            ))}

            {/* Botón de Cerrar Sesión */}
            <li
              className="flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer text-red-500 hover:bg-red-100 hover:shadow-md"
              onClick={handleLogout}
            >
              <LogOut className="w-6 h-6 mr-3" />
              <span className="font-medium text-base">Cerrar sesión</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 p-4 border-t border-gray-400">
        Accesstrip - ©2025
      </div>
    </div>
  );
}
