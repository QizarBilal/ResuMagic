import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTopAndNavigate = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-br from-white via-gray-50/50 to-primary-50/30 pt-8 pb-16 sm:pt-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            {/* Left Content - Mobile First */}
            <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6 sm:mb-8 lg:mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-primary-600 via-highlight-500 to-primary-700 bg-clip-text text-transparent">
                    ResuMagic
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mb-5 sm:mb-7 lg:mb-5 leading-tight px-2 sm:px-0">
                  Build Your <span className="text-primary-600">Dream Resume</span> in Minutes
                </h2>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                  Create stunning, ATS-friendly resumes with professional tools. 
                  Join thousands who've landed their dream jobs.
                </p>
              </div>

              {/* Action Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-6 px-4 sm:px-0">
                <Link
                  to="/resume-builder?plan=free"
                  className="bg-gradient-to-r from-primary-600 to-highlight-500 hover:from-primary-700 hover:to-highlight-600 text-white font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 text-base sm:text-lg text-center"
                >
                  Start Building Free
                </Link>
                <Link
                  to="/templates"
                  className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-xl sm:rounded-2xl border-2 border-primary-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg text-center"
                >
                  Browse Templates
                </Link>
              </div>

              {/* Trust Indicators - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base leading-relaxed">Privacy First</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Your data is safe</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base leading-relaxed">Lightning Fast</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Ready in 5 minutes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Mobile First */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Clean Professional Image */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white border-2 sm:border-4 border-white">
                  <img
                    src="/hero-section.png"
                    alt="Professional resume builder interface showing clean, modern resume templates"
                    className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover"
                  />
                  
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/5 to-highlight-500/5"></div>
                </div>

                {/* Success Metric Badge - Mobile Responsive */}
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-primary-600">98%</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>

                {/* ATS Badge - Mobile Responsive */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  ATS Optimized ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Why Choose ResuMagic?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create a standout resume that gets you hired
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 flex items-center justify-center mb-6 rounded-xl mx-auto">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">ATS-Optimized</h3>
              <p className="text-gray-600">Beat applicant tracking systems with templates designed to pass automated screening.</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-highlight-100 flex items-center justify-center mb-6 rounded-xl mx-auto">
                <svg className="w-8 h-8 text-highlight-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Create professional resumes in minutes with our intuitive builder and smart suggestions.</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 flex items-center justify-center mb-6 rounded-xl mx-auto">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5v2M15 11v2" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Professional Design</h3>
              <p className="text-gray-600">Industry-specific templates crafted by HR experts and hiring managers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create your perfect resume in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 flex items-center justify-center mb-6 rounded-full mx-auto">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="heading-sm mb-4">Choose Template</h3>
              <p className="text-gray-600">Select from our collection of ATS-friendly, professional templates.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 flex items-center justify-center mb-6 rounded-full mx-auto">
                <span className="text-2xl font-bold text-accent-600">2</span>
              </div>
              <h3 className="heading-sm mb-4">Fill Details</h3>
              <p className="text-gray-600">Add your information with guided prompts and smart suggestions.</p>
            </div>

                        <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 flex items-center justify-center mb-6 rounded-full mx-auto">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="heading-sm mb-4">Download & Share</h3>
              <p className="text-gray-600">Download in PDF or Word format and share with employers instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Trusted by Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our users say about their experience with ResuMagic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "ResuMagic helped me land my dream job at a tech startup. The ATS-optimized template made all the difference!"
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The premium features and career roadmaps gave me the competitive edge I needed. Worth every penny!"
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-600 font-semibold">AC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Amanda Chen</h4>
                  <p className="text-sm text-gray-600">Recent Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "As a new graduate, ResuMagic helped me create a professional resume that got me multiple interviews."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white border-t border-accent-200">
        <div className="container-custom text-center">
          <div className="bg-gradient-to-r from-highlight-500 to-primary-600 rounded-3xl p-12 text-white">
            <h2 className="heading-lg mb-6 text-white">Ready to Build Your Professional Resume?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have advanced their careers with ResuMagic
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToTopAndNavigate('/resume-builder')}
                className="bg-white text-primary-600 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-lg shadow-lg"
              >
                Start Building Free
              </button>
              <button
                onClick={() => scrollToTopAndNavigate('/pricing')}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/30 transition-colors duration-200 rounded-lg"
              >
                View Premium Plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
