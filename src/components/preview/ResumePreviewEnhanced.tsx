import React, { useRef, useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Button, Card } from '../ui';
import { exportToPDF } from '../../utils/helpers';

const ResumePreviewEnhanced: React.FC = () => {
  const { resumeData, addToast } = useResume();
  const previewRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  const handleExportPDF = async () => {
    if (!previewRef.current) return;
    
    setIsExporting(true);
    const success = await exportToPDF('resume-preview', 'resume.pdf');
    
    if (success) {
      addToast({
        type: 'success',
        message: 'Resume exported as PDF successfully!'
      });
    } else {
      addToast({
        type: 'error',
        message: 'Failed to export resume. Please try again.'
      });
    }
    setIsExporting(false);
  };

  const handleExportJPG = async () => {
    if (!previewRef.current) return;
    
    setIsExporting(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const link = document.createElement('a');
      link.download = 'resume.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.9);
      link.click();
      
      addToast({
        type: 'success',
        message: 'Resume exported as JPG successfully!'
      });
    } catch (error) {
      addToast({
        type: 'error',
        message: 'Failed to export resume. Please try again.'
      });
    }
    setIsExporting(false);
  };

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and contemporary design' },
    { id: 'classic', name: 'Classic', description: 'Traditional professional layout' },
    { id: 'creative', name: 'Creative', description: 'Unique design for creative roles', isPremium: true }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            onClick={handleExportJPG}
            isLoading={isExporting}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          >
            Export JPG
          </Button>
          <Button
            variant="primary"
            onClick={handleExportPDF}
            isLoading={isExporting}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          >
            Export PDF
          </Button>
        </div>
      </div>

      {/* Template Selection */}
      <Card>
        <h3 className="font-semibold text-gray-900 mb-4">Choose Template</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              } ${template.isPremium && !resumeData.isPremium ? 'opacity-50' : ''}`}
              onClick={() => {
                if (template.isPremium && !resumeData.isPremium) {
                  addToast({
                    type: 'warning',
                    message: 'This template requires Premium plan. Upgrade to access!'
                  });
                  return;
                }
                setSelectedTemplate(template.id);
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{template.name}</h4>
                {template.isPremium && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Premium</span>
                )}
              </div>
              <p className="text-sm text-gray-600">{template.description}</p>
              {selectedTemplate === template.id && (
                <div className="mt-2 flex items-center text-primary-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Selected</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Resume Preview */}
      <Card className="p-0">
        <div className="bg-white" ref={previewRef} id="resume-preview">
          {selectedTemplate === 'modern' && <ModernTemplate data={resumeData} />}
          {selectedTemplate === 'classic' && <ClassicTemplate data={resumeData} />}
          {selectedTemplate === 'creative' && <CreativeTemplate data={resumeData} />}
        </div>
      </Card>

      {/* Export Instructions */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="font-medium text-blue-900">Export Tips</h4>
            <ul className="text-sm text-blue-800 mt-1 space-y-1">
              <li>• PDF format is recommended for job applications</li>
              <li>• JPG format is great for sharing on social media</li>
              <li>• Review your resume before submitting to employers</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Modern Template Component
const ModernTemplate: React.FC<{ data: any }> = ({ data }) => (
  <div className="p-8 max-w-4xl mx-auto bg-white">
    <div className="border-b-2 border-primary-600 pb-6 mb-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {data.personalInfo.fullName || 'Your Name'}
      </h1>
      <div className="flex flex-wrap gap-4 text-gray-600">
        {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
        {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
        {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
      </div>
      {data.personalInfo.linkedin && (
        <div className="mt-2">
          <span className="text-primary-600">{data.personalInfo.linkedin}</span>
        </div>
      )}
    </div>

    {data.personalInfo.summary && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
      </div>
    )}

    {data.skills.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Skills</h2>
        {data.skills.map((skillGroup: any, index: number) => (
          <div key={index} className="mb-2">
            <span className="font-medium text-gray-900">{skillGroup.category}: </span>
            <span className="text-gray-700">{skillGroup.skills.join(', ')}</span>
          </div>
        ))}
      </div>
    )}

    {data.education.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
        {data.education.map((edu: any) => (
          <div key={edu.id} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                <p className="text-gray-700">{edu.institution}</p>
              </div>
              <span className="text-gray-600 text-sm">{edu.startDate} - {edu.endDate}</span>
            </div>
          </div>
        ))}
      </div>
    )}

    {data.projects.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Projects</h2>
        {data.projects.map((project: any) => (
          <div key={project.id} className="mb-4">
            <h3 className="font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-600">Technologies: {project.technologies.join(', ')}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

// Classic Template Component
const ClassicTemplate: React.FC<{ data: any }> = ({ data }) => (
  <div className="p-8 max-w-4xl mx-auto bg-white font-serif">
    <div className="text-center border-b pb-6 mb-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {data.personalInfo.fullName || 'Your Name'}
      </h1>
      <div className="text-gray-600">
        {data.personalInfo.email && <span className="mx-2">{data.personalInfo.email}</span>}
        {data.personalInfo.phone && <span className="mx-2">|</span>}
        {data.personalInfo.phone && <span className="mx-2">{data.personalInfo.phone}</span>}
        {data.personalInfo.location && <span className="mx-2">|</span>}
        {data.personalInfo.location && <span className="mx-2">{data.personalInfo.location}</span>}
      </div>
    </div>
    {/* Similar structure as modern but with classic styling */}
  </div>
);

// Creative Template Component (Premium)
const CreativeTemplate: React.FC<{ data: any }> = ({ data }) => (
  <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-violet-50 to-primary-50">
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-violet-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
          {(data.personalInfo.fullName || 'YN').split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          <p className="text-gray-600">{data.personalInfo.email}</p>
        </div>
      </div>
      {/* Creative layout with colorful accents */}
    </div>
  </div>
);

export default ResumePreviewEnhanced;