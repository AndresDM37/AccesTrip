import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { User, Settings, CreditCard, Clock, LogOut } from "lucide-react";

const ProfileView = () => {
  const [activeTab, setActiveTab] = useState("perfil");

  const menuItems = [
    { icon: <User className="w-5 h-5" />, text: "Información personal" },
    { icon: <Settings className="w-5 h-5" />, text: "Configuración" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Métodos de pago" },
    { icon: <Clock className="w-5 h-5" />, text: "Historial de viajes" },
    { icon: <LogOut className="w-5 h-5" />, text: "Cerrar sesión" },
  ];

  return (
    <PageLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="py-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="Perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">Nombre de Usuario</h1>
          <p className="text-gray-600">usuario@correo.com</p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50"
            >
              <div className="text-gray-500 mr-4">{item.icon}</div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default ProfileView;