import React from 'react';
import { Calculator, ExternalLink } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { ArbitrageBet } from '../../types';

interface ArbitrageCardProps {
  bet: ArbitrageBet;
}

const ArbitrageCard: React.FC<ArbitrageCardProps> = ({ bet }) => {
  return (
    <Card className="transform transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-white">{bet.match}</h3>
          <div className="flex items-center mt-1">
            <Badge variant="default" size="sm" className="mr-2">{bet.league}</Badge>
            <span className="text-xs text-gray-400">{bet.date}</span>
          </div>
        </div>
        
        <Badge 
          variant={bet.profitMargin >= 3 ? "success" : bet.profitMargin >= 1 ? "primary" : "default"}
          className="animate-pulse"
        >
          +{bet.profitMargin.toFixed(2)}%
        </Badge>
      </div>

      <div className="space-y-3">
        {bet.outcomes.map((outcome, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-3 flex justify-between items-center">
            <div>
              <div className="text-sm font-medium text-white">{outcome.betType}</div>
              <div className="text-xs text-gray-400 mt-1">{outcome.bookmaker}</div>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-bold text-white">{outcome.odds.toFixed(2)}</div>
              <div className="text-xs text-blue-400">${outcome.stake.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          leftIcon={<Calculator size={16} />}
        >
          Recalculate
        </Button>
        
        <Button 
          variant="primary" 
          size="sm"
          rightIcon={<ExternalLink size={16} />}
        >
          Place Bets
        </Button>
      </div>
    </Card>
  );
};

export default ArbitrageCard;