import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Resume {
  id: string;
  name: string;
  template: string;
  lastModified: string;
  completionProgress: number;
  status: 'draft' | 'completed';
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resumes' | 'templates' | 'activity'>('resumes');

  // Mock data - in real app, this would come from API/context
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Free',
    resumesCreated: 2,
    downloadsRemaining: 3
  };

  const resumes: Resume[] = [
    {
      id: '1',
      name: 'Software Engineer Resume',
      template: 'Modern Professional',
      lastModified: '2024-01-15',
      completionProgress: 85,
      status: 'draft'
    },
    {
      id: '2',
      name: 'Frontend Developer Resume',
      template: 'Clean Minimal',
      lastModified: '2024-01-12',
      completionProgress: 100,
      status: 'completed'
    }
  ];

  const recentActivities = [
    { action: 'Created new resume', details: 'Software Engineer Resume', time: '2 hours ago' },
    { action: 'Downloaded resume', details: 'Frontend Developer Resume', time: '1 day ago' },
    { action: 'Updated skills section', details: 'Software Engineer Resume', time: '3 days ago' }
  ];

  const progressPercentage = Math.round(resumes.reduce((acc, resume) => acc + resume.completionProgress, 0) / resumes.length);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="heading-lg mb-2">Welcome back, {user.name}!</h1>
              <p className="text-gray-600">Manage your resumes and track your progress</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Link
                to="/resume-builder"
                className="btn-primary"
              >
                Create New Resume
              </Link>
              <Link
                to="/templates"
                className="btn-secondary"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{user.resumesCreated}</h3>
            <p className="text-sm text-gray-600">Resumes Created</p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{user.downloadsRemaining}</h3>
            <p className="text-sm text-gray-600">Downloads Left</p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{progressPercentage}%</h3>
            <p className="text-sm text-gray-600">Avg. Progress</p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{user.plan}</h3>
            <p className="text-sm text-gray-600">Current Plan</p>
          </div>
        </div>

        {/* Upgrade Notice */}
        {user.plan === 'Free' && (
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Unlock Premium Features</h3>
                  <p className="text-gray-600 text-sm">Get unlimited downloads, premium templates, and AI-powered suggestions.</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  to="/premium"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                >
                  Upgrade Now
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'resumes', label: 'My Resumes', count: resumes.length },
                { key: 'templates', label: 'Templates', count: null },
                { key: 'activity', label: 'Recent Activity', count: null }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count !== null && (
                    <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                      activeTab === tab.key ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'resumes' && (
          <div className="space-y-4">
            {resumes.length === 0 ? (
              <div className="card text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes yet</h3>
                <p className="text-gray-600 mb-6">Create your first resume to get started</p>
                <Link
                  to="/resume-builder"
                  className="btn-primary"
                >
                  Create Your First Resume
                </Link>
              </div>
            ) : (
              resumes.map((resume) => (
                <div key={resume.id} className="card hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{resume.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">Template: {resume.template}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Modified {new Date(resume.lastModified).toLocaleDateString()}</span>
                          <span
                            className={`px-2 py-1 rounded-full ${
                              resume.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {resume.status === 'completed' ? 'Complete' : 'Draft'}
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-primary-600 h-2 rounded-full"
                                style={{ width: `${resume.completionProgress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-600">{resume.completionProgress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        to={`/resume-builder?resume=${resume.id}`}
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/preview/${resume.id}`}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((template) => (
              <div key={template} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Template Preview {template}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Template {template}</h3>
                <p className="text-sm text-gray-600 mb-4">Clean and modern design perfect for any industry</p>
                <Link
                  to={`/resume-builder?template=${template}`}
                  className="btn-primary w-full text-center text-sm"
                >
                  Use This Template
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.details}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;