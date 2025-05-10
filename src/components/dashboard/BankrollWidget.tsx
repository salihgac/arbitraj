import React from 'react';
import { DollarSign, TrendingUp, PieChart as ChartPie } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

interface BankrollWidgetProps {
  bankroll: number;
  roi: number;
  totalBets: number;
  winRate: number;
}

const BankrollWidget: React.FC<BankrollWidgetProps> = ({ 
  bankroll,
  roi,
  totalBets,
  winRate
}) => {
  return (
    <Card title="Bankroll Management" className="h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
            <DollarSign size={24} className="text-blue-500" />
          </div>
          <div>
            <div className="text-gray-400 text-sm">Current Bankroll</div>
            <div className="text-2xl font-bold text-white">${bankroll.toLocaleString()}</div>
          </div>
        </div>
        
        <Button variant="outline" size="sm" leftIcon={<ChartPie size={16} />}>
          Manage
        </Button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-900 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">ROI</div>
          <div className="flex items-center">
            <span className={`text-xl font-bold ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {roi >= 0 ? '+' : ''}{roi}%
            </span>
            {roi > 0 && <TrendingUp size={16} className="text-green-500 ml-1" />}
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Total Bets</div>
          <div className="text-xl font-bold text-white">{totalBets}</div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Win Rate</div>
          <div className="text-xl font-bold text-white">{winRate}%</div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-2">Recommended Bet Size</div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <div className="text-xs text-gray-500">Conservative</div>
            <div className="text-sm font-medium text-white">${(bankroll * 0.01).toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Moderate</div>
            <div className="text-sm font-medium text-white">${(bankroll * 0.025).toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Aggressive</div>
            <div className="text-sm font-medium text-white">${(bankroll * 0.05).toFixed(2)}</div>
          </div>
        </div>
        <div className="text-xs text-gray-500">Based on Kelly Criterion and your risk profile</div>
      </div>
    </Card>
  );
};

export default BankrollWidget;