import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ResumeData, FormStep, Toast, RoadmapData } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface ResumeContextType {
  resumeData: ResumeData;
  currentStep: number;
  steps: FormStep[];
  toasts: Toast[];
  isLoading: boolean;
  premium: boolean;
  updatePersonalInfo: (data: Partial<ResumeData['personalInfo']>) => void;
  updateEducation: (education: ResumeData['education']) => void;
  updateSkills: (skills: ResumeData['skills']) => void;
  updateProjects: (projects: ResumeData['projects']) => void;
  updateCertifications: (certifications: ResumeData['certifications']) => void;
  updateHackathons: (hackathons: ResumeData['hackathons']) => void;
  updateInternships: (internships: ResumeData['internships']) => void;
  updateAchievements: (achievements: ResumeData['achievements']) => void;
  updateLanguages: (languages: ResumeData['languages']) => void;
  updateRoadmap: (roadmap: RoadmapData) => void;
  setJobRole: (role: string) => void;
  setPremium: (isPremium: boolean) => void;
  setCurrentStep: (step: number) => void;
  completeStep: (stepId: number) => void;
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  setLoading: (loading: boolean) => void;
}

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
    summary: '',
  },
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  hackathons: [],
  internships: [],
  achievements: [],
  languages: [],
  selectedJobRole: '',
  isPremium: false,
};

const initialSteps: FormStep[] = [
  { id: 1, title: 'Choose Template', component: 'TemplateSelector', isCompleted: false, isOptional: false },
  { id: 2, title: 'Personal Info', component: 'PersonalInfoForm', isCompleted: false, isOptional: false },
  { id: 3, title: 'Education', component: 'EducationForm', isCompleted: false, isOptional: false },
  { id: 4, title: 'Skills', component: 'SkillsForm', isCompleted: false, isOptional: false },
  { id: 5, title: 'Projects', component: 'ProjectsForm', isCompleted: false, isOptional: true },
  { id: 6, title: 'Certifications', component: 'CertificationsForm', isCompleted: false, isOptional: true },
  { id: 7, title: 'Hackathons', component: 'HackathonsForm', isCompleted: false, isOptional: true },
  { id: 8, title: 'Internships', component: 'InternshipsForm', isCompleted: false, isOptional: true },
  { id: 9, title: 'Achievements', component: 'AchievementsForm', isCompleted: false, isOptional: true },
  { id: 10, title: 'Languages', component: 'LanguagesForm', isCompleted: false, isOptional: true },
  { id: 11, title: 'Review & Preview', component: 'PreviewForm', isCompleted: false, isOptional: false },
  { id: 12, title: 'Final Preview', component: 'FinalPreview', isCompleted: false, isOptional: false },
];

type Action =
  | { type: 'UPDATE_PERSONAL_INFO'; payload: Partial<ResumeData['personalInfo']> }
  | { type: 'UPDATE_EDUCATION'; payload: ResumeData['education'] }
  | { type: 'UPDATE_SKILLS'; payload: ResumeData['skills'] }
  | { type: 'UPDATE_PROJECTS'; payload: ResumeData['projects'] }
  | { type: 'UPDATE_CERTIFICATIONS'; payload: ResumeData['certifications'] }
  | { type: 'UPDATE_HACKATHONS'; payload: ResumeData['hackathons'] }
  | { type: 'UPDATE_INTERNSHIPS'; payload: ResumeData['internships'] }
  | { type: 'UPDATE_ACHIEVEMENTS'; payload: ResumeData['achievements'] }
  | { type: 'UPDATE_LANGUAGES'; payload: ResumeData['languages'] }
  | { type: 'UPDATE_ROADMAP'; payload: RoadmapData }
  | { type: 'SET_JOB_ROLE'; payload: string }
  | { type: 'SET_PREMIUM'; payload: boolean }
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'COMPLETE_STEP'; payload: number }
  | { type: 'ADD_TOAST'; payload: Toast }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

interface State {
  resumeData: ResumeData;
  currentStep: number;
  steps: FormStep[];
  toasts: Toast[];
  isLoading: boolean;
}

const initialState: State = {
  resumeData: initialResumeData,
  currentStep: 1,
  steps: initialSteps,
  toasts: [],
  isLoading: false,
};

const resumeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          personalInfo: { ...state.resumeData.personalInfo, ...action.payload },
        },
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        resumeData: { ...state.resumeData, education: action.payload },
      };
    case 'UPDATE_SKILLS':
      return {
        ...state,
        resumeData: { ...state.resumeData, skills: action.payload },
      };
    case 'UPDATE_PROJECTS':
      return {
        ...state,
        resumeData: { ...state.resumeData, projects: action.payload },
      };
    case 'UPDATE_CERTIFICATIONS':
      return {
        ...state,
        resumeData: { ...state.resumeData, certifications: action.payload },
      };
    case 'UPDATE_HACKATHONS':
      return {
        ...state,
        resumeData: { ...state.resumeData, hackathons: action.payload },
      };
    case 'UPDATE_INTERNSHIPS':
      return {
        ...state,
        resumeData: { ...state.resumeData, internships: action.payload },
      };
    case 'UPDATE_ACHIEVEMENTS':
      return {
        ...state,
        resumeData: { ...state.resumeData, achievements: action.payload },
      };
    case 'UPDATE_LANGUAGES':
      return {
        ...state,
        resumeData: { ...state.resumeData, languages: action.payload },
      };
    case 'UPDATE_ROADMAP':
      return {
        ...state,
        resumeData: { ...state.resumeData, roadmap: action.payload },
      };
    case 'SET_JOB_ROLE':
      return {
        ...state,
        resumeData: { ...state.resumeData, selectedJobRole: action.payload },
      };
    case 'SET_PREMIUM':
      return {
        ...state,
        resumeData: { ...state.resumeData, isPremium: action.payload },
      };
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    case 'COMPLETE_STEP':
      return {
        ...state,
        steps: state.steps.map(step =>
          step.id === action.payload ? { ...step, isCompleted: true } : step
        ),
      };
    case 'ADD_TOAST':
      return { ...state, toasts: [...state.toasts, action.payload] };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload),
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  const updatePersonalInfo = (data: Partial<ResumeData['personalInfo']>) => {
    dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: data });
  };

  const updateEducation = (education: ResumeData['education']) => {
    dispatch({ type: 'UPDATE_EDUCATION', payload: education });
  };

  const updateSkills = (skills: ResumeData['skills']) => {
    dispatch({ type: 'UPDATE_SKILLS', payload: skills });
  };

  const updateProjects = (projects: ResumeData['projects']) => {
    dispatch({ type: 'UPDATE_PROJECTS', payload: projects });
  };

  const updateCertifications = (certifications: ResumeData['certifications']) => {
    dispatch({ type: 'UPDATE_CERTIFICATIONS', payload: certifications });
  };

  const updateHackathons = (hackathons: ResumeData['hackathons']) => {
    dispatch({ type: 'UPDATE_HACKATHONS', payload: hackathons });
  };

  const updateInternships = (internships: ResumeData['internships']) => {
    dispatch({ type: 'UPDATE_INTERNSHIPS', payload: internships });
  };

  const updateAchievements = (achievements: ResumeData['achievements']) => {
    dispatch({ type: 'UPDATE_ACHIEVEMENTS', payload: achievements });
  };

  const updateLanguages = (languages: ResumeData['languages']) => {
    dispatch({ type: 'UPDATE_LANGUAGES', payload: languages });
  };

  const updateRoadmap = (roadmap: RoadmapData) => {
    dispatch({ type: 'UPDATE_ROADMAP', payload: roadmap });
  };

  const setJobRole = (role: string) => {
    dispatch({ type: 'SET_JOB_ROLE', payload: role });
  };

  const setPremium = (isPremium: boolean) => {
    dispatch({ type: 'SET_PREMIUM', payload: isPremium });
  };

  const setCurrentStep = (step: number) => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: step });
  };

  const completeStep = (stepId: number) => {
    dispatch({ type: 'COMPLETE_STEP', payload: stepId });
  };

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const toastWithId = { ...toast, id: uuidv4() };
    dispatch({ type: 'ADD_TOAST', payload: toastWithId });
  };

  const removeToast = (id: string) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData: state.resumeData,
        currentStep: state.currentStep,
        steps: state.steps,
        toasts: state.toasts,
        isLoading: state.isLoading,
        premium: state.resumeData.isPremium,
        updatePersonalInfo,
        updateEducation,
        updateSkills,
        updateProjects,
        updateCertifications,
        updateHackathons,
        updateInternships,
        updateAchievements,
        updateLanguages,
        updateRoadmap,
        setJobRole,
        setPremium,
        setCurrentStep,
        completeStep,
        addToast,
        removeToast,
        setLoading,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export default ResumeContext;