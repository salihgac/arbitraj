import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { ValueBet } from '../../types';

interface ValueBetCardProps {
  bet: ValueBet;
}

const ValueBetCard: React.FC<ValueBetCardProps> = ({ bet }) => {
  const getValueScoreColor = (score: number) => {
    if (score >= 10) return 'text-green-500';
    if (score >= 5) return 'text-blue-500';
    return 'text-gray-400';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'won':
        return <Badge variant="success">Won</Badge>;
      case 'lost':
        return <Badge variant="danger">Lost</Badge>;
      case 'void':
        return <Badge variant="warning">Void</Badge>;
      default:
        return <Badge variant="primary">Open</Badge>;
    }
  };

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
        {getStatusBadge(bet.status)}
      </div>

      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Bookmaker Odds</div>
            <div className="text-xl font-bold text-white">{bet.odds.toFixed(2)}</div>
            <div className="text-xs text-gray-400 mt-1">{bet.bookmaker}</div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Predicted Probability</div>
            <div className="text-xl font-bold text-white">{(bet.predictedProbability * 100).toFixed(1)}%</div>
            <div className="text-xs text-gray-400 mt-1">AI Model</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
          <div>
            <div className="text-xs text-gray-400 mb-1">Value Score</div>
            <div className={`text-xl font-bold ${getValueScoreColor(bet.valueScore)}`}>
              {bet.valueScore.toFixed(1)}%
            </div>
          </div>
          
          {bet.valueScore > 0 ? (
            <TrendingUp className="text-green-500" size={24} />
          ) : (
            <TrendingDown className="text-red-500" size={24} />
          )}
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-gray-400">
            <span className="font-medium">{bet.betType}</span>
          </div>
          
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ValueBetCard;