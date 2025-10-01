import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="mb-8">
              <h1 className="heading-lg mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last updated: January 1, 2024</p>
            </div>

            <div className="prose prose-gray max-w-none">
              <h2 className="heading-md mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using ResuMagic ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="heading-md mb-4">2. Description of Service</h2>
              <p className="mb-6">
                ResuMagic is a web-based resume building platform that provides users with tools to create, edit, and download professional resumes. 
                The service includes both free and premium features, with varying levels of access and functionality.
              </p>

              <h2 className="heading-md mb-4">3. User Accounts</h2>
              <p className="mb-4">
                To access certain features of the Service, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Providing accurate and complete information</li>
              </ul>

              <h2 className="heading-md mb-4">4. Premium Services</h2>
              <p className="mb-4">
                Premium features are available through paid subscription plans. Premium services include:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Unlimited resume downloads</li>
                <li>Access to premium templates</li>
                <li>AI-powered content suggestions</li>
                <li>Priority customer support</li>
                <li>Career roadmap access</li>
              </ul>

              <h2 className="heading-md mb-4">5. Payment and Billing</h2>
              <p className="mb-4">
                For premium services:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Payment is required in advance for subscription periods</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are provided within 14 days of initial purchase</li>
                <li>Price changes will be communicated 30 days in advance</li>
              </ul>

              <h2 className="heading-md mb-4">6. User Content</h2>
              <p className="mb-6">
                You retain ownership of all content you create using our Service. By using ResuMagic, you grant us a limited license to 
                store, process, and display your content solely for the purpose of providing the Service to you.
              </p>

              <h2 className="heading-md mb-4">7. Prohibited Uses</h2>
              <p className="mb-4">
                You may not use the Service to:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Create false or misleading resume content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on others' intellectual property rights</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for commercial purposes beyond personal use</li>
              </ul>

              <h2 className="heading-md mb-4">8. Privacy and Data Protection</h2>
              <p className="mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                to understand our practices regarding the collection and use of your personal information.
              </p>

              <h2 className="heading-md mb-4">9. Limitation of Liability</h2>
              <p className="mb-6">
                ResuMagic shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your use of the Service.
              </p>

              <h2 className="heading-md mb-4">10. Termination</h2>
              <p className="mb-6">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
                for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>

              <h2 className="heading-md mb-4">11. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email 
                or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.
              </p>

              <h2 className="heading-md mb-4">12. Contact Information</h2>
              <p className="mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> legal@resumagic.com</p>
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

export default Terms;