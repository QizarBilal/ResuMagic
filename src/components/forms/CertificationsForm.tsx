import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { certifications } from '../../data/sampleData';
import Modal from '../common/Modal';
import { CardSkeleton } from '../common/LoadingSkeleton';
import { Certification } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const CertificationsForm: React.FC = () => {
  const { resumeData, updateCertifications, addToast, completeStep } = useResume();
  const [selectedCertifications, setSelectedCertifications] = useState<Certification[]>(resumeData.certifications);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customCert, setCustomCert] = useState({
    name: '',
    issuer: '',
    issueDate: '',
    expiryDate: '',
    credentialId: '',
    url: ''
  });

  const handleSelectCertification = (cert: any) => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const newCert: Certification = {
        id: uuidv4(),
        name: cert.name,
        issuer: cert.issuer,
        issueDate: '',
        expiryDate: '',
        credentialId: '',
        url: cert.url
      };

      setSelectedCertifications([...selectedCertifications, newCert]);
      setIsLoading(false);
      addToast({
        type: 'success',
        message: `${cert.name} added to your certifications!`
      });
    }, 500);
  };

  const handleAddCustomCertification = () => {
    if (!customCert.name || !customCert.issuer) {
      addToast({
        type: 'error',
        message: 'Please fill in certification name and issuer'
      });
      return;
    }

    const newCert: Certification = {
      id: uuidv4(),
      ...customCert
    };

    setSelectedCertifications([...selectedCertifications, newCert]);
    setCustomCert({
      name: '',
      issuer: '',
      issueDate: '',
      expiryDate: '',
      credentialId: '',
      url: ''
    });
    setIsModalOpen(false);
    addToast({
      type: 'success',
      message: 'Custom certification added!'
    });
  };

  const handleRemoveCertification = (id: string) => {
    setSelectedCertifications(selectedCertifications.filter(cert => cert.id !== id));
    addToast({
      type: 'success',
      message: 'Certification removed'
    });
  };

  const handleSave = () => {
    updateCertifications(selectedCertifications);
    completeStep(5);
    addToast({
      type: 'success',
      message: 'Certifications saved successfully!'
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Certifications</h1>
        <p className="text-gray-600">Add professional certifications to validate your skills and knowledge.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Available Certifications */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Popular Certifications</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary text-sm"
            >
              Add Custom
            </button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="card hover:shadow-lg transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                    {cert.isPremium && (
                      <span className="bg-gradient-to-r from-primary-500 to-violet-500 text-white text-xs px-2 py-1 rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mb-3">{cert.description}</p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                    <span className={`px-2 py-1 rounded ${
                      cert.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      cert.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {cert.difficulty}
                    </span>
                    <span>{cert.duration}</span>
                  </div>

                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleSelectCertification(cert)}
                      className="btn-primary text-xs flex-1"
                      disabled={selectedCertifications.some(selected => selected.name === cert.name)}
                    >
                      {selectedCertifications.some(selected => selected.name === cert.name) ? 'Added' : 'Add'}
                    </button>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-3"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selected Certifications */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Selected Certifications</h2>
          
          {selectedCertifications.length === 0 ? (
            <div className="card text-center py-8">
              <p className="text-gray-500 text-sm">No certifications selected yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedCertifications.map((cert) => (
                <div key={cert.id} className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900 text-sm">{cert.name}</h3>
                    <button
                      onClick={() => handleRemoveCertification(cert.id)}
                      className="text-red-600 hover:text-red-800 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-gray-600 text-xs">{cert.issuer}</p>
                  {cert.issueDate && (
                    <p className="text-gray-500 text-xs mt-1">Issued: {cert.issueDate}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom Certification Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Add Custom Certification"
        size="md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certification Name *
            </label>
            <input
              type="text"
              value={customCert.name}
              onChange={(e) => setCustomCert({...customCert, name: e.target.value})}
              className="input-field"
              placeholder="AWS Certified Solutions Architect"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Issuing Organization *
            </label>
            <input
              type="text"
              value={customCert.issuer}
              onChange={(e) => setCustomCert({...customCert, issuer: e.target.value})}
              className="input-field"
              placeholder="Amazon Web Services"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issue Date
              </label>
              <input
                type="month"
                value={customCert.issueDate}
                onChange={(e) => setCustomCert({...customCert, issueDate: e.target.value})}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="month"
                value={customCert.expiryDate}
                onChange={(e) => setCustomCert({...customCert, expiryDate: e.target.value})}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Credential ID
            </label>
            <input
              type="text"
              value={customCert.credentialId}
              onChange={(e) => setCustomCert({...customCert, credentialId: e.target.value})}
              className="input-field"
              placeholder="ABC123456789"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Credential URL
            </label>
            <input
              type="url"
              value={customCert.url}
              onChange={(e) => setCustomCert({...customCert, url: e.target.value})}
              className="input-field"
              placeholder="https://verify.certification.com/12345"
            />
          </div>

          <div className="flex space-x-3">
            <button onClick={handleAddCustomCertification} className="btn-primary flex-1">
              Add Certification
            </button>
            <button onClick={() => setIsModalOpen(false)} className="btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <div className="mt-8 flex justify-between">
        <button className="btn-secondary" onClick={() => completeStep(5)}>
          Skip This Step
        </button>
        <button onClick={handleSave} className="btn-primary">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default CertificationsForm;