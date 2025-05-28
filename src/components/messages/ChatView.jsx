import { ChevronLeft, Phone, Paperclip, Mic } from 'lucide-react';

// Componente del Chat Individual
const ChatView = ({ selectedChat, onBack, messages }) => {
  return (
    <div className="w-full max-w mx-auto bg-white min-h-screen flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
        <div className="flex items-center space-x-3">
          <button onClick={onBack}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
            <p className="text-sm text-orange-500">{selectedChat.status}</p>
          </div>
        </div>
        <Phone className="w-6 h-6 text-gray-600" />
      </div>

      {/* Date indicator */}
      <div className="flex justify-center py-2">
        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Hoy</span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages?.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end space-x-2 max-w-xs ${message.sender === 'me' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {message.sender === 'me' && message.avatar && (
                <img
                  src={message.avatar}
                  alt="Mi avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}
              <div className={`px-4 py-2 rounded-2xl ${
                message.sender === 'me' 
                  ? 'bg-orange-500 text-white rounded-br-md' 
                  : 'bg-gray-100 text-gray-900 rounded-bl-md'
              }`}>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center space-x-3">
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Escribe un mensaje"
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <Paperclip className="w-5 h-5 text-gray-500 ml-2" />
          </div>
          <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Mic className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom indicator line */}
      <div className="w-32 h-1 bg-black rounded-full mx-auto mb-2"></div>
    </div>
  );
};

export default ChatView;