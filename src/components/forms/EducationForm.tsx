import React, { useState, useEffect } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Education } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const EducationForm: React.FC = () => {
  const { resumeData, updateEducation, addToast, completeStep } = useResume();
  const [educationList, setEducationList] = useState<Education[]>(resumeData.education);
  const [currentEducation, setCurrentEducation] = useState<Education>({
    id: '',
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
    relevant_coursework: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [coursework, setCoursework] = useState('');

  useEffect(() => {
    setEducationList(resumeData.education);
  }, [resumeData.education]);

  const resetForm = () => {
    setCurrentEducation({
      id: '',
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      relevant_coursework: [],
    });
    setCoursework('');
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof Education, value: string) => {
    setCurrentEducation(prev => ({ ...prev, [field]: value }));
  };

  const handleAddEducation = () => {
    if (!currentEducation.institution || !currentEducation.degree || !currentEducation.field) {
      addToast({
        type: 'error',
        message: 'Please fill in all required fields',
      });
      return;
    }

    const courseworkArray = coursework.split(',').map(course => course.trim()).filter(course => course);
    const educationData = {
      ...currentEducation,
      id: currentEducation.id || uuidv4(),
      relevant_coursework: courseworkArray,
    };

    if (isEditing) {
      const updatedList = educationList.map(edu => 
        edu.id === educationData.id ? educationData : edu
      );
      setEducationList(updatedList);
      addToast({
        type: 'success',
        message: 'Education updated successfully!',
      });
    } else {
      setEducationList([...educationList, educationData]);
      addToast({
        type: 'success',
        message: 'Education added successfully!',
      });
    }

    resetForm();
  };

  const handleEditEducation = (education: Education) => {
    setCurrentEducation(education);
    setCoursework(education.relevant_coursework?.join(', ') || '');
    setIsEditing(true);
  };

  const handleDeleteEducation = (id: string) => {
    setEducationList(educationList.filter(edu => edu.id !== id));
    addToast({
      type: 'success',
      message: 'Education removed successfully!',
    });
  };

  const handleSave = () => {
    updateEducation(educationList);
    completeStep(2);
    addToast({
      type: 'success',
      message: 'Education information saved successfully!',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Education</h1>
        <p className="text-gray-600">Add your educational background to showcase your academic achievements.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add/Edit Form */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            {isEditing ? 'Edit Education' : 'Add Education'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution *
              </label>
              <input
                type="text"
                value={currentEducation.institution}
                onChange={(e) => handleInputChange('institution', e.target.value)}
                className="input-field"
                placeholder="University of California, Berkeley"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree *
              </label>
              <select
                value={currentEducation.degree}
                onChange={(e) => handleInputChange('degree', e.target.value)}
                className="input-field"
              >
                <option value="">Select Degree</option>
                <option value="High School Diploma">High School Diploma</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Doctoral Degree">Doctoral Degree</option>
                <option value="Certificate">Certificate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Study *
              </label>
              <input
                type="text"
                value={currentEducation.field}
                onChange={(e) => handleInputChange('field', e.target.value)}
                className="input-field"
                placeholder="Computer Science"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="month"
                  value={currentEducation.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="month"
                  value={currentEducation.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPA (Optional)
              </label>
              <input
                type="text"
                value={currentEducation.gpa}
                onChange={(e) => handleInputChange('gpa', e.target.value)}
                className="input-field"
                placeholder="3.8/4.0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Relevant Coursework (Optional)
              </label>
              <input
                type="text"
                value={coursework}
                onChange={(e) => setCoursework(e.target.value)}
                className="input-field"
                placeholder="Data Structures, Algorithms, Machine Learning (comma-separated)"
              />
            </div>

            <div className="flex space-x-3">
              <button onClick={handleAddEducation} className="btn-primary flex-1">
                {isEditing ? 'Update Education' : 'Add Education'}
              </button>
              {isEditing && (
                <button onClick={resetForm} className="btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Education List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Added Education</h2>
          
          {educationList.length === 0 ? (
            <div className="card text-center py-8">
              <p className="text-gray-500">No education added yet. Add your first education to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {educationList.map((education) => (
                <div key={education.id} className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{education.institution}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditEducation(education)}
                        className="text-primary-600 hover:text-primary-800 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEducation(education.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">{education.degree} in {education.field}</p>
                  <p className="text-gray-500 text-sm">
                    {education.startDate} - {education.endDate || 'Present'}
                  </p>
                  {education.gpa && (
                    <p className="text-gray-600 text-sm">GPA: {education.gpa}</p>
                  )}
                  {education.relevant_coursework && education.relevant_coursework.length > 0 && (
                    <div className="mt-2">
                      <p className="text-gray-600 text-sm font-medium">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {education.relevant_coursework.map((course, index) => (
                          <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button onClick={handleSave} className="btn-primary">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default EducationForm;