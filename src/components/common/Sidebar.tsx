import React from 'react';

interface FormStep {
  id: number;
  title: string;
  component: string;
  isCompleted: boolean;
  isOptional: boolean;
}

interface SidebarProps {
  currentStep: number;
  steps: FormStep[];
  onStepClick: (stepId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep, steps, onStepClick }) => {
  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Resume Builder</h2>
        <nav className="space-y-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => onStepClick(step.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentStep === step.id
                  ? 'bg-primary-50 text-primary-700 border border-primary-200'
                  : step.isCompleted
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'text-gray-600 hover:bg-gray-50 border border-transparent'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mr-3 ${
                    currentStep === step.id
                      ? 'bg-primary-600 text-white'
                      : step.isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step.isCompleted ? '✓' : step.id}
                </div>
                <div>
                  <div className="font-medium">{step.title}</div>
                  <div className="text-xs text-gray-500">
                    {step.isOptional ? 'Optional' : 'Required'}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;