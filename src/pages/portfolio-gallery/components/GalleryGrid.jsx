import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const GalleryGrid = ({ images, onImageClick }) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {images?.map((image, index) => (
        <div
          key={image?.id}
          className="break-inside-avoid group cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-warm transition-organic">
            <Image
              src={image?.src}
              alt={image?.alt}
              className="w-full h-auto object-cover group-hover:scale-105 transition-organic"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-organic flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-organic text-white text-center p-4">
                <Icon name="Eye" size={24} className="mx-auto mb-2" />
                <h4 className="font-script text-lg font-script mb-1">
                  {image?.title}
                </h4>
                <p className="font-accent text-sm opacity-90">
                  {image?.category}
                </p>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-accent/90 text-accent-foreground px-2 py-1 rounded-md">
              <span className="font-accent text-xs font-accent">
                {image?.category}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;