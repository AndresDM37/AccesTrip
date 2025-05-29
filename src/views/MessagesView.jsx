import { useState, useEffect } from "react";
import { Edit3, Search } from "lucide-react";

import PageLayout from "../components/layout/PageLayout";
import ChatView from "../components/messages/ChatView";

const MessagesView = () => {
  const [activeTab, setActiveTab] = useState("mensajes");
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // <---- Estado para la búsqueda
  const [conversations, setConversations] = useState([
    // ... tu array inicial sin cambios
  ]);

  const chatMessages = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  };

  useEffect(() => {
    // lógica para marcar mensajes nuevos (igual que antes)
    const getRandomIndexes = (count, max) => {
      const indexes = new Set();
      while (indexes.size < count) {
        indexes.add(Math.floor(Math.random() * max));
      }
      return Array.from(indexes);
    };

    const newIndexes = getRandomIndexes(5, conversations.length);

    setConversations((prev) =>
      prev.map((conv, idx) =>
        newIndexes.includes(idx)
          ? { ...conv, lastMessage: "Mensaje nuevo", isNew: true }
          : { ...conv, lastMessage: "", isNew: false }
      )
    );
  }, []);

  const handleChatSelect = (conversation) => {
    setSelectedChat(conversation);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  // Filtramos las conversaciones según el texto de búsqueda (nombre o último mensaje)
  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {/* Sub-header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-2xl font-semibold text-gray-800">Mensajes</h2>
        <Edit3 className="w-5 h-5 text-gray-500" />
      </div>

      {/* Search bar */}
      <div className="px-6 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar chats o mensajes"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
            value={searchTerm} // <-- bind value
            onChange={(e) => setSearchTerm(e.target.value)} // <-- actualizar estado al escribir
          />
        </div>
      </div>

      {/* Lista de conversaciones filtradas */}
      <div className="flex-1 overflow-y-auto px-4">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => handleChatSelect(conversation)}
            className="flex items-center gap-4 py-3 px-4 hover:bg-orange-50 rounded-xl cursor-pointer transition-shadow shadow-sm hover:shadow-md"
          >
            {/* Avatar + estado online */}
            <div className="relative">
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {conversation.online && (
                <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>

            {/* Info principal */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold text-gray-800 truncate">
                  {conversation.name}
                </h3>
                <span className="text-xs text-gray-500">{conversation.time}</span>
              </div>
              <p
                className={`text-sm truncate mt-1 ${
                  conversation.isNew ? "text-orange-500 font-medium" : "text-gray-600"
                }`}
              >
                {conversation.lastMessage}
              </p>
            </div>
          </div>
        ))}

        {/* Mensaje cuando no hay resultados */}
        {filteredConversations.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No se encontraron resultados.</p>
        )}
      </div>
    </PageLayout>
  );
};

export default MessagesView;
