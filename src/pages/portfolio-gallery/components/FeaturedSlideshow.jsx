import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedSlideshow = ({ featuredImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredImages?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredImages?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredImages?.length) % featuredImages?.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-warm mb-16">
      {/* Slides */}
      {featuredImages?.map((image, index) => (
        <div
          key={image?.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image?.src}
            alt={image?.alt}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
            <div className="max-w-4xl">
              <div className="inline-block bg-accent/90 text-accent-foreground px-3 py-1 rounded-md mb-4">
                <span className="font-body text-sm font-medium">
                  {image?.category}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                {image?.title}
              </h2>
              <p className="font-body text-base md:text-lg opacity-90 mb-6 max-w-2xl">
                {image?.description}
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground"
              >
                View Collection
              </Button>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12"
      >
        <Icon name="ChevronLeft" size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12"
      >
        <Icon name="ChevronRight" size={24} />
      </Button>
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredImages?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-organic ${
              index === currentSlide 
                ? 'bg-white' :'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlideshow;