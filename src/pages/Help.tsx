import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Help: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleContactSupport = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/resumagic-support', '_blank');
  };

  const helpCategories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'templates', name: 'Templates', icon: '📄' },
    { id: 'editing', name: 'Editing', icon: '✏️' },
    { id: 'export', name: 'Export & Download', icon: '💾' },
    { id: 'account', name: 'Account', icon: '👤' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' }
  ];

  const helpArticles = [
    {
      id: 1,
      title: "How to Create Your First Resume",
      category: "getting-started",
      description: "Step-by-step guide to building your first professional resume with ResuMagic.",
      readTime: "3 min",
      popular: true
    },
    {
      id: 2,
      title: "Choosing the Right Template for Your Industry",
      category: "templates",
      description: "Learn which resume templates work best for different professions and industries.",
      readTime: "5 min",
      popular: true
    },
    {
      id: 3,
      title: "Customizing Colors and Fonts",
      category: "editing",
      description: "Personalize your resume appearance with custom colors, fonts, and styling options.",
      readTime: "4 min",
      popular: false
    },
    {
      id: 4,
      title: "Downloading Your Resume as PDF",
      category: "export",
      description: "Export your completed resume in various formats including PDF, Word, and more.",
      readTime: "2 min",
      popular: true
    },
    {
      id: 5,
      title: "Managing Your Account Settings",
      category: "account",
      description: "Update your profile, change password, and manage account preferences.",
      readTime: "3 min",
      popular: false
    },
    {
      id: 6,
      title: "Understanding Subscription Plans",
      category: "billing",
      description: "Compare features across free and premium plans, and manage your subscription.",
      readTime: "4 min",
      popular: true
    },
    {
      id: 7,
      title: "Resume Not Saving? Here's How to Fix It",
      category: "troubleshooting",
      description: "Troubleshoot common issues with saving and syncing your resume data.",
      readTime: "3 min",
      popular: false
    },
    {
      id: 8,
      title: "Adding Sections and Custom Fields",
      category: "editing",
      description: "Enhance your resume with additional sections like certifications, hobbies, and more.",
      readTime: "6 min",
      popular: true
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Find answers to your questions and get the most out of ResuMagic
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles..."
                  className="w-full px-6 py-4 pl-12 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <svg className="absolute left-4 top-4 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-card border border-accent-200 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Live Chat Support</h3>
              <p className="text-gray-600 text-sm mb-4">Get instant help from our support team</p>
              <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border border-accent-200 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-highlight-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-highlight-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-4">Send us your questions via email</p>
              <button className="bg-highlight-600 text-white px-4 py-2 rounded hover:bg-highlight-700 transition-colors">
                Send Email
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border border-accent-200 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm mb-4">Watch step-by-step video guides</p>
              <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
                Watch Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories and Articles */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Category</h3>
              <div className="space-y-2">
                {helpCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 shadow-soft border ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-accent-200'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {selectedCategory === 'all' ? 'All Articles' : helpCategories.find(c => c.id === selectedCategory)?.name}
                </h3>
                <span className="text-gray-500 text-sm">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white p-6 rounded-lg shadow-card border border-accent-200 hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-800 hover:text-primary-600">
                            {article.title}
                          </h4>
                          {article.popular && (
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{article.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{article.readTime} read</span>
                          <span>•</span>
                          <span className="capitalize">
                            {helpCategories.find(c => c.id === article.category)?.name}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or browse a different category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-highlight-500 to-primary-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 text-white">Still Need Help?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactSupport}
                className="bg-white text-primary-600 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-lg shadow-lg"
              >
                Contact Support
              </button>
              <button 
                onClick={handleScheduleCall}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/30 transition-colors duration-200 rounded-lg"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;