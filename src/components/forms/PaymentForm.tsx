import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import Modal from '../common/Modal';

const PaymentForm: React.FC = () => {
  const { setPremium, completeStep, addToast } = useResume();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('free');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });

  const plans = [
    {
      id: 'free' as const,
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      features: [
        'Basic resume builder',
        'PDF export',
        '1 resume template',
        'Basic suggestions',
        'Standard support'
      ],
      limitations: [
        'Limited customization',
        'Watermark on PDF',
        'Basic roadmap access'
      ]
    },
    {
      id: 'premium' as const,
      name: 'Premium Plan',
      price: '$9.99',
      period: 'per month',
      features: [
        'Advanced resume builder',
        'Unlimited PDF exports',
        '10+ premium templates',
        'AI-powered suggestions',
        'Personalized roadmaps',
        'Premium certifications',
        'Priority support',
        'ATS optimization',
        'Cover letter builder'
      ],
      limitations: []
    }
  ];

  const handlePlanSelect = (planId: 'free' | 'premium') => {
    setSelectedPlan(planId);
    if (planId === 'premium') {
      setShowPaymentModal(true);
    } else {
      handleFreePlan();
    }
  };

  const handleFreePlan = () => {
    setPremium(false);
    completeStep(10);
    addToast({
      type: 'success',
      message: 'Free plan selected! You can upgrade anytime.'
    });
  };

  const handlePayment = async () => {
    // Simulate payment processing
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.name) {
      addToast({
        type: 'error',
        message: 'Please fill in all payment details'
      });
      return;
    }

    // Mock payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setPremium(true);
    setShowPaymentModal(false);
    completeStep(10);
    addToast({
      type: 'success',
      message: 'Payment successful! Welcome to Premium!'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h1>
        <p className="text-gray-600">Select the plan that best fits your career goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`card relative ${
              plan.id === 'premium' 
                ? 'border-2 border-primary-500 shadow-lg' 
                : 'border border-gray-200'
            }`}
          >
            {plan.id === 'premium' && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-500 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Features included:</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Limitations:</h3>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center text-gray-500">
                        <svg className="w-4 h-4 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() => handlePlanSelect(plan.id)}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                plan.id === 'premium'
                  ? 'bg-gradient-to-r from-primary-600 to-violet-600 hover:from-primary-700 hover:to-violet-700 text-white'
                  : 'btn-secondary'
              } ${selectedPlan === plan.id ? 'ring-2 ring-primary-500' : ''}`}
            >
              {plan.id === 'premium' ? 'Upgrade to Premium' : 'Continue with Free'}
            </button>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="Complete Your Payment"
        size="md"
      >
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary-50 to-violet-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">Premium Plan</h3>
            <p className="text-gray-600">$9.99 per month • Cancel anytime</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={paymentData.name}
              onChange={(e) => setPaymentData({...paymentData, name: e.target.value})}
              className="input-field"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={paymentData.email}
              onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
              className="input-field"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number *
            </label>
            <input
              type="text"
              value={paymentData.cardNumber}
              onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
              className="input-field"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date *
              </label>
              <input
                type="text"
                value={paymentData.expiryDate}
                onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                className="input-field"
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV *
              </label>
              <input
                type="text"
                value={paymentData.cvv}
                onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                className="input-field"
                placeholder="123"
                maxLength={4}
              />
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-4">
            <p>🔒 Your payment information is secure and encrypted.</p>
            <p>This is a demo payment form - no actual charges will be made.</p>
          </div>

          <div className="flex space-x-3 pt-4">
            <button onClick={handlePayment} className="btn-primary flex-1">
              Complete Payment
            </button>
            <button onClick={() => setShowPaymentModal(false)} className="btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Already have an account?{' '}
          <button 
            onClick={() => addToast({ type: 'info', message: 'Sign in feature coming soon!' })}
            className="text-primary-600 hover:underline bg-transparent border-none cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;