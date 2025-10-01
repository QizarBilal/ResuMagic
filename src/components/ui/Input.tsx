import React from 'react';
import { cn } from '../../utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative group">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <div className="text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200">{leftIcon}</div>
          </div>
        )}
        <input
          className={cn(
            'w-full px-4 py-4 text-gray-900 bg-white border-2 border-gray-200 rounded-xl',
            'focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 focus:outline-none',
            'hover:border-gray-300 transition-all duration-200',
            'placeholder:text-gray-400 text-base',
            leftIcon ? 'pl-12' : '',
            rightIcon ? 'pr-12' : '',
            error 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/50' 
              : 'shadow-sm hover:shadow-md focus:shadow-lg',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <div className="text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200">{rightIcon}</div>
          </div>
        )}
      </div>
      {error && (
        <div className="flex items-center mt-2">
          <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-600 text-sm font-medium">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;