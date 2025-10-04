import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PremiumTemplate, SupportFeature, BundlePackage, PaymentItem } from '../types';
import { Button, Card } from '../components/ui';
import Modal from '../components/common/Modal';
import PaymentForm from '../components/payment/PaymentForm';

const Pricing: React.FC = () => {
  const [selectedPaymentItem, setSelectedPaymentItem] = useState<PaymentItem | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Premium Templates Data
  const premiumTemplates: PremiumTemplate[] = [
    {
      id: 'executive-pro',
      name: 'Executive Pro',
      thumbnail: '/templates/executive-pro.jpg',
      category: 'executive',
      price: 12.99,
      originalPrice: 19.99,
      description: 'Premium executive template for senior-level positions',
      features: ['Executive Layout', 'Leadership Focus', 'Achievement Highlights', 'Professional Branding'],
      isPremium: true,
      isPopular: true
    },
    {
      id: 'tech-innovator',
      name: 'Tech Innovator',
      thumbnail: '/templates/tech-innovator.jpg',
      category: 'tech',
      price: 9.99,
      originalPrice: 14.99,
      description: 'Modern tech-focused design for developers and engineers',
      features: ['Tech-Optimized', 'Project Showcase', 'Skills Matrix', 'GitHub Integration'],
      isPremium: true
    },
    {
      id: 'creative-studio',
      name: 'Creative Studio',
      thumbnail: '/templates/creative-studio.jpg',
      category: 'creative',
      price: 14.99,
      originalPrice: 21.99,
      description: 'Stunning creative template for designers and artists',
      features: ['Visual Portfolio', 'Creative Layout', 'Brand Colors', 'Work Samples'],
      isPremium: true
    }
  ];

  // Support Features Data
  const supportFeatures: SupportFeature[] = [
    {
      id: 'courses-integration',
      name: 'Courses Integration',
      description: 'Access partner learning platforms and auto-fill completed courses',
      icon: '🎓',
      price: 19.99,
      originalPrice: 29.99,
      category: 'courses',
      redirectUrl: '/courses-partner',
      benefits: [
        'Partner platform access',
        'Course completion tracking',
        'Auto-resume integration',
        'Skill certification sync'
      ],
      integrationFeatures: [
        'Coursera integration',
        'Udemy partnership',
        'LinkedIn Learning sync',
        'Progress tracking'
      ]
    },
    {
      id: 'internships-integration',
      name: 'Internships Integration',
      description: 'Connect with internship platforms and auto-populate experience',
      icon: '💼',
      price: 24.99,
      originalPrice: 34.99,
      category: 'internships',
      redirectUrl: '/internships-partner',
      benefits: [
        'Internship platform access',
        'Experience auto-fill',
        'Company verification',
        'Skills gained tracking'
      ],
      integrationFeatures: [
        'LinkedIn internships',
        'Indeed integration',
        'Company partnerships',
        'Experience verification'
      ],
      isPopular: true
    },
    {
      id: 'hackathons-integration',
      name: 'Hackathons Integration',
      description: 'Join hackathons and automatically showcase your achievements',
      icon: '🏆',
      price: 22.99,
      originalPrice: 32.99,
      category: 'hackathons',
      redirectUrl: '/hackathons-partner',
      benefits: [
        'Hackathon platform access',
        'Achievement tracking',
        'Project documentation',
        'Team collaboration sync'
      ],
      integrationFeatures: [
        'Devpost integration',
        'MLH partnerships',
        'GitHub sync',
        'Achievement verification'
      ]
    }
  ];

  // Bundle Package
  const bundlePackage: BundlePackage = {
    id: 'resumagic-premium',
    name: 'ResuMagic Premium Bundle',
    description: 'Complete career acceleration package with all features',
    price: 49.99,
    originalPrice: 67.97,
    discount: 26,
    features: supportFeatures,
    additionalBenefits: [
      'Priority customer support',
      'Early access to new features',
      'Career coaching sessions',
      'LinkedIn profile optimization',
      'Interview preparation guide'
    ],
    isRecommended: true
  };

  const handlePayment = (item: PaymentItem) => {
    setSelectedPaymentItem(item);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setSelectedPaymentItem(null);
    // Handle success logic here
  };

  const handlePaymentCancel = () => {
    setShowPaymentModal(false);
    setSelectedPaymentItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-highlight-50 py-8">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-6">
            <span className="text-navy-900">Upgrade Your Career</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our premium templates and career acceleration features to land your dream job faster
          </p>
        </div>

        {/* Free Plan Section */}
        <div className="mb-16">
          <h2 className="heading-md text-center mb-8">Start Free</h2>
          <div className="max-w-md mx-auto">
            <Card className="text-center p-8 border-2 border-accent-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Plan</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started with professional resumes</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Access to ATS-friendly templates
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Manual content filling
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free PDF & JPG downloads
                </li>
              </ul>
              <Link to="/resume-builder">
                <Button className="w-full btn-secondary">Start Building Free</Button>
              </Link>
            </Card>
          </div>
        </div>

        {/* Premium Templates Section */}
        <div className="mb-16">
          <h2 className="heading-md text-center mb-8">Premium Templates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {premiumTemplates.map((template) => (
              <Card key={template.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
                {template.isPopular && (
                  <div className="absolute top-4 right-4 bg-highlight-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="aspect-w-3 aspect-h-4 mb-4">
                  <img 
                    src={template.thumbnail} 
                    alt={template.name}
                    className="w-full h-48 object-cover rounded-lg bg-gray-100"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">${template.price}</span>
                    {template.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${template.originalPrice}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full btn-primary"
                  onClick={() => handlePayment({
                    id: template.id,
                    type: 'template',
                    name: template.name,
                    price: template.price
                  })}
                >
                  Unlock Template
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Features Section */}
        <div className="mb-16">
          <h2 className="heading-md text-center mb-8">Career Acceleration Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportFeatures.map((feature) => (
              <Card key={feature.id} className="relative text-center hover:shadow-xl transition-all duration-300">
                {feature.isPopular && (
                  <div className="absolute top-4 right-4 bg-highlight-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-primary-600">${feature.price}</span>
                  {feature.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${feature.originalPrice}</span>
                  )}
                </div>
                <ul className="space-y-2 mb-6 text-left">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full btn-primary"
                  onClick={() => handlePayment({
                    id: feature.id,
                    type: 'support',
                    name: feature.name,
                    price: feature.price
                  })}
                >
                  Unlock Feature
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Bundle Package Section */}
        <div id="best-value" className="mb-16">
          <h2 className="heading-md text-center mb-8">Best Value Package</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="relative text-center p-8 border-2 border-highlight-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-highlight-500 text-white px-6 py-2 rounded-full font-medium">
                Best Value - Save {bundlePackage.discount}%
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{bundlePackage.name}</h3>
              <p className="text-gray-600 mb-6">{bundlePackage.description}</p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary-600">${bundlePackage.price}</span>
                <span className="text-xl text-gray-500 line-through">${bundlePackage.originalPrice}</span>
              </div>
              <p className="text-sm text-gray-600 mb-8">One-time payment • Lifetime access</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
                  <ul className="space-y-2">
                    {bundlePackage.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Bonus Benefits:</h4>
                  <ul className="space-y-2">
                    {bundlePackage.additionalBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button 
                className="w-full btn-primary text-lg py-4"
                onClick={() => handlePayment({
                  id: bundlePackage.id,
                  type: 'bundle',
                  name: bundlePackage.name,
                  price: bundlePackage.price
                })}
              >
                Get ResuMagic Premium
              </Button>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="heading-md mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            <Card className="text-left p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How do the integrations work?</h3>
              <p className="text-gray-600">Once you unlock a feature, you'll be redirected to our partner platforms where you can complete courses, internships, or hackathons. Your achievements are automatically synced back to ResuMagic and integrated into your resume.</p>
            </Card>
            <Card className="text-left p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use premium templates after purchase?</h3>
              <p className="text-gray-600">Yes! Once you purchase a premium template, you have lifetime access to use it and can customize it with your content as many times as needed.</p>
            </Card>
            <Card className="text-left p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the bundle package?</h3>
              <p className="text-gray-600">The bundle includes all three support features (Courses, Internships, Hackathons) plus additional benefits like priority support and career coaching at a 26% discount.</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedPaymentItem && (
        <Modal isOpen={showPaymentModal} onClose={handlePaymentCancel} title="Complete Your Purchase">
          <div className="p-6">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900">{selectedPaymentItem.name}</h3>
              <p className="text-2xl font-bold text-primary-600">${selectedPaymentItem.price}</p>
            </div>
            <PaymentForm 
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Pricing;