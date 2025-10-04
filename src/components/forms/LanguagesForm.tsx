import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Language } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';


const LanguagesForm: React.FC = () => {
  const { resumeData, updateLanguages, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [languages, setLanguages] = useState<Language[]>(resumeData.languages || []);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    id: '',
    name: '',
    proficiency: 'intermediate',
    certification: '',
    yearsOfExperience: 0
  });
  const [isEditing, setIsEditing] = useState(false);

  const popularLanguages = [
    { name: 'English', flag: '🇺🇸', category: 'Global' },
    { name: 'Spanish', flag: '🇪🇸', category: 'European' },
    { name: 'French', flag: '🇫🇷', category: 'European' },
    { name: 'German', flag: '🇩🇪', category: 'European' },
    { name: 'Italian', flag: '🇮🇹', category: 'European' },
    { name: 'Portuguese', flag: '🇵🇹', category: 'European' },
    { name: 'Chinese (Mandarin)', flag: '🇨🇳', category: 'Asian' },
    { name: 'Japanese', flag: '🇯🇵', category: 'Asian' },
    { name: 'Korean', flag: '🇰🇷', category: 'Asian' },
    { name: 'Hindi', flag: '🇮🇳', category: 'Asian' },
    { name: 'Arabic', flag: '🇸🇦', category: 'Middle Eastern' },
    { name: 'Russian', flag: '🇷🇺', category: 'European' },
    { name: 'Dutch', flag: '🇳🇱', category: 'European' },
    { name: 'Swedish', flag: '🇸🇪', category: 'European' },
    { name: 'Norwegian', flag: '🇳🇴', category: 'European' },
    { name: 'Danish', flag: '🇩🇰', category: 'European' }
  ];

  const proficiencyLevels = [
    { 
      value: 'native', 
      label: 'Native', 
      description: 'Your mother tongue or equivalent',
      color: 'bg-green-500'
    },
    { 
      value: 'fluent', 
      label: 'Fluent', 
      description: 'Can communicate naturally and effortlessly',
      color: 'bg-blue-500'
    },
    { 
      value: 'proficient', 
      label: 'Proficient', 
      description: 'Strong working knowledge',
      color: 'bg-purple-500'
    },
    { 
      value: 'intermediate', 
      label: 'Intermediate', 
      description: 'Good conversational ability',
      color: 'bg-yellow-500'
    },
    { 
      value: 'basic', 
      label: 'Basic', 
      description: 'Elementary proficiency',
      color: 'bg-orange-500'
    },
    { 
      value: 'beginner', 
      label: 'Beginner', 
      description: 'Just starting to learn',
      color: 'bg-red-500'
    }
  ];

  const commonCertifications = [
    'IELTS', 'TOEFL', 'TOEIC', 'Cambridge English',
    'DELE', 'DELF/DALF', 'Goethe Certificate', 'TestDaF',
    'JLPT', 'HSK', 'TOPIK', 'CILS', 'CELPE-Bras'
  ];

  const handleInputChange = (field: keyof Language, value: any) => {
    setCurrentLanguage(prev => ({ ...prev, [field]: value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addLanguageFromList = (languageName: string) => {
    if (languages.some(lang => lang.name.toLowerCase() === languageName.toLowerCase())) {
      addToast({
        type: 'error',
        message: 'Language already added'
      });
      return;
    }

    setCurrentLanguage(prev => ({
      ...prev,
      name: languageName
    }));
  };

  const saveLanguage = () => {
    if (!currentLanguage.name.trim()) {
      addToast({
        type: 'error',
        message: 'Please enter a language name'
      });
      return;
    }

    if (!isEditing && languages.some(lang => lang.name.toLowerCase() === currentLanguage.name.toLowerCase())) {
      addToast({
        type: 'error',
        message: 'Language already exists'
      });
      return;
    }

    if (isEditing) {
      setLanguages(prev => prev.map(l => l.id === currentLanguage.id ? currentLanguage : l));
      addToast({
        type: 'success',
        message: 'Language updated successfully!'
      });
    } else {
      const newLanguage = { ...currentLanguage, id: uuidv4() };
      setLanguages(prev => [...prev, newLanguage]);
      addToast({
        type: 'success',
        message: 'Language added successfully!'
      });
    }

    resetForm();
  };

  const editLanguage = (language: Language) => {
    setCurrentLanguage(language);
    setIsEditing(true);
  };

  const deleteLanguage = (id: string) => {
    setLanguages(prev => prev.filter(l => l.id !== id));
    addToast({
      type: 'success',
      message: 'Language removed'
    });
  };

  const resetForm = () => {
    setCurrentLanguage({
      id: '',
      name: '',
      proficiency: 'intermediate',
      certification: '',
      yearsOfExperience: 0
    });
    setIsEditing(false);
  };

  const handleSave = () => {
    updateLanguages(languages);
    completeStep(9);
    addToast({
      type: 'success',
      message: 'Languages saved successfully!'
    });
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const getProficiencyInfo = (proficiency: string) => {
    return proficiencyLevels.find(level => level.value === proficiency) || proficiencyLevels[3];
  };

  const getProficiencyPercentage = (proficiency: string) => {
    const levels = { native: 100, fluent: 90, proficient: 75, intermediate: 60, basic: 40, beginner: 20 };
    return levels[proficiency as keyof typeof levels] || 60;
  };



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const groupedLanguages = popularLanguages.reduce((acc, language) => {
    if (!acc[language.category]) {
      acc[language.category] = [];
    }
    acc[language.category].push(language);
    return acc;
  }, {} as Record<string, typeof popularLanguages>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-highlight-500 rounded-2xl mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-highlight-500 bg-clip-text text-transparent mb-4">
            Languages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcase your multilingual abilities and global communication skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Language Form */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isEditing ? 'Edit Language' : 'Add Language'}
                </h2>
                <p className="text-gray-600">Add your language skills and proficiency levels.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Language Name"
                    type="text"
                    value={currentLanguage.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="English, Spanish, French..."
                    required
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    }
                  />

                  <Input
                    label="Years of Experience"
                    type="number"
                    min="0"
                    max="50"
                    value={((currentLanguage.yearsOfExperience ?? 0).toString())}
                    onChange={(e) => handleInputChange('yearsOfExperience', parseInt(e.target.value) || 0)}
                    placeholder="5"
                    leftIcon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                </div>

                {/* Proficiency Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Proficiency Level</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {proficiencyLevels.map((level) => (
                      <div
                        key={level.value}
                        className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          currentLanguage.proficiency === level.value
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleInputChange('proficiency', level.value)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{level.label}</h4>
                          <div className={`w-4 h-4 rounded-full ${level.color}`}></div>
                        </div>
                        <p className="text-sm text-gray-600">{level.description}</p>
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${level.color}`}
                              style={{ width: `${getProficiencyPercentage(level.value)}%` }}
                            ></div>
                          </div>
                        </div>
                        {currentLanguage.proficiency === level.value && (
                          <div className="absolute top-2 right-2">
                            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certification (Optional)</label>
                  <div className="flex gap-2 mb-3">
                    <Input
                      type="text"
                      value={currentLanguage.certification}
                      onChange={(e) => handleInputChange('certification', e.target.value)}
                      placeholder="IELTS 7.5, DELE B2, JLPT N2..."
                      className="flex-1"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {commonCertifications.map((cert, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleInputChange('certification', cert)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                      >
                        {cert}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={saveLanguage}
                    className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {isEditing ? 'Update Language' : 'Add Language'}
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

            {/* Languages List */}
            {languages.length > 0 && (
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Languages</h2>
                  <p className="text-gray-600">Review and manage your language skills.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {languages.map((language) => {
                    const proficiencyInfo = getProficiencyInfo(language.proficiency);
                    const percentage = getProficiencyPercentage(language.proficiency);
                    
                    return (
                      <div key={language.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{language.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${proficiencyInfo.color}`}>
                                {proficiencyInfo.label}
                              </span>
                              {((language.yearsOfExperience ?? 0) > 0) && (
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                  {language.yearsOfExperience} years
                                </span>
                              )}
                            </div>
                            
                            {/* Proficiency Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                              <div 
                                className={`h-3 rounded-full ${proficiencyInfo.color} transition-all duration-300`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2">{proficiencyInfo.description}</p>
                            
                            {language.certification && (
                              <div className="flex items-center gap-2 mt-3">
                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">{language.certification}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => editLanguage(language)}
                              className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => deleteLanguage(language.id)}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
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

          {/* AI Assistance Panel */}

        </div>
      </div>
    </div>
  );
};

export default LanguagesForm;