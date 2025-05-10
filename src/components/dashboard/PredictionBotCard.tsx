import React from 'react';
import { Trophy, Zap, Lock } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { PredictionBot } from '../../types';

interface PredictionBotCardProps {
  bot: PredictionBot;
  isActive?: boolean;
  onSelect?: () => void;
}

const PredictionBotCard: React.FC<PredictionBotCardProps> = ({ 
  bot, 
  isActive = false,
  onSelect 
}) => {
  return (
    <Card 
      className={`transition-all duration-300 ${
        isActive ? 'ring-2 ring-blue-500' : 'hover:bg-gray-750'
      }`}
      isPremium={bot.isPremium}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <Zap size={24} className="text-white" />
        </div>
        
        <div>
          <h3 className="font-bold text-white text-lg">{bot.name}</h3>
          <p className="text-sm text-gray-400">{bot.predictionType}</p>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{bot.description}</p>
      
      <div className="bg-gray-900 rounded-lg p-3 flex items-center space-x-3 mb-4">
        <Trophy className="text-yellow-500" size={20} />
        <div>
          <div className="text-sm text-gray-400">Accuracy</div>
          <div className="text-lg font-bold text-white">{(bot.accuracy * 100).toFixed(1)}%</div>
        </div>
      </div>
      
      <Button
        variant={isActive ? "secondary" : bot.isPremium ? "outline" : "primary"}
        fullWidth
        leftIcon={bot.isPremium ? <Lock size={16} /> : undefined}
        onClick={onSelect}
      >
        {isActive ? 'Selected' : bot.isPremium ? 'Unlock Premium' : 'Select Bot'}
      </Button>
    </Card>
  );
};

export default PredictionBotCard;