import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonStyle: string;
  popular?: boolean;
}

const Premium: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '1 resume download per month',
        '3 basic templates',
        'Basic resume builder',
        'Email support',
        'ATS-friendly formats'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'btn-secondary'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: billingPeriod === 'monthly' ? 9.99 : 99.99,
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: 'Most popular choice for job seekers',
      features: [
        'Unlimited resume downloads',
        '20+ premium templates',
        'AI-powered content suggestions',
        'Career roadmap access',
        'Cover letter builder',
        'LinkedIn profile optimization',
        'Priority support',
        'Interview preparation guides'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'btn-primary',
      popular: true
    },
    {
      id: 'professional',
      name: 'Professional',
      price: billingPeriod === 'monthly' ? 19.99 : 199.99,
      period: billingPeriod === 'monthly' ? 'month' : 'year',
      description: 'For serious career advancement',
      features: [
        'Everything in Premium',
        'Personal career coach consultation',
        'Custom template creation',
        'Industry-specific advice',
        'Salary negotiation guides',
        'Job application tracking',
        'Portfolio website builder',
        '1-on-1 resume review session'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'btn-primary'
    }
  ];

  const premiumFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Suggestions',
      description: 'Get intelligent recommendations for improving your resume content and structure.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Career Roadmaps',
      description: 'Access personalized career paths with step-by-step guidance for your industry.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5v2M15 11v2" />
        </svg>
      ),
      title: 'Premium Templates',
      description: 'Choose from 20+ professionally designed templates crafted by industry experts.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Unlimited Downloads',
      description: 'Download your resume in multiple formats without any restrictions.'
    }
  ];

  const recommendedCertifications = [
    {
      title: 'Google Data Analytics Certificate',
      provider: 'Coursera',
      duration: '6 months',
      link: 'https://coursera.org',
      popular: true
    },
    {
      title: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      duration: '3 months',
      link: 'https://aws.amazon.com'
    },
    {
      title: 'Project Management Professional (PMP)',
      provider: 'PMI',
      duration: '4 months',
      link: 'https://pmi.org'
    }
  ];

  const recommendedInternships = [
    {
      title: 'Software Development Internship',
      company: 'Tech Startups',
      duration: '3-6 months',
      link: 'https://internships.com',
      remote: true
    },
    {
      title: 'Digital Marketing Internship',
      company: 'Marketing Agencies',
      duration: '3 months',
      link: 'https://marketing-internships.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Unlock Your <span className="text-gradient">Career Potential</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get premium features, AI-powered suggestions, and career guidance to land your dream job faster.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-sm text-gray-600">🎯 14-day free trial</span>
            <span className="text-sm text-gray-600">⚡ Cancel anytime</span>
            <span className="text-sm text-gray-600">💳 No commitment</span>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Choose Your Plan</h2>
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-primary-600"
              >
                <span
                  className={`pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition duration-200 ease-in-out ${
                    billingPeriod === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                  Save 17%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card ${plan.popular ? 'featured' : ''}`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <Link
                    to={plan.id === 'free' ? '/auth/register' : `/checkout?plan=${plan.id}&billing=${billingPeriod}`}
                    className={`${plan.buttonStyle} w-full mb-8`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>

                <div className="feature-list">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Premium Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create standout resumes and advance your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="heading-sm mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Boost Your Profile</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium members get access to curated certifications, internships, and hackathons
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="heading-md mb-8 text-center">📜 Recommended Certifications</h3>
              <div className="space-y-4">
                {recommendedCertifications.map((cert, index) => (
                  <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                          {cert.popular && (
                            <span className="bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Provider: {cert.provider}</p>
                        <p className="text-sm text-gray-600 mb-3">Duration: {cert.duration}</p>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div>
              <h3 className="heading-md mb-8 text-center">💼 Recommended Internships</h3>
              <div className="space-y-4">
                {recommendedInternships.map((internship, index) => (
                  <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{internship.title}</h4>
                          {internship.remote && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Remote
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Company: {internship.company}</p>
                        <p className="text-sm text-gray-600 mb-3">Duration: {internship.duration}</p>
                        <a
                          href={internship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Apply Now →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I cancel my subscription anytime?',
                answer: 'Yes, you can cancel your subscription at any time. Your premium access will continue until the end of your current billing period.'
              },
              {
                question: 'What happens to my resumes if I downgrade?',
                answer: 'Your resumes will remain saved in your account. However, you will lose access to premium templates and features.'
              },
              {
                question: 'Do you offer student discounts?',
                answer: 'Yes! We offer a 50% discount for students. Contact our support team with your student ID to get verified.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial for all premium plans. No credit card required.'
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">Ready to Advance Your Career?</h2>
          <p className="text-xl text-navy-200 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who've landed their dream jobs with ResuMagic Premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/checkout?plan=premium&billing=yearly"
              className="bg-white text-navy-800 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/templates"
              className="bg-accent-600 text-white px-8 py-4 font-semibold hover:bg-accent-700 transition-colors duration-200 rounded-lg"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;