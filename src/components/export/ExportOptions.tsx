import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Template } from '../resume/TemplateSelector';
import Button from '../ui/Button';

interface ExportOptionsProps {
  template?: Template;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ template }) => {
  const { resumeData, premium } = useResume();
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<'pdf' | 'docx' | 'txt'>('pdf');

  const exportFormats = [
    {
      id: 'pdf',
      name: 'PDF',
      description: 'Most common format, works everywhere',
      icon: '📄',
      premium: false
    },
    {
      id: 'docx',
      name: 'Word Document',
      description: 'Editable Microsoft Word format',
      icon: '📝',
      premium: true
    },
    {
      id: 'txt',
      name: 'Plain Text',
      description: 'ATS-friendly plain text version',
      icon: '📃',
      premium: false
    }
  ];

  const handleExport = async (format: 'pdf' | 'docx' | 'txt') => {
    if (format !== 'pdf' && !premium) {
      alert('This export format requires a Premium subscription. Please upgrade to access additional export options.');
      return;
    }

    setIsExporting(true);
    
    try {
      // Simulate export process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, this would:
      // 1. Generate the resume using the selected template and data
      // 2. Convert to the selected format
      // 3. Trigger download
      
      const fileName = `${resumeData.personalInfo?.fullName?.replace(/\s+/g, '_') || 'resume'}_${Date.now()}.${format}`;
      
      // Create a dummy download for demonstration
      const blob = new Blob([`Resume exported as ${format.toUpperCase()}`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const generateResumePreview = () => {
    // This would generate a preview based on the selected template and data
    return `
${resumeData.personalInfo?.fullName || 'Your Name'}
${resumeData.personalInfo?.email || 'your.email@example.com'}
${resumeData.personalInfo?.phone || '+1 (555) 123-4567'}
${resumeData.personalInfo?.location || 'City, State'}

${resumeData.personalInfo?.summary ? `SUMMARY\n${resumeData.personalInfo.summary}\n` : ''}

${resumeData.skills?.length > 0 ? `SKILLS\n${resumeData.skills.join(', ')}\n` : ''}

${resumeData.education?.length > 0 ? `EDUCATION\n${resumeData.education.map(edu => 
  `${edu.degree} - ${edu.institution} (${edu.endDate})`
).join('\n')}\n` : ''}

${resumeData.projects?.length > 0 ? `PROJECTS\n${resumeData.projects.map(project => 
  `${project.title}\n${project.description}\nTechnologies: ${project.technologies.join(', ')}`
).join('\n\n')}\n` : ''}

${resumeData.internships?.length > 0 ? `EXPERIENCE\n${resumeData.internships.map(internship => 
  `${internship.position} - ${internship.company} (${internship.startDate} - ${internship.endDate})\n${internship.description}`
).join('\n\n')}\n` : ''}

${resumeData.certifications?.length > 0 ? `CERTIFICATIONS\n${resumeData.certifications.map(cert => 
  `${cert.name} - ${cert.issuer} (${cert.issueDate})`
).join('\n')}\n` : ''}
    `.trim();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Export Your Resume</h2>
        <p className="text-gray-600 mb-6">
          Choose your preferred format and download your professional resume.
        </p>
      </div>

      {/* Export Format Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {exportFormats.map(format => (
          <div
            key={format.id}
            onClick={() => !format.premium || premium ? setExportFormat(format.id as any) : null}
            className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
              exportFormat === format.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            } ${format.premium && !premium ? 'opacity-50' : ''}`}
          >
            {format.premium && !premium && (
              <div className="absolute top-2 right-2">
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  PRO
                </span>
              </div>
            )}
            
            <div className="text-center">
              <div className="text-3xl mb-2">{format.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{format.name}</h3>
              <p className="text-sm text-gray-600">{format.description}</p>
            </div>
            
            {exportFormat === format.id && (
              <div className="mt-3 flex justify-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Export Options */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Export Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span>ATS-Friendly formatting</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span>Include contact information</span>
            </label>
          </div>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked={premium} disabled={!premium} className="mr-2" />
              <span className={premium ? '' : 'text-gray-400'}>Custom formatting</span>
              {!premium && <span className="ml-1 text-xs text-yellow-600">(Premium)</span>}
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked={premium} disabled={!premium} className="mr-2" />
              <span className={premium ? '' : 'text-gray-400'}>Multiple versions</span>
              {!premium && <span className="ml-1 text-xs text-yellow-600">(Premium)</span>}
            </label>
          </div>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Resume Preview ({exportFormat.toUpperCase()})</h3>
        <div className="bg-gray-50 rounded p-4 max-h-60 overflow-y-auto">
          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
            {generateResumePreview()}
          </pre>
        </div>
      </div>

      {/* Export Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => handleExport(exportFormat)}
          disabled={isExporting || (exportFormat !== 'pdf' && !premium)}
          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6"
        >
          {isExporting ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
              Generating {exportFormat.toUpperCase()}...
            </>
          ) : (
            <>
              📥 Download {exportFormat.toUpperCase()}
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          onClick={() => window.print()}
          className="px-6 py-3"
        >
          🖨️ Print
        </Button>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Export Tips</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• PDF format is recommended for most applications</li>
          <li>• Use ATS-friendly formatting for online applications</li>
          <li>• Keep file size under 2MB for email attachments</li>
          <li>• Test how your resume looks when printed in black and white</li>
        </ul>
      </div>

      {!premium && (
        <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Unlock Premium Export Options</h4>
          <p className="text-gray-600 mb-4">
            Get access to Word documents, custom formatting, and multiple export versions.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2">
            Upgrade to Premium
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExportOptions;