import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, TrophyIcon, LoaderIcon } from 'lucide-react';
import { useFirebaseData } from '../lib/hooks/useFirebase';
interface Game {
  id: string;
  name: string;
  logoUrl: string;
  embedUrl: string;
  embedCode: string;
  enabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
}
const GamePlay = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    data: games = [],
    loading
  } = useFirebaseData<Game[]>('games', []);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [embedError, setEmbedError] = useState(false);
  const game = games.find(g => g.id === id && g.enabled);
  const handleIframeLoad = () => {
    setIsLoading(false);
    setEmbedError(false);
  };
  const handleIframeError = () => {
    setIsLoading(false);
    setEmbedError(true);
  };
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  if (!game) {
    navigate('/games');
    return null;
  }
  const renderGameContent = () => {
    if (!game.embedUrl && !game.embedCode) {
      return <div className="text-center py-10 text-[#a67c52]">
          <img src={game.logoUrl} alt={game.name} className="w-32 h-32 mx-auto rounded-xl shadow-md mb-4 object-cover" />
          <p>This game is coming soon!</p>
        </div>;
    }
    return <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-[#f8f0e3]">
        {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-[#f8f0e3]">
            <LoaderIcon className="w-8 h-8 text-[#a67c52] animate-spin" />
          </div>}
        {embedError ? <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f0e3] text-[#a67c52]">
            <p className="text-lg font-bold mb-2">Oops!</p>
            <p className="text-sm">Unable to load the game</p>
          </div> : game.embedCode ? <div dangerouslySetInnerHTML={ {
        __html: game.embedCode
      } } className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`} /> : <iframe src={game.embedUrl} className={`w-full h-full border-0 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen sandbox="allow-scripts allow-popups allow-forms" onLoad={handleIframeLoad} onError={handleIframeError} />}
      </div>;
  };
  return <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <Link to="/games" className="flex items-center text-[#a67c52] transform transition-all duration-300 hover:scale-105 active:scale-95">
          <ArrowLeftIcon className="w-5 h-5 mr-1" />
          <span>Back</span>
        </Link>
        <h2 className="text-xl font-bold text-[#a67c52]">{game.name}</h2>
        <div className="flex items-center bg-[#ffcb85] px-3 py-1 rounded-full">
          <TrophyIcon className="w-4 h-4 mr-1 text-[#8a6f5c]" />
          <span className="font-bold text-[#8a6f5c]">{score}</span>
        </div>
      </div>
      {renderGameContent()}
      {game.embedUrl && <div className="mt-4 text-sm text-[#8a6f5c] text-center">
          <p>
            Tip: Some games may require clicking inside the game area to start
          </p>
        </div>}
    </div>;
};
export default GamePlay;