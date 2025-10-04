import React, { useState, useEffect } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Education } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';

const EducationForm: React.FC = () => {
  const { resumeData, updateEducation, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  
  const [educationList, setEducationList] = useState<Education[]>(resumeData.education);
  const [currentEducation, setCurrentEducation] = useState<Education>({
    id: '',
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
    relevant_coursework: []
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [coursework, setCoursework] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setEducationList(resumeData.education);
  }, [resumeData.education]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!currentEducation.institution.trim()) {
      newErrors.institution = 'Institution name is required';
    }

    if (!currentEducation.degree.trim()) {
      newErrors.degree = 'Degree is required';
    }

    if (!currentEducation.field.trim()) {
      newErrors.field = 'Field of study is required';
    }

    if (!currentEducation.startDate) {
      newErrors.startDate = 'Start date is required';
    }

    if (!currentEducation.endDate) {
      newErrors.endDate = 'End date is required';
    }

    if (currentEducation.startDate && currentEducation.endDate && 
        new Date(currentEducation.startDate) >= new Date(currentEducation.endDate)) {
      newErrors.endDate = 'End date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setCurrentEducation({
      id: '',
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      relevant_coursework: []
    });
    setIsEditing(false);
    setErrors({});
  };

  const handleInputChange = (field: string, value: string) => {
    setCurrentEducation(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addCoursework = () => {
    if (coursework.trim()) {
      setCurrentEducation(prev => ({
        ...prev,
        relevant_coursework: [...(prev.relevant_coursework || []), coursework.trim()]
      }));
      setCoursework('');
    }
  };

  const removeCoursework = (index: number) => {
    setCurrentEducation(prev => ({
      ...prev,
      relevant_coursework: (prev.relevant_coursework || []).filter((_, i) => i !== index)
    }));
  };

  const handleAddEducation = () => {
    if (validateForm()) {
      const newEducation = { ...currentEducation, id: currentEducation.id || uuidv4() };
      
      if (isEditing) {
        setEducationList(prev => prev.map(edu => edu.id === newEducation.id ? newEducation : edu));
        addToast({
          type: 'success',
          message: 'Education updated successfully!',
        });
      } else {
        setEducationList(prev => [...prev, newEducation]);
        addToast({
          type: 'success',
          message: 'Education added successfully!',
        });
      }
      resetForm();
    }
  };

  const handleEditEducation = (education: Education) => {
    setCurrentEducation(education);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemoveEducation = (id: string) => {
    setEducationList(prev => prev.filter(edu => edu.id !== id));
    addToast({
      type: 'success',
      message: 'Education removed successfully',
    });
  };

  const handleSave = () => {
    updateEducation(educationList);
    completeStep(2);
    addToast({
      type: 'success',
      message: 'Education saved successfully!',
    });
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const degreeOptions = [
    { value: '', label: 'Select Degree' },
    { value: 'High School Diploma', label: 'High School Diploma' },
    { value: 'Associate Degree', label: 'Associate Degree' },
    { value: "Bachelor's Degree", label: "Bachelor's Degree" },
    { value: "Master's Degree", label: "Master's Degree" },
    { value: 'MBA', label: 'MBA (Master of Business Administration)' },
    { value: 'PhD', label: 'PhD (Doctor of Philosophy)' },
    { value: 'MD', label: 'MD (Doctor of Medicine)' },
    { value: 'JD', label: 'JD (Juris Doctor)' },
    { value: 'Certificate', label: 'Certificate Program' },
    { value: 'Professional Certification', label: 'Professional Certification' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Education</h1>
            <p className="text-sm text-gray-600">Build your academic foundation</p>
          </div>
        </div>
      </div>

      {/* Add/Edit Education Form */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-primary-50 to-highlight-50 px-6 py-4 border-b border-primary-100">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                {isEditing ? 'Edit Education' : 'Add Education'}
              </h2>
              <p className="text-sm text-gray-600">Share your academic achievements and qualifications</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
            {/* Institution and Degree Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Institution Name"
                type="text"
                value={currentEducation.institution}
                onChange={(e) => handleInputChange('institution', e.target.value)}
                placeholder="University of California, Berkeley"
                required
                error={errors.institution}
              />

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Degree <span className="text-red-500">*</span>
                </label>
                <select
                  value={currentEducation.degree}
                  onChange={(e) => handleInputChange('degree', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {degreeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.degree && (
                  <p className="text-red-500 text-sm">{errors.degree}</p>
                )}
              </div>
            </div>

            {/* Field of Study and GPA Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Field of Study"
                type="text"
                value={currentEducation.field}
                onChange={(e) => handleInputChange('field', e.target.value)}
                placeholder="Computer Science"
                required
                error={errors.field}
              />

              <Input
                label="GPA (Optional)"
                type="text"
                value={currentEducation.gpa || ''}
                onChange={(e) => handleInputChange('gpa', e.target.value)}
                placeholder="3.8 / 4.0"
              />
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Start Date"
                type="month"
                value={currentEducation.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                required
                error={errors.startDate}
              />

              <Input
                label="End Date"
                type="month"
                value={currentEducation.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
                required
                error={errors.endDate}
              />
            </div>

            {/* Relevant Coursework Section */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-gray-800">
                Relevant Coursework
              </label>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      type="text"
                      value={coursework}
                      onChange={(e) => setCoursework(e.target.value)}
                      placeholder="e.g., Data Structures and Algorithms"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addCoursework();
                        }
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={addCoursework}
                    disabled={!coursework.trim()}
                    className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add</span>
                  </button>
                </div>
                
                {currentEducation.relevant_coursework && currentEducation.relevant_coursework.length > 0 && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm font-medium text-gray-700">Added Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentEducation.relevant_coursework.map((course, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary-200 text-primary-800 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {course}
                          <button
                            type="button"
                            onClick={() => removeCoursework(index)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200 ml-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={handleAddEducation}
                className="flex-1 bg-gradient-to-r from-primary-600 to-highlight-600 hover:from-primary-700 hover:to-highlight-700 text-white font-semibold py-3 px-6 rounded-lg shadow-soft hover:shadow-card transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{isEditing ? 'Update Education' : 'Add Education'}</span>
              </button>
              
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-soft hover:shadow-card transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Cancel</span>
                </button>
              )}
            </div>
          </div>
        </div>

      {/* Education List */}
      {educationList.length > 0 && (
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-50 to-highlight-50 px-6 py-4 border-b border-primary-100">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Your Education</h3>
                <p className="text-sm text-gray-600">
                  {educationList.length} {educationList.length === 1 ? 'entry' : 'entries'} added
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {educationList.map((education, index) => (
              <div key={education.id} className="group bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all duration-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {education.degree} {education.field && `in ${education.field}`}
                    </h4>
                    <p className="text-primary-600 font-medium mb-2">{education.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(education.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {new Date(education.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                      </span>
                      {education.gpa && (
                        <span className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span>GPA: {education.gpa}</span>
                        </span>
                      )}
                    </div>
                    
                    {education.relevant_coursework && education.relevant_coursework.length > 0 && (
                      <div className="mt-3 border-t border-gray-200 pt-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {education.relevant_coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-2.5 py-1 bg-primary-100 text-primary-800 rounded-md text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEditEducation(education)}
                      className="p-1.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                      title="Edit Education"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleRemoveEducation(education.id)}
                      className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                      title="Remove Education"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      {/* Save and Continue Button */}
      <div className="flex justify-end">
        <button 
          onClick={handleSave} 
          className="bg-gradient-to-r from-primary-600 to-highlight-600 hover:from-primary-700 hover:to-highlight-700 text-white font-semibold py-3 px-6 rounded-lg shadow-soft hover:shadow-card transition-all duration-200 flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Save & Continue</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
