import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  isPremium?: boolean;
  action?: ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  className = '', 
  isPremium = false,
  action
}) => {
  return (
    <div className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 relative ${className}`}>
      {isPremium && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold py-1 px-2 rounded-full">
          PREMIUM
        </div>
      )}
      
      {title && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          {action && <div>{action}</div>}
        </div>
      )}
      
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

export default Card;