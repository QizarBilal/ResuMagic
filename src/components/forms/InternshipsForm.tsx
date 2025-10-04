import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';


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
  const { resumeData, updateInternships, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [internshipsList, setInternshipsList] = useState<Internship[]>(resumeData.internships || []);
  const [currentInternship, setCurrentInternship] = useState<Internship>({
    id: '',
    company: '',
    position: '',
    department: '',
    location: '',
    startDate: '',
    endDate: '',
    isCurrentRole: false,
    employmentType: '',
    workMode: '',
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
  const [isEditing, setIsEditing] = useState(false);
  const [responsibilityInput, setResponsibilityInput] = useState('');
  const [achievementInput, setAchievementInput] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [techInput, setTechInput] = useState('');
  const [projectInput, setProjectInput] = useState('');

  const topInternshipCompanies = [
    { company: 'Google', industry: 'Technology', size: 'Large (10,000+)' },
    { company: 'Microsoft', industry: 'Technology', size: 'Large (10,000+)' },
    { company: 'Amazon', industry: 'E-commerce/Cloud', size: 'Large (10,000+)' },
    { company: 'Meta (Facebook)', industry: 'Social Media', size: 'Large (10,000+)' },
    { company: 'Apple', industry: 'Technology/Hardware', size: 'Large (10,000+)' },
    { company: 'Netflix', industry: 'Entertainment/Tech', size: 'Large (10,000+)' },
    { company: 'Tesla', industry: 'Automotive/Energy', size: 'Large (10,000+)' },
    { company: 'Goldman Sachs', industry: 'Financial Services', size: 'Large (10,000+)' },
    { company: 'JP Morgan Chase', industry: 'Banking', size: 'Large (10,000+)' },
    { company: 'McKinsey & Company', industry: 'Consulting', size: 'Large (10,000+)' },
    { company: 'Deloitte', industry: 'Consulting', size: 'Large (10,000+)' },
    { company: 'IBM', industry: 'Technology', size: 'Large (10,000+)' }
  ];

  const internshipPositions = [
    'Software Engineering Intern',
    'Data Science Intern',
    'Product Management Intern',
    'Marketing Intern',
    'Business Analyst Intern',
    'UI/UX Design Intern',
    'Research Intern',
    'Sales Intern',
    'Finance Intern',
    'Human Resources Intern',
    'Operations Intern',
    'Consulting Intern'
  ];

  const employmentTypes = [
    'Full-time Internship',
    'Part-time Internship',
    'Summer Internship',
    'Co-op Program',
    'Research Internship',
    'Virtual Internship'
  ];

  const workModes = [
    'On-site',
    'Remote',
    'Hybrid',
    'Flexible'
  ];

  const companySizes = [
    'Startup (1-50)',
    'Small (51-200)',
    'Medium (201-1000)',
    'Large (1001-5000)',
    'Enterprise (5000+)'
  ];

  const industries = [
    'Technology',
    'Financial Services',
    'Healthcare',
    'E-commerce',
    'Consulting',
    'Manufacturing',
    'Media & Entertainment',
    'Education',
    'Government',
    'Non-profit',
    'Retail',
    'Transportation'
  ];

  const handleInputChange = (field: keyof Internship, value: any) => {
    setCurrentInternship(prev => ({ ...prev, [field]: value }));
  };

  const addResponsibility = () => {
    if (responsibilityInput.trim()) {
      setCurrentInternship(prev => ({
        ...prev,
        responsibilities: [...prev.responsibilities, responsibilityInput.trim()]
      }));
      setResponsibilityInput('');
    }
  };

  const removeResponsibility = (responsibility: string) => {
    setCurrentInternship(prev => ({
      ...prev,
      responsibilities: prev.responsibilities.filter(r => r !== responsibility)
    }));
  };

  const addAchievement = () => {
    if (achievementInput.trim()) {
      setCurrentInternship(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievementInput.trim()]
      }));
      setAchievementInput('');
    }
  };

  const removeAchievement = (achievement: string) => {
    setCurrentInternship(prev => ({
      ...prev,
      achievements: prev.achievements.filter(a => a !== achievement)
    }));
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setCurrentInternship(prev => ({
        ...prev,
        skillsGained: [...prev.skillsGained, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setCurrentInternship(prev => ({
      ...prev,
      skillsGained: prev.skillsGained.filter(s => s !== skill)
    }));
  };

  const addTechnology = () => {
    if (techInput.trim()) {
      setCurrentInternship(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const removeTechnology = (tech: string) => {
    setCurrentInternship(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  const addProject = () => {
    if (projectInput.trim()) {
      setCurrentInternship(prev => ({
        ...prev,
        projects: [...prev.projects, projectInput.trim()]
      }));
      setProjectInput('');
    }
  };

  const removeProject = (project: string) => {
    setCurrentInternship(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p !== project)
    }));
  };

  const saveInternship = () => {
    if (!currentInternship.company.trim() || !currentInternship.position.trim()) {
      addToast({
        type: 'error',
        message: 'Please fill in company name and position'
      });
      return;
    }

    if (isEditing) {
      setInternshipsList(prev => prev.map(i => i.id === currentInternship.id ? currentInternship : i));
      addToast({
        type: 'success',
        message: 'Internship updated successfully!'
      });
    } else {
      const newInternship = { ...currentInternship, id: uuidv4() };
      setInternshipsList(prev => [...prev, newInternship]);
      addToast({
        type: 'success',
        message: 'Internship added successfully!'
      });
    }

    resetForm();
  };

  const editInternship = (internship: Internship) => {
    setCurrentInternship(internship);
    setIsEditing(true);
  };

  const deleteInternship = (id: string) => {
    setInternshipsList(prev => prev.filter(i => i.id !== id));
    addToast({
      type: 'success',
      message: 'Internship removed'
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
      employmentType: '',
      workMode: '',
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
    setIsEditing(false);
    setResponsibilityInput('');
    setAchievementInput('');
    setSkillInput('');
    setTechInput('');
    setProjectInput('');
  };

  const handleSave = () => {
    updateInternships(internshipsList);
    completeStep(7);
    addToast({
      type: 'success',
      message: 'Internships saved successfully!'
    });
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const groupedCompanies = topInternshipCompanies.reduce((acc, company) => {
    if (!acc[company.industry]) {
      acc[company.industry] = [];
    }
    acc[company.industry].push(company);
    return acc;
  }, {} as Record<string, typeof topInternshipCompanies>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-highlight-500 rounded-2xl mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6l-8 2M8 4v2l8 2m0-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0l-8 2" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-highlight-500 bg-clip-text text-transparent mb-4">
            Internships
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcase your practical experience and professional growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Internship Form */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isEditing ? 'Edit Internship' : 'Add Internship'}
                </h2>
                <p className="text-gray-600">Document your professional internship experiences.</p>
              </div>

              <div className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Company Name"
                    type="text"
                    value={currentInternship.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Google"
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                    <select
                      value={currentInternship.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select Position</option>
                      {internshipPositions.map(position => (
                        <option key={position} value={position}>{position}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="Department"
                    type="text"
                    value={currentInternship.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    placeholder="Engineering"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    }
                  />

                  <Input
                    label="Location"
                    type="text"
                    value={currentInternship.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="San Francisco, CA"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                  />

                  <Input
                    label="Supervisor"
                    type="text"
                    value={currentInternship.supervisor}
                    onChange={(e) => handleInputChange('supervisor', e.target.value)}
                    placeholder="John Smith"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    }
                  />
                </div>

                {/* Dates and Employment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Start Date"
                    type="month"
                    value={currentInternship.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    required
                  />

                  <div>
                    <Input
                      label="End Date"
                      type="month"
                      value={currentInternship.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      disabled={currentInternship.isCurrentRole}
                    />
                    <div className="mt-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={currentInternship.isCurrentRole}
                          onChange={(e) => {
                            handleInputChange('isCurrentRole', e.target.checked);
                            if (e.target.checked) {
                              handleInputChange('endDate', '');
                            }
                          }}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">Currently working here</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                    <select
                      value={currentInternship.employmentType}
                      onChange={(e) => handleInputChange('employmentType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Type</option>
                      {employmentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Mode</label>
                    <select
                      value={currentInternship.workMode}
                      onChange={(e) => handleInputChange('workMode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Mode</option>
                      {workModes.map(mode => (
                        <option key={mode} value={mode}>{mode}</option>
                      ))}
                    </select>
                  </div>

                  <Input
                    label="Stipend (Optional)"
                    type="text"
                    value={currentInternship.stipend}
                    onChange={(e) => handleInputChange('stipend', e.target.value)}
                    placeholder="$2000/month"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                    <select
                      value={currentInternship.companySize}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select
                      value={currentInternship.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <Textarea
                  label="Role Description"
                  value={currentInternship.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Provide a brief overview of your role and the team you worked with..."
                  rows={3}
                />

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Responsibilities</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={responsibilityInput}
                      onChange={(e) => setResponsibilityInput(e.target.value)}
                      placeholder="Developed and maintained web applications using React..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && addResponsibility()}
                    />
                    <button
                      type="button"
                      onClick={addResponsibility}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  <div className="space-y-2">
                    {currentInternship.responsibilities.map((responsibility, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg"
                      >
                        <span className="text-blue-800">{responsibility}</span>
                        <button
                          type="button"
                          onClick={() => removeResponsibility(responsibility)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Achievements</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={achievementInput}
                      onChange={(e) => setAchievementInput(e.target.value)}
                      placeholder="Improved system performance by 30%..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && addAchievement()}
                    />
                    <button
                      type="button"
                      onClick={addAchievement}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  <div className="space-y-2">
                    {currentInternship.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg"
                      >
                        <span className="text-green-800">{achievement}</span>
                        <button
                          type="button"
                          onClick={() => removeAchievement(achievement)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills and Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills Gained</label>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        placeholder="Project Management, Data Analysis"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <button
                        type="button"
                        onClick={addSkill}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentInternship.skillsGained.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-purple-600 hover:text-purple-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Technologies Used</label>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={techInput}
                        onChange={(e) => setTechInput(e.target.value)}
                        placeholder="React, Python, AWS"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && addTechnology()}
                      />
                      <button
                        type="button"
                        onClick={addTechnology}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentInternship.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                          <button
                            type="button"
                            onClick={() => removeTechnology(tech)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Projects</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={projectInput}
                      onChange={(e) => setProjectInput(e.target.value)}
                      placeholder="Customer analytics dashboard redesign"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && addProject()}
                    />
                    <button
                      type="button"
                      onClick={addProject}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  <div className="space-y-2">
                    {currentInternship.projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                      >
                        <span className="text-yellow-800">{project}</span>
                        <button
                          type="button"
                          onClick={() => removeProject(project)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                  
                  <div className="space-y-6">
                    <Textarea
                      label="Mentorship Experience"
                      value={currentInternship.mentorship}
                      onChange={(e) => handleInputChange('mentorship', e.target.value)}
                      placeholder="Describe mentorship received or provided..."
                      rows={2}
                    />

                    <Textarea
                      label="Networking Opportunities"
                      value={currentInternship.networking}
                      onChange={(e) => handleInputChange('networking', e.target.value)}
                      placeholder="Professional connections made, events attended..."
                      rows={2}
                    />

                    <Textarea
                      label="Letter of Recommendation"
                      value={currentInternship.recommendation}
                      onChange={(e) => handleInputChange('recommendation', e.target.value)}
                      placeholder="Information about recommendation letters received..."
                      rows={2}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={saveInternship}
                    className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {isEditing ? 'Update Internship' : 'Add Internship'}
                  </button>
                  
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Internships List */}
            {internshipsList.length > 0 && (
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Internships</h2>
                  <p className="text-gray-600">Review and manage your internship experiences.</p>
                </div>

                <div className="space-y-6">
                  {internshipsList.map((internship) => (
                    <div key={internship.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{internship.position}</h3>
                            {internship.isCurrentRole && (
                              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-primary-600 font-medium mb-1">{internship.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            {internship.department && <span>🏢 {internship.department}</span>}
                            {internship.location && <span>📍 {internship.location}</span>}
                            {internship.startDate && (
                              <span>📅 {new Date(internship.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
                                internship.isCurrentRole ? 'Present' : 
                                internship.endDate ? new Date(internship.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'
                              }</span>
                            )}
                            {internship.workMode && <span>💻 {internship.workMode}</span>}
                          </div>
                          
                          {internship.description && (
                            <p className="text-gray-700 mb-3">{internship.description}</p>
                          )}

                          {internship.responsibilities.length > 0 && (
                            <div className="mb-3">
                              <h5 className="font-medium text-gray-700 mb-2">Key Responsibilities:</h5>
                              <ul className="list-disc list-inside space-y-1">
                                {internship.responsibilities.slice(0, 3).map((responsibility, index) => (
                                  <li key={index} className="text-gray-700 text-sm">{responsibility}</li>
                                ))}
                                {internship.responsibilities.length > 3 && (
                                  <li className="text-gray-500 text-sm">+ {internship.responsibilities.length - 3} more</li>
                                )}
                              </ul>
                            </div>
                          )}

                          {internship.achievements.length > 0 && (
                            <div className="mb-3">
                              <h5 className="font-medium text-gray-700 mb-2">Achievements:</h5>
                              <ul className="list-disc list-inside space-y-1">
                                {internship.achievements.slice(0, 2).map((achievement, index) => (
                                  <li key={index} className="text-gray-700 text-sm">{achievement}</li>
                                ))}
                                {internship.achievements.length > 2 && (
                                  <li className="text-gray-500 text-sm">+ {internship.achievements.length - 2} more</li>
                                )}
                              </ul>
                            </div>
                          )}

                          {(internship.technologies.length > 0 || internship.skillsGained.length > 0) && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {internship.technologies.slice(0, 5).map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                              {internship.skillsGained.slice(0, 3).map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => editInternship(internship)}
                            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleteInternship(internship.id)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
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

export default InternshipsForm;