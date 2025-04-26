import React, { useEffect, useState, useRef } from 'react';
import { SendIcon, SmileIcon, SearchIcon, ImageIcon, TrashIcon, HeartIcon, CheckIcon, ReplyIcon, XIcon } from 'lucide-react';
import EmojiPicker from '../components/EmojiPicker';
import { useFirebaseData } from '../lib/hooks/useFirebase';
interface Reaction {
  emoji: string;
  count: number;
  users: string[];
}
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'admin';
  time: string;
  date: string;
  status: 'sent' | 'delivered' | 'read';
  reactions?: Reaction[];
  imageUrl?: string;
  deleted?: boolean;
  replyTo?: {
    id: number;
    text: string;
    sender: 'user' | 'admin';
  };
}
const Chat = () => {
  const {
    data: messages = [],
    loading,
    updateData
  } = useFirebaseData<Message[]>('messages', []);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [swipeState, setSwipeState] = useState<{
    messageId: number | null;
    offset: number;
    initialX: number;
  }>({
    messageId: null,
    offset: 0,
    initialX: 0
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
      sender: 'user',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      date: new Date().toLocaleDateString(),
      status: 'sent',
      imageUrl: selectedImage || undefined,
      reactions: [],
      replyTo: replyingTo ? {
        id: replyingTo.id,
        text: replyingTo.text,
        sender: replyingTo.sender
      } : undefined
    };
    const updatedMessages = [...messages, newMessage];
    await updateData(updatedMessages);
    setMessage('');
    setSelectedImage(null);
    setReplyingTo(null);
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
  const handleReaction = async (messageId: number, emoji: string) => {
    const updatedMessages = messages.map(msg => {
      if (msg.id === messageId) {
        const reactions = msg.reactions || [];
        const existingReaction = reactions.find(r => r.emoji === emoji);
        if (existingReaction) {
          return {
            ...msg,
            reactions: reactions.map(r => r.emoji === emoji ? {
              ...r,
              count: r.count + 1,
              users: [...r.users, 'user']
            } : r)
          };
        } else {
          return {
            ...msg,
            reactions: [...reactions, {
              emoji,
              count: 1,
              users: ['user']
            }]
          };
        }
      }
      return msg;
    });
    await updateData(updatedMessages);
  };
  const handleDeleteMessage = async (messageId: number) => {
    const updatedMessages = messages.map(msg => msg.id === messageId ? {
      ...msg,
      deleted: true,
      text: 'This message was deleted'
    } : msg);
    await updateData(updatedMessages);
  };
  const getMessagesByDate = () => {
    const filtered = messages.filter(msg => !searchQuery || msg.text.toLowerCase().includes(searchQuery.toLowerCase()));
    return filtered.reduce((groups: {
      [key: string]: Message[];
    }, message) => {
      const date = message.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
      return groups;
    }, {});
  };
  const renderMessage = (msg: Message) => <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`} onTouchStart={e => handleTouchStart(e, msg.id)} onTouchMove={handleTouchMove} onTouchEnd={() => handleTouchEnd(msg)}>
      <div className="group relative">
        <div className={`relative transform transition-all duration-300 ease-out 
            ${swipeState.messageId === msg.id ? `translate-x-[${swipeState.offset}px]` : ''}`}>
          {msg.replyTo && <div className="mb-2 px-4 py-2 bg-black/5 rounded-lg text-sm">
              <div className="flex items-center gap-2 text-[#8a6f5c]">
                <ReplyIcon className="w-4 h-4" />
                <span className="font-medium">
                  Reply to {msg.replyTo.sender === 'user' ? 'you' : 'admin'}
                </span>
              </div>
              <p className="text-[#666] line-clamp-1">{msg.replyTo.text}</p>
            </div>}
          <div className={`max-w-[280px] rounded-2xl px-4 py-2 transform transition-all duration-300 ease-out animate-fade-in
              ${msg.deleted ? 'bg-gray-200 text-gray-500 italic' : msg.sender === 'user' ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'bg-white text-[#333]'}`}>
            {msg.imageUrl && <img src={msg.imageUrl} alt="Attached" className="w-full h-48 object-cover rounded-lg mb-2" onError={e => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x300?text=Image+Error';
          }} />}
            <p className={msg.deleted ? 'text-sm' : ''}>{msg.text}</p>
            <div className="flex items-center justify-between mt-1">
              <span className={`text-xs ${msg.sender === 'user' ? 'text-[#a67c52]' : 'text-[#999]'}`}>
                {msg.time}
              </span>
              {msg.sender === 'user' && !msg.deleted && <div className="flex items-center space-x-1">
                  {renderMessageStatus(msg.status)}
                </div>}
            </div>
            {msg.reactions && msg.reactions.length > 0 && <div className="flex gap-1 mt-1">
                {msg.reactions.map((reaction, index) => <span key={index} className="bg-white/50 rounded-full px-2 py-1 text-xs">
                    {reaction.emoji} {reaction.count}
                  </span>)}
              </div>}
          </div>
          {swipeState.messageId === msg.id && swipeState.offset > 0 && <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 px-2">
              <ReplyIcon className={`w-5 h-5 transition-colors duration-300
                  ${swipeState.offset > 50 ? 'text-blue-500' : 'text-gray-400'}`} />
            </div>}
        </div>
      </div>
    </div>;
  const handleTouchStart = (e: TouchEvent, messageId: number) => {
    setSwipeState({
      messageId,
      offset: 0,
      initialX: e.touches[0].clientX
    });
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (swipeState.messageId === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - swipeState.initialX;
    const newOffset = Math.max(0, Math.min(100, diff));
    setSwipeState(prev => ({
      ...prev,
      offset: newOffset
    }));
  };
  const handleTouchEnd = (message: Message) => {
    if (swipeState.offset > 50) {
      setReplyingTo(message);
    }
    setSwipeState({
      messageId: null,
      offset: 0,
      initialX: 0
    });
  };
  const renderMessageStatus = (status: Message['status']) => {
    switch (status) {
      case 'sent':
        return <CheckIcon className="w-4 h-4 text-gray-400" />;
      case 'delivered':
        return <div className="flex">
            <CheckIcon className="w-4 h-4 text-gray-400" />
            <CheckIcon className="w-4 h-4 text-gray-400 -ml-2" />
          </div>;
      case 'read':
        return <div className="flex">
            <CheckIcon className="w-4 h-4 text-blue-400" />
            <CheckIcon className="w-4 h-4 text-blue-400 -ml-2" />
          </div>;
    }
  };
  const handleEmojiSelect = (emoji: string) => {
    setMessage(prev => prev + emoji);
  };
  return <div className="h-full flex flex-col bg-[#e6e6e6] rounded-3xl shadow-md">
      <div className="flex-shrink-0 px-4 py-3 flex items-center justify-between border-b border-[#d9c5b2] bg-[#e6e6e6] rounded-t-3xl">
        <h2 className="font-bold text-[#8a6f5c]">Chat</h2>
        <button onClick={() => setShowSearch(!showSearch)} className="p-2 text-[#8a6f5c] hover:bg-[#f8f0e3] rounded-full transition-colors">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
      {showSearch && <div className="flex-shrink-0 p-2 border-b border-[#d9c5b2] bg-[#e6e6e6]">
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search messages..." className="w-full px-4 py-2 rounded-full bg-white outline-none" />
        </div>}
      <div className="flex-1 overflow-y-auto" style={{
      minHeight: 0
    }}>
        <div className="p-4 space-y-6">
          {Object.entries(getMessagesByDate()).map(([date, dateMessages]) => <div key={date}>
              <div className="text-center mb-4">
                <span className="bg-[#d9c5b2] text-[#8a6f5c] text-xs px-3 py-1 rounded-full">
                  {date === new Date().toLocaleDateString() ? 'Today' : date}
                </span>
              </div>
              <div className="space-y-4">
                {dateMessages.map(msg => renderMessage(msg))}
              </div>
            </div>)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {replyingTo && <div className="flex-shrink-0 bg-[#f8f0e3] px-4 py-2 border-t border-[#d9c5b2]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ReplyIcon className="w-4 h-4 text-[#8a6f5c]" />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-[#8a6f5c]">
                  Reply to {replyingTo.sender === 'user' ? 'yourself' : 'admin'}
                </span>
                <p className="text-sm text-[#666] line-clamp-1">
                  {replyingTo.text}
                </p>
              </div>
            </div>
            <button onClick={() => setReplyingTo(null)} className="p-1 hover:bg-[#d9c5b2] rounded-full transition-colors">
              <XIcon className="w-4 h-4 text-[#8a6f5c]" />
            </button>
          </div>
        </div>}
      <div className="flex-shrink-0 p-2 border-t border-[#d9c5b2] bg-[#e6e6e6] rounded-b-3xl">
        {selectedImage && <div className="px-2 pb-2">
            <div className="relative inline-block">
              <img src={selectedImage} alt="To be sent" className="h-20 w-auto rounded-lg" />
              <button onClick={() => setSelectedImage(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          </div>}
        <div className="flex items-center gap-2 bg-white rounded-full p-2">
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
                  <EmojiPicker onEmojiSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />
                </div>
              </>}
          </div>
          <input type="text" value={message} onChange={e => {
          setMessage(e.target.value);
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 1000);
        }} onKeyDown={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type a message..." className="flex-1 bg-transparent outline-none px-2" />
          <button onClick={handleSendMessage} disabled={!message.trim() && !selectedImage} className={`rounded-full p-2 transition-colors ${message.trim() || selectedImage ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'bg-[#d9d9d9] text-[#999]'}`}>
            <SendIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>;
};
export default Chat;