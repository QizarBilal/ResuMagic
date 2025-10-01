import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { v4 as uuidv4 } from 'uuid';
import { hackathonSuggestions } from '../../data/sampleData';

interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  location: string;
  date: string;
  duration: string;
  teamSize: number;
  role: string;
  projectTitle: string;
  projectDescription: string;
  technologies: string[];
  achievements: string[];
  prize: string;
  repositoryUrl: string;
  demoUrl: string;
  challenges: string;
  learnings: string;
}

const HackathonsForm: React.FC = () => {
  const { resumeData, updateHackathons, addToast, completeStep } = useResume();
  const [hackathonsList, setHackathonsList] = useState<Hackathon[]>(resumeData.hackathons || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentHackathon, setCurrentHackathon] = useState<Hackathon>({
    id: '',
    name: '',
    organizer: '',
    location: '',
    date: '',
    duration: '',
    teamSize: 1,
    role: '',
    projectTitle: '',
    projectDescription: '',
    technologies: [],
    achievements: [],
    prize: '',
    repositoryUrl: '',
    demoUrl: '',
    challenges: '',
    learnings: ''
  });
  const [techInput, setTechInput] = useState('');
  const [achievementInput, setAchievementInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentHackathon(prev => ({
      ...prev,
      [name]: name === 'teamSize' ? parseInt(value) || 1 : value
    }));
  };

  const handleTechKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && techInput.trim()) {
      e.preventDefault();
      setCurrentHackathon(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const handleAchievementKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && achievementInput.trim()) {
      e.preventDefault();
      setCurrentHackathon(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievementInput.trim()]
      }));
      setAchievementInput('');
    }
  };

  const removeTechnology = (index: number) => {
    setCurrentHackathon(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const removeAchievement = (index: number) => {
    setCurrentHackathon(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const handleSelectSuggestion = (suggestion: any) => {
    setCurrentHackathon({
      id: uuidv4(),
      name: suggestion.name,
      organizer: suggestion.organizer,
      location: suggestion.location,
      date: '',
      duration: suggestion.duration,
      teamSize: suggestion.teamSize,
      role: '',
      projectTitle: '',
      projectDescription: '',
      technologies: suggestion.commonTechnologies || [],
      achievements: [],
      prize: '',
      repositoryUrl: '',
      demoUrl: '',
      challenges: '',
      learnings: ''
    });
    setIsModalOpen(false);
    addToast({
      type: 'success',
      message: `${suggestion.name} template loaded! Add your specific details.`
    });
  };

  const handleAddHackathon = () => {
    if (!currentHackathon.name || !currentHackathon.projectTitle) {
      addToast({
        type: 'error',
        message: 'Please fill in the hackathon name and project title.'
      });
      return;
    }

    const hackathonData = {
      ...currentHackathon,
      id: isEditing ? currentHackathon.id : uuidv4()
    };

    if (isEditing) {
      const updatedList = hackathonsList.map(hack => 
        hack.id === hackathonData.id ? hackathonData : hack
      );
      setHackathonsList(updatedList);
      addToast({
        type: 'success',
        message: 'Hackathon updated successfully!'
      });
    } else {
      setHackathonsList([...hackathonsList, hackathonData]);
      addToast({
        type: 'success',
        message: 'Hackathon added successfully!'
      });
    }

    resetForm();
  };

  const handleEditHackathon = (hackathon: Hackathon) => {
    setCurrentHackathon(hackathon);
    setTechInput('');
    setAchievementInput('');
    setIsEditing(true);
  };

  const handleDeleteHackathon = (id: string) => {
    setHackathonsList(hackathonsList.filter(hack => hack.id !== id));
    addToast({
      type: 'success',
      message: 'Hackathon removed successfully!'
    });
  };

  const resetForm = () => {
    setCurrentHackathon({
      id: '',
      name: '',
      organizer: '',
      location: '',
      date: '',
      duration: '',
      teamSize: 1,
      role: '',
      projectTitle: '',
      projectDescription: '',
      technologies: [],
      achievements: [],
      prize: '',
      repositoryUrl: '',
      demoUrl: '',
      challenges: '',
      learnings: ''
    });
    setTechInput('');
    setAchievementInput('');
    setIsEditing(false);
  };

  const handleSave = () => {
    updateHackathons(hackathonsList);
    addToast({
      type: 'success',
      message: 'Hackathons section saved successfully!'
    });
    completeStep(6);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hackathons</h1>
        <p className="text-gray-600">
          Showcase your hackathon experiences, projects, and achievements. Highlight your ability to work under pressure and create innovative solutions.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-secondary"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Browse Popular Hackathons
        </button>
        <button 
          onClick={resetForm}
          className="btn-secondary"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Custom Hackathon
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hackathon Form */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {isEditing ? 'Edit Hackathon' : 'Add Hackathon Experience'}
          </h2>

          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hackathon Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={currentHackathon.name}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. HackMIT 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organizer
                </label>
                <input
                  type="text"
                  name="organizer"
                  value={currentHackathon.organizer}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. MIT, Google, Microsoft"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={currentHackathon.location}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. Boston, MA or Online"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="month"
                  name="date"
                  value={currentHackathon.date}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select
                  name="duration"
                  value={currentHackathon.duration}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Select duration</option>
                  <option value="24 hours">24 hours</option>
                  <option value="36 hours">36 hours</option>
                  <option value="48 hours">48 hours</option>
                  <option value="72 hours">72 hours</option>
                  <option value="1 week">1 week</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Size
                </label>
                <input
                  type="number"
                  name="teamSize"
                  value={currentHackathon.teamSize}
                  onChange={handleInputChange}
                  min="1"
                  max="10"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={currentHackathon.role}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. Team Lead, Developer"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                name="projectTitle"
                value={currentHackathon.projectTitle}
                onChange={handleInputChange}
                className="input-field"
                placeholder="e.g. EcoTracker - Carbon Footprint Monitor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={currentHackathon.projectDescription}
                onChange={handleInputChange}
                rows={3}
                className="input-field resize-none"
                placeholder="Describe your project, its purpose, and main features..."
              />
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
                onKeyPress={handleTechKeyPress}
                className="input-field"
                placeholder="Type technology and press Enter (e.g. React, Python, MongoDB)"
              />
              {currentHackathon.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentHackathon.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                      <button
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

            {/* Achievements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Achievements
              </label>
              <input
                type="text"
                value={achievementInput}
                onChange={(e) => setAchievementInput(e.target.value)}
                onKeyPress={handleAchievementKeyPress}
                className="input-field"
                placeholder="Type achievement and press Enter"
              />
              {currentHackathon.achievements.length > 0 && (
                <div className="space-y-1 mt-2">
                  {currentHackathon.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded"
                    >
                      <span className="text-sm text-gray-700">• {achievement}</span>
                      <button
                        onClick={() => removeAchievement(index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Prize and Links */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prize/Recognition
              </label>
              <input
                type="text"
                name="prize"
                value={currentHackathon.prize}
                onChange={handleInputChange}
                className="input-field"
                placeholder="e.g. 1st Place, Best Innovation Award"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Repository URL
                </label>
                <input
                  type="url"
                  name="repositoryUrl"
                  value={currentHackathon.repositoryUrl}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="https://github.com/username/project"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Demo URL
                </label>
                <input
                  type="url"
                  name="demoUrl"
                  value={currentHackathon.demoUrl}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="https://project-demo.com"
                />
              </div>
            </div>

            {/* Challenges and Learnings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Challenges Faced
              </label>
              <textarea
                name="challenges"
                value={currentHackathon.challenges}
                onChange={handleInputChange}
                rows={2}
                className="input-field resize-none"
                placeholder="What challenges did you overcome during the hackathon?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Learnings
              </label>
              <textarea
                name="learnings"
                value={currentHackathon.learnings}
                onChange={handleInputChange}
                rows={2}
                className="input-field resize-none"
                placeholder="What did you learn from this experience?"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button onClick={handleAddHackathon} className="btn-primary flex-1">
                {isEditing ? 'Update Hackathon' : 'Add Hackathon'}
              </button>
              {isEditing && (
                <button onClick={resetForm} className="btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Hackathons List */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Added Hackathons</h2>
          
          {hackathonsList.length === 0 ? (
            <div className="card text-center py-8">
              <div className="text-4xl mb-4">🏆</div>
              <p className="text-gray-500 mb-4">No hackathons added yet. Showcase your innovative projects!</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Browse Popular Hackathons
              </button>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {hackathonsList.map((hackathon) => (
                <div key={hackathon.id} className="card">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{hackathon.name}</h3>
                      <p className="text-sm text-gray-600">{hackathon.organizer}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditHackathon(hackathon)}
                        className="text-primary-600 hover:text-primary-800 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteHackathon(hackathon.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mb-2">{hackathon.projectTitle}</h4>
                  <p className="text-gray-600 text-sm mb-3">{hackathon.projectDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                    <div>📍 {hackathon.location}</div>
                    <div>📅 {hackathon.date}</div>
                    <div>⏰ {hackathon.duration}</div>
                    <div>👥 Team of {hackathon.teamSize}</div>
                  </div>

                  {hackathon.prize && (
                    <div className="bg-yellow-50 text-yellow-800 text-sm px-3 py-1 rounded-full inline-block mb-3">
                      🏆 {hackathon.prize}
                    </div>
                  )}

                  {hackathon.technologies.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {hackathon.technologies.map((tech, index) => (
                          <span key={index} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    {hackathon.repositoryUrl && (
                      <a 
                        href={hackathon.repositoryUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {hackathon.demoUrl && (
                      <a 
                        href={hackathon.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 text-sm"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popular Hackathons Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Popular Hackathons</h3>
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
                {hackathonSuggestions.map((suggestion, index) => (
                  <div key={index} className="card cursor-pointer hover:shadow-lg transition-shadow"
                       onClick={() => handleSelectSuggestion(suggestion)}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{suggestion.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        suggestion.category === 'Environmental' ? 'bg-green-100 text-green-800' :
                        suggestion.category === 'Artificial Intelligence' ? 'bg-purple-100 text-purple-800' :
                        suggestion.category === 'Financial Technology' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {suggestion.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{suggestion.organizer}</p>
                    <p className="text-xs text-gray-500 mb-3">Difficulty: {suggestion.difficulty}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>📍 {suggestion.format}</span>
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
        <button className="btn-secondary" onClick={() => completeStep(6)}>
          Skip This Step
        </button>
        <button onClick={handleSave} className="btn-primary">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default HackathonsForm;