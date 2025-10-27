import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Phone',
      label: 'Phone',
      value: '(555) 123-4567',
      description: 'Call or text for immediate assistance',
      action: 'tel:+15551234567'
    },
    {
      icon: 'Mail',
      label: 'Email',
      value: 'hello@visualstory.photography',
      description: 'We respond within 24 hours',
      action: 'mailto:hello@visualstory.photography'
    },
    {
      icon: 'MapPin',
      label: 'Service Area',
      value: 'San Francisco Bay Area',
      description: 'Travel available throughout California',
      action: null
    },
    {
      icon: 'Clock',
      label: 'Response Time',
      value: 'Within 24 Hours',
      description: 'Monday - Saturday, 9 AM - 7 PM',
      action: null
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/visualstory.photography',
      description: 'Latest work and behind-the-scenes'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/visualstoryphotography',
      description: 'Client reviews and gallery updates'
    },
    {
      name: 'Pinterest',
      icon: 'Heart',
      url: 'https://pinterest.com/visualstoryphotography',
      description: 'Style inspiration and planning boards'
    }
  ];

  const handleContactAction = (action) => {
    if (action) {
      window.open(action, '_self');
    }
  };

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-background rounded-2xl shadow-soft p-8">
        <h3 className="font-display text-xl font-medium text-foreground mb-6">
          Get In Touch
        </h3>
        
        <div className="space-y-6">
          {contactDetails?.map((contact, index) => (
            <div 
              key={index}
              className={`flex items-start space-x-4 p-4 rounded-lg transition-organic ${
                contact?.action 
                  ? 'hover:bg-accent/5 cursor-pointer' :'bg-muted/30'
              }`}
              onClick={() => handleContactAction(contact?.action)}
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={contact?.icon} size={20} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-body text-sm font-medium text-foreground">
                    {contact?.label}
                  </h4>
                  {contact?.action && (
                    <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                  )}
                </div>
                <p className="font-body text-foreground font-medium mb-1">
                  {contact?.value}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {contact?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-background rounded-2xl shadow-soft p-8">
        <h3 className="font-display text-xl font-medium text-foreground mb-6">
          Follow Our Journey
        </h3>
        
        <div className="space-y-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/5 transition-organic group"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-organic">
                <Icon name={social?.icon} size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-body text-sm font-medium text-foreground group-hover:text-accent transition-organic">
                  {social?.name}
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  {social?.description}
                </p>
              </div>
              <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-accent transition-organic" />
            </a>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-background rounded-2xl shadow-soft p-8">
        <h3 className="font-display text-xl font-medium text-foreground mb-6">
          Quick Actions
        </h3>
        
        <div className="space-y-4">
          <Button
            variant="outline"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.open('tel:+15551234567', '_self')}
            className="justify-start font-body"
          >
            Schedule a Call
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="Camera"
            iconPosition="left"
            className="justify-start font-body"
          >
            View Portfolio
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="Download"
            iconPosition="left"
            className="justify-start font-body"
          >
            Download Pricing Guide
          </Button>
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Zap" size={16} className="text-accent" />
          </div>
          <div>
            <h4 className="font-body text-sm font-medium text-foreground mb-1">
              Last-Minute Bookings
            </h4>
            <p className="font-body text-xs text-muted-foreground mb-3">
              Need a photographer urgently? Call us directly for same-week availability.
            </p>
            <Button
              variant="default"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+15551234567', '_self')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;