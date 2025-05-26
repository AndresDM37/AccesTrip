import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { MessageSquare } from "lucide-react";

const MessagesView = () => {
  const [activeTab, setActiveTab] = useState("mensajes");

  const conversations = [
    {
      id: 1,
      name: "Amed anjims",
      lastMessage: "Hola, Mariana! 🤙 Como has estado?",
      time: "08:45",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
      online: true
    },
    {
      id: 2,
      name: "alem leain",
      lastMessage: "Escribiendo...",
      time: "08:2",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c265?w=40&h=40&fit=crop&crop=face&auto=format",
      online: true,
      typing: true
    }
  ];

  return (
    <PageLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-xl font-bold text-gray-900">Mensajes</h2>
      </div>
      <div className="text-center py-10">
        <div className="mx-auto bg-orange-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
          <MessageSquare className="w-8 h-8 text-orange-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Mensajes</h1>
        <p className="text-gray-600 mb-4">
          Comunícate con guías y hosts de tus destinos favoritos
        </p>
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <p className="text-gray-500">
            ¡Próximamente! Estamos trabajando en un sistema de mensajería para mejorar tu experiencia.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default MessagesView;
