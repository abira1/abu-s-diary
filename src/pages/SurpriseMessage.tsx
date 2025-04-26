import React, { useEffect, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { VolumeIcon, VolumeXIcon } from 'lucide-react';
const SurpriseMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [musicUrl, setMusicUrl] = useState('');
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // Load music settings
    const savedUrl = localStorage.getItem('backgroundMusicUrl');
    const savedEnabled = localStorage.getItem('backgroundMusicEnabled');
    if (savedUrl) {
      setMusicUrl(savedUrl);
    }
    if (savedEnabled !== null) {
      setIsMusicEnabled(savedEnabled === 'true');
    }
    setTimeout(() => setIsVisible(true), 300);
    const savedNotes = localStorage.getItem('birthdayNotes') || '[]';
    const notes = JSON.parse(savedNotes);
    const newNote = {
      id: Date.now().toString(),
      content: 'Every moment with you feels like magic...',
      date: new Date().toLocaleDateString(),
      type: 'surprise'
    };
    localStorage.setItem('birthdayNotes', JSON.stringify([...notes, newNote]));
  }, []);
  const handleLoveYouToo = () => {
    const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    const newMessage = {
      id: Date.now(),
      text: 'Love You babuiiii',
      sender: 'user',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      date: new Date().toLocaleDateString(),
      status: 'sent',
      reactions: []
    };
    localStorage.setItem('chatMessages', JSON.stringify([...messages, newMessage]));
    navigate('/chat');
  };
  return <div className="relative flex flex-col items-center justify-center min-h-[70vh] max-w-md mx-auto overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
          @keyframes fall {
            0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
          .flower {
            position: fixed;
            top: -20px;
            animation: fall linear forwards;
            z-index: 1;
          }
          .flower::before {
            content: '🌸';
            font-size: 1.5rem;
          }
          .flower:nth-child(2n)::before {
            content: '🌺';
          }
          .flower:nth-child(3n)::before {
            content: '🌹';
          }
          .flower:nth-child(4n)::before {
            content: '🌷';
          }
        `}
      </style>
      {Array.from({
      length: 20
    }).map((_, i) => <div key={i} className="flower" style={{
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 5}s`
    }} />)}
      {isMusicEnabled && musicUrl && <audio loop autoPlay muted={isMuted} className="hidden" src={musicUrl} />}
      {isMusicEnabled && musicUrl && <button onClick={() => setIsMuted(!isMuted)} className="fixed top-4 right-4 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors">
          {isMuted ? <VolumeXIcon className="w-6 h-6 text-[#a67c52]" /> : <VolumeIcon className="w-6 h-6 text-[#a67c52]" />}
        </button>}
      <div className={`transition-all duration-1000 w-full px-4 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-[#e6e6e6] rounded-3xl overflow-hidden shadow-lg">
          <div className="bg-[#ffcb85] p-6">
            <h2 className="text-2xl text-[#8a6f5c]" style={{
            fontFamily: 'Satisfy'
          }}>
              Happy Birthday, my beautiful Wifey
            </h2>
          </div>
          <div className="p-6 text-lg leading-relaxed">
            <p className="whitespace-pre-wrap text-[#8a6f5c]" style={{
            fontFamily: 'Satisfy'
          }}>
              Every moment with you feels like magic, and today, the world
              shines a little brighter because it's your day. Thank you for
              being my best friend, my biggest inspiration, and the love of my
              life. I can't wait to create a lifetime of memories with you. You
              deserve all the happiness, laughter, and love this world can offer
              – and I promise to spend every day making sure you feel it. I love
              you more than words can ever say.
            </p>
            <div className="flex justify-center mt-8">
              <button onClick={handleLoveYouToo} className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-black hover:bg-gray-800 text-[#F5EBE1] rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95">
                <span className="text-xl sm:text-2xl md:text-3xl block" style={{
                fontFamily: 'Satisfy'
              }}>
                  Valobashi
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SurpriseMessage;