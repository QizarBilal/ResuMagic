import React from 'react';

export const CardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-4 rounded mb-4"></div>
      <div className="bg-gray-200 h-4 rounded mb-2"></div>
      <div className="bg-gray-200 h-4 rounded w-3/4"></div>
    </div>
  );
};

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`bg-gray-200 h-4 rounded ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
};

export const ButtonSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-10 w-24 rounded"></div>
    </div>
  );
};

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <CardSkeleton />
      <TextSkeleton />
      <ButtonSkeleton />
    </div>
  );
};

export default LoadingSkeleton;