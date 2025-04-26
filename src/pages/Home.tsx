import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PartyPopperIcon, StickyNoteIcon } from 'lucide-react';
interface Note {
  id: string;
  content: string;
  date: string;
  type: 'surprise' | 'custom';
  featured?: boolean;
}
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [featuredNote, setFeaturedNote] = useState<Note | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoaded(true);
    const pendingNotes = localStorage.getItem('pendingNotes');
    if (pendingNotes) {
      const notes = JSON.parse(pendingNotes);
      if (notes.length > 0) {
        navigate('/notes');
        localStorage.removeItem('pendingNotes');
      }
    }
  }, [navigate]);
  const handleStartCelebration = () => {
    navigate('/surprise-message');
  };
  return <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <img src="https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif" alt="Birthday celebration" className="w-64 h-64 object-cover rounded-full border-4 border-[#ffcb85] shadow-lg mb-8" />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 text-[#a67c52]">
            Happy Birthday!
          </h1>
          <p className="text-[#8a6f5c] mb-6">A special gift just for you</p>
          {featuredNote && <div className="mb-6 bg-[#fff] rounded-xl p-4 shadow-md border border-[#d9c5b2]">
              <div className="flex items-center mb-2">
                <StickyNoteIcon className="w-5 h-5 text-[#8a6f5c] mr-2" />
                <span className="text-sm text-[#8a6f5c]">
                  {featuredNote.date}
                </span>
              </div>
              <p className="text-[#333] whitespace-pre-wrap font-handwriting">
                {featuredNote.content}
              </p>
            </div>}
          <button onClick={handleStartCelebration} className="inline-block px-8 py-3 bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold rounded-full shadow-md transition-all transform hover:scale-105">
            <div className="flex items-center">
              <PartyPopperIcon className="mr-2" />
              <span>Start Celebration</span>
            </div>
          </button>
        </div>
      </div>
    </div>;
};
export default Home;