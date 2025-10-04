import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Premium: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/pricing', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-highlight-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to pricing...</p>
      </div>
    </div>
  );
};

export default Premium;
