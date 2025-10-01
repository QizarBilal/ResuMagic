import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';

export interface Template {
  id: string;
  name: string;
  thumbnail: string;
  category: 'modern' | 'classic' | 'creative' | 'minimal';
  isPremium: boolean;
  description: string;
  features: string[];
}

const templates: Template[] = [
  {
    id: 'modern-1',
    name: 'Modern Professional',
    thumbnail: '/templates/modern-1.jpg',
    category: 'modern',
    isPremium: false,
    description: 'Clean and modern design perfect for tech professionals',
    features: ['ATS-Friendly', 'Two-Column Layout', 'Icon Integration']
  },
  {
    id: 'classic-1',
    name: 'Classic Executive',
    thumbnail: '/templates/classic-1.jpg',
    category: 'classic',
    isPremium: false,
    description: 'Traditional format ideal for corporate positions',
    features: ['Professional Layout', 'Clean Typography', 'Standard Format']
  },
  {
    id: 'creative-1',
    name: 'Creative Designer',
    thumbnail: '/templates/creative-1.jpg',
    category: 'creative',
    isPremium: true,
    description: 'Bold design for creative professionals and designers',
    features: ['Visual Elements', 'Color Accents', 'Portfolio Section']
  },
  {
    id: 'minimal-1',
    name: 'Minimal Clean',
    thumbnail: '/templates/minimal-1.jpg',
    category: 'minimal',
    isPremium: true,
    description: 'Ultra-clean design focusing on content',
    features: ['Minimalist Design', 'White Space', 'Typography Focus']
  },
  {
    id: 'modern-2',
    name: 'Tech Specialist',
    thumbnail: '/templates/modern-2.jpg',
    category: 'modern',
    isPremium: true,
    description: 'Modern template designed for tech roles',
    features: ['Skills Visualization', 'Project Highlights', 'GitHub Integration']
  },
  {
    id: 'classic-2',
    name: 'Business Professional',
    thumbnail: '/templates/classic-2.jpg',
    category: 'classic',
    isPremium: true,
    description: 'Sophisticated design for business leaders',
    features: ['Executive Summary', 'Achievement Focus', 'Professional Branding']
  }
];

interface TemplateSelectorProps {
  onSelect: (template: Template) => void;
  selectedTemplate?: Template;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect, selectedTemplate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { premium } = useResume();

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'creative', name: 'Creative' },
    { id: 'minimal', name: 'Minimal' }
  ];

  const filteredTemplates = templates.filter(template => 
    selectedCategory === 'all' || template.category === selectedCategory
  );

  const handleTemplateSelect = (template: Template) => {
    if (template.isPremium && !premium) {
      // Show upgrade modal or message
      alert('This template requires a Premium subscription. Please upgrade to access premium templates.');
      return;
    }
    onSelect(template);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Template</h3>
        <p className="text-gray-600 mb-6">
          Select a professional template that matches your industry and personal style.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map(template => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template)}
            className={`relative bg-white rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${
              selectedTemplate?.id === template.id
                ? 'border-primary-500 ring-2 ring-primary-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Premium Badge */}
            {template.isPremium && (
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  PREMIUM
                </span>
              </div>
            )}

            {/* Template Thumbnail */}
            <div className="aspect-[3/4] bg-gray-100 rounded-t-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📄</div>
                  <div className="text-xs text-gray-500">Template Preview</div>
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{template.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  template.category === 'modern' ? 'bg-blue-100 text-blue-800' :
                  template.category === 'classic' ? 'bg-gray-100 text-gray-800' :
                  template.category === 'creative' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {template.category}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-700">Features:</div>
                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Selection Indicator */}
              {selectedTemplate?.id === template.id && (
                <div className="mt-3 flex items-center text-primary-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Selected</span>
                </div>
              )}

              {/* Premium Lock Overlay */}
              {template.isPremium && !premium && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="text-sm font-medium">Premium Only</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Free vs Premium Info */}
      <div className="bg-gradient-to-r from-primary-50 to-violet-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Free Templates</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 2 professional templates</li>
              <li>• ATS-friendly formats</li>
              <li>• Basic customization</li>
              <li>• PDF download</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Premium Templates</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 10+ premium templates</li>
              <li>• Advanced customization</li>
              <li>• Multiple color schemes</li>
              <li>• Multiple export formats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;