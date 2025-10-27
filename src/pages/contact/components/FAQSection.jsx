import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How far in advance should I book my photography session?",
      answer: `For weddings, we recommend booking 6-12 months in advance, especially for popular dates like spring and fall weekends. For other celebrations like baby showers, maternity sessions, or family portraits, 4-6 weeks notice is typically sufficient. However, we do accommodate last-minute bookings when our schedule allows - just give us a call to check availability.`
    },
    {
      question: "What\'s included in your photography packages?",
      answer: `All our packages include a pre-session consultation, professional editing of all delivered images, and an online gallery for easy sharing with family and friends. Wedding packages typically include 6-8 hours of coverage, 400-600 edited images, and a complimentary engagement session. Portrait sessions include 1-2 hours of shooting time and 30-50 beautifully edited images. We also offer add-ons like additional hours, second photographers, and premium albums.`
    },
    {
      question: "Do you travel for destination celebrations?",
      answer: `Absolutely! We love destination celebrations and travel throughout California and beyond. For locations within 50 miles of San Francisco, there's no additional travel fee. For destinations beyond that, we charge a modest travel fee to cover transportation and accommodation. We've photographed celebrations in Napa Valley, Lake Tahoe, Big Sur, and even destination weddings in Hawaii and Europe.`
    },
    {
      question: "How long does it take to receive our photos?",
      answer: `We understand how excited you are to see your photos! For portrait sessions and smaller celebrations, you can expect your gallery within 2-3 weeks. Wedding galleries typically take 4-6 weeks due to the extensive editing process. We always provide a sneak peek within 48-72 hours with 5-10 beautifully edited highlights to share on social media while you wait for the full gallery.`
    },
    {
      question: "What happens if there's bad weather on our session day?",
      answer: `Weather can be unpredictable, but we're prepared for anything! For outdoor sessions, we monitor weather closely and will suggest rescheduling if conditions aren't ideal. For events like weddings where rescheduling isn't possible, we come equipped with lighting and backup plans for indoor or covered locations. Some of our most dramatic and beautiful photos have actually been taken in unexpected weather conditions!`
    },
    {
      question: "Can we request specific shots or poses?",
      answer: `Of course! We encourage you to share your vision, must-have shots, and any specific family combinations or moments you want captured. We'll create a shot list together during our consultation. While we bring our artistic expertise and experience, your celebration is unique to you, and we want to ensure we capture everything that's important to your family's story.`
    },
    {
      question: "Do you offer payment plans?",
      answer: `Yes, we offer flexible payment options to make our services accessible. For weddings, we typically require a 30% retainer to secure your date, with the remaining balance due 30 days before your celebration. For portrait sessions, we offer the option to split payment into two installments. We accept cash, check, and all major credit cards. Payment plans can be customized based on your needs.`
    },
    {
      question: "What\'s your backup plan for equipment or emergencies?",
      answer: `Professional reliability is paramount to us. We carry backup cameras, lenses, memory cards, and batteries to every session. For weddings, we also have a network of trusted associate photographers who can step in if an emergency arises. All photos are immediately backed up to multiple memory cards during shooting, and we maintain comprehensive insurance coverage for complete peace of mind.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-background rounded-2xl shadow-soft p-8">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl font-medium text-foreground mb-3">
          Frequently Asked Questions
        </h3>
        <p className="font-body text-muted-foreground">
          Everything you need to know about working with VisualStory Photography
        </p>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-organic hover:border-accent/30"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/5 transition-organic focus:outline-none focus:bg-accent/5"
            >
              <h4 className="font-body text-sm font-medium text-foreground pr-4">
                {faq?.question}
              </h4>
              <Icon
                name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-muted-foreground flex-shrink-0 transition-organic"
              />
            </button>
            
            {openFAQ === index && (
              <div className="px-6 pb-4 border-t border-border bg-muted/20">
                <p className="font-body text-sm text-muted-foreground leading-relaxed pt-4">
                  {faq?.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Still Have Questions */}
      <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg text-center">
        <Icon name="MessageCircle" size={32} className="text-accent mx-auto mb-4" />
        <h4 className="font-body text-sm font-medium text-foreground mb-2">
          Still Have Questions?
        </h4>
        <p className="font-body text-xs text-muted-foreground mb-4">
          We're here to help! Reach out and we'll get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-organic font-body text-sm font-medium"
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Call Us
          </a>
          <a
            href="mailto:hello@visualstory.photography"
            className="inline-flex items-center justify-center px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/5 transition-organic font-body text-sm font-medium"
          >
            <Icon name="Mail" size={16} className="mr-2" />
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;