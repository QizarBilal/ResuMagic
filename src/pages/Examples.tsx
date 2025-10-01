import React from 'react';

const Examples: React.FC = () => {
  const resumeExamples = [
    {
      id: 1,
      title: "Software Engineer Resume",
      industry: "Technology",
      level: "Senior Level",
      description: "Full-stack developer with 5+ years experience in React, Node.js, and cloud technologies.",
      highlights: ["ATS-optimized", "Technical skills section", "Project showcases", "Clean design"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Marketing Manager Resume",
      industry: "Marketing",
      level: "Mid Level",
      description: "Digital marketing professional with proven track record in campaign management and analytics.",
      highlights: ["Metrics-focused", "Achievement-oriented", "Brand-friendly design", "Social proof"],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Recent Graduate Resume",
      industry: "Entry Level",
      level: "Entry Level",
      description: "Fresh graduate with internship experience and strong academic background in business.",
      highlights: ["Education-focused", "Internship emphasis", "Skills-based", "Modern layout"],
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Healthcare Professional Resume",
      industry: "Healthcare",
      level: "Experienced",
      description: "Registered nurse with 8+ years in critical care and patient management.",
      highlights: ["Certification highlights", "Patient care focus", "Professional design", "Compliance-ready"],
      color: "bg-red-500"
    },
    {
      id: 5,
      title: "Financial Analyst Resume",
      industry: "Finance",
      level: "Mid Level",
      description: "CPA with expertise in financial modeling, budgeting, and strategic planning.",
      highlights: ["Number-driven results", "Certification emphasis", "Conservative design", "Detail-oriented"],
      color: "bg-navy-500"
    },
    {
      id: 6,
      title: "Creative Director Resume",
      industry: "Design",
      level: "Senior Level",
      description: "Award-winning creative professional with portfolio of successful brand campaigns.",
      highlights: ["Visual portfolio", "Creative layout", "Brand showcase", "Industry awards"],
      color: "bg-orange-500"
    },
    {
      id: 7,
      title: "Project Manager Resume",
      industry: "Operations",
      level: "Senior Level",
      description: "PMP-certified project manager with experience leading cross-functional teams.",
      highlights: ["Leadership focus", "Methodology expertise", "Team achievements", "Process improvement"],
      color: "bg-teal-500"
    },
    {
      id: 8,
      title: "Sales Representative Resume",
      industry: "Sales",
      level: "Mid Level",
      description: "Top-performing sales professional with consistent quota achievement.",
      highlights: ["Revenue focus", "Target achievements", "Client testimonials", "Results-driven"],
      color: "bg-yellow-500"
    }
  ];

  const industries = ["All Industries", "Technology", "Marketing", "Healthcare", "Finance", "Design", "Operations", "Sales"];
  const levels = ["All Levels", "Entry Level", "Mid Level", "Senior Level", "Executive"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Resume Examples & Inspiration</h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">
              Explore professional resume examples across different industries and experience levels to inspire your own resume creation.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Industry</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500">
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Experience Level</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500">
                {levels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Examples Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resumeExamples.map((example) => (
              <div key={example.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Resume Preview */}
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <div className={`absolute inset-0 ${example.color} opacity-10`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm w-40 h-52 overflow-hidden">
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                        <div className="h-1 bg-gray-300 rounded"></div>
                        <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                        <div className="mt-3">
                          <div className="h-2 bg-gray-600 rounded w-1/3 mb-1"></div>
                          <div className="h-1 bg-gray-300 rounded"></div>
                          <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                        </div>
                        <div className="mt-3">
                          <div className="h-2 bg-gray-600 rounded w-1/2 mb-1"></div>
                          <div className="h-1 bg-gray-300 rounded"></div>
                          <div className="h-1 bg-gray-300 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-navy-100 text-navy-800 px-2 py-1 rounded text-xs font-medium">
                      {example.industry}
                    </span>
                    <span className="text-gray-500 text-xs">{example.level}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {example.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {example.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {example.highlights.map((highlight, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-navy-800 text-white px-3 py-2 rounded text-sm hover:bg-navy-700 transition-colors">
                      Preview
                    </button>
                    <button className="flex-1 border border-navy-800 text-navy-800 px-3 py-2 rounded text-sm hover:bg-navy-50 transition-colors">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Resume Writing Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tailor to the Job</h3>
              <p className="text-gray-600">
                Customize your resume for each application by highlighting relevant skills and experiences that match the job requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Use Numbers & Metrics</h3>
              <p className="text-gray-600">
                Quantify your achievements with specific numbers, percentages, and metrics to demonstrate your impact and value.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Keep It Concise</h3>
              <p className="text-gray-600">
                Focus on your most relevant and impressive experiences. Aim for 1-2 pages and use clear, action-oriented language.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own Professional Resume?</h2>
          <p className="text-navy-200 mb-6">
            Use our templates and examples as inspiration to build a resume that stands out from the competition.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Building Now
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy-900 transition-colors">
              Browse Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;