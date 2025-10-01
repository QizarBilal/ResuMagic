import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile Optimized */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-primary-500/20 text-primary-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Our Story
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">About ResuMagic</h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Empowering professionals worldwide to create outstanding resumes that open doors to dream careers and transform their professional journey.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Our Mission
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">Transforming Careers Through Innovation</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At ResuMagic, we believe that everyone deserves a chance to showcase their talents and achievements 
                in the best possible light. We're dedicated to democratizing access to professional resume creation 
                tools and empowering career advancement for professionals worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform combines cutting-edge design with industry expertise to help job seekers create 
                resumes that not only look stunning but also pass through Applicant Tracking Systems (ATS) 
                and capture the attention of hiring managers in today's competitive job market.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-10 rounded-3xl shadow-xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl font-bold text-primary-600 mb-2">750K+</div>
                  <div className="text-gray-600 font-medium">Resumes Created</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-gray-600 font-medium">Professional Templates</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-gray-600 font-medium">User Satisfaction</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet the Experts Behind ResuMagic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate group of career experts, designers, and developers working together to revolutionize resume creation and career advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">AS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ankit Sharma</h3>
              <p className="text-primary-600 font-semibold mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                15+ years in HR and talent acquisition, passionate about empowering job seekers to achieve their career goals through innovative solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">PG</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Priya Gupta</h3>
              <p className="text-primary-600 font-semibold mb-4">Head of Design</p>
              <p className="text-gray-600 leading-relaxed">
                Award-winning UX/UI designer with expertise in creating user-friendly, professional templates that stand out in today's competitive market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">RK</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rahul Kumar</h3>
              <p className="text-primary-600 font-semibold mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Tech visionary with 12+ years building scalable platforms and innovative career solutions that empower millions of job seekers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-gray-50 to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Our Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every feature we build for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously improving our platform with cutting-edge design trends and the latest technology innovations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Making powerful career tools available to everyone, regardless of background or experience level.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering professional-grade resumes that meet industry standards and consistently impress employers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building a supportive community where job seekers can grow, learn, and succeed together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully landed their dream jobs with ResuMagic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Building Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-600 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;