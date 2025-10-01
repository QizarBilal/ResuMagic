import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about ResuMagic? Need help with your resume? We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-navy-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Email</div>
                  <div className="text-gray-600">support@resumagic.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-charcoal-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-charcoal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Response Time</div>
                  <div className="text-gray-600">Within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Support Hours</div>
                  <div className="text-gray-600">Business Hours: 9 AM - 6 PM EST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-800 p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-lg mb-6 text-navy-200">
              Check out our comprehensive FAQ section or browse our help documentation for quick answers.
            </p>
            <div className="space-y-3">
              <div className="bg-navy-700 hover:bg-navy-600 px-4 py-3 font-medium transition-colors duration-200 cursor-pointer">
                📚 Browse FAQ
              </div>
              <div className="bg-navy-700 hover:bg-navy-600 px-4 py-3 font-medium transition-colors duration-200 cursor-pointer">
                📖 Help Documentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;