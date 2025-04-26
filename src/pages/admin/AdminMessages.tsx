import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { MessageSquareIcon, SendIcon, SmileIcon, ImageIcon, TrashIcon } from 'lucide-react';
import EmojiPicker from '../../components/EmojiPicker';
import { useFirebaseData } from '../../lib/hooks/useFirebase';
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'admin';
  time: string;
  date: string;
  status: 'sent' | 'delivered' | 'read';
  reactions: [];
  imageUrl?: string;
  deleted?: boolean;
}
const AdminMessages = () => {
  const {
    data: messages = [],
    loading,
    updateData
  } = useFirebaseData<Message[]>('messages', []);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSendMessage = async () => {
    if (!message.trim() && !selectedImage) return;
    const newMessage: Message = {
      id: Date.now(),
      text: message,
      sender: 'admin',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      date: new Date().toLocaleDateString(),
      status: 'sent',
      reactions: [],
      imageUrl: selectedImage || undefined
    };
    const updatedMessages = [...messages, newMessage];
    await updateData(updatedMessages);
    setMessage('');
    setSelectedImage(null);
    setTimeout(() => updateMessageStatus(newMessage.id, 'delivered'), 1000);
    setTimeout(() => updateMessageStatus(newMessage.id, 'read'), 2000);
  };
  const updateMessageStatus = async (messageId: number, status: Message['status']) => {
    const updatedMessages = messages.map(msg => msg.id === messageId ? {
      ...msg,
      status
    } : msg);
    await updateData(updatedMessages);
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Please upload only image files');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleEmojiSelect = (emoji: string) => {
    setMessage(prev => prev + emoji);
  };
  return <div className="h-[calc(100vh-theme(space.32))]">
      <h1 className="text-2xl font-bold text-[#a67c52] mb-6">Chat Messages</h1>
      <div className="h-[calc(100%-theme(space.20))]">
        <Card className="h-full flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4">
                <MessageSquareIcon className="w-6 h-6 text-[#8a6f5c]" />
              </div>
              <h2 className="text-lg font-bold text-[#8a6f5c]">Live Chat</h2>
            </div>
            <div className="flex-1 bg-[#f8f0e3] rounded-xl p-4 overflow-y-auto mb-4">
              <div className="space-y-4">
                {messages.map(msg => <div key={msg.id} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[280px] rounded-2xl px-4 py-2 transform transition-all duration-300 ease-out animate-fade-in
                        ${msg.deleted ? 'bg-gray-200 text-gray-500 italic' : msg.sender === 'admin' ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'bg-white text-[#333]'}`}>
                      {msg.imageUrl && <img src={msg.imageUrl} alt="Attached" className="w-full h-48 object-cover rounded-lg mb-2" onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300?text=Image+Error';
                  }} />}
                      <p className={msg.deleted ? 'text-sm' : ''}>{msg.text}</p>
                      <p className={`text-xs ${msg.sender === 'admin' ? 'text-[#a67c52]' : 'text-[#999]'} text-right mt-1`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>)}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#f8f0e3] rounded-full p-2">
              <button onClick={() => fileInputRef.current?.click()} className="p-2 text-[#a67c52]">
                <ImageIcon className="w-6 h-6" />
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
              <div className="relative">
                <button className="p-2 text-[#a67c52]" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                  <SmileIcon className="w-6 h-6" />
                </button>
                {showEmojiPicker && <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowEmojiPicker(false)} />
                    <div className="relative z-20">
                      <EmojiPicker onEmojiSelect={emoji => {
                    setMessage(prev => prev + emoji);
                  }} onClose={() => setShowEmojiPicker(false)} />
                    </div>
                  </>}
              </div>
              {selectedImage && <div className="absolute bottom-full mb-2 left-0">
                  <div className="relative inline-block">
                    <img src={selectedImage} alt="To be sent" className="h-20 w-auto rounded-lg" />
                    <button onClick={() => setSelectedImage(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>}
              <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type a message..." className="flex-1 bg-transparent outline-none px-2" />
              <button onClick={handleSendMessage} disabled={!message.trim() && !selectedImage} className={`rounded-full p-2 transition-colors ${message.trim() || selectedImage ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'bg-[#d9d9d9] text-[#999]'}`}>
                <SendIcon className="w-6 h-6" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminMessages;