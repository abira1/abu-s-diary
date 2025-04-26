import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { StickyNoteIcon, PlusIcon, TrashIcon, CalendarIcon } from 'lucide-react';
import { useFirebaseData } from '../../lib/hooks/useFirebase';
interface Note {
  id: string;
  content: string;
  date: string;
  type: 'surprise' | 'custom';
  title?: string;
  showAfterCountdown?: boolean;
}
const AdminNotes = () => {
  const {
    data: notes = [],
    loading,
    updateData
  } = useFirebaseData<Note[]>('notes', []);
  const [newNote, setNewNote] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const handleAddNote = async () => {
    if (!newNote.trim()) return;
    const newNoteEntry: Note = {
      id: Date.now().toString(),
      content: newNote,
      date: new Date().toLocaleDateString(),
      type: 'custom',
      showAfterCountdown: false
    };
    await updateData([...notes, newNoteEntry]);
    setNewNote('');
    setShowAddForm(false);
  };
  const handleDeleteNote = async (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    await updateData(updatedNotes);
  };
  const toggleShowAfterCountdown = async (id: string) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          showAfterCountdown: !note.showAfterCountdown
        };
      }
      return note;
    });
    await updateData(updatedNotes);
  };
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  return <div>
      <h1 className="text-2xl font-bold text-[#a67c52] mb-6">
        Notes Management
      </h1>
      <div className="max-w-2xl">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4">
                  <StickyNoteIcon className="w-6 h-6 text-[#8a6f5c]" />
                </div>
                <h2 className="text-lg font-bold text-[#8a6f5c]">
                  Manage Notes
                </h2>
              </div>
              <button onClick={() => setShowAddForm(!showAddForm)} className="bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                <PlusIcon className="w-5 h-5" />
                <span>Add Note</span>
              </button>
            </div>
            {showAddForm && <div className="mb-6 p-4 bg-[#f8f0e3] rounded-lg space-y-4">
                <textarea value={newNote} onChange={e => setNewNote(e.target.value)} placeholder="Write your note here..." className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85] min-h-[100px]" />
                <button onClick={handleAddNote} className="w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors">
                  Add Note
                </button>
              </div>}
            <div className="space-y-4">
              {notes.map(note => <div key={note.id} className="flex items-start justify-between p-4 bg-white rounded-lg border border-[#d9c5b2]">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-[#8a6f5c]">
                        {note.date}
                      </span>
                      {note.type === 'surprise' && <span className="ml-2 px-2 py-1 text-xs bg-[#ffcb85] text-[#8a6f5c] rounded-full">
                          Surprise Message
                        </span>}
                      {note.showAfterCountdown && <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                          Shows After Countdown
                        </span>}
                    </div>
                    <p className="text-[#333] whitespace-pre-wrap font-handwriting">
                      {note.content}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button onClick={() => toggleShowAfterCountdown(note.id)} className={`p-2 rounded-lg transition-colors ${note.showAfterCountdown ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
                      <CalendarIcon className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleDeleteNote(note.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>)}
              {notes.length === 0 && <div className="text-center py-10">
                  <StickyNoteIcon className="w-12 h-12 mx-auto text-[#d9c5b2] mb-4" />
                  <p className="text-[#8a6f5c]">No notes added yet</p>
                </div>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminNotes;