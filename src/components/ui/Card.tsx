import React from 'react';
import { cn } from '../../utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'soft' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md'
}) => {
  const variants = {
    default: 'bg-white rounded-xl shadow-card border border-gray-100',
    soft: 'bg-white rounded-xl shadow-soft border border-gray-50',
    bordered: 'bg-white rounded-xl border-2 border-gray-200'
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={cn(variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
};

export default Card;