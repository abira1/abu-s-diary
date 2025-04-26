import React, { useState } from 'react';
const EMOJI_CATEGORIES = {
  'Smileys & People': ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘'],
  'Animals & Nature': ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🎄'],
  'Food & Drink': ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅'],
  Activities: ['⚽️', '🏀', '🏈', '⚾️', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍'],
  'Hearts & Symbols': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💕', '💞', '💓', '💗', '💖', '💘', '💝']
};
interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
  onClose: () => void;
}
const EmojiPicker: React.FC<EmojiPickerProps> = ({
  onEmojiSelect,
  onClose
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(EMOJI_CATEGORIES)[0]);
  return <div className="absolute bottom-full mb-2 bg-white rounded-lg shadow-lg p-2 w-[280px]" onClick={e => e.stopPropagation()}>
      {/* Category selector */}
      <div className="flex overflow-x-auto mb-2 pb-2 border-b border-[#d9c5b2] gap-2">
        {Object.keys(EMOJI_CATEGORIES).map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors
              ${activeCategory === category ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'bg-[#f8f0e3] text-[#a67c52] hover:bg-[#f8e8c8]'}`}>
            {category}
          </button>)}
      </div>
      {/* Emoji grid */}
      <div className="grid grid-cols-8 gap-1 max-h-[200px] overflow-y-auto p-2">
        {EMOJI_CATEGORIES[activeCategory as keyof typeof EMOJI_CATEGORIES].map((emoji, index) => <button key={index} onClick={() => {
        onEmojiSelect(emoji);
        onClose();
      }} className="hover:bg-[#f8f0e3] rounded p-1 text-xl transition-colors">
              {emoji}
            </button>)}
      </div>
    </div>;
};
export default EmojiPicker;