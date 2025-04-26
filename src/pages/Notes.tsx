import React, { useEffect, useState } from 'react';
import { Card } from '../pages/admin/components/ui/Card';
import { StickyNoteIcon } from 'lucide-react';
import { useFirebaseData } from '../lib/hooks/useFirebase';
interface Note {
  id: string;
  content: string;
  date: string;
  type: 'surprise' | 'custom';
  title?: string;
  showAfterCountdown?: boolean;
}
const Notes = () => {
  const {
    data: notes = [],
    loading
  } = useFirebaseData<Note[]>('notes', []);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);
  if (loading) {
    return <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  if (selectedNote) {
    return <div className="h-full flex items-center justify-center">
        <div className={`transition-all duration-1000 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -top-12 -left-6 w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path d="M50,10 L20,80 L80,80 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                <circle cx="50" cy="15" r="5" fill="#ef4444" />
                <path d="M30,80 C30,65 70,65 70,80" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
            <div className="bg-[#e6e6e6] rounded-3xl p-6 mb-4 shadow-md">
              <h2 className="text-2xl font-handwriting text-[#333]">
                {selectedNote.title || 'A Special Note'}
              </h2>
            </div>
            <div className="bg-[#e6e6e6] rounded-3xl p-6 shadow-md font-handwriting text-lg leading-relaxed">
              <p className="whitespace-pre-wrap">{selectedNote.content}</p>
              <div className="flex justify-center mt-8">
                <button onClick={() => setSelectedNote(null)} className="inline-block px-8 py-3 bg-[#fff] hover:bg-[#f8f8f8] text-[#8a6f5c] font-bold rounded-full border border-[#d9c5b2] shadow-md transition-all transform hover:scale-105 font-sans">
                  <div className="flex items-center">
                    <span>Close Note</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute -top-4 -right-4">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path d="M20,20 L30,10" stroke="#ef4444" strokeWidth="2" />
                <path d="M40,15 L35,5" stroke="#3b82f6" strokeWidth="2" />
                <path d="M60,20 L70,10" stroke="#10b981" strokeWidth="2" />
                <circle cx="25" cy="15" r="3" fill="#8b5cf6" />
                <circle cx="75" cy="10" r="3" fill="#ec4899" />
                <rect x="40" y="10" width="6" height="6" fill="#f59e0b" transform="rotate(45, 43, 13)" />
              </svg>
            </div>
          </div>
        </div>
      </div>;
  }
  return <div className="h-full overflow-y-auto">
      <div className="space-y-4 py-2">
        {notes.map(note => <Card key={note.id} onClick={() => setSelectedNote(note)} className="cursor-pointer transform transition-all duration-300 hover:scale-[1.02]">
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#ffcb85] rounded-full flex items-center justify-center mr-3">
                  <StickyNoteIcon className="w-4 h-4 text-[#8a6f5c]" />
                </div>
                <span className="text-sm text-[#8a6f5c]">{note.date}</span>
              </div>
              <p className="text-[#333] line-clamp-3 font-handwriting">
                {note.content}
              </p>
            </div>
          </Card>)}
        {notes.length === 0 && <div className="text-center py-10">
            <StickyNoteIcon className="w-12 h-12 mx-auto text-[#d9c5b2] mb-4" />
            <p className="text-[#8a6f5c]">No notes yet</p>
          </div>}
      </div>
    </div>;
};
export default Notes;