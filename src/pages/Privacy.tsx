import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="mb-8">
              <h1 className="heading-lg mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 1, 2024</p>
            </div>

            <div className="prose prose-gray max-w-none">
              <h2 className="heading-md mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              <p className="mb-4">
                When you create an account or use our services, we may collect:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Name and contact information (email address)</li>
                <li>Professional information you include in your resume</li>
                <li>Payment information for premium subscriptions</li>
                <li>Profile preferences and settings</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Usage Information</h3>
              <p className="mb-4">
                We automatically collect information about how you use our service:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information (operating system, device identifiers)</li>
                <li>Usage patterns and feature interactions</li>
                <li>Performance and error data</li>
              </ul>

              <h2 className="heading-md mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Provide and maintain our resume building service</li>
                <li>Process payments and manage subscriptions</li>
                <li>Personalize your experience and provide recommendations</li>
                <li>Send important updates and notifications</li>
                <li>Improve our service and develop new features</li>
                <li>Provide customer support</li>
                <li>Ensure security and prevent fraud</li>
              </ul>

              <h2 className="heading-md mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted partners who help us operate our service (payment processors, hosting providers)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
              </ul>

              <h2 className="heading-md mb-4">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
              </p>

              <h2 className="heading-md mb-4">5. Data Retention</h2>
              <p className="mb-6">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. 
                When you delete your account, we will delete your personal information within 30 days, except where we are required to retain it by law.
              </p>

              <h2 className="heading-md mb-4">6. Your Rights and Choices</h2>
              <p className="mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Update:</strong> Correct or update your information through your account settings</li>
                <li><strong>Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>

              <h2 className="heading-md mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className="mb-6">
                You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.
              </p>

              <h2 className="heading-md mb-4">8. Third-Party Services</h2>
              <p className="mb-6">
                Our service may contain links to third-party websites or integrate with third-party services. This privacy policy does not apply to 
                those third-party services. We encourage you to review their privacy policies before providing any information.
              </p>

              <h2 className="heading-md mb-4">9. International Data Transfers</h2>
              <p className="mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place 
                to protect your information in accordance with this privacy policy and applicable laws.
              </p>

              <h2 className="heading-md mb-4">10. Children's Privacy</h2>
              <p className="mb-6">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>

              <h2 className="heading-md mb-4">11. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this privacy policy from time to time. We will notify you of any material changes by email or through our service. 
                Your continued use of the service after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="heading-md mb-4">12. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@resumagic.com</p>
                <p><strong>Address:</strong> 123 Business St, Suite 100, City, State 12345</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;