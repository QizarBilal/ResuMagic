import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  resources: string[];
  isCompleted?: boolean;
  isActive?: boolean;
}

interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  averageSalary: string;
  growthRate: string;
  roadmap: RoadmapStep[];
}

const Roadmap: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string>('frontend');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const careerPaths: CareerPath[] = [
    {
      id: 'frontend',
      title: 'Frontend Developer',
      description: 'Build user interfaces and web experiences',
      icon: '🎨',
      averageSalary: '$75,000 - $120,000',
      growthRate: '13% (Faster than average)',
      roadmap: [
        {
          id: 1,
          title: 'HTML & CSS Fundamentals',
          description: 'Master the building blocks of web development',
          duration: '2-4 weeks',
          skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
          resources: ['MDN Web Docs', 'FreeCodeCamp', 'CSS Tricks']
        },
        {
          id: 2,
          title: 'JavaScript Essentials',
          description: 'Learn programming fundamentals and DOM manipulation',
          duration: '6-8 weeks',
          skills: ['JavaScript ES6+', 'DOM Manipulation', 'Event Handling', 'Async Programming'],
          resources: ['JavaScript.info', 'Eloquent JavaScript', 'You Don\'t Know JS']
        },
        {
          id: 3,
          title: 'Frontend Framework',
          description: 'Master a modern frontend framework',
          duration: '8-12 weeks',
          skills: ['React/Vue/Angular', 'Component Architecture', 'State Management', 'Routing'],
          resources: ['Official Documentation', 'React/Vue/Angular Tutorials', 'Scrimba']
        },
        {
          id: 4,
          title: 'Development Tools',
          description: 'Learn essential development and deployment tools',
          duration: '4-6 weeks',
          skills: ['Git/GitHub', 'Webpack/Vite', 'Package Managers', 'Browser DevTools'],
          resources: ['Git Handbook', 'Webpack Documentation', 'Chrome DevTools']
        },
        {
          id: 5,
          title: 'Advanced Concepts',
          description: 'Dive into advanced frontend development concepts',
          duration: '8-10 weeks',
          skills: ['Testing (Jest, Cypress)', 'Performance Optimization', 'Accessibility', 'PWAs'],
          resources: ['Testing Library', 'Lighthouse', 'Web.dev', 'A11y Project']
        },
        {
          id: 6,
          title: 'Build Portfolio Projects',
          description: 'Create impressive projects to showcase your skills',
          duration: '6-8 weeks',
          skills: ['Project Planning', 'UI/UX Design', 'API Integration', 'Deployment'],
          resources: ['Figma', 'Netlify', 'Vercel', 'GitHub Pages']
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      description: 'Build server-side applications and APIs',
      icon: '⚙️',
      averageSalary: '$80,000 - $130,000',
      growthRate: '22% (Much faster than average)',
      roadmap: [
        {
          id: 1,
          title: 'Programming Language',
          description: 'Master a backend programming language',
          duration: '6-8 weeks',
          skills: ['Python/Node.js/Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
          resources: ['Python.org', 'Node.js Docs', 'Oracle Java Tutorials']
        },
        {
          id: 2,
          title: 'Database Management',
          description: 'Learn database design and management',
          duration: '4-6 weeks',
          skills: ['SQL', 'PostgreSQL/MySQL', 'Database Design', 'CRUD Operations'],
          resources: ['SQLBolt', 'PostgreSQL Tutorial', 'MongoDB University']
        },
        {
          id: 3,
          title: 'Web Frameworks',
          description: 'Build web applications with frameworks',
          duration: '6-8 weeks',
          skills: ['Express.js/Django/Spring', 'RESTful APIs', 'Authentication', 'Middleware'],
          resources: ['Express.js Guide', 'Django Documentation', 'Spring Boot']
        },
        {
          id: 4,
          title: 'DevOps & Deployment',
          description: 'Learn deployment and infrastructure management',
          duration: '6-8 weeks',
          skills: ['Docker', 'AWS/Azure/GCP', 'CI/CD', 'Linux Commands'],
          resources: ['Docker Hub', 'AWS Documentation', 'GitHub Actions']
        },
        {
          id: 5,
          title: 'Advanced Backend',
          description: 'Master advanced backend concepts',
          duration: '8-10 weeks',
          skills: ['Microservices', 'Caching', 'Message Queues', 'Performance Optimization'],
          resources: ['Redis Documentation', 'RabbitMQ', 'System Design Primer']
        },
        {
          id: 6,
          title: 'Build Production Apps',
          description: 'Create scalable backend applications',
          duration: '8-12 weeks',
          skills: ['System Architecture', 'API Documentation', 'Monitoring', 'Security'],
          resources: ['Swagger', 'Postman', 'New Relic', 'OWASP']
        }
      ]
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Developer',
      description: 'Master both frontend and backend development',
      icon: '🚀',
      averageSalary: '$85,000 - $140,000',
      growthRate: '13% (Faster than average)',
      roadmap: [
        {
          id: 1,
          title: 'Frontend Foundations',
          description: 'Master frontend development basics',
          duration: '8-10 weeks',
          skills: ['HTML/CSS/JavaScript', 'React/Vue', 'Responsive Design', 'State Management'],
          resources: ['Frontend Roadmap', 'React Documentation', 'CSS-Tricks']
        },
        {
          id: 2,
          title: 'Backend Foundations',
          description: 'Learn server-side development',
          duration: '8-10 weeks',
          skills: ['Node.js/Python', 'Express/Django', 'Database Design', 'RESTful APIs'],
          resources: ['Backend Roadmap', 'Node.js Documentation', 'API Design Guide']
        },
        {
          id: 3,
          title: 'Database Integration',
          description: 'Connect frontend and backend with databases',
          duration: '4-6 weeks',
          skills: ['SQL/NoSQL', 'ORM/ODM', 'Data Modeling', 'Query Optimization'],
          resources: ['Prisma', 'Mongoose', 'Sequelize Documentation']
        },
        {
          id: 4,
          title: 'Authentication & Security',
          description: 'Implement user authentication and security',
          duration: '4-6 weeks',
          skills: ['JWT', 'OAuth', 'Encryption', 'HTTPS', 'CORS'],
          resources: ['Auth0', 'Passport.js', 'OWASP Security Guide']
        },
        {
          id: 5,
          title: 'Deployment & DevOps',
          description: 'Deploy full-stack applications',
          duration: '6-8 weeks',
          skills: ['Docker', 'Cloud Platforms', 'CI/CD', 'Monitoring'],
          resources: ['Heroku', 'Netlify', 'Vercel', 'AWS Documentation']
        },
        {
          id: 6,
          title: 'Advanced Full-Stack',
          description: 'Master advanced full-stack concepts',
          duration: '10-12 weeks',
          skills: ['Testing', 'Performance', 'SEO', 'Progressive Web Apps'],
          resources: ['Jest', 'Cypress', 'Lighthouse', 'PWA Guide']
        }
      ]
    },
    {
      id: 'datascience',
      title: 'Data Scientist',
      description: 'Analyze data and build machine learning models',
      icon: '📊',
      averageSalary: '$95,000 - $165,000',
      growthRate: '35% (Much faster than average)',
      roadmap: [
        {
          id: 1,
          title: 'Programming & Statistics',
          description: 'Master programming and statistical foundations',
          duration: '8-10 weeks',
          skills: ['Python/R', 'Statistics', 'Probability', 'Linear Algebra'],
          resources: ['Python.org', 'Khan Academy Statistics', 'Coursera Statistics']
        },
        {
          id: 2,
          title: 'Data Manipulation',
          description: 'Learn to clean and manipulate data',
          duration: '6-8 weeks',
          skills: ['Pandas', 'NumPy', 'Data Cleaning', 'SQL'],
          resources: ['Pandas Documentation', '10 Minutes to Pandas', 'SQL Tutorial']
        },
        {
          id: 3,
          title: 'Data Visualization',
          description: 'Create compelling data visualizations',
          duration: '4-6 weeks',
          skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'],
          resources: ['Matplotlib Gallery', 'Seaborn Tutorial', 'Plotly Documentation']
        },
        {
          id: 4,
          title: 'Machine Learning',
          description: 'Build predictive models and algorithms',
          duration: '10-12 weeks',
          skills: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
          resources: ['Scikit-learn', 'Coursera ML Course', 'Kaggle Learn']
        },
        {
          id: 5,
          title: 'Deep Learning',
          description: 'Master neural networks and deep learning',
          duration: '8-10 weeks',
          skills: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Computer Vision', 'NLP'],
          resources: ['TensorFlow', 'PyTorch Tutorials', 'Deep Learning Specialization']
        },
        {
          id: 6,
          title: 'Production & MLOps',
          description: 'Deploy and maintain ML models in production',
          duration: '6-8 weeks',
          skills: ['MLflow', 'Docker', 'Cloud ML', 'Model Monitoring', 'A/B Testing'],
          resources: ['MLflow', 'AWS SageMaker', 'Google Cloud ML']
        }
      ]
    }
  ];

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const selectedCareerPath = careerPaths.find(path => path.id === selectedPath);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-violet-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-violet-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Career Roadmap
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get personalized guidance and step-by-step pathways to achieve your dream career. 
              Track your progress and build the skills that matter.
            </p>
          </div>
        </div>
      </div>

      {/* Career Path Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Career Path</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a career path that aligns with your interests and goals. Each path includes 
            detailed steps, skill requirements, and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careerPaths.map((path) => (
            <div
              key={path.id}
              onClick={() => setSelectedPath(path.id)}
              className={`card cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedPath === path.id
                  ? 'ring-2 ring-primary-500 bg-primary-50'
                  : 'hover:shadow-lg'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{path.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Salary Range:</span>
                    <span className="font-medium text-green-600">{path.averageSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Growth Rate:</span>
                    <span className="font-medium text-blue-600">{path.growthRate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Career Path Details */}
        {selectedCareerPath && (
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="text-5xl mr-4">{selectedCareerPath.icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{selectedCareerPath.title}</h2>
                <p className="text-lg text-gray-600 mt-2">{selectedCareerPath.description}</p>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-gradient-to-r from-primary-50 to-violet-50 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Your Progress</h3>
                <span className="text-sm text-gray-600">
                  {completedSteps.length} of {selectedCareerPath.roadmap.length} steps completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary-600 to-violet-600 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedSteps.length / selectedCareerPath.roadmap.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Roadmap Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Roadmap</h3>
              
              {selectedCareerPath.roadmap.map((step, index) => (
                <div
                  key={step.id}
                  className={`border-l-4 pl-6 pb-6 ${
                    completedSteps.includes(step.id)
                      ? 'border-green-500'
                      : index === 0 || completedSteps.includes(selectedCareerPath.roadmap[index - 1]?.id)
                      ? 'border-primary-500'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-4 ${
                          completedSteps.includes(step.id)
                            ? 'bg-green-500 text-white'
                            : index === 0 || completedSteps.includes(selectedCareerPath.roadmap[index - 1]?.id)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {completedSteps.includes(step.id) ? '✓' : step.id}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                      <button
                        onClick={() => toggleStepCompletion(step.id)}
                        className={`btn-primary text-sm px-4 py-2 ${
                          completedSteps.includes(step.id)
                            ? 'bg-green-500 hover:bg-green-600'
                            : ''
                        }`}
                      >
                        {completedSteps.includes(step.id) ? 'Completed' : 'Mark Complete'}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Skills */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Skills to Learn:</h5>
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Recommended Resources:</h5>
                      <ul className="space-y-1">
                        {step.resources.map((resource, resourceIndex) => (
                          <li key={resourceIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1 h-1 bg-primary-600 rounded-full mr-2"></span>
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-gradient-to-r from-primary-600 to-violet-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
              <p className="text-primary-100 mb-6">
                Build your resume and showcase the skills you're learning along the way.
              </p>
              <Link to="/create-resume" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
                Build Your Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;