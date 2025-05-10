import React from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';
  
  const variantClasses: Record<BadgeVariant, string> = {
    default: 'bg-gray-700 text-gray-200',
    primary: 'bg-blue-600 text-white',
    success: 'bg-green-600 text-white',
    danger: 'bg-red-600 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-cyan-500 text-white',
  };
  
  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].join(' ');

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;