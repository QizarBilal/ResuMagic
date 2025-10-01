import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { v4 as uuidv4 } from 'uuid';
import { internshipSuggestions } from '../../data/sampleData';

interface Internship {
  id: string;
  company: string;
  position: string;
  department: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrentRole: boolean;
  employmentType: string;
  workMode: string;
  supervisor: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skillsGained: string[];
  technologies: string[];
  projects: string[];
  mentorship: string;
  networking: string;
  recommendation: string;
  stipend: string;
  companySize: string;
  industry: string;
}

const InternshipsForm: React.FC = () => {
  const { resumeData, updateInternships, addToast, completeStep } = useResume();
  const [internshipsList, setInternshipsList] = useState<Internship[]>(resumeData.internships || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentInternship, setCurrentInternship] = useState<Internship>({
    id: '',
    company: '',
    position: '',
    department: '',
    location: '',
    startDate: '',
    endDate: '',
    isCurrentRole: false,
    employmentType: 'Internship',
    workMode: 'On-site',
    supervisor: '',
    description: '',
    responsibilities: [],
    achievements: [],
    skillsGained: [],
    technologies: [],
    projects: [],
    mentorship: '',
    networking: '',
    recommendation: '',
    stipend: '',
    companySize: '',
    industry: ''
  });
  const [responsibilityInput, setResponsibilityInput] = useState('');
  const [achievementInput, setAchievementInput] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [techInput, setTechInput] = useState('');
  const [projectInput, setProjectInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setCurrentInternship(prev => ({
        ...prev,
        [name]: checked,
        endDate: checked ? '' : prev.endDate
      }));
    } else {
      setCurrentInternship(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleArrayInput = (
    input: string, 
    setInput: React.Dispatch<React.SetStateAction<string>>, 
    arrayKey: keyof Pick<Internship, 'responsibilities' | 'achievements' | 'skillsGained' | 'technologies' | 'projects'>
  ) => {
    if (input.trim()) {
      setCurrentInternship(prev => ({
        ...prev,
        [arrayKey]: [...(prev[arrayKey] as string[]), input.trim()]
      }));
      setInput('');
    }
  };

  const removeArrayItem = (
    index: number, 
    arrayKey: keyof Pick<Internship, 'responsibilities' | 'achievements' | 'skillsGained' | 'technologies' | 'projects'>
  ) => {
    setCurrentInternship(prev => ({
      ...prev,
      [arrayKey]: (prev[arrayKey] as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleKeyPress = (
    e: React.KeyboardEvent,
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    arrayKey: keyof Pick<Internship, 'responsibilities' | 'achievements' | 'skillsGained' | 'technologies' | 'projects'>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleArrayInput(input, setInput, arrayKey);
    }
  };

  const handleSelectSuggestion = (suggestion: any) => {
    setCurrentInternship({
      id: uuidv4(),
      company: suggestion.company,
      position: suggestion.position,
      department: suggestion.department || '',
      location: suggestion.location,
      startDate: '',
      endDate: '',
      isCurrentRole: false,
      employmentType: 'Internship',
      workMode: suggestion.workMode || 'On-site',
      supervisor: '',
      description: suggestion.description || '',
      responsibilities: suggestion.commonResponsibilities || [],
      achievements: [],
      skillsGained: suggestion.skillsGained || [],
      technologies: suggestion.technologies || [],
      projects: [],
      mentorship: '',
      networking: '',
      recommendation: '',
      stipend: suggestion.stipend || '',
      companySize: suggestion.companySize || '',
      industry: suggestion.industry || ''
    });
    setIsModalOpen(false);
    addToast({
      type: 'success',
      message: `${suggestion.company} internship template loaded! Add your specific details.`
    });
  };

  const handleAddInternship = () => {
    if (!currentInternship.company || !currentInternship.position) {
      addToast({
        type: 'error',
        message: 'Please fill in the company name and position.'
      });
      return;
    }

    const internshipData = {
      ...currentInternship,
      id: isEditing ? currentInternship.id : uuidv4()
    };

    if (isEditing) {
      const updatedList = internshipsList.map(intern => 
        intern.id === internshipData.id ? internshipData : intern
      );
      setInternshipsList(updatedList);
      addToast({
        type: 'success',
        message: 'Internship updated successfully!'
      });
    } else {
      setInternshipsList([...internshipsList, internshipData]);
      addToast({
        type: 'success',
        message: 'Internship added successfully!'
      });
    }

    resetForm();
  };

  const handleEditInternship = (internship: Internship) => {
    setCurrentInternship(internship);
    setResponsibilityInput('');
    setAchievementInput('');
    setSkillInput('');
    setTechInput('');
    setProjectInput('');
    setIsEditing(true);
  };

  const handleDeleteInternship = (id: string) => {
    setInternshipsList(internshipsList.filter(intern => intern.id !== id));
    addToast({
      type: 'success',
      message: 'Internship removed successfully!'
    });
  };

  const resetForm = () => {
    setCurrentInternship({
      id: '',
      company: '',
      position: '',
      department: '',
      location: '',
      startDate: '',
      endDate: '',
      isCurrentRole: false,
      employmentType: 'Internship',
      workMode: 'On-site',
      supervisor: '',
      description: '',
      responsibilities: [],
      achievements: [],
      skillsGained: [],
      technologies: [],
      projects: [],
      mentorship: '',
      networking: '',
      recommendation: '',
      stipend: '',
      companySize: '',
      industry: ''
    });
    setResponsibilityInput('');
    setAchievementInput('');
    setSkillInput('');
    setTechInput('');
    setProjectInput('');
    setIsEditing(false);
  };

  const handleSave = () => {
    updateInternships(internshipsList);
    addToast({
      type: 'success',
      message: 'Internships section saved successfully!'
    });
    completeStep(7);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Internships</h1>
        <p className="text-gray-600">
          Document your internship experiences, responsibilities, and professional growth. Highlight the skills you've gained and impact you've made.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-secondary"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h6m-6 4h6m-5 4h5" />
          </svg>
          Browse Company Templates
        </button>
        <button 
          onClick={resetForm}
          className="btn-secondary"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Custom Internship
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Internship Form */}
        <div className="lg:col-span-2 card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {isEditing ? 'Edit Internship' : 'Add Internship Experience'}
          </h2>

          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={currentInternship.company}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. Google, Microsoft, Facebook"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position Title *
                </label>
                <input
                  type="text"
                  name="position"
                  value={currentInternship.position}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. Software Engineering Intern"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={currentInternship.department}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. Engineering, Marketing, HR"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={currentInternship.location}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. San Francisco, CA"
                />
              </div>
            </div>

            {/* Employment Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type
                </label>
                <select
                  name="employmentType"
                  value={currentInternship.employmentType}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="Internship">Internship</option>
                  <option value="Co-op">Co-op</option>
                  <option value="Summer Internship">Summer Internship</option>
                  <option value="Part-time">Part-time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Mode
                </label>
                <select
                  name="workMode"
                  value={currentInternship.workMode}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  value={currentInternship.industry}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. Technology, Finance"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="month"
                  name="startDate"
                  value={currentInternship.startDate}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="month"
                  name="endDate"
                  value={currentInternship.endDate}
                  onChange={handleInputChange}
                  disabled={currentInternship.isCurrentRole}
                  className="input-field"
                />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="isCurrentRole"
                    checked={currentInternship.isCurrentRole}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Currently working here
                  </label>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role Description
              </label>
              <textarea
                name="description"
                value={currentInternship.description}
                onChange={handleInputChange}
                rows={3}
                className="input-field resize-none"
                placeholder="Brief overview of your role and the team/department you worked with..."
              />
            </div>

            {/* Responsibilities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Responsibilities
              </label>
              <input
                type="text"
                value={responsibilityInput}
                onChange={(e) => setResponsibilityInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, responsibilityInput, setResponsibilityInput, 'responsibilities')}
                className="input-field"
                placeholder="Type responsibility and press Enter"
              />
              {currentInternship.responsibilities.length > 0 && (
                <div className="space-y-1 mt-2">
                  {currentInternship.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-sm text-gray-700">• {resp}</span>
                      <button
                        onClick={() => removeArrayItem(index, 'responsibilities')}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Achievements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Achievements
              </label>
              <input
                type="text"
                value={achievementInput}
                onChange={(e) => setAchievementInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, achievementInput, setAchievementInput, 'achievements')}
                className="input-field"
                placeholder="Type achievement and press Enter"
              />
              {currentInternship.achievements.length > 0 && (
                <div className="space-y-1 mt-2">
                  {currentInternship.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between bg-green-50 p-2 rounded">
                      <span className="text-sm text-gray-700">⭐ {achievement}</span>
                      <button
                        onClick={() => removeArrayItem(index, 'achievements')}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Skills Gained */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills Gained
              </label>
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, skillInput, setSkillInput, 'skillsGained')}
                className="input-field"
                placeholder="Type skill and press Enter"
              />
              {currentInternship.skillsGained.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentInternship.skillsGained.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                      <button
                        onClick={() => removeArrayItem(index, 'skillsGained')}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies Used
              </label>
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, techInput, setTechInput, 'technologies')}
                className="input-field"
                placeholder="Type technology and press Enter"
              />
              {currentInternship.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentInternship.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                      <button
                        onClick={() => removeArrayItem(index, 'technologies')}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Projects */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Projects
              </label>
              <input
                type="text"
                value={projectInput}
                onChange={(e) => setProjectInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, projectInput, setProjectInput, 'projects')}
                className="input-field"
                placeholder="Type project name and press Enter"
              />
              {currentInternship.projects.length > 0 && (
                <div className="space-y-1 mt-2">
                  {currentInternship.projects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between bg-purple-50 p-2 rounded">
                      <span className="text-sm text-gray-700">🚀 {project}</span>
                      <button
                        onClick={() => removeArrayItem(index, 'projects')}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supervisor/Manager
                </label>
                <input
                  type="text"
                  name="supervisor"
                  value={currentInternship.supervisor}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. John Smith, Senior Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  name="companySize"
                  value={currentInternship.companySize}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Select size</option>
                  <option value="Startup (1-50)">Startup (1-50)</option>
                  <option value="Small (51-200)">Small (51-200)</option>
                  <option value="Medium (201-1000)">Medium (201-1000)</option>
                  <option value="Large (1001-5000)">Large (1001-5000)</option>
                  <option value="Enterprise (5000+)">Enterprise (5000+)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mentorship & Learning
              </label>
              <textarea
                name="mentorship"
                value={currentInternship.mentorship}
                onChange={handleInputChange}
                rows={2}
                className="input-field resize-none"
                placeholder="Describe the mentorship you received and key learnings..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Networking & Professional Growth
              </label>
              <textarea
                name="networking"
                value={currentInternship.networking}
                onChange={handleInputChange}
                rows={2}
                className="input-field resize-none"
                placeholder="Professional connections made and growth opportunities..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button onClick={handleAddInternship} className="btn-primary flex-1">
                {isEditing ? 'Update Internship' : 'Add Internship'}
              </button>
              {isEditing && (
                <button onClick={resetForm} className="btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Internships List */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Added Internships</h2>
          
          {internshipsList.length === 0 ? (
            <div className="card text-center py-8">
              <div className="text-4xl mb-4">💼</div>
              <p className="text-gray-500 mb-4">No internships added yet. Document your professional experience!</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Browse Templates
              </button>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {internshipsList.map((internship) => (
                <div key={internship.id} className="card">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{internship.position}</h3>
                      <p className="text-sm text-gray-600">{internship.company}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditInternship(internship)}
                        className="text-primary-600 hover:text-primary-800 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteInternship(internship.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                    <div>📍 {internship.location}</div>
                    <div>📅 {internship.startDate} - {internship.isCurrentRole ? 'Present' : internship.endDate}</div>
                    <div>🏢 {internship.department}</div>
                    <div>💻 {internship.workMode}</div>
                  </div>

                  {internship.description && (
                    <p className="text-gray-600 text-sm mb-3">{internship.description}</p>
                  )}

                  {internship.achievements.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Key Achievements:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {internship.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                        {internship.achievements.length > 2 && (
                          <li className="text-gray-500 text-xs">+{internship.achievements.length - 2} more</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {internship.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {internship.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {internship.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs">+{internship.technologies.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Company Templates Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Company Templates</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {internshipSuggestions.map((suggestion, index) => (
                  <div key={index} className="card cursor-pointer hover:shadow-lg transition-shadow"
                       onClick={() => handleSelectSuggestion(suggestion)}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{suggestion.company}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        suggestion.type === 'FAANG' ? 'bg-red-100 text-red-800' :
                        suggestion.type === 'Startup' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {suggestion.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-1">{suggestion.position}</p>
                    <p className="text-xs text-gray-500 mb-3">{suggestion.description}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>📍 {suggestion.location}</span>
                      <span>⏰ {suggestion.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <button className="btn-secondary" onClick={() => completeStep(7)}>
          Skip This Step
        </button>
        <button onClick={handleSave} className="btn-primary">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default InternshipsForm;