import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: 'privacy' | 'terms' | 'cookies';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (content) {
      case 'privacy':
        return (
          <div className="space-y-4">
            <p className="text-gray-700">
              At ResuMagic, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            
            <h3 className="font-semibold text-gray-800 mt-6">Information We Collect</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Personal information you provide when creating your resume (name, contact details, work history)</li>
              <li>Usage data to improve our service and user experience</li>
              <li>Payment information for premium features (processed securely through our payment partners)</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-6">How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>To provide and improve our resume building services</li>
              <li>To send you career tips and updates (with your consent)</li>
              <li>To process payments and provide customer support</li>
              <li>To analyze usage patterns and enhance user experience</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-6">Data Security</h3>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your data. Your resume information is encrypted 
              and stored securely. We never share your personal information with third parties without your explicit consent.
            </p>

            <h3 className="font-semibold text-gray-800 mt-6">Your Rights</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Access and download your resume data at any time</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Update or correct your personal information</li>
            </ul>

            <p className="text-gray-700 mt-6">
              <strong>Contact Us:</strong> For any privacy-related questions, email us at privacy@resumagic.com
            </p>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-4">
            <p className="text-gray-700">
              Welcome to ResuMagic. By using our service, you agree to these terms and conditions.
            </p>

            <h3 className="font-semibold text-gray-800 mt-6">Service Description</h3>
            <p className="text-gray-700">
              ResuMagic provides online resume building tools, templates, and career guidance services to help users 
              create professional resumes and advance their careers.
            </p>

            <h3 className="font-semibold text-gray-800 mt-6">User Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Provide accurate and truthful information in your resume</li>
              <li>Respect intellectual property rights and use templates appropriately</li>
              <li>Not use the service for illegal or harmful purposes</li>
              <li>Maintain the security of your account credentials</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-6">Payment Terms</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Premium features require payment as specified on our pricing page</li>
              <li>Payments are processed securely through third-party payment processors</li>
              <li>Refunds are available within 30 days of purchase for premium subscriptions</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-6">Intellectual Property</h3>
            <p className="text-gray-700">
              All resume templates, designs, and content provided by ResuMagic remain our intellectual property. 
              Users receive a license to use these materials for creating their personal resumes.
            </p>

            <h3 className="font-semibold text-gray-800 mt-6">Limitation of Liability</h3>
            <p className="text-gray-700">
              ResuMagic provides tools and guidance but cannot guarantee job placement or interview success. 
              We are not liable for employment outcomes or decisions made by employers.
            </p>

            <p className="text-gray-700 mt-6">
              <strong>Contact:</strong> For questions about these terms, contact legal@resumagic.com
            </p>
          </div>
        );

      case 'cookies':
        return (
          <div className="space-y-4">
            <p className="text-gray-700">
              This Cookie Policy explains how ResuMagic uses cookies and similar technologies to enhance your experience.
            </p>

            <h3 className="font-semibold text-gray-800 mt-6">What Are Cookies?</h3>
            <p className="text-gray-700">
              Cookies are small text files stored on your device that help us remember your preferences and improve 
              your experience on our website.
            </p>

            <h3 className="font-semibold text-gray-800 mt-6">Types of Cookies We Use</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality and security</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to show relevant advertisements (with your consent)</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-6">Managing Cookies</h3>
            <p className="text-gray-700">
              You can control cookies through your browser settings. However, disabling certain cookies may limit 
              some website functionality.
            </p>

            <h3 className="font-semibold text-gray-800 mt-6">Third-Party Cookies</h3>
            <p className="text-gray-700">
              We may use third-party services like Google Analytics to improve our service. These services may 
              place their own cookies on your device.
            </p>

            <p className="text-gray-700 mt-6">
              <strong>Questions?</strong> Contact us at cookies@resumagic.com for more information.
            </p>
          </div>
        );

      default:
        return <p>Content not available.</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 pr-8">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 flex-shrink-0"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
          {getContent()}
        </div>
        
        <div className="flex justify-end p-4 sm:p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
