import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Achievement } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';


const AchievementsForm: React.FC = () => {
  const { resumeData, updateAchievements, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [achievements, setAchievements] = useState<Achievement[]>(resumeData.achievements || []);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement>({
    id: '',
    title: '',
    description: '',
    date: '',
    organization: '',
    category: 'professional',
    impact: '',
    recognition: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const achievementCategories = [
    { value: 'professional', label: 'Professional Achievement', icon: '🏆' },
    { value: 'academic', label: 'Academic Achievement', icon: '🎓' },
    { value: 'leadership', label: 'Leadership Achievement', icon: '👥' },
    { value: 'innovation', label: 'Innovation & Research', icon: '💡' },
    { value: 'community', label: 'Community Service', icon: '🤝' },
    { value: 'technical', label: 'Technical Achievement', icon: '⚡' },
    { value: 'publication', label: 'Publication & Media', icon: '📚' },
    { value: 'awards', label: 'Awards & Recognition', icon: '🏅' }
  ];



  const handleInputChange = (field: keyof Achievement, value: string) => {
    setCurrentAchievement(prev => ({ ...prev, [field]: value }));
  };

  const saveAchievement = () => {
    if (!currentAchievement.title.trim() || !currentAchievement.description.trim()) {
      addToast({
        type: 'error',
        message: 'Please fill in achievement title and description'
      });
      return;
    }

    if (isEditing) {
      setAchievements(prev => prev.map(a => a.id === currentAchievement.id ? currentAchievement : a));
      addToast({
        type: 'success',
        message: 'Achievement updated successfully!'
      });
    } else {
      const newAchievement = { ...currentAchievement, id: uuidv4() };
      setAchievements(prev => [...prev, newAchievement]);
      addToast({
        type: 'success',
        message: 'Achievement added successfully!'
      });
    }

    resetForm();
  };

  const editAchievement = (achievement: Achievement) => {
    setCurrentAchievement(achievement);
    setIsEditing(true);
  };

  const deleteAchievement = (id: string) => {
    setAchievements(prev => prev.filter(a => a.id !== id));
    addToast({
      type: 'success',
      message: 'Achievement removed'
    });
  };

  const resetForm = () => {
    setCurrentAchievement({
      id: '',
      title: '',
      description: '',
      date: '',
      organization: '',
      category: 'professional',
      impact: '',
      recognition: ''
    });
    setIsEditing(false);
  };



  const handleSave = () => {
    updateAchievements(achievements);
    completeStep(8);
    addToast({
      type: 'success',
      message: 'Achievements saved successfully!'
    });
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };



  const getCategoryInfo = (category: string) => {
    return achievementCategories.find(cat => cat.value === category) || achievementCategories[0];
  };

  const groupedByCategory = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {} as Record<string, Achievement[]>);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Compact Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Achievements</h1>
            <p className="text-sm text-gray-600">Showcase your accomplishments</p>
          </div>
        </div>
      </div>
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Achievement Form */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isEditing ? 'Edit Achievement' : 'Add Achievement'}
                </h2>
                <p className="text-gray-600">Document your significant accomplishments and their impact.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Achievement Title"
                    type="text"
                    value={currentAchievement.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Employee of the Month Award"
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    }
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={currentAchievement.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      {achievementCategories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.icon} {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Organization/Institution"
                    type="text"
                    value={currentAchievement.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="Company Name / University"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                  />

                  <Input
                    label="Date Achieved"
                    type="month"
                    value={currentAchievement.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>

                <Textarea
                  label="Description"
                  value={currentAchievement.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe what you accomplished and the context of this achievement..."
                  rows={3}
                  required
                />

                <Textarea
                  label="Impact & Results"
                  value={currentAchievement.impact}
                  onChange={(e) => handleInputChange('impact', e.target.value)}
                  placeholder="Quantify the impact: increased efficiency by 25%, led team of 10 people, saved $5000..."
                  rows={3}
                />

                <Textarea
                  label="Recognition Details"
                  value={currentAchievement.recognition}
                  onChange={(e) => handleInputChange('recognition', e.target.value)}
                  placeholder="Any awards, certificates, or formal recognition received for this achievement..."
                  rows={2}
                />

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={saveAchievement}
                    className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {isEditing ? 'Update Achievement' : 'Add Achievement'}
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

            {/* Achievements List */}
            {achievements.length > 0 && (
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Achievements</h2>
                  <p className="text-gray-600">Review and manage your accomplishments organized by category.</p>
                </div>

                <div className="space-y-8">
                  {Object.entries(groupedByCategory).map(([category, categoryAchievements]) => {
                    const categoryInfo = getCategoryInfo(category);
                    return (
                      <div key={category}>
                        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
                          <span className="text-2xl">{categoryInfo.icon}</span>
                          <h3 className="text-xl font-bold text-gray-900">{categoryInfo.label}</h3>
                          <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                            {categoryAchievements.length}
                          </span>
                        </div>

                        <div className="space-y-4">
                          {categoryAchievements.map((achievement) => (
                            <div key={achievement.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                              <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                  <h4 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h4>
                                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                    {achievement.organization && (
                                      <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        {achievement.organization}
                                      </span>
                                    )}
                                    {achievement.date && (
                                      <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {new Date(achievement.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-gray-700 mb-3">{achievement.description}</p>
                                  
                                  {achievement.impact && (
                                    <div className="mb-3">
                                      <h5 className="font-medium text-gray-700 mb-1">Impact & Results:</h5>
                                      <p className="text-gray-700 bg-green-50 border border-green-200 rounded-lg p-3">
                                        {achievement.impact}
                                      </p>
                                    </div>
                                  )}

                                  {achievement.recognition && (
                                    <div className="mb-3">
                                      <h5 className="font-medium text-gray-700 mb-1">Recognition:</h5>
                                      <p className="text-gray-700 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                        {achievement.recognition}
                                      </p>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => editAchievement(achievement)}
                                    className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={() => deleteAchievement(achievement.id)}
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
                    );
                  })}
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

export default AchievementsForm;