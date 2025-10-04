import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LegalModal from './LegalModal';
import Modal from './Modal';

const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; content: 'privacy' | 'terms' | 'cookies' }>({
    isOpen: false,
    content: 'privacy'
  });
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'bot', timestamp: Date}>>([
    {
      id: 1,
      text: "Hello! I'm ResuMagic's AI assistant. I'm here to help you with any questions about creating professional resumes, our templates, pricing, or features. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTo({
        top: chatMessagesRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatMessages]);

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to open legal modal
  const openLegalModal = (content: 'privacy' | 'terms' | 'cookies') => {
    setLegalModal({ isOpen: true, content });
  };

  // Chatbot responses based on ResuMagic data
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('template') || message.includes('design')) {
      return "We offer a variety of professional resume templates! Our free plan includes basic templates, while premium templates (starting at $9.99) feature advanced designs for executives, tech professionals, and creative fields. All templates are ATS-optimized to help you get past applicant tracking systems.";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('premium')) {
      return "Our pricing is flexible to meet your needs: Free plan includes basic templates and PDF downloads. Premium templates range from $9.99-$14.99. Support features (courses, internships, hackathons integration) are $19.99-$24.99. Our complete bundle with all features is just $49.99 (26% savings)!";
    }
    
    if (message.includes('ats') || message.includes('applicant tracking') || message.includes('system')) {
      return "Yes! All our resume templates are ATS-friendly. They use proper formatting, standard fonts, clear section headers, and proper keyword placement that Applicant Tracking Systems can easily parse. This gives you the best chance of getting your resume seen by human recruiters.";
    }
    
    if (message.includes('download') || message.includes('export') || message.includes('pdf')) {
      return "You can download your resume in multiple formats: PDF (recommended for applications), Word document, and plain text. Free users get PDF downloads, while premium users get all formats plus high-resolution options for printing.";
    }
    
    if (message.includes('help') || message.includes('support') || message.includes('contact')) {
      return "I'm here to help! You can also reach our support team at support@resumagic.com (response within 24 hours), or check our comprehensive FAQ and Help Documentation. We're available during business hours: 9 AM - 6 PM EST.";
    }
    
    if (message.includes('create') || message.includes('build') || message.includes('make') || message.includes('start')) {
      return "Creating your resume is easy! Click 'Start Building Free' on our homepage, choose a template, and follow our guided wizard. You can complete a professional resume in under 5 minutes. The process includes adding personal info, work experience, education, skills, and customizing the design.";
    }
    
    if (message.includes('edit') || message.includes('change') || message.includes('update') || message.includes('modify')) {
      return "Absolutely! You can edit your resume anytime after creating it. Changes are saved automatically as you work. You can update content, switch templates, change colors, add new sections, and download updated versions whenever needed.";
    }
    
    if (message.includes('secure') || message.includes('privacy') || message.includes('data') || message.includes('safe')) {
      return "Your privacy and data security are our top priorities. All data is encrypted and stored securely. We never share your personal information with third parties. You maintain full control over your data and can delete your account and information at any time.";
    }
    
    if (message.includes('integration') || message.includes('course') || message.includes('internship') || message.includes('hackathon')) {
      return "Our integration features connect you with partner platforms! The Courses integration ($19.99) links with Coursera, Udemy, and LinkedIn Learning. Internships integration ($24.99) connects with LinkedIn and Indeed. Hackathons integration ($22.99) helps showcase your coding achievements. All automatically sync to your resume!";
    }
    
    if (message.includes('payment') || message.includes('pay') || message.includes('card') || message.includes('paypal')) {
      return "We accept all major payment methods for your convenience: Credit cards (Visa, MasterCard, American Express), PayPal, Stripe, PayStack, RazorPay, and PayTM. All transactions are secure and encrypted. You'll receive an instant receipt via email.";
    }
    
    // Default response for unmatched queries
    return "I'd be happy to help you with that! ResuMagic offers professional resume building tools, ATS-optimized templates, and career integration features. Could you tell me more specifically what you'd like to know about? I can help with templates, pricing, features, account questions, or technical support.";
  };

  // Handle sending a chat message
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    const userMessage = {
      id: chatMessages.length + 1,
      text: currentMessage,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        text: getBotResponse(currentMessage),
        sender: 'bot' as const,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // Handle Enter key press in chat input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <footer className="bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main 3-Column Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About ResuMagic Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/Logo2.png" 
                alt="ResuMagic Logo" 
                className="w-8 h-8 mr-2 object-contain"
              />
              <span className="text-xl font-bold">ResuMagic</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">About ResuMagic</h3>
            <p className="text-primary-200 text-sm mb-4">
              Create professional resumes that get you hired. Join thousands of job seekers who have landed their dream jobs with our AI-powered resume builder and expert career services.
            </p>
          </div>

          {/* Help & Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" onClick={() => scrollToTop()} className="text-primary-200 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/examples" onClick={() => scrollToTop()} className="text-primary-200 hover:text-white transition-colors text-sm">
                  Resume Examples
                </Link>
              </li>
              <li>
                <button onClick={() => openLegalModal('privacy')} className="text-primary-200 hover:text-white text-sm transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('terms')} className="text-primary-200 hover:text-white text-sm transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" onClick={() => scrollToTop()} className="text-primary-200 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:support@resumagic.com" className="text-primary-200 hover:text-white transition-colors text-sm">
                  support@resumagic.com
                </a>
              </li>
              <li>
                <a href="tel:+918455807965" className="text-primary-200 hover:text-white transition-colors text-sm">
                  +91 84558 07965
                </a>
              </li>
              <li>
                <span className="text-primary-200 text-sm">
                  Monday - Friday: 9 AM - 6 PM IST
                </span>
              </li>
              <li>
                <span className="text-primary-200 text-sm">
                  Bangalore, Karnataka
                </span>
              </li>
              <li>
                <button 
                  onClick={() => setShowChatModal(true)}
                  className="text-primary-200 hover:text-white text-sm transition-colors text-left flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Live Chat Support</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row - Social Media & Payment Methods */}
        <div className="border-t border-primary-700 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://twitter.com/resumagic', '_blank')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://facebook.com/resumagic', '_blank')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://linkedin.com/company/resumagic', '_blank')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://instagram.com/resumagic', '_blank')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://pinterest.com/resumagic', '_blank')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Pinterest"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.339-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.753-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://youtube.com/@resumagic', '_blank')}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {/* PayPal */}
                <div className="bg-white/90 hover:bg-white border border-gray-200 rounded-lg p-3 text-center shadow-soft hover:shadow-card transition-all group">
                  <div className="w-12 h-8 mx-auto mb-2 flex items-center justify-center">
                    <img 
                      src="/paypal.png" 
                      alt="PayPal" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-700 text-xs font-medium">PayPal</span>
                </div>
                
                {/* Stripe */}
                <div className="bg-white/90 hover:bg-white border border-gray-200 rounded-lg p-3 text-center shadow-soft hover:shadow-card transition-all group">
                  <div className="w-12 h-8 mx-auto mb-2 flex items-center justify-center">
                    <img 
                      src="/stripe.png" 
                      alt="Stripe" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-700 text-xs font-medium">Stripe</span>
                </div>
                
                {/* PayStack */}
                <div className="bg-white/90 hover:bg-white border border-gray-200 rounded-lg p-3 text-center shadow-soft hover:shadow-card transition-all group">
                  <div className="w-12 h-8 mx-auto mb-2 flex items-center justify-center">
                    <img 
                      src="/PayStack.webp" 
                      alt="PayStack" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-700 text-xs font-medium">PayStack</span>
                </div>
                
                {/* RazorPay */}
                <div className="bg-white/90 hover:bg-white border border-gray-200 rounded-lg p-3 text-center shadow-soft hover:shadow-card transition-all group">
                  <div className="w-12 h-8 mx-auto mb-2 flex items-center justify-center">
                    <img 
                      src="/Razorpay.png" 
                      alt="RazorPay" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-700 text-xs font-medium">RazorPay</span>
                </div>
                
                {/* PayTM */}
                <div className="bg-white/90 hover:bg-white border border-gray-200 rounded-lg p-3 text-center shadow-soft hover:shadow-card transition-all group">
                  <div className="w-12 h-8 mx-auto mb-2 flex items-center justify-center">
                    <img 
                      src="/Paytm.png" 
                      alt="PayTM" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-700 text-xs font-medium">PayTM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-300 text-sm">
            Copyright © 2025 designed & developed by team Zidio Development, All rights reserved.
          </p>
        </div>
      </div>

      {/* Modals */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        title={
          legalModal.content === 'privacy' ? 'Privacy Policy' :
          legalModal.content === 'terms' ? 'Terms of Service' : 'Cookie Policy'
        }
        content={legalModal.content}
      />

      {/* Chat Support Modal */}
      {showChatModal && (
        <Modal isOpen={showChatModal} onClose={() => setShowChatModal(false)} title="Live Chat Support">
          <div className="flex flex-col h-96">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-600 to-highlight-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">ResuMagic AI Assistant</h3>
                  <p className="text-xs text-white/80">Online • Powered by AI</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div ref={chatMessagesRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white border border-accent-200 text-gray-800 shadow-soft'
                  }`}>
                    {message.sender === 'bot' && (
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-primary-600">AI Assistant</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="border-t border-accent-200 p-4 bg-white">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question about ResuMagic..."
                  className="flex-1 px-4 py-2 border border-accent-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim()}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                <button 
                  onClick={() => setCurrentMessage("How do I create a resume?")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full transition-colors"
                >
                  How to create resume?
                </button>
                <button 
                  onClick={() => setCurrentMessage("What are your pricing plans?")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full transition-colors"
                >
                  Pricing plans
                </button>
                <button 
                  onClick={() => setCurrentMessage("Are templates ATS-friendly?")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full transition-colors"
                >
                  ATS templates
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
