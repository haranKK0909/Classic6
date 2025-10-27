import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Chen",
    event: "Wedding Photography",
    date: "September 2024",
    rating: 5,
    image: "https://images.unsplash.com/photo-1639429962618-7ef35aa75517",
    imageAlt: "Happy Asian couple in wedding attire smiling at camera outdoors",
    quote: `VisualStory Photography exceeded every expectation we had. From our engagement session to our wedding day, they captured not just photos but the genuine emotions and joy of our celebration. The way they worked with our families, especially our grandparents, was so thoughtful and patient.`,
    highlight: "Professional, patient, and absolutely magical results"
  },
  {
    id: 2,
    name: "Jessica Rodriguez",
    event: "Maternity & Newborn",
    date: "October 2024",
    rating: 5,
    image: "https://images.unsplash.com/photo-1733875332103-d05a6beaa6b4",
    imageAlt: "Smiling Hispanic woman with long dark hair in casual white top",
    quote: `The maternity session was beautiful, but the newborn photos are pure art. They captured my daughter's tiny details so perfectly - her little fingers, peaceful expressions, and the way she curled up. These photos will be treasured forever. The whole experience felt so natural and comfortable.`,
    highlight: "Artistic vision with genuine care for families"
  },
  {
    id: 3,
    name: "David & Emma Thompson",
    event: "Baby Shower",
    date: "August 2024",
    rating: 5,
    image: "https://images.unsplash.com/photo-1632809240635-e47df193966a",
    imageAlt: "Caucasian man with beard and woman with blonde hair smiling together outdoors",
    quote: `Our baby shower was such a special day with family flying in from across the country. VisualStory Photography captured every precious moment - from the surprise reactions to the quiet conversations between generations. The photos tell the complete story of our celebration.`,
    highlight: "Storytelling that preserves precious family moments"
  }];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={16}
      className={index < rating ? "text-accent fill-current" : "text-muted-foreground"} />

    );
  };

  return (
    <div className="bg-background rounded-2xl shadow-soft p-8">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl font-medium text-foreground mb-3">
          What Our Families Say
        </h3>
        <p className="font-body text-muted-foreground">
          Real stories from real celebrations we've had the honor to capture
        </p>
      </div>
      <div className="space-y-8">
        {testimonials?.map((testimonial) =>
        <div key={testimonial?.id} className="border-b border-border last:border-b-0 pb-8 last:pb-0">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-full h-full object-cover" />

              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-body text-sm font-medium text-foreground">
                      {testimonial?.name}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground">
                      {testimonial?.event} • {testimonial?.date}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial?.rating)}
                  </div>
                </div>
                
                <div className="bg-accent/5 rounded-lg p-4 mb-3">
                  <p className="font-body text-sm text-foreground leading-relaxed italic">
                    "{testimonial?.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={14} className="text-accent" />
                  <p className="font-body text-xs text-accent font-medium">
                    {testimonial?.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Trust Indicators */}
      <div className="border-t border-border pt-8 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-accent" />
            </div>
            <p className="font-body text-lg font-medium text-foreground">200+</p>
            <p className="font-body text-xs text-muted-foreground">Happy Families</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Star" size={24} className="text-accent" />
            </div>
            <p className="font-body text-lg font-medium text-foreground">4.9</p>
            <p className="font-body text-xs text-muted-foreground">Average Rating</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Camera" size={24} className="text-accent" />
            </div>
            <p className="font-body text-lg font-medium text-foreground">5</p>
            <p className="font-body text-xs text-muted-foreground">Years Experience</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={24} className="text-accent" />
            </div>
            <p className="font-body text-lg font-medium text-foreground">15</p>
            <p className="font-body text-xs text-muted-foreground">Awards Won</p>
          </div>
        </div>
      </div>
    </div>);

};

export default TestimonialSection;