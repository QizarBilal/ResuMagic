import React from 'react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Professional Resume Builder',
      description: 'Create industry-standard resumes with our step-by-step guided process and real-time preview.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      benefits: ['Intuitive interface', 'Real-time preview', 'Multiple templates', 'PDF export']
    },
    {
      title: 'ATS Optimization',
      description: 'All templates are designed to pass through Applicant Tracking Systems successfully.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      benefits: ['ATS-friendly format', 'Keyword optimization', 'Clean structure', 'Industry standards']
    },
    {
      title: 'Professional Templates',
      description: 'Choose from professionally designed templates for different industries and career levels.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      benefits: ['Modern designs', 'Industry-specific', 'Customizable layout', 'Professional typography']
    },
    {
      title: 'Secure & Private',
      description: 'Your data is encrypted and secure. We maintain strict privacy standards and never share your information.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      benefits: ['End-to-end encryption', 'GDPR compliant', 'No data sharing', 'Secure storage']
    },
    {
      title: 'Export Options',
      description: 'Download your resume in multiple formats including PDF, Word, and print-ready versions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      benefits: ['PDF export', 'Word format', 'High quality', 'Print ready']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-6">
            Professional Resume Building Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive tools and features that help you create professional, 
            ATS-friendly resumes that stand out to employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-navy-100 flex items-center justify-center mb-6 text-navy-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Choose ResuMagic?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Easy to Use</h3>
                  <p className="text-gray-600">Our intuitive interface makes resume building simple and efficient.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Professional Results</h3>
                  <p className="text-gray-600">Create industry-standard resumes that get noticed by employers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Free & Premium Options</h3>
                  <p className="text-gray-600">Start free and upgrade when you need advanced features.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary-600 to-violet-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of professionals who have successfully built their careers with ResuMagic.
            </p>
            <div className="space-y-4">
              <Link
                to="/resume-builder?plan=free"
                className="block bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-100 transition-all duration-300"
              >
                Start Building Free
              </Link>
              <Link
                to="/resume-builder"
                className="block bg-navy-800 text-white px-6 py-3 font-semibold text-center hover:bg-navy-900 transition-colors duration-200"
              >
                Start Building Resume
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center bg-white p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">Trusted by Professionals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800 mb-2">10K+</div>
              <div className="text-gray-600">Resumes Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800 mb-2">100%</div>
              <div className="text-gray-600">Secure & Private</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;