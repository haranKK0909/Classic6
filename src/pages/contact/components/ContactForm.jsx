import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    budget: '',
    message: '',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypeOptions = [
    { value: 'wedding', label: 'Wedding Photography' },
    { value: 'engagement', label: 'Engagement Session' },
    { value: 'maternity', label: 'Maternity Photography' },
    { value: 'baby-shower', label: 'Baby Shower' },
    { value: 'newborn', label: 'Newborn Photography' },
    { value: 'family', label: 'Family Portraits' },
    { value: 'birthday', label: 'Birthday Celebration' },
    { value: 'anniversary', label: 'Anniversary Session' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'other', label: 'Other Celebration' }
  ];

  const budgetOptions = [
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: '$10,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const guestCountOptions = [
    { value: '1-10', label: '1-10 guests' },
    { value: '11-25', label: '11-25 guests' },
    { value: '26-50', label: '26-50 guests' },
    { value: '51-100', label: '51-100 guests' },
    { value: '101-200', label: '101-200 guests' },
    { value: '200+', label: '200+ guests' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData?.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData?.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData?.eventDate) {
      newErrors.eventDate = 'Event date is required';
    }

    if (!formData?.location?.trim()) {
      newErrors.location = 'Event location is required';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Please tell us about your vision';
    } else if (formData?.message?.trim()?.length < 20) {
      newErrors.message = 'Please provide more details (minimum 20 characters)';
    }

    if (!formData?.terms) {
      newErrors.terms = 'Please accept the terms and conditions';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        guestCount: '',
        budget: '',
        message: '',
        newsletter: false,
        terms: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-background rounded-2xl shadow-soft p-8 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-accent" />
        </div>
        <h3 className="font-display text-2xl font-medium text-foreground mb-4">
          Thank You for Your Inquiry!
        </h3>
        <p className="font-body text-muted-foreground mb-6 leading-relaxed">
          We've received your message and are excited to learn about your celebration. You can expect a personal response within 24 hours. We'll discuss your vision, 
          answer any questions, and explore how we can capture your special moments beautifully.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="font-body"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-soft p-8 space-y-6">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl font-medium text-foreground mb-3">
          Let's Create Something Beautiful Together
        </h3>
        <p className="font-body text-muted-foreground">
          Tell us about your celebration and vision. We'll respond within 24 hours.
        </p>
      </div>
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={formData?.firstName}
          onChange={handleInputChange}
          placeholder="Your first name"
          error={errors?.firstName}
          required
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={formData?.lastName}
          onChange={handleInputChange}
          placeholder="Your last name"
          error={errors?.lastName}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData?.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          error={errors?.email}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData?.phone}
          onChange={handleInputChange}
          placeholder="(+91) 9870654345"
          error={errors?.phone}
          required
        />
      </div>
      {/* Event Details */}
      <div className="border-t border-border pt-6">
        <h4 className="font-display text-lg font-medium text-foreground mb-4">
          Event Details
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select
            label="Event Type"
            options={eventTypeOptions}
            value={formData?.eventType}
            onChange={(value) => handleSelectChange('eventType', value)}
            placeholder="Select your celebration type"
            error={errors?.eventType}
            required
          />
          <Input
            label="Event Date"
            type="date"
            name="eventDate"
            value={formData?.eventDate}
            onChange={handleInputChange}
            error={errors?.eventDate}
            required
          />
        </div>

        <Input
          label="Event Location"
          type="text"
          name="location"
          value={formData?.location}
          onChange={handleInputChange}
          placeholder="City, State or Venue Name"
          error={errors?.location}
          required
          className="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Select
            label="Expected Guest Count"
            options={guestCountOptions}
            value={formData?.guestCount}
            onChange={(value) => handleSelectChange('guestCount', value)}
            placeholder="Approximate number of guests"
          />
          <Select
            label="Photography Investment"
            options={budgetOptions}
            value={formData?.budget}
            onChange={(value) => handleSelectChange('budget', value)}
            placeholder="Select budget range"
          />
        </div>
      </div>
      {/* Message */}
      <div className="border-t border-border pt-6">
        <div className="mb-6">
          <label className="block font-body text-sm font-medium text-foreground mb-2">
            Tell Us About Your Vision *
          </label>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleInputChange}
            placeholder="Share your story, style preferences, must-have shots, timeline, or any special details that will help us understand your vision..."
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg font-body text-sm transition-organic focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none ${
              errors?.message 
                ? 'border-error text-error' :'border-border text-foreground bg-background hover:border-accent/30'
            }`}
          />
          {errors?.message && (
            <p className="mt-2 text-sm text-error font-body">{errors?.message}</p>
          )}
        </div>
      </div>
      {/* Preferences */}
      <div className="border-t border-border pt-6 space-y-4">
        <Checkbox
          label="Yes, I'd love to receive photography tips and inspiration via email"
          checked={formData?.newsletter}
          onChange={(e) => handleInputChange(e)}
          name="newsletter"
        />
        
        <Checkbox
          label="I agree to the terms and conditions and privacy policy"
          checked={formData?.terms}
          onChange={(e) => handleInputChange(e)}
          name="terms"
          error={errors?.terms}
          required
        />
      </div>
      {/* Submit Button */}
      <div className="pt-6">
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
        >
          {isSubmitting ? 'Sending Your Message...' : 'Send Inquiry'}
        </Button>
        
        <p className="text-center text-xs text-muted-foreground mt-4 font-body">
          We typically respond within 24 hours. For urgent inquiries, please call us directly.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;