import React, { useState, useEffect } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Skill } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import Input from '../ui/Input';


const EducationForm: React.FC = () => {
  const { resumeData, updateSkills, addToast, completeStep, setCurrentStep, currentStep } = useResume();
  const [skillsList, setSkillsList] = useState<Skill[]>(resumeData.skills);
  const [newSkill, setNewSkill] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('Intermediate');
  const [selectedCategory, setSelectedCategory] = useState('Technical');

  useEffect(() => {
    setSkillsList(resumeData.skills);
  }, [resumeData.skills]);

  const skillCategories = [
    'Technical', 'Programming Languages', 'Frameworks & Libraries', 'Tools & Software',
    'Languages', 'Soft Skills', 'Industry Knowledge', 'Certifications'
  ];

  const skillSuggestions: Record<string, string[]> = {
    'Technical': ['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'Git', 'AWS', 'Docker', 'Kubernetes'],
    'Programming Languages': ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'Go', 'Rust', 'PHP', 'Swift', 'Kotlin'],
    'Frameworks & Libraries': ['React', 'Angular', 'Vue.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'Laravel', 'Rails'],
    'Tools & Software': ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'JIRA', 'Figma', 'Adobe Creative Suite', 'Slack', 'Trello'],
    'Languages': ['English', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese', 'Korean', 'Portuguese', 'Italian'],
    'Soft Skills': ['Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Critical Thinking'],
    'Industry Knowledge': ['Digital Marketing', 'Data Analysis', 'Project Management', 'Agile/Scrum', 'UX/UI Design'],
    'Certifications': ['AWS Certified', 'Google Analytics', 'PMP', 'Scrum Master', 'Microsoft Certified', 'Salesforce']
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const newSkillObj: Skill = {
        id: uuidv4(),
        name: newSkill.trim(),
        level: newSkillLevel,
        category: selectedCategory
      };

      setSkillsList(prev => [...prev, newSkillObj]);
      setNewSkill('');
      addToast({
        type: 'success',
        message: 'Skill added successfully!',
      });
    }
  };

  const handleRemoveSkill = (id: string) => {
    setSkillsList(prev => prev.filter(skill => skill.id !== id));
    addToast({
      type: 'success',
      message: 'Skill removed successfully!',
    });
  };

  const handleUpdateSkillLevel = (id: string, level: string) => {
    setSkillsList(prev => prev.map(skill => 
      skill.id === id ? { ...skill, level: level as any } : skill
    ));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setNewSkill(suggestion);
  };

  const handleSave = () => {
    updateSkills(skillsList);
    completeStep(3);
    addToast({
      type: 'success',
      message: 'Skills saved successfully!',
    });
    
    // Navigate to next step and scroll to top
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };



  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Advanced': return 'bg-green-100 text-green-800 border-green-200';
      case 'Expert': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const groupedSkills = skillsList.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Compact Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-highlight-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Skills & Expertise</h1>
            <p className="text-sm text-gray-600">Technical abilities and professional competencies</p>
          </div>
        </div>
      </div>
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Add Skills Card */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Skills</h2>
                <p className="text-gray-600">Build your skills profile with relevant technical and soft skills.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      {skillCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <Input
                    label="Skill Name"
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="JavaScript"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Proficiency Level</label>
                    <select
                      value={newSkillLevel}
                      onChange={(e) => setNewSkillLevel(e.target.value as any)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Add Skill
                  </button>
                </div>

                {/* Skill Suggestions */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Suggested Skills for {selectedCategory}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillSuggestions[selectedCategory]?.slice(0, 8).map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 text-sm bg-primary-50 text-primary-700 border border-primary-200 rounded-full hover:bg-primary-100 transition-colors"
                      >
                        + {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Display */}
            {Object.keys(groupedSkills).length > 0 && (
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Skills</h2>
                  <p className="text-gray-600">Review and manage your skill set.</p>
                </div>

                <div className="space-y-8">
                  {Object.entries(groupedSkills).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                        {category} ({skills.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                          <div
                            key={skill.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors group"
                          >
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{skill.name}</h4>
                              <select
                                value={skill.level}
                                onChange={(e) => handleUpdateSkillLevel(skill.id, e.target.value)}
                                className={`mt-1 text-xs px-2 py-1 rounded-full border font-medium ${getLevelColor(skill.level)}`}
                              >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Expert">Expert</option>
                              </select>
                            </div>
                            <button
                              onClick={() => handleRemoveSkill(skill.id)}
                              className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:text-red-700 transition-all duration-200"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        ))}
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

export default EducationForm;