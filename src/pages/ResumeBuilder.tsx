import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useResume } from '../contexts/ResumeContext';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import EducationForm from '../components/forms/EducationForm';
import SkillsForm from '../components/forms/SkillsForm';
import ProjectsForm from '../components/forms/ProjectsForm';
import CertificationsForm from '../components/forms/CertificationsForm';
import HackathonsForm from '../components/forms/HackathonsForm';
import InternshipsForm from '../components/forms/InternshipsForm';
import AchievementsForm from '../components/forms/AchievementsForm';
import LanguagesForm from '../components/forms/LanguagesForm';
import PaymentForm from '../components/forms/PaymentForm';
import Modal from '../components/common/Modal';
import Button from '../components/ui/Button';
import TemplateSelector, { Template } from '../components/resume/TemplateSelector';
import LivePreview from '../components/resume/LivePreview';
import ExportOptions from '../components/export/ExportOptions';

const ResumeBuilder: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { currentStep, steps, setCurrentStep, setPremium } = useResume();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('free');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>();

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan === 'premium') {
      setSelectedPlan('premium');
      setShowPaymentModal(true);
    } else {
      setSelectedPlan('free');
      setPremium(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <TemplateSelector 
            onSelect={setSelectedTemplate} 
            selectedTemplate={selectedTemplate}
          />
        );
      case 2:
        return <PersonalInfoForm />;
      case 3:
        return <EducationForm />;
      case 4:
        return <SkillsForm />;
      case 5:
        return <ProjectsForm />;
      case 6:
        return <CertificationsForm />;
      case 7:
        return <HackathonsForm />;
      case 8:
        return <InternshipsForm />;
      case 9:
        return <AchievementsForm />;
      case 10:
        return <LanguagesForm />;
      case 11:
        return <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-6 tracking-tight">
              Professional Resume Preview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your professional resume is almost ready! Review your information before finalizing.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-8 sm:p-12 lg:p-16">
            <div className="text-gray-400 mb-8">
              <div className="text-6xl sm:text-7xl lg:text-8xl mb-6 opacity-60">📄</div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Preview Feature Coming Soon</h3>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Complete all the previous sections to build your professional resume. 
              Your information will be formatted into a beautiful, industry-standard template that's optimized for both ATS systems and human recruiters.
            </p>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 max-w-lg mx-auto">
              <div className="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">Next Steps:</div>
              <ul className="text-sm text-gray-700 space-y-3 text-left">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4 flex-shrink-0"></span>
                  Review and complete all required sections
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4 flex-shrink-0"></span>
                  Choose your preferred professional template design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4 flex-shrink-0"></span>
                  Download in PDF or Word format for easy sharing
                </li>
              </ul>
            </div>
          </div>
        </div>;
      case 12:
        return <ExportOptions template={selectedTemplate} />;
      default:
        return (
          <TemplateSelector 
            onSelect={setSelectedTemplate} 
            selectedTemplate={selectedTemplate}
          />
        );
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Professional Plan Indicator */}
      {selectedPlan && (
        <div className={`text-center py-3 text-white border-b ${
          selectedPlan === 'premium' 
            ? 'bg-primary-600 border-primary-700' 
            : 'bg-accent-600 border-accent-700'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <span className="font-medium text-sm text-center">
                {selectedPlan === 'premium' 
                  ? `✨ Premium Plan Active - All features unlocked`
                  : `📋 Free Plan Active`
                }
              </span>
              {selectedPlan === 'free' && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-0 sm:ml-6 mt-2 sm:mt-0 text-white hover:bg-white/20 font-medium px-4 py-2 border border-white/30 rounded-lg transition-all duration-200"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Upgrade to Premium
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 65-35 Split Layout */}
      <div className="min-h-screen bg-gray-50 flex">
        {/* Left Side - 65% - Steps, Sections & Forms */}
        <div className="w-full lg:w-[65%] bg-white">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="border-b border-gray-200 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {steps[currentStep - 1]?.title || 'Resume Builder'}
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Step {currentStep} of {steps.length}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium text-gray-500">Progress</div>
                  <div className="text-sm font-bold text-primary-600">
                    {Math.round((currentStep / steps.length) * 100)}%
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-600 to-highlight-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Main Content Area - Scrollable */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {/* Form Content */}
              <div className="max-w-4xl">
                {renderCurrentStep()}
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="border-t border-gray-200 px-8 py-6">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={currentStep === 1}
                  className="px-6 py-3 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border-2 hover:shadow-md transition-all duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </Button>
                
                {/* Step Indicators */}
                <div className="flex items-center space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index + 1 <= currentStep 
                          ? 'bg-primary-500' 
                          : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  onClick={handleNextStep}
                  disabled={currentStep === steps.length}
                  className="px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {currentStep === steps.length ? 'Complete' : 'Next'}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - 35% - Resume Preview */}
        <div className="hidden lg:block w-[35%] bg-gray-100 border-l border-gray-200">
          <div className="h-full flex flex-col">
            {/* Preview Header */}
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {currentStep > 1 ? (
                <div className="space-y-4">
                  {/* Resume Preview Window */}
                  <div className="bg-white rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden">
                    <div className="aspect-[8.5/11] bg-white relative p-2">
                      <div className="w-full h-full bg-white shadow-sm rounded border border-gray-200 overflow-hidden">
                        <LivePreview template={selectedTemplate} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Template</h4>
                  <p className="text-gray-600 text-sm">
                    Select a professional template to see your resume preview
                  </p>
                </div>
              )}
            </div>

            {/* Export Actions */}
            {currentStep > 1 && (
              <div className="border-t border-gray-200 p-6">
                <div className="space-y-3">
                  <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0-6l-3 3m3-3l3 3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full py-3 text-sm font-semibold border-2 hover:bg-gray-50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share Resume
                  </Button>
                  <Button variant="outline" className="w-full py-3 text-sm font-semibold border-2 hover:bg-gray-50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Export as JPG
                  </Button>
                </div>

                {/* Premium Upgrade in Sidebar */}
                {selectedPlan === 'free' && (
                  <div className="mt-6 bg-gradient-to-br from-highlight-500 via-primary-600 to-primary-700 rounded-xl p-4 text-white">
                    <div className="text-center mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-sm">Go Premium</h4>
                      <p className="text-xs opacity-90">Unlock all features</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-2 text-xs shadow-lg"
                      onClick={() => setShowPaymentModal(true)}
                    >
                      Upgrade - $9.99/mo
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Professional Payment Modal */}
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="Upgrade to Premium Professional"
        size="lg"
      >
        <div className="p-2">
          <PaymentForm />
        </div>
      </Modal>
    </div>
  );
};

export default ResumeBuilder;
