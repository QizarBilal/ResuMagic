import React, { useState, useEffect } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

const PersonalInfoForm: React.FC = () => {
  const { resumeData, updatePersonalInfo, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [formData, setFormData] = useState(resumeData.personalInfo);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData(resumeData.personalInfo);
  }, [resumeData.personalInfo]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      updatePersonalInfo(formData);
      completeStep(currentStep);
      addToast({
        type: 'success',
        message: 'Personal information saved successfully!',
      });
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      updatePersonalInfo(formData);
      completeStep(currentStep);
      addToast({
        type: 'success',
        message: 'Personal information saved successfully!',
      });
      
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Personal Information</h1>
            <p className="text-sm text-gray-600">Essential professional details</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-primary-50 to-highlight-50 px-4 py-3 border-b border-primary-100">
          <h2 className="text-base font-bold text-gray-900">Contact Details</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              error={errors.fullName}
              placeholder="John Doe"
              required
            />

            <Input
              label="Email Address"
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              placeholder="john.doe@email.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={errors.phone}
              placeholder="+1 (555) 123-4567"
              required
            />

            <Input
              label="Location"
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              error={errors.location}
              placeholder="City, State, Country"
              required
            />
          </div>
        </div>
      </div>

      {/* Professional Links */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-highlight-50 to-primary-50 px-4 py-3 border-b border-highlight-100">
          <h2 className="text-base font-bold text-gray-900">Professional Links</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="LinkedIn Profile"
              type="url"
              id="linkedin"
              value={formData.linkedin}
              onChange={(e) => handleInputChange('linkedin', e.target.value)}
              placeholder="https://linkedin.com/in/username"
            />

            <Input
              label="GitHub Profile"
              type="url"
              id="github"
              value={formData.github}
              onChange={(e) => handleInputChange('github', e.target.value)}
              placeholder="https://github.com/username"
            />
          </div>

          <Input
            label="Portfolio Website"
            type="url"
            id="portfolio"
            value={formData.portfolio}
            onChange={(e) => handleInputChange('portfolio', e.target.value)}
            placeholder="https://yourportfolio.com"
          />
        </div>
      </div>

      {/* Professional Summary */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-accent-50 to-primary-50 px-4 py-3 border-b border-accent-100">
          <h2 className="text-base font-bold text-gray-900">Professional Summary</h2>
        </div>

        <div className="p-6">
          <Textarea
            label="Summary"
            id="summary"
            value={formData.summary}
            onChange={(e) => handleInputChange('summary', e.target.value)}
            placeholder="Brief overview of your professional background and key achievements..."
            rows={4}
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-2">2-3 sentences highlighting your expertise and career goals</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
        >
          Save Draft
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-gradient-to-r from-primary-500 to-highlight-500 text-white rounded-lg hover:from-primary-600 hover:to-highlight-600 transition-all shadow-md hover:shadow-lg text-sm font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
