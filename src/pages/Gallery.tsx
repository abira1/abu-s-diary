import React, { useState, memo } from 'react';
import { XIcon, ImageIcon } from 'lucide-react';
import { useFirebaseData } from '../lib/hooks/useFirebase';
const Gallery = () => {
  const {
    data: images = [],
    loading
  } = useFirebaseData<string[]>('gallery', []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<{
    [key: string]: boolean;
  }>({});
  const handleImageError = (index: number, imageUrl: string) => {
    setLoadError(prev => ({
      ...prev,
      [imageUrl]: true
    }));
  };
  if (loading) {
    return <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  return <div className="h-full">
      <div className="bg-[#e6e6e6] rounded-3xl p-4 shadow-md h-full overflow-y-auto">
        {images.length > 0 ? <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => <div key={index} className={`${index === 0 ? 'col-span-2 row-span-2' : ''} rounded-xl overflow-hidden shadow-sm cursor-pointer transform transition-transform hover:scale-[1.02] relative min-h-[160px]`} onClick={() => !loadError[image] && setSelectedImage(image)}>
                {loadError[image] ? <div className="absolute inset-0 bg-[#f8f0e3] flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-[#d9c5b2]" />
                  </div> : <img src={image} alt={`Memory ${index + 1}`} className="w-full h-full object-cover" onError={() => handleImageError(index, image)} />}
              </div>)}
          </div> : <div className="text-center py-10">
            <ImageIcon className="w-12 h-12 mx-auto text-[#d9c5b2] mb-4" />
            <p className="text-[#8a6f5c]">No memories added yet</p>
          </div>}
      </div>
      {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2" onClick={() => setSelectedImage(null)}>
            <XIcon className="w-6 h-6 text-white" />
          </button>
          <img src={selectedImage} alt="Selected memory" className="max-w-full max-h-[90vh] object-contain" />
        </div>}
    </div>;
};
export default Gallery;