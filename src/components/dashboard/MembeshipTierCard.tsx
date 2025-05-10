import React from 'react';
import { Check, X } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { MembershipTier } from '../../types';

interface MembershipTierCardProps {
  tier: MembershipTier;
  isActive?: boolean;
}

const MembershipTierCard: React.FC<MembershipTierCardProps> = ({ 
  tier,
  isActive = false
}) => {
  return (
    <Card 
      className={`h-full flex flex-col ${
        tier.isPopular ? 'border-blue-500' : ''
      } ${
        isActive ? 'ring-2 ring-green-500' : ''
      }`}
    >
      {tier.isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center text-sm font-medium py-1">
          MOST POPULAR
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold text-white">${tier.price}</span>
          <span className="text-gray-400 ml-1">/{tier.isMonthly ? 'month' : 'year'}</span>
        </div>
      </div>
      
      <div className="flex-grow space-y-4">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className="text-green-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button
        variant={isActive ? "success" : tier.isPopular ? "primary" : "outline"}
        fullWidth
        className="mt-6"
      >
        {isActive ? 'Current Plan' : 'Subscribe'}
      </Button>
    </Card>
  );
};

export default MembershipTierCard;