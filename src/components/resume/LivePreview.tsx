import React from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Template } from './TemplateSelector';

interface LivePreviewProps {
  template?: Template;
  showPlaceholder?: boolean;
}

const LivePreview: React.FC<LivePreviewProps> = ({ template, showPlaceholder = false }) => {
  const { resumeData } = useResume();

  const renderModernTemplate = () => (
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-primary-600 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {resumeData.personalInfo?.fullName || (showPlaceholder ? 'Your Full Name' : '')}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <span>{resumeData.personalInfo?.email || (showPlaceholder ? 'your.email@example.com' : '')}</span>
          <span>{resumeData.personalInfo?.phone || (showPlaceholder ? '+1 (555) 123-4567' : '')}</span>
          <span>{resumeData.personalInfo?.location || (showPlaceholder ? 'City, State' : '')}</span>
        </div>
        {(resumeData.personalInfo?.linkedin || resumeData.personalInfo?.github || showPlaceholder) && (
          <div className="flex gap-4 mt-2 text-primary-600">
            {(resumeData.personalInfo?.linkedin || showPlaceholder) && (
              <span>{resumeData.personalInfo?.linkedin || 'linkedin.com/in/yourprofile'}</span>
            )}
            {(resumeData.personalInfo?.github || showPlaceholder) && (
              <span>{resumeData.personalInfo?.github || 'github.com/yourprofile'}</span>
            )}
          </div>
        )}
      </div>

      {/* Summary */}
      {(resumeData.personalInfo?.summary || showPlaceholder) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {resumeData.personalInfo?.summary || 
              (showPlaceholder ? 'A brief professional summary highlighting your key qualifications, experience, and career objectives. This section should capture the attention of hiring managers and provide a snapshot of your professional value.' : '')
            }
          </p>
        </div>
      )}

      {/* Skills */}
      {(resumeData.skills?.length > 0 || showPlaceholder) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills?.length > 0 
              ? resumeData.skills.map((skill, index) => (
                    <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                      {skill.name}
                    </span>
                  ))
              : showPlaceholder && (
                  <>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">SQL</span>
                  </>
                )
            }
          </div>
        </div>
      )}

      {/* Education */}
      {(resumeData.education?.length > 0 || showPlaceholder) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Education
          </h2>
          {resumeData.education?.length > 0 
            ? resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-700">{edu.institution}</p>
                    </div>
                    <div className="text-right text-gray-600 text-sm">
                      <p>{edu.endDate}</p>
                      {edu.gpa && <p>GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                </div>
              ))
            : showPlaceholder && (
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                      <p className="text-gray-700">University Name</p>
                    </div>
                    <div className="text-right text-gray-600 text-sm">
                      <p>May 2024</p>
                      <p>GPA: 3.8/4.0</p>
                    </div>
                  </div>
                </div>
              )
          }
        </div>
      )}

      {/* Projects */}
      {(resumeData.projects?.length > 0 || showPlaceholder) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Projects
          </h2>
          {resumeData.projects?.length > 0
            ? resumeData.projects.map((project, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-gray-600 text-sm">{project.startDate} - {project.endDate}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))
            : showPlaceholder && (
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">E-commerce Web Application</h3>
                    <span className="text-gray-600 text-sm">Jan 2024 - Mar 2024</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Developed a full-stack e-commerce platform with user authentication, 
                    product catalog, and payment processing.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">MongoDB</span>
                  </div>
                </div>
              )
          }
        </div>
      )}

      {/* Experience/Internships */}
      {(resumeData.internships?.length > 0 || showPlaceholder) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Experience
          </h2>
          {resumeData.internships?.length > 0
            ? resumeData.internships.map((internship, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{internship.position}</h3>
                      <p className="text-gray-700">{internship.company}</p>
                    </div>
                    <span className="text-gray-600 text-sm">{internship.startDate} - {internship.endDate}</span>
                  </div>
                  <p className="text-gray-700">{internship.description}</p>
                </div>
              ))
            : showPlaceholder && (
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">Software Development Intern</h3>
                      <p className="text-gray-700">Tech Company Inc.</p>
                    </div>
                    <span className="text-gray-600 text-sm">Jun 2023 - Aug 2023</span>
                  </div>
                  <p className="text-gray-700">
                    Contributed to the development of web applications using modern JavaScript frameworks. 
                    Collaborated with senior developers on feature implementation and bug fixes.
                  </p>
                </div>
              )
          }
        </div>
      )}

      {/* Certifications */}
      {(resumeData.certifications?.length > 0 || showPlaceholder) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Certifications
          </h2>
          {resumeData.certifications?.length > 0
            ? resumeData.certifications.map((cert, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{cert.name}</span>
                    <span className="text-gray-600 text-sm">{cert.issueDate}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{cert.issuer}</p>
                </div>
              ))
            : showPlaceholder && (
                <div className="mb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">AWS Certified Developer - Associate</span>
                    <span className="text-gray-600 text-sm">Dec 2023</span>
                  </div>
                  <p className="text-gray-700 text-sm">Amazon Web Services</p>
                </div>
              )
          }
        </div>
      )}
    </div>
  );

  const renderClassicTemplate = () => (
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center border-b-4 border-gray-800 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {resumeData.personalInfo?.fullName || (showPlaceholder ? 'Your Full Name' : '')}
        </h1>
        <div className="text-gray-600 space-y-1">
          <p>{resumeData.personalInfo?.email || (showPlaceholder ? 'your.email@example.com' : '')}</p>
          <p>{resumeData.personalInfo?.phone || (showPlaceholder ? '+1 (555) 123-4567' : '')}</p>
          <p>{resumeData.personalInfo?.location || (showPlaceholder ? 'City, State' : '')}</p>
        </div>
      </div>

      {/* Rest of the template with similar structure but classic styling */}
      {/* Summary, Skills, Education, Projects, etc. with more traditional formatting */}
      <div className="space-y-6">
        {(resumeData.personalInfo?.summary || showPlaceholder) && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
              Objective
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {resumeData.personalInfo?.summary || 
                (showPlaceholder ? 'A professional summary showcasing your career objectives and key qualifications.' : '')
              }
            </p>
          </div>
        )}
        
        {/* Additional sections with classic formatting... */}
      </div>
    </div>
  );

  const getTemplateContent = () => {
    if (!template) {
      return renderModernTemplate();
    }

    switch (template.category) {
      case 'classic':
        return renderClassicTemplate();
      case 'modern':
      case 'minimal':
      case 'creative':
      default:
        return renderModernTemplate();
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
        <p className="text-sm text-gray-600">
          {template ? `${template.name} Template` : 'Preview updates as you fill out sections'}
        </p>
      </div>
      
      <div className="transform scale-75 origin-top">
        {getTemplateContent()}
      </div>
      
      {!showPlaceholder && (!resumeData.personalInfo?.fullName) && (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-4">
            <div className="text-4xl mb-2">📝</div>
            <p className="text-sm">Start filling out your information to see the live preview</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LivePreview;