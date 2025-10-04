import React, { useState } from 'react';
import Modal from '../components/common/Modal';

const Contact: React.FC = () => {
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-600 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about ResuMagic? Need help with your resume? We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-card border border-accent-200">
            <h2 className="text-2xl font-bold text-primary-600 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-600">Email</div>
                  <div className="text-gray-600">support@resumagic.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-highlight-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-highlight-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-600">Response Time</div>
                  <div className="text-gray-600">Within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-600">Support Hours</div>
                  <div className="text-gray-600">Business Hours: 9 AM - 6 PM EST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-lg shadow-card text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-lg mb-6 text-primary-100">
              Check out our comprehensive FAQ section or browse our help documentation for quick answers.
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => setShowFAQModal(true)}
                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer flex items-center space-x-3"
              >
                <span className="text-xl">📚</span>
                <span>Browse FAQ</span>
              </button>
              <button 
                onClick={() => setShowHelpModal(true)}
                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer flex items-center space-x-3"
              >
                <span className="text-xl">📖</span>
                <span>Help Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Modal */}
      {showFAQModal && (
        <Modal isOpen={showFAQModal} onClose={() => setShowFAQModal(false)} title="Frequently Asked Questions">
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-accent-200">
                <h3 className="font-semibold text-primary-600 mb-2">How do I create my first resume?</h3>
                <p className="text-gray-600 text-sm">Simply click "Start Building Free" on the homepage, choose a template, and follow our step-by-step wizard. You can create a professional resume in under 5 minutes.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-accent-200">
                <h3 className="font-semibold text-primary-600 mb-2">Are the templates ATS-friendly?</h3>
                <p className="text-gray-600 text-sm">Yes! All our templates are designed to pass Applicant Tracking Systems (ATS). They use proper formatting, standard fonts, and clear section headers that ATS can easily parse.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-accent-200">
                <h3 className="font-semibold text-primary-600 mb-2">Can I download my resume for free?</h3>
                <p className="text-gray-600 text-sm">Yes! Our free plan allows you to create and download your resume in PDF format. Premium templates and additional features are available with our paid plans.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-accent-200">
                <h3 className="font-semibold text-primary-600 mb-2">How secure is my personal information?</h3>
                <p className="text-gray-600 text-sm">We take privacy seriously. Your data is encrypted, stored securely, and never shared with third parties. You can delete your account and data at any time.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-accent-200">
                <h3 className="font-semibold text-primary-600 mb-2">Can I edit my resume after creating it?</h3>
                <p className="text-gray-600 text-sm">Absolutely! You can edit, update, and download your resume as many times as needed. Changes are saved automatically as you work.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-accent-200">
                <h3 className="font-semibold text-primary-600 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, Stripe, PayStack, RazorPay, and PayTM for your convenience.</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-accent-200 text-center">
              <p className="text-sm text-gray-500 mb-4">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                  Contact Support
                </button>
                <button 
                  onClick={() => setShowFAQModal(false)}
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Help Documentation Modal */}
      {showHelpModal && (
        <Modal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} title="Help Documentation">
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-primary-50 to-highlight-50 p-4 rounded-lg border border-primary-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary-600">Getting Started Guide</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">Learn the basics of creating your first resume with our comprehensive getting started guide.</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Choosing the right template</li>
                  <li>• Adding your personal information</li>
                  <li>• Writing effective content</li>
                  <li>• Downloading and sharing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-highlight-50 to-primary-50 p-4 rounded-lg border border-highlight-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-highlight-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-highlight-600">Resume Writing Tips</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">Professional tips and best practices for creating standout resumes that get noticed.</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Tailoring your resume to job descriptions</li>
                  <li>• Using action verbs and quantifiable achievements</li>
                  <li>• Optimizing for ATS systems</li>
                  <li>• Industry-specific formatting guidelines</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-highlight-50 p-4 rounded-lg border border-primary-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary-600">Advanced Features</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">Explore premium features and advanced customization options available in ResuMagic.</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Premium template collection</li>
                  <li>• Custom color schemes and branding</li>
                  <li>• Multiple export formats</li>
                  <li>• Integration with career platforms</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-highlight-50 to-primary-50 p-4 rounded-lg border border-highlight-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-highlight-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-highlight-600">Troubleshooting</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">Common issues and solutions to help you resolve any problems quickly.</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Resume not saving or loading</li>
                  <li>• Download and printing issues</li>
                  <li>• Account and billing questions</li>
                  <li>• Browser compatibility</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-accent-200 text-center">
              <p className="text-sm text-gray-500 mb-4">Need more detailed help?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                  Contact Support
                </button>
                <button 
                  onClick={() => setShowHelpModal(false)}
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Contact;