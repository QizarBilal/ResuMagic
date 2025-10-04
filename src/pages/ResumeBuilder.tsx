import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { currentStep, steps, setCurrentStep, setPremium, resumeData } = useResume();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('free');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');

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

  // Handler to navigate to pricing page's best value section
  const handleUpgradeToPremium = () => {
    navigate('/pricing#best-value');
    // Scroll to best value section after navigation
    setTimeout(() => {
      const bestValueElement = document.getElementById('best-value');
      if (bestValueElement) {
        bestValueElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Smart step navigation with smooth transitions
  const handleStepChange = useCallback((stepNumber: number) => {
    if (stepNumber === currentStep) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(stepNumber);
      setIsTransitioning(false);
      // Smooth scroll to top
      const contentArea = document.getElementById('resume-content-area');
      if (contentArea) {
        contentArea.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  }, [currentStep, setCurrentStep]);

  // Auto-save simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoSaveStatus('saved');
    }, 2000);
    return () => clearTimeout(timer);
  }, [resumeData]);

  // Calculate completion status for each step
  const getStepCompletionStatus = (stepId: number) => {
    const step = steps.find(s => s.id === stepId);
    if (!step) return 'incomplete';
    
    switch (stepId) {
      case 1: return selectedTemplate ? 'complete' : 'incomplete';
      case 2: return resumeData.personalInfo.fullName && resumeData.personalInfo.email ? 'complete' : 'incomplete';
      case 3: return resumeData.education.length > 0 ? 'complete' : 'incomplete';
      case 4: return resumeData.skills.length > 0 ? 'complete' : 'incomplete';
      case 5: return resumeData.projects.length > 0 ? 'complete' : step.isOptional ? 'optional' : 'incomplete';
      case 6: return resumeData.certifications.length > 0 ? 'complete' : step.isOptional ? 'optional' : 'incomplete';
      case 7: return resumeData.hackathons.length > 0 ? 'complete' : step.isOptional ? 'optional' : 'incomplete';
      case 8: return resumeData.internships.length > 0 ? 'complete' : step.isOptional ? 'optional' : 'incomplete';
      case 9: return resumeData.achievements.length > 0 ? 'complete' : step.isOptional ? 'optional' : 'incomplete';
      case 10: return resumeData.languages.length > 0 ? 'complete' : step.isOptional ? 'optional' : 'incomplete';
      default: return 'incomplete';
    }
  };

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



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-highlight-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-200/30 to-primary-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Professional Status Bar */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                selectedPlan === 'premium' 
                  ? 'bg-gradient-to-r from-primary-500 to-highlight-500 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {selectedPlan === 'premium' ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                    </svg>
                    Premium Active
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Free Plan
                  </>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className={`w-2 h-2 rounded-full ${autoSaveStatus === 'saved' ? 'bg-green-500' : autoSaveStatus === 'saving' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'}`}></div>
                {autoSaveStatus === 'saved' ? 'Auto-saved' : autoSaveStatus === 'saving' ? 'Saving...' : 'Unsaved changes'}
              </div>
            </div>
            {selectedPlan === 'free' && (
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-600 hover:bg-primary-50 font-medium px-4 py-2 rounded-lg transition-all duration-200"
                onClick={handleUpgradeToPremium}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Upgrade
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Revolutionary 3-Panel Layout */}
      <div className="relative z-10 h-screen flex">
        {/* Left Sidebar - Smart Navigation (Reduced Width) */}
        <div className="w-64 bg-white/70 backdrop-blur-xl border-r border-white/20 shadow-xl">
          <div className="h-full flex flex-col">
            {/* Navigation Header - Compact */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900">Resume Builder</h2>
                  <p className="text-xs text-gray-600">Professional Edition</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary-50 to-highlight-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">Progress</span>
                  <span className="text-xs font-bold text-primary-600">{Math.round((currentStep / steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-white/50 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-highlight-500 h-1.5 rounded-full transition-all duration-700 shadow-sm"
                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Smart Step Navigation - Compact */}
            <div className="flex-1 overflow-y-auto p-3">
              <div className="space-y-1">
                {steps.map((step, index) => {
                  const completionStatus = getStepCompletionStatus(step.id);
                  const isActive = currentStep === step.id;
                  const isAccessible = index <= currentStep || completionStatus === 'complete';
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => isAccessible && handleStepChange(step.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 transform hover:scale-[1.01] group ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary-500 to-highlight-500 text-white shadow-md' 
                          : isAccessible
                            ? 'bg-white/50 hover:bg-white/80 text-gray-700 border border-gray-100 hover:border-primary-200 hover:shadow-sm'
                            : 'bg-gray-50/50 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!isAccessible}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? 'bg-white/20' 
                              : completionStatus === 'complete'
                                ? 'bg-green-100 text-green-600'
                                : completionStatus === 'optional'
                                  ? 'bg-blue-100 text-blue-600'
                                  : isAccessible
                                    ? 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                                    : 'bg-gray-100 text-gray-400'
                          }`}>
                            {completionStatus === 'complete' ? (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            ) : completionStatus === 'optional' ? (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            ) : (
                              <span className="text-xs font-bold">{step.id}</span>
                            )}
                          </div>
                          <div>
                            <h4 className={`font-medium text-xs ${isActive ? 'text-white' : ''}`}>
                              {step.title}
                            </h4>
                            <p className={`text-xs ${
                              isActive ? 'text-white/70' : 'text-gray-500'
                            }`}>
                              {completionStatus === 'complete' ? 'Done' : 
                               completionStatus === 'optional' ? 'Optional' : 
                               step.isOptional ? 'Optional' : 'Required'}
                            </p>
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions - Compact */}
            <div className="p-3 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs p-2 text-gray-600 hover:text-primary-600 hover:border-primary-200"
                  onClick={() => {/* Save draft functionality */}}
                >
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Save
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs p-2 text-gray-600 hover:text-primary-600 hover:border-primary-200"
                  onClick={() => navigate('/templates')}
                >
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Templates
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white/30 backdrop-blur-sm">
          {/* Content Header - Compact */}
          <div className="bg-white/70 backdrop-blur-xl border-b border-white/20 px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {steps[currentStep - 1]?.title || 'Resume Builder'}
                </h1>
                <p className="text-gray-600 text-sm flex items-center space-x-2">
                  <span>Step {currentStep} of {steps.length}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className={`${
                    steps[currentStep - 1]?.isOptional ? 'text-blue-600' : 'text-green-600'
                  } font-medium`}>
                    {steps[currentStep - 1]?.isOptional ? 'Optional' : 'Required'}
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-xs text-gray-600 bg-white/50 px-2 py-1.5 rounded-md">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {autoSaveStatus === 'saved' ? 'Auto-saved' : autoSaveStatus === 'saving' ? 'Saving...' : 'Unsaved'}
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content - Expanded for Better Form Visibility */}
          <div id="resume-content-area" className="flex-1 overflow-y-auto p-6">
            <div className={`max-w-6xl mx-auto transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">
                {renderCurrentStep()}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Live Preview (Reduced Width) */}
        <div className="w-72 bg-white/70 backdrop-blur-xl border-l border-white/20 shadow-xl">
          <div className="h-full flex flex-col">
            {/* Preview Header - Compact */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-900">Live Preview</h3>
                <div className="flex items-center space-x-1">
                  <button className="p-1.5 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-all duration-200">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-all duration-200">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Content - Compact */}
            <div className="flex-1 p-4 overflow-y-auto">
              {currentStep > 1 && selectedTemplate ? (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
                    <div className="aspect-[8.5/11] bg-white relative p-2">
                      <div className="w-full h-full bg-white shadow-inner rounded border border-gray-100 overflow-hidden">
                        <LivePreview template={selectedTemplate} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-highlight-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Choose Template</h4>
                  <p className="text-gray-600 text-xs leading-relaxed px-2">
                    Select a professional template to see your resume with real-time updates.
                  </p>
                </div>
              )}
            </div>

            {/* Export Actions - Compact */}
            {currentStep > 1 && (
              <div className="p-3 border-t border-gray-100 bg-gradient-to-br from-white/50 to-gray-50/50 backdrop-blur-sm">
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-primary-600 to-highlight-600 hover:from-primary-700 hover:to-highlight-700 text-white py-2 text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0-6l-3 3m3-3l3 3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </Button>
                  <div className="grid grid-cols-2 gap-1">
                    <Button variant="outline" size="sm" className="text-xs font-medium p-1.5 border hover:bg-gray-50 hover:border-primary-200">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs font-medium p-1.5 border hover:bg-gray-50 hover:border-primary-200">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Export
                    </Button>
                  </div>
                </div>

                {/* Premium Upgrade Card - Compact */}
                {selectedPlan === 'free' && (
                  <div className="mt-3 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-lg p-3 text-white shadow-md">
                    <div className="text-center mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-1 backdrop-blur-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-xs">Unlock Premium</h4>
                      <p className="text-xs opacity-90">All professional features</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-white !text-gray-900 hover:bg-gray-100 font-bold py-1.5 text-xs shadow-md transform hover:scale-[1.01] transition-all duration-200"
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
