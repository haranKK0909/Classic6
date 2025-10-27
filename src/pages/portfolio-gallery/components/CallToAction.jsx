import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
          <Icon name="Camera" size={32} className="text-accent" />
        </div>
        
        <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
          Ready to Create Your Classic memories?
        </h2>
        
        <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's capture the magic of your special moments with artistry and authenticity. 
          Every celebration deserves to be remembered beautifully.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start Your Journey
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg"
            iconName="Phone"
            iconPosition="left"
          >
            Call (+91) 9870654345
          </Button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="font-body text-sm text-muted-foreground">
            <Icon name="Clock" size={16} className="inline mr-2" />
            Typically responds within 24 hours • Free consultation available
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;