import React, { useState, useRef } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { MusicIcon, PlayIcon, PauseIcon, ToggleLeft, ToggleRight } from 'lucide-react';
import { useFirebaseData } from '../../lib/hooks/useFirebase';
const DEFAULT_MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
const AdminMusic = () => {
  const {
    data: musicData,
    loading,
    updateData
  } = useFirebaseData('music', {
    url: DEFAULT_MUSIC_URL,
    isEnabled: true
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [saved, setSaved] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleSave = async () => {
    await updateData(musicData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  const toggleMusic = () => {
    updateData({
      ...musicData,
      isEnabled: !musicData.isEnabled
    });
  };
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  return <div>
      <h1 className="text-2xl font-bold text-[#a67c52] mb-6">
        Background Music Settings
      </h1>
      <div className="max-w-md">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4">
                  <MusicIcon className="w-6 h-6 text-[#8a6f5c]" />
                </div>
                <h2 className="text-lg font-bold text-[#8a6f5c]">
                  Configure Music
                </h2>
              </div>
              <button onClick={toggleMusic} className={`p-2 ${musicData.isEnabled ? 'text-green-500' : 'text-gray-400'}`}>
                {musicData.isEnabled ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
              </button>
            </div>
            <div className="space-y-4">
              <div className={musicData.isEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'}>
                <label className="block text-sm font-medium text-[#8a6f5c] mb-1">
                  Music URL
                </label>
                <input type="url" value={musicData.url} onChange={e => updateData({
                ...musicData,
                url: e.target.value
              })} placeholder="Enter music URL..." className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" />
                <div className="mt-4 flex items-center justify-between bg-[#f8f0e3] rounded-lg p-3">
                  <span className="text-sm text-[#8a6f5c]">Preview Music</span>
                  <button onClick={togglePlay} className="p-2 bg-[#ffcb85] rounded-full hover:bg-[#ffc270] transition-colors">
                    {isPlaying ? <PauseIcon className="w-4 h-4 text-[#8a6f5c]" /> : <PlayIcon className="w-4 h-4 text-[#8a6f5c]" />}
                  </button>
                </div>
                <audio ref={audioRef} src={musicData.url} onEnded={() => setIsPlaying(false)} className="hidden" />
              </div>
              <div className="pt-4 border-t border-[#d9c5b2]">
                <button onClick={handleSave} className="w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors">
                  {saved ? 'Settings Saved!' : 'Save Changes'}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminMusic;