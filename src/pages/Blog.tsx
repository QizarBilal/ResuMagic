import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Resume Mistakes That Cost You Job Interviews",
      excerpt: "Avoid these common resume pitfalls that hiring managers see every day. Learn what to fix to dramatically improve your chances of landing interviews.",
      date: "September 15, 2025",
      readTime: "5 min read",
      category: "Resume Tips",
      image: "resume-mistakes"
    },
    {
      id: 2,
      title: "How to Write an ATS-Friendly Resume in 2025",
      excerpt: "Master the art of creating resumes that pass through Applicant Tracking Systems. Get insider tips from HR professionals.",
      date: "September 12, 2025",
      readTime: "7 min read",
      category: "ATS Optimization",
      image: "ats-friendly"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Career Change Resumes",
      excerpt: "Switching careers? Learn how to position your transferable skills and make a compelling case for your career transition.",
      date: "September 10, 2025",
      readTime: "10 min read",
      category: "Career Change",
      image: "career-change"
    },
    {
      id: 4,
      title: "Remote Work Resume: Stand Out in the Digital Age",
      excerpt: "Showcase your remote work capabilities and digital skills to land your next remote position with confidence.",
      date: "September 8, 2025",
      readTime: "6 min read",
      category: "Remote Work",
      image: "remote-work"
    },
    {
      id: 5,
      title: "LinkedIn Profile vs Resume: What's the Difference?",
      excerpt: "Understand how to optimize both your LinkedIn profile and resume for maximum impact in your job search.",
      date: "September 5, 2025",
      readTime: "8 min read",
      category: "LinkedIn",
      image: "linkedin-resume"
    },
    {
      id: 6,
      title: "Industry-Specific Resume Templates: Finding Your Perfect Match",
      excerpt: "Discover how different industries expect different resume formats and styles. Choose the right template for your field.",
      date: "September 3, 2025",
      readTime: "5 min read",
      category: "Templates",
      image: "industry-templates"
    }
  ];

  const categories = ["All", "Resume Tips", "ATS Optimization", "Career Change", "Remote Work", "LinkedIn", "Templates"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">ResuMagic Career Blog</h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">
              Expert career advice, resume tips, and job search strategies to help you land your dream job.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm">Featured Article</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-2">
                  <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  <span className="ml-3 text-gray-500 text-sm">September 17, 2025 • 12 min read</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  The Complete Guide to Resume Writing in 2025: What Actually Works
                </h2>
                <p className="text-gray-600 mb-4">
                  Everything has changed in the world of resume writing. From AI screening tools to new hiring practices, 
                  discover what really works in today's job market and how to craft a resume that gets results.
                </p>
                <button className="bg-navy-800 text-white px-6 py-2 rounded-lg hover:bg-navy-700 transition-colors">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "All" 
                  ? "bg-navy-800 text-white" 
                  : "bg-white text-gray-600 hover:bg-navy-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center">
                <div className="text-center text-navy-800">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-xs font-medium">{post.category}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-navy-100 text-navy-800 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-navy-800 cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <button className="text-navy-800 text-sm font-medium hover:text-navy-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Career Tips</h2>
            <p className="text-navy-200 mb-6 max-w-2xl mx-auto">
              Get the latest resume tips, job search strategies, and career advice delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400"
              />
              <button className="bg-navy-600 hover:bg-navy-500 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-navy-300 text-sm mt-3">
              No spam, unsubscribe at any time. Join 50,000+ professionals already subscribed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;