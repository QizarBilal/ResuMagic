import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Language } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import { v4 as uuidv4 } from 'uuid';

const LanguagesForm: React.FC = () => {
  const { resumeData, updateLanguages } = useResume();
  const [languages, setLanguages] = useState<Language[]>(resumeData.languages || []);
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    id: '',
    name: '',
    proficiency: 'intermediate',
    certification: '',
    yearsOfExperience: 0
  });

  const handleSave = () => {
    if (currentLanguage.name && currentLanguage.proficiency) {
      if (isEditing) {
        const updatedLanguages = languages.map(language =>
          language.id === isEditing ? currentLanguage : language
        );
        setLanguages(updatedLanguages);
        updateLanguages(updatedLanguages);
      } else {
        const newLanguage = { ...currentLanguage, id: uuidv4() };
        const updatedLanguages = [...languages, newLanguage];
        setLanguages(updatedLanguages);
        updateLanguages(updatedLanguages);
      }
      resetForm();
    }
  };

  const handleEdit = (language: Language) => {
    setCurrentLanguage(language);
    setIsEditing(language.id);
  };

  const handleDelete = (id: string) => {
    const updatedLanguages = languages.filter(language => language.id !== id);
    setLanguages(updatedLanguages);
    updateLanguages(updatedLanguages);
  };

  const resetForm = () => {
    setCurrentLanguage({
      id: '',
      name: '',
      proficiency: 'intermediate',
      certification: '',
      yearsOfExperience: 0
    });
    setIsEditing(null);
  };

  const proficiencyLevels = [
    { value: 'native', label: 'Native', description: 'Your mother tongue or equivalent fluency' },
    { value: 'fluent', label: 'Fluent', description: 'Near-native proficiency in all contexts' },
    { value: 'advanced', label: 'Advanced', description: 'Comfortable in professional and academic settings' },
    { value: 'intermediate', label: 'Intermediate', description: 'Conversational level with some limitations' },
    { value: 'beginner', label: 'Beginner', description: 'Basic understanding and simple communication' }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'native': return 'bg-green-500';
      case 'fluent': return 'bg-blue-500';
      case 'advanced': return 'bg-purple-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'beginner': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'native': return 'w-full';
      case 'fluent': return 'w-5/6';
      case 'advanced': return 'w-4/6';
      case 'intermediate': return 'w-3/6';
      case 'beginner': return 'w-2/6';
      default: return 'w-2/6';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Languages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Showcase your language skills to demonstrate your communication abilities and cultural versatility.
        </p>
      </div>

      {/* Language Form */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {isEditing ? 'Edit Language' : 'Add New Language'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language *
            </label>
            <Input
              value={currentLanguage.name}
              onChange={(e) => setCurrentLanguage({...currentLanguage, name: e.target.value})}
              placeholder="e.g., English, Spanish, Mandarin"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proficiency Level *
            </label>
            <select
              value={currentLanguage.proficiency}
              onChange={(e) => setCurrentLanguage({...currentLanguage, proficiency: e.target.value as Language['proficiency']})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {proficiencyLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              {proficiencyLevels.find(level => level.value === currentLanguage.proficiency)?.description}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certification (Optional)
            </label>
            <Input
              value={currentLanguage.certification}
              onChange={(e) => setCurrentLanguage({...currentLanguage, certification: e.target.value})}
              placeholder="e.g., TOEFL 110, DELF B2, HSK Level 5"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience
            </label>
            <Input
              type="number"
              value={currentLanguage.yearsOfExperience}
              onChange={(e) => setCurrentLanguage({...currentLanguage, yearsOfExperience: parseInt(e.target.value) || 0})}
              placeholder="0"
              min="0"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={handleSave} className="px-6">
            {isEditing ? 'Update Language' : 'Add Language'}
          </Button>
          {isEditing && (
            <Button variant="outline" onClick={resetForm} className="px-6">
              Cancel
            </Button>
          )}
        </div>
      </Card>

      {/* Languages List */}
      {languages.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Your Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((language) => (
              <Card key={language.id} className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{language.name}</h4>
                    <p className="text-sm text-gray-600 capitalize">{language.proficiency}</p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(language)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(language.id)}
                      className="text-red-600 hover:text-red-800 p-1"
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProficiencyColor(language.proficiency)} ${getProficiencyWidth(language.proficiency)}`}
                    ></div>
                  </div>
                </div>

                <div className="space-y-1 text-sm text-gray-600">
                  {language.certification && (
                    <div className="flex items-center gap-2">
                      <span>🏆</span>
                      <span>{language.certification}</span>
                    </div>
                  )}
                  {language.yearsOfExperience && language.yearsOfExperience > 0 && (
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{language.yearsOfExperience} year{language.yearsOfExperience !== 1 ? 's' : ''} experience</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {languages.length === 0 && (
        <Card className="p-8 text-center">
          <div className="text-gray-400 mb-4">
            <div className="text-4xl mb-2">🌍</div>
            <p>No languages added yet</p>
          </div>
          <p className="text-sm text-gray-600">
            Add your language skills to showcase your communication abilities and global perspective.
          </p>
        </Card>
      )}

      {/* Proficiency Guide */}
      <Card className="p-6 bg-blue-50">
        <h4 className="font-semibold text-gray-900 mb-3">📚 Proficiency Level Guide</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {proficiencyLevels.map(level => (
            <div key={level.value} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getProficiencyColor(level.value)}`}></div>
              <div>
                <span className="font-medium">{level.label}:</span>
                <p className="text-gray-600 text-xs">{level.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LanguagesForm;