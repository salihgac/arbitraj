import React from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ValueBetCard from '../components/dashboard/ValueBetCard';
import ArbitrageCard from '../components/dashboard/ArbitrageCard';
import MarketMovementChart from '../components/dashboard/MarketMovementChart';
import PredictionBotCard from '../components/dashboard/PredictionBotCard';
import BankrollWidget from '../components/dashboard/BankrollWidget';

// Sample data
const valueBets = [
  {
    id: '1',
    match: 'Manchester City vs Arsenal',
    league: 'Premier League',
    date: 'Today, 20:45',
    bookmaker: 'Bet365',
    betType: 'Over 2.5 Goals',
    odds: 1.95,
    predictedProbability: 0.65,
    valueScore: 12.5,
    status: 'open'
  },
  {
    id: '2',
    match: 'Barcelona vs Real Madrid',
    league: 'La Liga',
    date: 'Tomorrow, 21:00',
    bookmaker: 'Unibet',
    betType: 'Home Win',
    odds: 2.10,
    predictedProbability: 0.55,
    valueScore: 8.2,
    status: 'open'
  }
] as const;

const arbitrageBets = [
  {
    id: '1',
    match: 'Liverpool vs Chelsea',
    league: 'Premier League',
    date: 'Today, 18:30',
    outcomes: [
      { bookmaker: 'Bet365', betType: 'Home Win', odds: 2.25, stake: 44.44 },
      { bookmaker: 'William Hill', betType: 'Away Win', odds: 4.00, stake: 25.00 },
      { bookmaker: 'Betway', betType: 'Draw', odds: 3.50, stake: 30.56 }
    ],
    profitMargin: 3.45,
    status: 'open'
  }
] as const;

const oddsMovements = [
  {
    id: '1',
    match: 'PSG vs Bayern Munich',
    league: 'Champions League',
    date: 'Tomorrow, 21:00',
    bookmaker: 'Pinnacle',
    betType: 'Over 3.5 Goals',
    timePoints: ['09:00', '12:00', '15:00', '18:00', 'Now'],
    odds: [2.05, 2.15, 2.25, 2.30, 2.40],
    isSharp: true
  },
  {
    id: '2',
    match: 'Juventus vs Inter',
    league: 'Serie A',
    date: '12 Nov, 20:45',
    bookmaker: 'Bet365',
    betType: 'Away Win',
    timePoints: ['Yesterday', '06:00', '12:00', '18:00', 'Now'],
    odds: [3.40, 3.30, 3.20, 3.10, 2.90],
    isSharp: false
  }
] as const;

const predictionBots = [
  {
    id: '1',
    name: 'Goal Hunter',
    description: 'Specialized in identifying Over/Under opportunities with high accuracy.',
    accuracy: 0.72,
    predictionType: 'Over/Under Markets',
    isPremium: false
  },
  {
    id: '2',
    name: 'Sharp Analyzer Pro',
    description: 'Elite model that tracks sharp money movements and professional bettors.',
    accuracy: 0.78,
    predictionType: 'Match Results',
    isPremium: true
  }
] as const;

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card title="Best Value Bets Today" 
            action={
              <Button 
                variant="ghost" 
                size="sm" 
                rightIcon={<ArrowRight size={16} />}
              >
                View All
              </Button>
            }
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-400">
                Showing bets with 5%+ value edge
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                leftIcon={<Filter size={16} />}
              >
                Filter
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {valueBets.map(bet => (
                <ValueBetCard key={bet.id} bet={bet} />
              ))}
            </div>
          </Card>
        </div>
        
        <div>
          <BankrollWidget 
            bankroll={5000}
            roi={12.5}
            totalBets={78}
            winRate={59.3}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Card 
            title="Live Arbitrage Opportunities" 
            action={
              <Button 
                variant="ghost" 
                size="sm" 
                rightIcon={<ArrowRight size={16} />}
              >
                View All
              </Button>
            }
          >
            <div className="space-y-4">
              {arbitrageBets.map(bet => (
                <ArbitrageCard key={bet.id} bet={bet} />
              ))}
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card 
            title="Market Movement Tracker" 
            action={
              <Button 
                variant="ghost" 
                size="sm"
                rightIcon={<ArrowRight size={16} />}
              >
                View All
              </Button>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {oddsMovements.map(movement => (
                <MarketMovementChart key={movement.id} data={movement} />
              ))}
            </div>
          </Card>
        </div>
      </div>
      
      <div>
        <Card 
          title="Top Prediction Bots" 
          action={
            <Button 
              variant="ghost" 
              size="sm" 
              rightIcon={<ArrowRight size={16} />}
            >
              View All
            </Button>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {predictionBots.map(bot => (
              <PredictionBotCard 
                key={bot.id} 
                bot={bot} 
                isActive={bot.id === '1'}
              />
            ))}
            
            <Card className="bg-gray-850 border-dashed border-2 border-gray-700 flex flex-col items-center justify-center p-6 hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-400 mb-2">Create Custom Bot</h3>
              <p className="text-sm text-gray-500 text-center mb-4">Build your own prediction model with custom parameters</p>
              <Button variant="outline" size="sm">Get Started</Button>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;