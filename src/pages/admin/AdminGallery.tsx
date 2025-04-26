import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { ImageIcon, PlusIcon, TrashIcon, LoaderIcon } from 'lucide-react';
import { useFirebaseData } from '../../lib/hooks/useFirebase';
const AdminGallery = () => {
  const {
    data: images = [],
    loading: isLoadingData,
    updateData
  } = useFirebaseData<string[]>('gallery', []);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadError, setLoadError] = useState<{
    [key: string]: boolean;
  }>({});
  const validateImageUrl = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;
  };
  const handleAddImage = async () => {
    if (!newImageUrl.trim()) return;
    setIsLoading(true);
    setError('');
    if (!validateImageUrl(newImageUrl)) {
      setError('Please enter a valid image URL (jpeg, jpg, gif, png, webp)');
      setIsLoading(false);
      return;
    }
    const img = new Image();
    img.onload = async () => {
      await updateData([...images, newImageUrl]);
      setNewImageUrl('');
      setIsLoading(false);
    };
    img.onerror = () => {
      setError('Unable to load image. Please check the URL and try again.');
      setIsLoading(false);
    };
    img.src = newImageUrl;
  };
  const handleDeleteImage = async (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    await updateData(updatedImages);
  };
  const handleImageError = (index: number, imageUrl: string) => {
    setLoadError(prev => ({
      ...prev,
      [imageUrl]: true
    }));
  };
  if (isLoadingData) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  return <div>
      <h1 className="text-2xl font-bold text-[#a67c52] mb-6">
        Gallery Management
      </h1>
      <div className="max-w-2xl">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4">
                <ImageIcon className="w-6 h-6 text-[#8a6f5c]" />
              </div>
              <h2 className="text-lg font-bold text-[#8a6f5c]">
                Manage Images
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input type="url" value={newImageUrl} onChange={e => {
                  setNewImageUrl(e.target.value);
                  setError('');
                }} placeholder="Add image URL..." className="flex-1 px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" />
                  <button onClick={handleAddImage} disabled={isLoading || !newImageUrl.trim()} className="bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? <LoaderIcon className="w-5 h-5 animate-spin" /> : <PlusIcon className="w-5 h-5" />}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => <div key={index} className="relative group min-h-[200px] bg-[#f8f0e3] rounded-lg">
                    {loadError[image] ? <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-[#d9c5b2]" />
                      </div> : <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-lg" onError={() => handleImageError(index, image)} />}
                    <button onClick={() => handleDeleteImage(index)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>)}
              </div>
              {images.length === 0 && <div className="text-center py-10">
                  <ImageIcon className="w-12 h-12 mx-auto text-[#d9c5b2] mb-4" />
                  <p className="text-[#8a6f5c]">No images added yet</p>
                </div>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminGallery;