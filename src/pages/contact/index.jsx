import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
// import TestimonialSection from './components/TestimonialSection';
// import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ContactPage = () => {
  const scrollToForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Booking - Classic6 Photography | Capture Your Celebration</title>
        <meta 
          name="description" 
          content="Ready to capture your special moments? Contact VisualStory Photography for weddings, family portraits, maternity sessions, and celebration photography. Professional, artistic, and personalized service." 
        />
        <meta name="keywords" content="contact photographer, book photography session, wedding photographer contact, family portrait booking, celebration photography inquiry" />
        <meta property="og:title" content="Contact & Booking - VisualStory Photography" />
        <meta property="og:description" content="Let's create something beautiful together. Contact us to discuss your photography needs and book your session." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-primary">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Icon name="MessageCircle" size={32} className="text-accent" />
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
                Let's Create Something
                <span className="block text-accent">Beautiful Together</span>
              </h1>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Every celebration tells a unique story. We're here to listen, understand your vision, 
                and capture the moments that matter most to you and your loved ones.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
                  onClick={scrollToForm}
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open('tel:+919870654345', '_self')}
                  className="font-body"
                >
                  Call (+91) 9870654345
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form - Takes up 2 columns on large screens */}
              <div id="contact-form" className="lg:col-span-2"> {/* Added ID for smooth scroll target */}
                <ContactForm />
              </div>
              
              {/* Contact Info - Takes up 1 column on large screens */}
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-16 px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <TestimonialSection />
          </div>
        </section> */}

        {/* FAQ Section */}
        {/* <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQSection />
          </div>
        </section> */}

        {/* Final CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-background rounded-2xl shadow-soft p-8 md:p-12">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={40} className="text-accent" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Ready to Begin Your Memory?
              </h2>
              
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                We can't wait to learn about your celebration and discuss how we can capture 
                your precious moments with the artistry and care they deserve. Your story 
                is waiting to be told beautifully.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Send"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
                  onClick={scrollToForm} // Optional: Also scroll from here if desired
                >
                  Send Your Inquiry
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Camera"
                  iconPosition="left"
                  className="font-body"
                >
                  View Our Portfolio
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-body text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} className="inline mr-2 text-accent" />
                  We typically respond within 24 hours • Available Monday - Saturday
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle 
                      cx="20" 
                      cy="20" 
                      r="18" 
                      stroke="var(--color-accent)" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <circle 
                      cx="20" 
                      cy="20" 
                      r="8" 
                      fill="var(--color-accent)" 
                      opacity="0.2"
                    />
                    <circle 
                      cx="20" 
                      cy="20" 
                      r="4" 
                      fill="var(--color-accent)"
                    />
                  </svg>
                  <div>
                    <h3 className="font-display text-lg font-medium">VisualStory</h3>
                    <p className="font-body text-xs opacity-80">Photography</p>
                  </div>
                </div>
                <p className="font-body text-sm opacity-80 leading-relaxed">
                  Capturing life's most precious moments with artistry, authenticity, and heart.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="font-body text-sm font-medium mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/portfolio-gallery" className="block font-body text-sm opacity-80 hover:opacity-100 transition-organic">
                    Portfolio Gallery
                  </a>
                  <a href="/contact" className="block font-body text-sm opacity-80 hover:opacity-100 transition-organic">
                    Contact & Booking
                  </a>
                  <a href="tel:+919870654345" className="block font-body text-sm opacity-80 hover:opacity-100 transition-organic">
                    (+91) 9870654345
                  </a>
                </div>
              </div>
              
              {/* Contact */}
              <div>
                <h4 className="font-body text-sm font-medium mb-4">Get In Touch</h4>
                <div className="space-y-2">
                  <p className="font-body text-sm opacity-80">Erode</p>
                  <p className="font-body text-sm opacity-80">hello@classic6.photography</p>
                  <p className="font-body text-sm opacity-80">Response within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-background/20 mt-8 pt-8 text-center">
              <p className="font-body text-xs opacity-60">
                © {new Date()?.getFullYear()} Classic6 Photography. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;