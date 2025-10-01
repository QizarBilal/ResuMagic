import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  name: string;
}

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  preview: string;
  features: string[];
  isPremium: boolean;
  isPopular?: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  bestFor: string[];
  style: 'minimal' | 'modern' | 'creative' | 'professional' | 'classic';
  downloads: number;
  tags: string[];
  colorPalettes: ColorPalette[];
}

const Templates: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<Template | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const templates: Template[] = useMemo(() => [
    {
      id: 'classic-professional',
      name: 'Classic Professional',
      category: 'business',
      description: 'Timeless and ATS-friendly design perfect for corporate roles',
      preview: '/api/placeholder/300/400',
      features: ['ATS-Optimized', 'Clean Typography', 'Professional Layout', 'Easy to Read'],
      isPremium: false,
      isPopular: true,
      difficulty: 'Beginner',
      bestFor: ['Business', 'Finance', 'Consulting', 'Management'],
      colorPalettes: [
        { primary: '#1f2937', secondary: '#3b82f6', accent: '#f8fafc', name: 'Corporate Blue' },
        { primary: '#0f172a', secondary: '#0ea5e9', accent: '#f1f5f9', name: 'Deep Ocean' },
        { primary: '#374151', secondary: '#10b981', accent: '#f9fafb', name: 'Forest Green' }
      ],
      style: 'classic',
      downloads: 25340,
      tags: ['ats-friendly', 'corporate', 'traditional', 'business']
    },
    {
      id: 'modern-executive',
      name: 'Modern Executive',
      category: 'executive',
      description: 'Sophisticated design for senior-level positions',
      preview: '/api/placeholder/300/400',
      features: ['Executive Summary Focus', 'Achievement Highlights', 'Premium Typography', 'Leadership Focus'],
      isPremium: true,
      difficulty: 'Advanced',
      bestFor: ['Executive', 'C-Suite', 'Director', 'VP Roles'],
      colorPalettes: [
        { primary: '#0f172a', secondary: '#0ea5e9', accent: '#f1f5f9', name: 'Executive Navy' },
        { primary: '#1e293b', secondary: '#8b5cf6', accent: '#f8fafc', name: 'Royal Purple' },
        { primary: '#18181b', secondary: '#ef4444', accent: '#fafafa', name: 'Bold Crimson' }
      ],
      style: 'modern',
      downloads: 18750,
      tags: ['executive', 'leadership', 'premium', 'sophisticated']
    },
    {
      id: 'creative-designer',
      name: 'Creative Designer',
      category: 'creative',
      description: 'Visually striking template for creative professionals',
      preview: '/api/placeholder/300/400',
      features: ['Portfolio Integration', 'Creative Layout', 'Color Customization', 'Visual Elements'],
      isPremium: true,
      isPopular: true,
      difficulty: 'Intermediate',
      bestFor: ['Graphic Design', 'UX/UI', 'Marketing', 'Advertising'],
      colorPalettes: [
        { primary: '#7c3aed', secondary: '#ec4899', accent: '#f59e0b', name: 'Creative Burst' },
        { primary: '#dc2626', secondary: '#f59e0b', accent: '#8b5cf6', name: 'Vibrant Mix' },
        { primary: '#059669', secondary: '#06b6d4', accent: '#f472b6', name: 'Fresh Gradient' }
      ],
      style: 'creative',
      downloads: 12890,
      tags: ['creative', 'colorful', 'portfolio', 'artistic']
    },
    {
      id: 'tech-developer',
      name: 'Tech Developer',
      category: 'technology',
      description: 'Code-focused template for software developers',
      preview: '/api/placeholder/300/400',
      features: ['Project Showcase', 'GitHub Integration', 'Skill Bars', 'Tech Stack Highlight'],
      isPremium: false,
      difficulty: 'Intermediate',
      bestFor: ['Software Engineering', 'Web Development', 'Data Science', 'DevOps'],
      colorPalettes: [
        { primary: '#111827', secondary: '#10b981', accent: '#374151', name: 'Code Dark' },
        { primary: '#1e293b', secondary: '#3b82f6', accent: '#64748b', name: 'Tech Blue' },
        { primary: '#0f172a', secondary: '#06b6d4', accent: '#475569', name: 'Cyber Teal' }
      ],
      style: 'modern',
      downloads: 22150,
      tags: ['tech', 'developer', 'coding', 'technical']
    },
    {
      id: 'minimal-clean',
      name: 'Minimal Clean',
      category: 'minimal',
      description: 'Elegant simplicity that lets your content shine',
      preview: '/api/placeholder/300/400',
      features: ['Minimalist Design', 'White Space', 'Typography Focus', 'Clean Lines'],
      isPremium: false,
      difficulty: 'Beginner',
      bestFor: ['Any Industry', 'Entry Level', 'Career Change', 'Academic'],
      colorPalettes: [
        { primary: '#000000', secondary: '#6b7280', accent: '#ffffff', name: 'Monochrome' },
        { primary: '#1f2937', secondary: '#9ca3af', accent: '#f9fafb', name: 'Soft Gray' },
        { primary: '#374151', secondary: '#d1d5db', accent: '#ffffff', name: 'Gentle Contrast' }
      ],
      style: 'minimal',
      downloads: 16420,
      tags: ['minimal', 'clean', 'simple', 'elegant']
    },
    {
      id: 'modern-gradient',
      name: 'Modern Gradient',
      category: 'modern',
      description: 'Contemporary design with beautiful gradients',
      preview: '/api/placeholder/300/400',
      features: ['Gradient Accents', 'Modern Typography', 'Social Links', 'Mobile Optimized'],
      isPremium: true,
      difficulty: 'Intermediate',
      bestFor: ['Startups', 'Tech', 'Digital Marketing', 'Social Media'],
      colorPalettes: [
        { primary: '#4f46e5', secondary: '#06b6d4', accent: '#8b5cf6', name: 'Modern Gradient' },
        { primary: '#f59e0b', secondary: '#ef4444', accent: '#ec4899', name: 'Sunset Glow' },
        { primary: '#10b981', secondary: '#3b82f6', accent: '#8b5cf6', name: 'Aurora' }
      ],
      style: 'modern',
      downloads: 9875,
      tags: ['gradient', 'modern', 'contemporary', 'vibrant']
    },
    {
      id: 'academic-researcher',
      name: 'Academic Researcher',
      category: 'academic',
      description: 'Publication-focused template for academics',
      preview: '/api/placeholder/300/400',
      features: ['Publication List', 'Research Focus', 'Academic Format', 'Reference Ready'],
      isPremium: true,
      difficulty: 'Advanced',
      bestFor: ['Academia', 'Research', 'PhD', 'Scientific Roles'],
      colorPalettes: [
        { primary: '#1e293b', secondary: '#059669', accent: '#f8fafc', name: 'Academic Green' },
        { primary: '#374151', secondary: '#3b82f6', accent: '#f9fafb', name: 'Research Blue' },
        { primary: '#0f172a', secondary: '#8b5cf6', accent: '#f8fafc', name: 'Scholar Purple' }
      ],
      style: 'professional',
      downloads: 5640,
      tags: ['academic', 'research', 'scholarly', 'publications']
    },
    {
      id: 'startup-founder',
      name: 'Startup Founder',
      category: 'entrepreneurship',
      description: 'Entrepreneurial template highlighting ventures',
      preview: '/api/placeholder/300/400',
      features: ['Venture Highlights', 'Achievement Metrics', 'Bold Design', 'Innovation Focus'],
      isPremium: true,
      isPopular: true,
      difficulty: 'Advanced',
      bestFor: ['Entrepreneurship', 'Startup', 'Innovation', 'Business Development'],
      colorPalettes: [
        { primary: '#dc2626', secondary: '#f59e0b', accent: '#1f2937', name: 'Startup Energy' },
        { primary: '#7c3aed', secondary: '#ec4899', accent: '#0f172a', name: 'Innovation Purple' },
        { primary: '#059669', secondary: '#06b6d4', accent: '#374151', name: 'Growth Green' }
      ],
      style: 'modern',
      downloads: 1847,
      tags: ['startup', 'entrepreneur', 'innovation', 'bold']
    }
  ], []);



  const openPreview = (theme: Template) => {
    setSelectedTheme(theme);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedTheme(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 tracking-tight">
              Resume Themes
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Choose from our collection of professionally designed resume themes. 
              Customize colors, fonts, and layouts to match your personal brand.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="mb-12 text-center">
          <p className="text-xl text-gray-600">
            Choose from our collection of professional resume templates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {templates.map((theme) => (
            <div
              key={theme.id}
              className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
            >
              <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-2 opacity-60">📄</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500">Theme Preview</div>
                  </div>
                </div>

                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 z-10">
                  {theme.isPopular && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  {theme.isPremium && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Premium
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex gap-1">
                  {theme.colorPalettes[0] && (
                    <>
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: theme.colorPalettes[0].primary }}
                      ></div>
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: theme.colorPalettes[0].secondary }}
                      ></div>
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: theme.colorPalettes[0].accent }}
                      ></div>
                    </>
                  )}
                </div>

                <button
                  onClick={() => openPreview(theme)}
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 touch-manipulation"
                >
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-lg text-sm sm:text-base">
                      Preview Theme
                    </span>
                  </div>
                </button>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight pr-2">
                    {theme.name}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded flex-shrink-0">
                    {theme.style}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {theme.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => openPreview(theme)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-medium text-xs sm:text-sm py-3 sm:py-2 px-3 rounded-lg transition-colors duration-200 touch-manipulation"
                  >
                    Preview
                  </button>
                  <Link
                    to="/create-resume"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-xs sm:text-sm py-3 sm:py-2 px-3 rounded-lg text-center transition-colors duration-200 touch-manipulation"
                  >
                    {theme.isPremium ? 'Get Pro' : 'Use Theme'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {isPreviewOpen && selectedTheme && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedTheme.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedTheme.description}</p>
                  <div className="flex items-center gap-3">
                    {selectedTheme.isPopular && (
                      <span className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    {selectedTheme.isPremium && (
                      <span className="bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                        Premium Theme
                      </span>
                    )}
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      {selectedTheme.difficulty} Level
                    </span>
                  </div>
                </div>
                <button
                  onClick={closePreview}
                  className="text-gray-400 hover:text-gray-600 text-2xl p-2"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">📄</div>
                    <div className="text-lg font-semibold">Theme Preview</div>
                    <div className="text-sm">Full preview available after selection</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {selectedTheme.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTheme.bestFor.map((field, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Color Palettes</h4>
                    <div className="space-y-3">
                      {selectedTheme.colorPalettes.map((palette, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex gap-1">
                            <div
                              className="w-8 h-8 rounded border border-gray-200"
                              style={{ backgroundColor: palette.primary }}
                            ></div>
                            <div
                              className="w-8 h-8 rounded border border-gray-200"
                              style={{ backgroundColor: palette.secondary }}
                            ></div>
                            <div
                              className="w-8 h-8 rounded border border-gray-200"
                              style={{ backgroundColor: palette.accent }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 font-medium">{palette.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Link
                      to="/create-resume"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      {selectedTheme.isPremium ? 'Get Premium Access' : 'Use This Theme'}
                    </Link>
                    <button
                      onClick={closePreview}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;