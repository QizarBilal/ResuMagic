import React from 'react';

const CareerServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Professional Resume Writing",
      description: "Get a professionally written resume that highlights your strengths and gets noticed by employers.",
      price: "$149",
      duration: "3-5 business days",
      features: [
        "ATS-optimized resume",
        "Industry-specific formatting",
        "Achievement-focused content",
        "2 rounds of revisions",
        "Cover letter template",
        "LinkedIn profile optimization tips"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Career Coaching Session",
      description: "One-on-one coaching to develop your career strategy, interview skills, and job search techniques.",
      price: "$99",
      duration: "60 minutes",
      features: [
        "Career assessment",
        "Job search strategy",
        "Interview preparation",
        "Personal branding guidance",
        "Networking tips",
        "Follow-up action plan"
      ],
      popular: false
    },
    {
      id: 3,
      title: "LinkedIn Profile Makeover",
      description: "Transform your LinkedIn profile to attract recruiters and showcase your professional brand.",
      price: "$79",
      duration: "2-3 business days",
      features: [
        "Compelling headline",
        "Optimized summary",
        "Experience descriptions",
        "Skills optimization",
        "Industry keywords",
        "Profile photo guidance"
      ],
      popular: false
    },
    {
      id: 4,
      title: "Interview Coaching Package",
      description: "Comprehensive interview preparation including mock interviews and personalized feedback.",
      price: "$199",
      duration: "2 sessions",
      features: [
        "2 mock interview sessions",
        "Behavioral question prep",
        "Technical interview practice",
        "Confidence building techniques",
        "Salary negotiation tips",
        "Post-interview follow-up guide"
      ],
      popular: false
    },
    {
      id: 5,
      title: "Executive Resume Package",
      description: "Premium resume writing service for C-level executives and senior management positions.",
      price: "$299",
      duration: "5-7 business days",
      features: [
        "Executive-level resume",
        "Executive summary",
        "Leadership achievements focus",
        "Industry expertise highlighting",
        "Cover letter",
        "LinkedIn profile update",
        "3 rounds of revisions"
      ],
      popular: false
    },
    {
      id: 6,
      title: "Career Transition Support",
      description: "Specialized guidance for professionals changing industries or making major career moves.",
      price: "$179",
      duration: "2-3 sessions",
      features: [
        "Transferable skills analysis",
        "Industry research",
        "Resume repositioning",
        "Networking strategy",
        "Interview preparation",
        "90-day action plan"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile Optimized */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-primary-500/20 text-primary-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
              <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Professional Career Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 px-2 sm:px-0 leading-tight">
              Accelerate Your <span className="text-primary-200">Career Success</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Transform your professional journey with our expert career coaching, premium resume writing, and comprehensive interview preparation services designed to land you your dream job.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <button className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-primary-600 transition-all duration-300 text-sm sm:text-base">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industry-Leading Career Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our team of certified career coaches and award-winning professional writers have helped thousands of professionals 
              land their dream jobs at Fortune 500 companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Success</h3>
              <p className="text-gray-600 leading-relaxed">
                95% of our clients receive interview calls within 30 days of receiving their professionally crafted resume.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified career coaches and professional writers with 10+ years of industry experience across all sectors.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Lightning-fast turnaround times without compromising on quality. Get your materials exactly when you need them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Career Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of career services designed to accelerate your professional success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div key={service.id} className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${service.popular ? 'ring-2 ring-primary-500 sm:transform sm:scale-105' : ''}`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center py-3 px-4">
                    <span className="text-sm font-bold">⭐ MOST POPULAR</span>
                  </div>
                )}
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">{service.title}</h3>
                    <div className="text-left sm:text-right">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600">{service.price}</div>
                      <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full mt-1 inline-block">{service.duration}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">What's Included:</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-sm sm:text-base ${
                    service.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                  }`}>
                    Get Started Today
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              How It Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Simple Process, Powerful Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our streamlined process designed to deliver exceptional career services efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Select the career service that perfectly aligns with your professional needs and career goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your information and career goals with our expert team during a personalized consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified professionals craft your materials or prepare comprehensive coaching sessions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Achieve Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your professional materials and start landing interviews with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-navy-800 font-semibold">SR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Sarah Rodriguez</div>
                  <div className="text-sm text-gray-600">Software Engineer</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The resume writing service was incredible. I got 3 interview calls within a week of applying 
                with my new resume. Highly recommended!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-navy-800 font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Michael Johnson</div>
                  <div className="text-sm text-gray-600">Marketing Director</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The career coaching session gave me clarity on my career path and the confidence to pursue 
                leadership roles. Landed my dream job 2 months later!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-navy-800 font-semibold">LP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Lisa Park</div>
                  <div className="text-sm text-gray-600">Financial Analyst</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Interview coaching was a game-changer. I went from being nervous to confident in interviews. 
                The mock sessions and feedback were invaluable."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-navy-200 mb-6">
            Join thousands of professionals who have successfully advanced their careers with our expert services.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book a Consultation
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy-900 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerServices;