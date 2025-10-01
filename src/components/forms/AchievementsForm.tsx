import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Achievement } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import { v4 as uuidv4 } from 'uuid';

const AchievementsForm: React.FC = () => {
  const { resumeData, updateAchievements } = useResume();
  const [achievements, setAchievements] = useState<Achievement[]>(resumeData.achievements || []);
  const [isEditing, setIsEditing] = useState<string | null>(null);

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

  const handleSave = () => {
    if (currentAchievement.title && currentAchievement.description) {
      if (isEditing) {
        const updatedAchievements = achievements.map(achievement =>
          achievement.id === isEditing ? currentAchievement : achievement
        );
        setAchievements(updatedAchievements);
        updateAchievements(updatedAchievements);
      } else {
        const newAchievement = { ...currentAchievement, id: uuidv4() };
        const updatedAchievements = [...achievements, newAchievement];
        setAchievements(updatedAchievements);
        updateAchievements(updatedAchievements);
      }
      resetForm();
    }
  };

  const handleEdit = (achievement: Achievement) => {
    setCurrentAchievement(achievement);
    setIsEditing(achievement.id);
  };

  const handleDelete = (id: string) => {
    const updatedAchievements = achievements.filter(achievement => achievement.id !== id);
    setAchievements(updatedAchievements);
    updateAchievements(updatedAchievements);
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
    setIsEditing(null);
  };

  const categories = [
    { value: 'academic', label: 'Academic' },
    { value: 'professional', label: 'Professional' },
    { value: 'personal', label: 'Personal' },
    { value: 'competition', label: 'Competition' },
    { value: 'volunteer', label: 'Volunteer' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements & Awards</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Highlight your notable achievements, awards, and recognitions that demonstrate your excellence and impact.
        </p>
      </div>

      {/* Achievement Form */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {isEditing ? 'Edit Achievement' : 'Add New Achievement'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Achievement Title *
            </label>
            <Input
              value={currentAchievement.title}
              onChange={(e) => setCurrentAchievement({...currentAchievement, title: e.target.value})}
              placeholder="e.g., Dean's List, Employee of the Year"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <Input
              type="month"
              value={currentAchievement.date}
              onChange={(e) => setCurrentAchievement({...currentAchievement, date: e.target.value})}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization
            </label>
            <Input
              value={currentAchievement.organization}
              onChange={(e) => setCurrentAchievement({...currentAchievement, organization: e.target.value})}
              placeholder="e.g., University, Company, Organization"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={currentAchievement.category}
              onChange={(e) => setCurrentAchievement({...currentAchievement, category: e.target.value as Achievement['category']})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <Textarea
            value={currentAchievement.description}
            onChange={(e) => setCurrentAchievement({...currentAchievement, description: e.target.value})}
            placeholder="Describe your achievement and its significance..."
            rows={3}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Impact/Results
            </label>
            <Textarea
              value={currentAchievement.impact}
              onChange={(e) => setCurrentAchievement({...currentAchievement, impact: e.target.value})}
              placeholder="Quantify the impact or results of this achievement..."
              rows={2}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recognition Details
            </label>
            <Textarea
              value={currentAchievement.recognition}
              onChange={(e) => setCurrentAchievement({...currentAchievement, recognition: e.target.value})}
              placeholder="Additional recognition or context..."
              rows={2}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={handleSave} className="px-6">
            {isEditing ? 'Update Achievement' : 'Add Achievement'}
          </Button>
          {isEditing && (
            <Button variant="outline" onClick={resetForm} className="px-6">
              Cancel
            </Button>
          )}
        </div>
      </Card>

      {/* Achievements List */}
      {achievements.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Your Achievements</h3>
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      achievement.category === 'academic' ? 'bg-blue-100 text-blue-800' :
                      achievement.category === 'professional' ? 'bg-green-100 text-green-800' :
                      achievement.category === 'competition' ? 'bg-yellow-100 text-yellow-800' :
                      achievement.category === 'volunteer' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {achievement.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{achievement.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {achievement.date && <span>📅 {achievement.date}</span>}
                    {achievement.organization && <span>🏢 {achievement.organization}</span>}
                  </div>
                  
                  {achievement.impact && (
                    <div className="mt-2 p-2 bg-green-50 rounded">
                      <span className="text-sm font-medium text-green-800">Impact: </span>
                      <span className="text-sm text-green-700">{achievement.impact}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(achievement)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(achievement.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {achievements.length === 0 && (
        <Card className="p-8 text-center">
          <div className="text-gray-400 mb-4">
            <div className="text-4xl mb-2">🏆</div>
            <p>No achievements added yet</p>
          </div>
          <p className="text-sm text-gray-600">
            Add your achievements, awards, and recognitions to showcase your accomplishments.
          </p>
        </Card>
      )}
    </div>
  );
};

export default AchievementsForm;