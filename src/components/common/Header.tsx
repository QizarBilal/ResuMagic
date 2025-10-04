import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/templates', label: 'Templates' },
    { path: '/resume-builder', label: 'Resume Builder' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white border-b border-accent-200 sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop} className="flex-shrink-0 group">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img 
                  src="/Logo2.png" 
                  alt="ResuMagic Logo" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
                <h1 className="text-lg sm:text-xl font-semibold text-primary-600">
                  ResuMagic
                </h1>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={scrollToTop}
                className={`text-sm font-medium transition-colors duration-200 mt-1 ${
                  isActive(link.path)
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-4'
                    : 'text-gray-600 hover:text-primary-500 pb-4'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/auth/login"
              onClick={scrollToTop}
              className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              to="/auth/register"
              onClick={scrollToTop}
              className="bg-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium hover:bg-primary-700 transition-colors duration-200 rounded-sm"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-gray-600 hover:text-primary-600 transition-colors duration-200 rounded-md touch-manipulation"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-accent-200 bg-white shadow-card">
            <div className="px-4 pt-4 pb-6 space-y-1 max-h-screen overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className={`block px-4 py-4 text-lg font-medium transition-all duration-200 rounded-lg touch-manipulation ${
                    isActive(link.path)
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                      : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 px-4 space-y-3">
                <Link
                  to="/auth/login"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className="block w-full text-center border border-primary-600 text-primary-600 px-6 py-4 text-lg font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200 touch-manipulation"
                >
                  Sign in
                </Link>
                <Link
                  to="/auth/register"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className="block w-full text-center bg-primary-600 text-white px-6 py-4 text-lg font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 touch-manipulation"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;