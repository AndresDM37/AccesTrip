import { useState } from "react";
import { Edit3, Search } from "lucide-react";

import PageLayout from "../components/layout/PageLayout";
import ChatView from "../components/messages/ChatView";

const MessagesView = () => {
  const [activeTab, setActiveTab] = useState("mensajes");
  const [selectedChat, setSelectedChat] = useState(null);

  const conversations = [
    {
      id: 1,
      name: "Ahmed anjims",
      lastMessage: "Hola, Mariana! 🤙 Como has estado?",
      time: "08:45",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
      online: true,
      status: "En línea"
    },
    {
      id: 2,
      name: "alem leain",
      lastMessage: "Escribiendo...",
      time: "08:2",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c265?w=40&h=40&fit=crop&crop=face&auto=format",
      online: true,
      typing: true,
      status: "En línea"
    }
  ];

  const chatMessages = {
    1: [
      {
        id: 1,
        text: "Hola! 9:24 ✓",
        sender: "other",
        time: "9:24",
        delivered: true
      },
      {
        id: 2,
        text: "Muchas gracias por vuestro viaje, nos gustaron mucho los apartamentos nos quedaremos aquí otros 5 días...",
        sender: "other",
        time: "9:25",
        delivered: true
      },
      {
        id: 3,
        text: "Hola! 9:24 ✓",
        sender: "me",
        time: "9:24",
        delivered: true
      },
      {
        id: 4,
        text: "Estoy muy contento de que te guste😊",
        sender: "me",
        time: "9:25",
        delivered: true,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
      },
      {
        id: 5,
        text: "Llegaremos hoy a la 01:45, ¿habrá alguien en casa?",
        sender: "me",
        time: "9:37",
        delivered: true,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
      },
      {
        id: 6,
        text: "Estaré en casa 9:39 ✓",
        sender: "other",
        time: "9:39",
        delivered: true
      }
    ],
    2: [
      {
        id: 1,
        text: "¡Hola! ¿Cómo estás?",
        sender: "other",
        time: "8:00",
        delivered: true
      },
      {
        id: 2,
        text: "¡Muy bien, gracias! ¿Y tú?",
        sender: "me",
        time: "8:01",
        delivered: true,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
      }
    ]
  };

  const handleChatSelect = (conversation) => {
    setSelectedChat(conversation);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  // Si hay un chat seleccionado, mostrar el ChatView
  if (selectedChat) {
    return (
      <ChatView 
        selectedChat={selectedChat}
        onBack={handleBackToList}
        messages={chatMessages[selectedChat.id]}
      />
    );
  }
    return (
      <PageLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {/* Sub-header with title and edit icon */}
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-xl font-bold text-gray-900">Mensajes</h2>
          <Edit3 className="w-5 h-5 text-gray-600" />
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar chats & mensajes"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 px-4">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center space-x-3 py-3 hover:bg-gray-50 rounded-lg px-2 cursor-pointer"
              onClick={() => handleChatSelect(conversation)}
            >
              {/* Avatar with online indicator */}
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    {conversation.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {conversation.online && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                    <span className="text-xs text-gray-500">
                      {conversation.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <p
                    className={`text-sm truncate ${
                      conversation.typing ? "text-orange-500" : "text-gray-600"
                    }`}
                  >
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    );
};

export default MessagesView;
