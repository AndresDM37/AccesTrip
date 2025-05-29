import { useState, useEffect, useRef } from "react";
import PageLayout from "../components/layout/PageLayout";
import { User, Settings, CreditCard, Clock, LogOut } from "lucide-react";
import { useUser } from "../context/UserContext";

const ProfileView = () => {
  const [activeTab, setActiveTab] = useState("perfil");
  const { user } = useUser();

  const [menuOpen, setMenuOpen] = useState(false);
  const [extraInfo, setExtraInfo] = useState({
    birthDate: "",
    city: "",
    age: "",
  });

  const menuRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("userExtraInfo");
    if (saved) {
      setExtraInfo(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const menuItems = [
    { icon: <User className="w-5 h-5" />, text: "Editar perfil", onClick: () => alert("Editar perfil") },
    {
      icon: <Settings className="w-5 h-5" />,
      text: "Cambiar clave",
      onClick: () => {
        window.location.href = "/CambiarContr";
      },
    },
    { icon: <CreditCard className="w-5 h-5" />, text: "Métodos de pago", onClick: () => alert("Métodos de pago") },
    { icon: <Clock className="w-5 h-5" />, text: "Historial de viajes", onClick: () => alert("Historial de viajes") },
    {
      icon: <LogOut className="w-5 h-5" />,
      text: "Cerrar sesión",
      onClick: () => {
        localStorage.clear();
        window.location.href = "/login";
      },
    },
  ];

  return (
    <PageLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="h-auto px-4 flex justify-center items-start pt-10 md:pt-20">
        <div className="relative bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-8 mx-auto w-full max-w-4xl">
          {/* Menú settings */}
          <div ref={menuRef} className="absolute top-4 right-4 md:top-6 md:right-6 z-50 group">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative p-2 md:p-3 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition shadow-md"
              aria-label="Abrir menú de opciones"
              type="button"
            >
              <Settings className="w-6 h-6 md:w-8 md:h-8 text-white" />
              {/* Tooltip accesible */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                Configuraciones
              </span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-lg shadow-xl animate-fadeIn z-50 py-2 min-w-[12rem]">
                {menuItems.map(({ icon, text, onClick }, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onClick();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-5 py-3 text-left text-gray-800 hover:bg-orange-50 transition font-medium"
                  >
                    <div className="text-orange-500">{icon}</div>
                    <span>{text}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contenido principal */}
          <div className="flex flex-col items-center w-full space-y-4">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
              <img
                src="https://i.pravatar.cc/256"
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center w-full">
              {user?.name || "Usuario"}
            </h2>
            <p className="text-base md:text-lg text-gray-600 text-center w-full">
              {user?.email || "usuario@ejemplo.com"}
            </p>

            {/* Info extra con inputs apilados en móvil */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-md justify-center">
              <div className="flex flex-col flex-1">
                <label className="text-sm font-semibold text-orange-600 mb-1 text-center">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  value={extraInfo.birthDate || ""}
                  readOnly
                  disabled
                  className="bg-orange-50 border border-orange-300 rounded-md px-3 py-2 text-gray-700 text-center focus:outline-none cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-sm font-semibold text-orange-600 mb-1 text-center">
                  Ciudad
                </label>
                <input
                  type="text"
                  value={extraInfo.city || ""}
                  readOnly
                  disabled
                  className="bg-orange-50 border border-orange-300 rounded-md px-3 py-2 text-gray-700 text-center focus:outline-none cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-sm font-semibold text-orange-600 mb-1 text-center">
                  Edad
                </label>
                <input
                  type="text"
                  value={extraInfo.age || ""}
                  readOnly
                  disabled
                  className="bg-orange-50 border border-orange-300 rounded-md px-3 py-2 text-gray-700 text-center focus:outline-none cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animación fadeIn para el menú */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: trax
          .animate-fadeIn {
            animation: fadeIn 0.2s ease forwards;
          }
        `}
      </style>
    </PageLayout>
  );
};

export default ProfileView;
