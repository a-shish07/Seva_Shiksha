import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrevious, onNext }) => {
  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrevious();
    if (e.key === 'ArrowRight') onNext();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative max-w-4xl max-h-full p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image */}
        <div className="flex flex-col items-center">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-[70vh] object-contain"
          />
          
          {/* Image Info */}
          <div className="text-white mt-4 text-center">
            <h3 className="text-lg font-semibold">{currentImage.title}</h3>
            {currentImage.description && (
              <p className="text-gray-300 text-sm mt-1">{currentImage.description}</p>
            )}
            <p className="text-gray-400 text-xs mt-2">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;