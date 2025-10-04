import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';


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
  const { resumeData, updateHackathons, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [hackathonsList, setHackathonsList] = useState<Hackathon[]>(resumeData.hackathons || []);
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
  const [isEditing, setIsEditing] = useState(false);
  const [techInput, setTechInput] = useState('');
  const [achievementInput, setAchievementInput] = useState('');

  const popularHackathons = [
    { name: 'HackMIT', organizer: 'MIT', category: 'University' },
    { name: 'TechCrunch Disrupt Hackathon', organizer: 'TechCrunch', category: 'Industry' },
    { name: 'AngelHack', organizer: 'AngelHack', category: 'Global' },
    { name: 'NASA Space Apps Challenge', organizer: 'NASA', category: 'Space Tech' },
    { name: 'Facebook Developer Challenge', organizer: 'Meta', category: 'Social Tech' },
    { name: 'Google Hash Code', organizer: 'Google', category: 'Programming' },
    { name: 'Amazon Alexa Challenge', organizer: 'Amazon', category: 'Voice AI' },
    { name: 'Microsoft Imagine Cup', organizer: 'Microsoft', category: 'Student Innovation' },
    { name: 'Devpost Hackathons', organizer: 'Devpost', category: 'Online' },
    { name: 'Junction Hackathon', organizer: 'Junction', category: 'Europe' },
    { name: 'PennApps', organizer: 'University of Pennsylvania', category: 'University' },
    { name: 'TreeHacks', organizer: 'Stanford University', category: 'University' }
  ];

  const roleOptions = [
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Data Scientist',
    'ML Engineer',
    'Team Lead',
    'Product Manager',
    'DevOps Engineer',
    'Mobile Developer'
  ];

  const durationOptions = [
    '24 Hours',
    '36 Hours',
    '48 Hours',
    '72 Hours',
    '1 Week',
    'Custom'
  ];

  const prizeOptions = [
    'Winner - 1st Place',
    'Runner-up - 2nd Place',
    'Third Place',
    'Best Technical Implementation',
    'Best UI/UX Design',
    'Best Innovation',
    'People\'s Choice Award',
    'Best Use of API',
    'Best Mobile App',
    'Best Web App',
    'Participant'
  ];

  const handleInputChange = (field: keyof Hackathon, value: any) => {
    setCurrentHackathon(prev => ({ ...prev, [field]: value }));
  };

  const addTechnology = () => {
    if (techInput.trim()) {
      setCurrentHackathon(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const removeTechnology = (tech: string) => {
    setCurrentHackathon(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  const addAchievement = () => {
    if (achievementInput.trim()) {
      setCurrentHackathon(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievementInput.trim()]
      }));
      setAchievementInput('');
    }
  };

  const removeAchievement = (achievement: string) => {
    setCurrentHackathon(prev => ({
      ...prev,
      achievements: prev.achievements.filter(a => a !== achievement)
    }));
  };

  const saveHackathon = () => {
    if (!currentHackathon.name.trim() || !currentHackathon.organizer.trim()) {
      addToast({
        type: 'error',
        message: 'Please fill in hackathon name and organizer'
      });
      return;
    }

    if (isEditing) {
      setHackathonsList(prev => prev.map(h => h.id === currentHackathon.id ? currentHackathon : h));
      addToast({
        type: 'success',
        message: 'Hackathon updated successfully!'
      });
    } else {
      const newHackathon = { ...currentHackathon, id: uuidv4() };
      setHackathonsList(prev => [...prev, newHackathon]);
      addToast({
        type: 'success',
        message: 'Hackathon added successfully!'
      });
    }

    resetForm();
  };

  const editHackathon = (hackathon: Hackathon) => {
    setCurrentHackathon(hackathon);
    setIsEditing(true);
  };

  const deleteHackathon = (id: string) => {
    setHackathonsList(prev => prev.filter(h => h.id !== id));
    addToast({
      type: 'success',
      message: 'Hackathon removed'
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
    setIsEditing(false);
    setTechInput('');
    setAchievementInput('');
  };

  const handleSave = () => {
    updateHackathons(hackathonsList);
    completeStep(6);
    addToast({
      type: 'success',
      message: 'Hackathons saved successfully!'
    });
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const groupedHackathons = popularHackathons.reduce((acc, hackathon) => {
    if (!acc[hackathon.category]) {
      acc[hackathon.category] = [];
    }
    acc[hackathon.category].push(hackathon);
    return acc;
  }, {} as Record<string, typeof popularHackathons>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-highlight-500 rounded-2xl mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-highlight-500 bg-clip-text text-transparent mb-4">
            Hackathons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcase your innovation, teamwork, and rapid development skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hackathon Form */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isEditing ? 'Edit Hackathon' : 'Add Hackathon'}
                </h2>
                <p className="text-gray-600">Share your hackathon experiences and achievements.</p>
              </div>

              <div className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Hackathon Name"
                    type="text"
                    value={currentHackathon.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="HackMIT 2023"
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    }
                  />

                  <Input
                    label="Organizer"
                    type="text"
                    value={currentHackathon.organizer}
                    onChange={(e) => handleInputChange('organizer', e.target.value)}
                    placeholder="MIT"
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="Location"
                    type="text"
                    value={currentHackathon.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Cambridge, MA"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                  />

                  <Input
                    label="Date"
                    type="month"
                    value={currentHackathon.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <select
                      value={currentHackathon.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Duration</option>
                      {durationOptions.map(duration => (
                        <option key={duration} value={duration}>{duration}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Team Size"
                    type="number"
                    min="1"
                    max="10"
                    value={currentHackathon.teamSize.toString()}
                    onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 1)}
                    placeholder="4"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    }
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
                    <select
                      value={currentHackathon.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Role</option>
                      {roleOptions.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  
                  <div className="space-y-6">
                    <Input
                      label="Project Title"
                      type="text"
                      value={currentHackathon.projectTitle}
                      onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                      placeholder="AI-Powered Study Assistant"
                      leftIcon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      }
                    />

                    <Textarea
                      label="Project Description"
                      value={currentHackathon.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Describe your project, its purpose, and key features..."
                      rows={4}
                    />

                    {/* Technologies */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Technologies Used</label>
                      <div className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={techInput}
                          onChange={(e) => setTechInput(e.target.value)}
                          placeholder="React, Node.js, MongoDB"
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
                        {currentHackathon.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                          >
                            {tech}
                            <button
                              type="button"
                              onClick={() => removeTechnology(tech)}
                              className="ml-2 text-primary-600 hover:text-primary-800"
                            >
                              ×
                            </button>
                          </span>
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
                          placeholder="Won Best Innovation Award"
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
                        {currentHackathon.achievements.map((achievement, index) => (
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prize/Recognition</label>
                      <select
                        value={currentHackathon.prize}
                        onChange={(e) => handleInputChange('prize', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Prize/Recognition</option>
                        {prizeOptions.map(prize => (
                          <option key={prize} value={prize}>{prize}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Repository URL"
                        type="url"
                        value={currentHackathon.repositoryUrl}
                        onChange={(e) => handleInputChange('repositoryUrl', e.target.value)}
                        placeholder="https://github.com/username/project"
                        leftIcon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        }
                      />

                      <Input
                        label="Demo URL"
                        type="url"
                        value={currentHackathon.demoUrl}
                        onChange={(e) => handleInputChange('demoUrl', e.target.value)}
                        placeholder="https://demo.example.com"
                        leftIcon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        }
                      />
                    </div>

                    <Textarea
                      label="Challenges Faced"
                      value={currentHackathon.challenges}
                      onChange={(e) => handleInputChange('challenges', e.target.value)}
                      placeholder="What were the main technical or team challenges you overcame?"
                      rows={3}
                    />

                    <Textarea
                      label="Key Learnings"
                      value={currentHackathon.learnings}
                      onChange={(e) => handleInputChange('learnings', e.target.value)}
                      placeholder="What did you learn from this hackathon experience?"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={saveHackathon}
                    className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {isEditing ? 'Update Hackathon' : 'Add Hackathon'}
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

            {/* Hackathons List */}
            {hackathonsList.length > 0 && (
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Hackathons</h2>
                  <p className="text-gray-600">Review and manage your hackathon experiences.</p>
                </div>

                <div className="space-y-6">
                  {hackathonsList.map((hackathon) => (
                    <div key={hackathon.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{hackathon.name}</h3>
                            {hackathon.prize && (
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                                {hackathon.prize}
                              </span>
                            )}
                          </div>
                          <p className="text-primary-600 font-medium mb-1">{hackathon.organizer}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            {hackathon.location && <span>📍 {hackathon.location}</span>}
                            {hackathon.date && <span>📅 {new Date(hackathon.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>}
                            {hackathon.duration && <span>⏱️ {hackathon.duration}</span>}
                            {hackathon.teamSize && <span>👥 Team of {hackathon.teamSize}</span>}
                            {hackathon.role && <span>🎯 {hackathon.role}</span>}
                          </div>
                          {hackathon.projectTitle && (
                            <div className="mb-3">
                              <h4 className="font-semibold text-gray-900 mb-1">Project: {hackathon.projectTitle}</h4>
                              {hackathon.projectDescription && (
                                <p className="text-gray-700 mb-2">{hackathon.projectDescription}</p>
                              )}
                            </div>
                          )}
                          
                          {hackathon.technologies.length > 0 && (
                            <div className="mb-3">
                              <h5 className="font-medium text-gray-700 mb-2">Technologies:</h5>
                              <div className="flex flex-wrap gap-2">
                                {hackathon.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {hackathon.achievements.length > 0 && (
                            <div className="mb-3">
                              <h5 className="font-medium text-gray-700 mb-2">Achievements:</h5>
                              <ul className="list-disc list-inside space-y-1">
                                {hackathon.achievements.map((achievement, index) => (
                                  <li key={index} className="text-gray-700">{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="flex gap-4 text-sm">
                            {hackathon.repositoryUrl && (
                              <a
                                href={hackathon.repositoryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-800 font-medium"
                              >
                                View Code →
                              </a>
                            )}
                            {hackathon.demoUrl && (
                              <a
                                href={hackathon.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-800 font-medium"
                              >
                                Live Demo →
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => editHackathon(hackathon)}
                            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleteHackathon(hackathon.id)}
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

export default HackathonsForm;