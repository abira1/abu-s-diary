import { useEffect, useRef } from 'react';
import { useMessages } from '../App';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Message } from '../types';
const Chat = () => {
  const { messages } = useMessages() ;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <Link to="/" className="flex items-center text-[#a67c52] transform transition-all duration-300 hover:scale-105 active:scale-95">
          <ArrowLeftIcon className="w-5 h-5 mr-1" />
          <span>Back</span>
        </Link>
        <h2 className="text-xl font-bold text-[#a67c52]">Live Chat</h2>
      </div>
      <div className="h-[calc(100vh-theme(space.32))]">
        <div className="h-full bg-[#f8f0e3] rounded-xl p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg:Message) => <div key={msg.timestamp} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[280px] rounded-2xl px-4 py-2 transform transition-all duration-300 ease-out animate-fade-in ${msg.sender === 'admin' ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'bg-white text-[#333]'}`}>
                   {msg.imageUrl && <img src={msg.imageUrl} alt="Attached" className="w-full h-48 object-cover rounded-lg mb-2" onError={e => {
                    const target = e.target as HTMLImageElement ;
                    target.src = 'https://via.placeholder.com/400x300?text=Image+Error';
                  }} />}
                  <p>{msg.text}</p>
                  <p className={`text-xs ${msg.sender === 'admin' ? 'text-[#a67c52]' : 'text-[#999]'} text-right mt-1`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  </p>
                </div>
              </div>)}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div>;
  );
};
export default Chat;