import React, { useState, useEffect } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Project } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';


const ProjectsForm: React.FC = () => {
  const { resumeData, updateProjects, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [projectsList, setProjectsList] = useState<Project[]>(resumeData.projects);
  const [currentProject, setCurrentProject] = useState<Project>({
    id: '',
    title: '',
    description: '',
    technologies: [],
    startDate: '',
    endDate: '',
    highlights: [],
    url: '',
    github: '',
    impact: '',
    teamSize: 1,
    role: '',
    achievements: []
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newTechnology, setNewTechnology] = useState('');
  const [newAchievement, setNewAchievement] = useState('');

  useEffect(() => {
    setProjectsList(resumeData.projects);
  }, [resumeData.projects]);

  const resetForm = () => {
    setCurrentProject({
      id: '',
      title: '',
      description: '',
      technologies: [],
      startDate: '',
      endDate: '',
      highlights: [],
      url: '',
      github: '',
      impact: '',
      teamSize: 1,
      role: '',
      achievements: []
    });
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setCurrentProject(prev => ({ ...prev, [field]: value }));
  };

  const addTechnology = () => {
    if (newTechnology.trim()) {
      setCurrentProject(prev => ({
        ...prev,
        technologies: [...prev.technologies, newTechnology.trim()]
      }));
      setNewTechnology('');
    }
  };

  const removeTechnology = (index: number) => {
    setCurrentProject(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setCurrentProject(prev => ({
        ...prev,
        achievements: [...(prev.achievements || []), newAchievement.trim()]
      }));
      setNewAchievement('');
    }
  };

  const removeAchievement = (index: number) => {
    setCurrentProject(prev => ({
      ...prev,
      achievements: (prev.achievements || []).filter((_, i) => i !== index)
    }));
  };

  const handleAddProject = () => {
    if (currentProject.title && currentProject.description) {
      const newProject = { ...currentProject, id: uuidv4() };
      
      if (isEditing) {
        setProjectsList(prev => prev.map(project => 
          project.id === currentProject.id ? newProject : project
        ));
      } else {
        setProjectsList(prev => [...prev, newProject]);
      }
      
      resetForm();
      addToast({
        type: 'success',
        message: isEditing ? 'Project updated successfully!' : 'Project added successfully!',
      });
    }
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleRemoveProject = (id: string) => {
    setProjectsList(prev => prev.filter(project => project.id !== id));
    addToast({
      type: 'success',
      message: 'Project removed successfully!',
    });
  };

  const handleSave = () => {
    updateProjects(projectsList);
    completeStep(4);
    addToast({
      type: 'success',
      message: 'Projects saved successfully!',
    });
    
    // Navigate to next step and scroll to top
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };



  const techSuggestions = [
    'React', 'JavaScript', 'Python', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Git', 'Express.js', 'Vue.js', 'Angular', 'Java', 'C++',
    'Machine Learning', 'TensorFlow', 'Django', 'Flask', 'Redis', 'GraphQL'
  ];



  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Compact Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Projects & Portfolio</h1>
            <p className="text-sm text-gray-600">Showcase your impressive projects</p>
          </div>
        </div>
      </div>
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Add Project Card */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{isEditing ? 'Edit Project' : 'Add Project'}</h2>
                <p className="text-gray-600">Describe your project in detail with technologies used and impact achieved.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Project Title"
                    type="text"
                    value={currentProject.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="E-commerce Platform"
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    }
                  />

                  <Input
                    label="Your Role"
                    type="text"
                    value={currentProject.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    placeholder="Full Stack Developer"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    }
                  />
                </div>

                <Textarea
                  label="Project Description"
                  value={currentProject.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your project, its purpose, and what you accomplished..."
                  rows={4}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="Start Date"
                    type="month"
                    value={currentProject.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                  />

                  <Input
                    label="End Date"
                    type="month"
                    value={currentProject.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    placeholder="Leave empty if ongoing"
                  />

                  <Input
                    label="Team Size"
                    type="number"
                    value={(currentProject.teamSize || 1).toString()}
                    onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 1)}
                    min="1"
                    placeholder="1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Live Demo URL (Optional)"
                    type="url"
                    value={currentProject.url}
                    onChange={(e) => handleInputChange('url', e.target.value)}
                    placeholder="https://myproject.com"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  />

                  <Input
                    label="GitHub Repository (Optional)"
                    type="url"
                    value={currentProject.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    placeholder="https://github.com/username/project"
                    leftIcon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    }
                  />
                </div>

                {/* Impact Measurement */}
                <Textarea
                  label="Project Impact & Results"
                  value={currentProject.impact}
                  onChange={(e) => handleInputChange('impact', e.target.value)}
                  placeholder="Increased user engagement by 40%, reduced loading time by 50%..."
                  rows={3}
                />

                {/* Technologies Used */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Technologies Used</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTechnology}
                        onChange={(e) => setNewTechnology(e.target.value)}
                        placeholder="React, Node.js, MongoDB..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        onKeyPress={(e) => e.key === 'Enter' && addTechnology()}
                      />
                      <button
                        type="button"
                        onClick={addTechnology}
                        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>

                    {/* Tech Suggestions */}
                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-2">Popular technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {techSuggestions.slice(0, 8).map((tech, index) => (
                          <button
                            key={index}
                            onClick={() => setNewTechnology(tech)}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 border border-gray-200 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {currentProject.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                        >
                          {tech}
                          <button
                            type="button"
                            onClick={() => removeTechnology(index)}
                            className="ml-2 text-primary-600 hover:text-primary-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key Achievements */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Key Achievements</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newAchievement}
                        onChange={(e) => setNewAchievement(e.target.value)}
                        placeholder="Implemented real-time chat feature"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        onKeyPress={(e) => e.key === 'Enter' && addAchievement()}
                      />
                      <button
                        type="button"
                        onClick={addAchievement}
                        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {(currentProject.achievements || []).length > 0 && (
                    <ul className="space-y-2">
                      {(currentProject.achievements || []).map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-gray-700">{achievement}</span>
                          <button
                            type="button"
                            onClick={() => removeAchievement(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleAddProject}
                    className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {isEditing ? 'Update Project' : 'Add Project'}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Projects List */}
            {projectsList.length > 0 && (
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Projects</h2>
                  <p className="text-gray-600">Review and manage your project portfolio.</p>
                </div>

                <div className="space-y-6">
                  {projectsList.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                            {project.role && (
                              <span className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded-full">
                                {project.role}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 mb-3">{project.description}</p>
                          
                          <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                            <span>{project.startDate} - {project.endDate || 'Ongoing'}</span>
                            {(project.teamSize || 0) > 1 && (
                              <span>Team of {project.teamSize}</span>
                            )}
                          </div>

                          {project.technologies.length > 0 && (
                            <div className="mb-3">
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.map((tech, index) => (
                                  <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.impact && (
                            <div className="mb-3">
                              <p className="text-sm font-medium text-green-700">Impact: {project.impact}</p>
                            </div>
                          )}

                          <div className="flex gap-4">
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                              >
                                View Live Demo →
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                              >
                                View Code →
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="p-2 text-primary-600 hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleRemoveProject(project.id)}
                            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
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
  );
};

export default ProjectsForm;