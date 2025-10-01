import React, { useState } from 'react';
import { Button, Card, Input } from '../ui';

interface PaymentFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    email: '',
    billingAddress: '',
    city: '',
    zipCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    onSuccess();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        <div className="text-center mb-8">
          <h2 className="heading-md mb-2">Upgrade to Premium</h2>
          <p className="text-muted">Complete your payment to unlock all premium features</p>
        </div>

        <div className="bg-primary-50 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">ResuMagic Premium</h3>
            <span className="text-2xl font-bold text-primary-600">$29</span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              AI-powered auto-suggestions
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Career roadmap & guidance
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              10+ Premium templates
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Lifetime access
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Payment Information</h4>
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Card Number"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formatCardNumber(formData.cardNumber)}
                onChange={handleInputChange}
                maxLength={19}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Expiry Date"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formatExpiryDate(formData.expiryDate)}
                  onChange={handleInputChange}
                  maxLength={5}
                  required
                />
                <Input
                  label="CVV"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  maxLength={4}
                  required
                />
              </div>
              <Input
                label="Cardholder Name"
                name="cardName"
                placeholder="John Doe"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Billing Information */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Billing Information</h4>
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Billing Address"
                name="billingAddress"
                placeholder="123 Main Street"
                value={formData.billingAddress}
                onChange={handleInputChange}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="City"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="ZIP Code"
                  name="zipCode"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                <p className="text-sm text-gray-600">Your payment information is encrypted and secure. This is a demonstration form only.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1"
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              isLoading={isProcessing}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Complete Payment'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PaymentForm;