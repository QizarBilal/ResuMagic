import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Certification } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';


const CertificationsForm: React.FC = () => {
  const { resumeData, updateCertifications, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [selectedCertifications, setSelectedCertifications] = useState<Certification[]>(resumeData.certifications);
  const [customCert, setCustomCert] = useState({
    name: '',
    issuer: '',
    issueDate: '',
    expiryDate: '',
    credentialId: '',
    url: ''
  });

  const popularCertifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', category: 'Cloud Computing' },
    { name: 'Google Analytics Certified', issuer: 'Google', category: 'Digital Marketing' },
    { name: 'PMP - Project Management Professional', issuer: 'PMI', category: 'Project Management' },
    { name: 'Certified Scrum Master', issuer: 'Scrum Alliance', category: 'Agile' },
    { name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', category: 'Cloud Computing' },
    { name: 'Salesforce Administrator', issuer: 'Salesforce', category: 'CRM' },
    { name: 'CompTIA Security+', issuer: 'CompTIA', category: 'Cybersecurity' },
    { name: 'Oracle Certified Professional', issuer: 'Oracle', category: 'Database' },
    { name: 'Cisco Certified Network Associate', issuer: 'Cisco', category: 'Networking' },
    { name: 'Google Cloud Professional', issuer: 'Google Cloud', category: 'Cloud Computing' },
    { name: 'HubSpot Content Marketing', issuer: 'HubSpot', category: 'Marketing' },
    { name: 'Adobe Certified Expert', issuer: 'Adobe', category: 'Design' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setCustomCert(prev => ({ ...prev, [field]: value }));
  };

  const addCustomCertification = () => {
    if (customCert.name.trim() && customCert.issuer.trim()) {
      const newCert: Certification = {
        id: uuidv4(),
        name: customCert.name.trim(),
        issuer: customCert.issuer.trim(),
        issueDate: customCert.issueDate,
        expiryDate: customCert.expiryDate,
        credentialId: customCert.credentialId,
        url: customCert.url
      };

      setSelectedCertifications(prev => [...prev, newCert]);
      setCustomCert({
        name: '',
        issuer: '',
        issueDate: '',
        expiryDate: '',
        credentialId: '',
        url: ''
      });
      
      addToast({
        type: 'success',
        message: 'Certification added successfully!'
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addPopularCertification = (cert: typeof popularCertifications[0]) => {
    const newCert: Certification = {
      id: uuidv4(),
      name: cert.name,
      issuer: cert.issuer,
      issueDate: '',
      expiryDate: '',
      credentialId: '',
      url: ''
    };

    setSelectedCertifications(prev => [...prev, newCert]);
    addToast({
      type: 'success',
      message: 'Certification added successfully!'
    });
  };

  const removeCertification = (id: string) => {
    setSelectedCertifications(prev => prev.filter(cert => cert.id !== id));
    addToast({
      type: 'success',
      message: 'Certification removed'
    });
  };

  const updateCertification = (id: string, field: string, value: string) => {
    setSelectedCertifications(prev => prev.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  const handleSave = () => {
    updateCertifications(selectedCertifications);
    completeStep(5);
    addToast({
      type: 'success',
      message: 'Certifications saved successfully!'
    });
    
    // Navigate to next step and scroll to top
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const groupedCertifications = popularCertifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof popularCertifications>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Professional Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 714.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 710 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 710-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Certifications</h1>
              <p className="text-sm text-gray-600">Professional certifications and expertise</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Add Custom Certification */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Custom Certification</h2>
                <p className="text-gray-600">Add any certification not found in our popular list.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Certification Name"
                    type="text"
                    value={customCert.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="AWS Certified Solutions Architect"
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    }
                  />

                  <Input
                    label="Issuing Organization"
                    type="text"
                    value={customCert.issuer}
                    onChange={(e) => handleInputChange('issuer', e.target.value)}
                    placeholder="Amazon Web Services"
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Issue Date"
                    type="month"
                    value={customCert.issueDate}
                    onChange={(e) => handleInputChange('issueDate', e.target.value)}
                  />

                  <Input
                    label="Expiry Date (Optional)"
                    type="month"
                    value={customCert.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                    placeholder="Leave empty if no expiry"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Credential ID (Optional)"
                    type="text"
                    value={customCert.credentialId}
                    onChange={(e) => handleInputChange('credentialId', e.target.value)}
                    placeholder="ABC123456789"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    }
                  />

                  <Input
                    label="Verification URL (Optional)"
                    type="url"
                    value={customCert.url}
                    onChange={(e) => handleInputChange('url', e.target.value)}
                    placeholder="https://verify.example.com"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  />
                </div>

                <button
                  type="button"
                  onClick={addCustomCertification}
                  className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  disabled={!customCert.name.trim() || !customCert.issuer.trim()}
                >
                  Add Certification
                </button>
              </div>
            </div>

            {/* Selected Certifications */}
            {selectedCertifications.length > 0 && (
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Certifications</h2>
                  <p className="text-gray-600">Review and manage your professional certifications.</p>
                </div>

                <div className="space-y-4">
                  {selectedCertifications.map((cert) => (
                    <div key={cert.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.name}</h3>
                          <p className="text-primary-600 font-medium">{cert.issuer}</p>
                        </div>
                        <button
                          onClick={() => removeCertification(cert.id)}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Input
                          label="Issue Date"
                          type="month"
                          value={cert.issueDate}
                          onChange={(e) => updateCertification(cert.id, 'issueDate', e.target.value)}
                        />

                        <Input
                          label="Expiry Date"
                          type="month"
                          value={cert.expiryDate}
                          onChange={(e) => updateCertification(cert.id, 'expiryDate', e.target.value)}
                        />

                        <Input
                          label="Credential ID"
                          type="text"
                          value={cert.credentialId}
                          onChange={(e) => updateCertification(cert.id, 'credentialId', e.target.value)}
                          placeholder="ABC123456789"
                        />

                        <Input
                          label="Verification URL"
                          type="url"
                          value={cert.url}
                          onChange={(e) => updateCertification(cert.id, 'url', e.target.value)}
                          placeholder="https://verify.example.com"
                        />
                      </div>

                      {(cert.issueDate || cert.expiryDate || cert.credentialId || cert.url) && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            {cert.issueDate && (
                              <span>Issued: {new Date(cert.issueDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            )}
                            {cert.expiryDate && (
                              <span>Expires: {new Date(cert.expiryDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            )}
                            {cert.credentialId && (
                              <span>ID: {cert.credentialId}</span>
                            )}
                            {cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-800 font-medium"
                              >
                                Verify →
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end">
              <button 
                onClick={handleSave} 
                className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Save & Continue
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CertificationsForm;