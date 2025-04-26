import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon } from 'lucide-react';
import { useFirebaseData } from '../lib/hooks/useFirebase';
interface Game {
  id: string;
  name: string;
  logoUrl: string;
  embedUrl: string;
  enabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
}
const GameList = () => {
  const {
    data: games = [],
    loading
  } = useFirebaseData<Game[]>('games', []);
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  const enabledGames = games.filter(game => game.enabled);
  return <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#a67c52]">
        Birthday Games
      </h2>
      <div className="space-y-4">
        {enabledGames.map(game => <Link key={game.id} to={`/games/${game.id}`} className="block bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 shadow-sm">
                <img src={game.logoUrl} alt={game.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333]">{game.name}</h3>
                <p className="text-sm text-[#666]">
                  Difficulty:{' '}
                  <span className="capitalize">{game.difficulty}</span>
                </p>
              </div>
            </div>
          </Link>)}
        {enabledGames.length === 0 && <div className="text-center py-10">
            <GamepadIcon className="w-12 h-12 mx-auto text-[#d9c5b2] mb-4" />
            <p className="text-[#8a6f5c]">No games available yet</p>
          </div>}
      </div>
    </div>;
};
export default GameList;