import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl font-bold text-primary-600">404</span>
          </div>
          <h1 className="heading-lg mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="btn-primary w-full"
          >
            Go Home
          </Link>
          <Link
            to="/resume-builder"
            className="btn-secondary w-full"
          >
            Create Resume
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="space-y-2">
            <Link to="/templates" className="block text-primary-600 hover:text-primary-700 text-sm">
              Resume Templates
            </Link>
            <Link to="/features" className="block text-primary-600 hover:text-primary-700 text-sm">
              Features
            </Link>
            <Link to="/premium" className="block text-primary-600 hover:text-primary-700 text-sm">
              Premium Plans
            </Link>
            <Link to="/help" className="block text-primary-600 hover:text-primary-700 text-sm">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;