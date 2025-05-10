import React, { useState } from 'react';
import { Search, Filter, SortDesc, CalendarDays, Bookmark, ChevronDown } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import ValueBetCard from '../components/dashboard/ValueBetCard';

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
  },
  {
    id: '3',
    match: 'Bayern Munich vs Dortmund',
    league: 'Bundesliga',
    date: 'Tomorrow, 18:30',
    bookmaker: 'Pinnacle',
    betType: 'Away Win',
    odds: 3.40,
    predictedProbability: 0.35,
    valueScore: 7.8,
    status: 'open'
  },
  {
    id: '4',
    match: 'Liverpool vs Manchester United',
    league: 'Premier League',
    date: 'Saturday, 17:30',
    bookmaker: 'William Hill',
    betType: 'Under 2.5 Goals',
    odds: 2.75,
    predictedProbability: 0.42,
    valueScore: 6.9,
    status: 'open'
  },
  {
    id: '5',
    match: 'AC Milan vs Inter Milan',
    league: 'Serie A',
    date: 'Sunday, 20:45',
    bookmaker: 'Bet365',
    betType: 'Both Teams to Score',
    odds: 1.85,
    predictedProbability: 0.62,
    valueScore: 9.2,
    status: 'open'
  },
  {
    id: '6',
    match: 'PSG vs Lyon',
    league: 'Ligue 1',
    date: 'Sunday, 21:00',
    bookmaker: 'Betway',
    betType: 'Home Win',
    odds: 1.60,
    predictedProbability: 0.72,
    valueScore: 11.7,
    status: 'open'
  }
] as const;

const leagues = [
  'Premier League',
  'La Liga',
  'Bundesliga',
  'Serie A',
  'Ligue 1',
  'Champions League',
  'Europa League'
];

const bookmakers = [
  'Bet365',
  'Pinnacle',
  'William Hill',
  'Betway',
  'Unibet',
  '888sport',
  'Bwin'
];

const betTypes = [
  'Match Result',
  'Over/Under',
  'Both Teams to Score',
  'Draw No Bet',
  'Double Chance',
  'Asian Handicap'
];

const ValueBetting: React.FC = () => {
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
  const [selectedBetType, setSelectedBetType] = useState<string | null>(null);
  const [selectedBookmaker, setSelectedBookmaker] = useState<string | null>(null);
  const [valueThreshold, setValueThreshold] = useState(5);
  
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for matches, teams or competitions..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <div className="relative">
              <Button
                variant="outline"
                leftIcon={<Filter size={16} />}
                rightIcon={<ChevronDown size={16} />}
              >
                Filters
              </Button>
            </div>
            
            <Button
              variant="outline"
              leftIcon={<SortDesc size={16} />}
            >
              Sort By
            </Button>
            
            <Button
              variant="outline"
              leftIcon={<CalendarDays size={16} />}
            >
              Date
            </Button>
            
            <Button
              variant="outline"
              leftIcon={<Bookmark size={16} />}
            >
              Saved
            </Button>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card title="Filters">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Leagues</h4>
                <div className="space-y-2">
                  {leagues.map(league => (
                    <div key={league} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`league-${league}`}
                        checked={selectedLeague === league}
                        onChange={() => setSelectedLeague(selectedLeague === league ? null : league)}
                        className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-opacity-25"
                      />
                      <label htmlFor={`league-${league}`} className="ml-2 text-sm text-gray-300">
                        {league}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Bet Types</h4>
                <div className="space-y-2">
                  {betTypes.map(type => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`type-${type}`}
                        checked={selectedBetType === type}
                        onChange={() => setSelectedBetType(selectedBetType === type ? null : type)}
                        className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-opacity-25"
                      />
                      <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-300">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Bookmakers</h4>
                <div className="space-y-2">
                  {bookmakers.map(bookmaker => (
                    <div key={bookmaker} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`bookmaker-${bookmaker}`}
                        checked={selectedBookmaker === bookmaker}
                        onChange={() => setSelectedBookmaker(selectedBookmaker === bookmaker ? null : bookmaker)}
                        className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-opacity-25"
                      />
                      <label htmlFor={`bookmaker-${bookmaker}`} className="ml-2 text-sm text-gray-300">
                        {bookmaker}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Value Threshold</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">Min: {valueThreshold}%</span>
                  <Badge variant="primary">{valueThreshold}%+</Badge>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={valueThreshold}
                  onChange={(e) => setValueThreshold(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span>5%</span>
                  <span>10%</span>
                  <span>15%</span>
                  <span>20%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <Button variant="outline" size="sm">
                  Reset All
                </Button>
                <Button variant="primary" size="sm">
                  Apply Filters
                </Button>
              </div>
            </div>
          </Card>
          
          <Card title="Value Bet Stats">
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Total Value Bets</div>
                <div className="text-2xl font-bold text-white">126</div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Avg. Value Edge</div>
                <div className="text-2xl font-bold text-green-500">8.3%</div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Win Rate (Last 30 Days)</div>
                <div className="text-2xl font-bold text-white">62.7%</div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Expected Profit (If All Bet)</div>
                <div className="text-2xl font-bold text-green-500">+$872</div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Card title={`Value Bets (${valueBets.length})`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {valueBets.map(bet => (
                <ValueBetCard key={bet.id} bet={bet} />
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline">
                Load More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ValueBetting;