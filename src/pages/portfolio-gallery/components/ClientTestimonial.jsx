import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonial = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-soft">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={testimonial?.avatar}
            alt={testimonial?.avatarAlt}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <div className="flex text-accent mr-2">
              {[...Array(5)]?.map((_, i) => (
                <Icon key={i} name="Star" size={16} className="fill-current" />
              ))}
            </div>
            <span className="font-body text-sm text-muted-foreground">
              {testimonial?.rating}/5
            </span>
          </div>
          <blockquote className="font-accent text-lg italic text-foreground mb-4 leading-relaxed">
            "{testimonial?.quote}"
          </blockquote>
          <div>
            <cite className="font-body font-medium text-foreground not-italic">
              {testimonial?.name}
            </cite>
            <p className="font-body text-sm text-muted-foreground">
              {testimonial?.event} • {testimonial?.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;