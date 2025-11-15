import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ImageLightbox = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrevious 
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e?.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !images?.[currentIndex]) return null;

  const currentImage = images?.[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10 w-12 h-12"
      >
        <Icon name="X" size={24} />
      </Button>
      {/* Navigation Buttons */}
      {images?.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 w-12 h-12"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 w-12 h-12"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </>
      )}
      {/* Main Image */}
      <div className="relative max-w-7xl max-h-full mx-4 flex flex-col items-center">
        <div className="relative max-h-[80vh] overflow-hidden rounded-lg">
          <Image
            src={currentImage?.src}
            alt={currentImage?.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        {/* Image Info */}
        <div className="mt-6 text-center text-white max-w-2xl">
          <h3 className="font-scipt text-xl font-script mb-2">
            {currentImage?.title}
          </h3>
          <p className="font-accent text-sm opacity-80 mb-4">
            {currentImage?.description}
          </p>
          {currentImage?.client && (
            <p className="font-accent text-xs opacity-60">
              {currentImage?.client}
            </p>
          )}
        </div>

        {/* Image Counter */}
        {images?.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full">
            <span className="font-accent text-sm text-white">
              {currentIndex + 1} / {images?.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;