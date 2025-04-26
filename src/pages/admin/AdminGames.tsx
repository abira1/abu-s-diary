import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { GamepadIcon, PlusIcon, TrashIcon, ToggleLeft, ToggleRight, LoaderIcon } from 'lucide-react';
import { useFirebaseData } from '../../lib/hooks/useFirebase';
interface Game {
  id: string;
  name: string;
  logoUrl: string;
  embedUrl: string;
  embedCode?: string;
  enabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
}
const validateEmbedUrl = (url: string): boolean => {
  if (!url) return true; // Allow empty URLs
  try {
    const parsed = new URL(url);
    const allowedDomains = ['itch.io', 'scratch.mit.edu', 'replit.com', 'codepen.io', 'jsfiddle.net'];
    return allowedDomains.some(domain => parsed.hostname.includes(domain));
  } catch {
    return false;
  }
};
const AdminGames = () => {
  const {
    data: games = [],
    loading,
    updateData
  } = useFirebaseData<Game[]>('games', []);
  const [newGame, setNewGame] = useState({
    name: '',
    logoUrl: '',
    embedUrl: '',
    embedCode: '',
    difficulty: 'medium' as const
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const handleToggleGame = async (id: string) => {
    const updatedGames = games.map(game => game.id === id ? {
      ...game,
      enabled: !game.enabled
    } : game);
    await updateData(updatedGames);
  };
  const handleUpdateDifficulty = async (id: string, difficulty: Game['difficulty']) => {
    const updatedGames = games.map(game => game.id === id ? {
      ...game,
      difficulty
    } : game);
    await updateData(updatedGames);
  };
  const handleAddGame = async () => {
    if (!newGame.name.trim() || !newGame.logoUrl.trim()) return;
    if (newGame.embedUrl && !validateEmbedUrl(newGame.embedUrl)) {
      alert('Please enter a valid embed URL from supported platforms (itch.io, Scratch, Replit, CodePen, JSFiddle)');
      return;
    }
    setIsAdding(true);
    const newGameEntry: Game = {
      id: Date.now().toString(),
      name: newGame.name,
      logoUrl: newGame.logoUrl,
      embedUrl: newGame.embedUrl,
      embedCode: newGame.embedCode,
      enabled: true,
      difficulty: newGame.difficulty
    };
    await updateData([...games, newGameEntry]);
    setNewGame({
      name: '',
      logoUrl: '',
      embedUrl: '',
      embedCode: '',
      difficulty: 'medium'
    });
    setShowAddForm(false);
    setIsAdding(false);
  };
  const handleDeleteGame = async (id: string) => {
    const updatedGames = games.filter(game => game.id !== id);
    await updateData(updatedGames);
  };
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  return <div>
      <h1 className="text-2xl font-bold text-[#a67c52] mb-6">
        Games Management
      </h1>
      <div className="max-w-2xl">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4">
                  <GamepadIcon className="w-6 h-6 text-[#8a6f5c]" />
                </div>
                <h2 className="text-lg font-bold text-[#8a6f5c]">
                  Configure Games
                </h2>
              </div>
              <button onClick={() => setShowAddForm(!showAddForm)} className="bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                <PlusIcon className="w-5 h-5" />
                <span>Add Game</span>
              </button>
            </div>
            {showAddForm && <div className="mb-6 p-4 bg-[#f8f0e3] rounded-lg space-y-4">
                <input type="text" value={newGame.name} onChange={e => setNewGame({
              ...newGame,
              name: e.target.value
            })} placeholder="Game Name" className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" />
                <input type="url" value={newGame.logoUrl} onChange={e => setNewGame({
              ...newGame,
              logoUrl: e.target.value
            })} placeholder="Logo URL" className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" />
                <div className="space-y-2">
                  <input type="url" value={newGame.embedUrl} onChange={e => setNewGame({
                ...newGame,
                embedUrl: e.target.value
              })} placeholder="Embed URL (optional)" className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" />
                  <p className="text-sm text-[#8a6f5c]">
                    Supported platforms: itch.io, Scratch, Replit, CodePen,
                    JSFiddle
                  </p>
                </div>
                <div className="space-y-2">
                  <textarea value={newGame.embedCode} onChange={e => setNewGame({
                ...newGame,
                embedCode: e.target.value
              })} placeholder="Or paste iframe embed code here..." className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85] min-h-[100px]" />
                  <p className="text-sm text-[#8a6f5c]">
                    You can paste a complete iframe code here instead of using
                    the embed URL
                  </p>
                </div>
                <select value={newGame.difficulty} onChange={e => setNewGame({
              ...newGame,
              difficulty: e.target.value as Game['difficulty']
            })} className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <button onClick={handleAddGame} disabled={isAdding} className="w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  {isAdding ? <LoaderIcon className="w-5 h-5 animate-spin" /> : 'Add Game'}
                </button>
              </div>}
            <div className="space-y-4">
              {games.map(game => <div key={game.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d9c5b2]">
                  <div className="flex items-center gap-4">
                    <img src={game.logoUrl} alt={game.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <h3 className="font-bold text-[#8a6f5c]">{game.name}</h3>
                      <select value={game.difficulty} onChange={e => handleUpdateDifficulty(game.id, e.target.value as Game['difficulty'])} className="mt-1 text-sm text-[#a67c52] bg-transparent">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleToggleGame(game.id)} className={`p-2 ${game.enabled ? 'text-green-500' : 'text-gray-400'}`}>
                      {game.enabled ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                    </button>
                    <button onClick={() => handleDeleteGame(game.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>)}
              {games.length === 0 && <div className="text-center py-10">
                  <GamepadIcon className="w-12 h-12 mx-auto text-[#d9c5b2] mb-4" />
                  <p className="text-[#8a6f5c]">No games added yet</p>
                </div>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminGames;