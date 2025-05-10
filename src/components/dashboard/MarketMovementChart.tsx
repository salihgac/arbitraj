import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Card from '../common/Card';
import { OddsMovement } from '../../types';

interface MarketMovementChartProps {
  data: OddsMovement;
}

const MarketMovementChart: React.FC<MarketMovementChartProps> = ({ data }) => {
  // This is a simplified component that would normally use a chart library
  // For a real implementation, we would use a library like Chart.js or Recharts
  
  const startOdds = data.odds[0];
  const currentOdds = data.odds[data.odds.length - 1];
  const isIncreasing = currentOdds > startOdds;
  const changePercent = ((currentOdds - startOdds) / startOdds) * 100;
  
  // Generate simplified chart points for visualization
  const normalizedOdds = data.odds.map(odds => {
    const min = Math.min(...data.odds);
    const max = Math.max(...data.odds);
    const range = max - min;
    return range === 0 ? 50 : ((odds - min) / range) * 80;
  });
  
  // Create SVG path for the chart line
  const linePoints = normalizedOdds.map((point, index) => {
    const x = (index / (normalizedOdds.length - 1)) * 100;
    const y = 100 - point;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-bold text-white">{data.match}</h3>
          <div className="text-xs text-gray-400 mt-1">{data.league} • {data.date}</div>
        </div>
        
        <div className={`flex items-center ${isIncreasing ? 'text-green-500' : 'text-red-500'}`}>
          {isIncreasing ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span className="ml-1 font-medium">{Math.abs(changePercent).toFixed(2)}%</span>
        </div>
      </div>
      
      <div className="bg-gray-900 p-3 rounded-lg mb-3">
        <div className="text-xs text-gray-400 mb-1">{data.bookmaker}</div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">{currentOdds.toFixed(2)}</div>
          <div className="text-sm text-gray-400">{data.betType}</div>
        </div>
      </div>
      
      <div className="relative h-40 w-full overflow-hidden">
        {/* Simplified chart visualization */}
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <linearGradient id={`gradient-${data.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isIncreasing ? "rgb(34,197,94)" : "rgb(239,68,68)"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isIncreasing ? "rgb(34,197,94)" : "rgb(239,68,68)"} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Fill area under line */}
          <path 
            d={`M0,${100 - normalizedOdds[0]} ${linePoints} ${100},${100 - normalizedOdds[normalizedOdds.length - 1]} ${100},100 0,100 Z`}
            fill={`url(#gradient-${data.id})`}
          />
          
          {/* Line */}
          <polyline
            fill="none"
            stroke={isIncreasing ? "rgb(34,197,94)" : "rgb(239,68,68)"}
            strokeWidth="2"
            points={linePoints}
          />
          
          {/* Points on the line */}
          {normalizedOdds.map((point, index) => (
            <circle 
              key={index}
              cx={`${(index / (normalizedOdds.length - 1)) * 100}%`}
              cy={`${100 - point}%`}
              r="3"
              fill={isIncreasing ? "rgb(34,197,94)" : "rgb(239,68,68)"}
            />
          ))}
        </svg>
        
        {/* Timestamps */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
          {data.timePoints.filter((_, i) => i === 0 || i === data.timePoints.length - 1 || i === Math.floor(data.timePoints.length / 2)).map((time, i) => (
            <span key={i}>{time}</span>
          ))}
        </div>
      </div>
      
      {data.isSharp && (
        <div className="mt-3 bg-red-900/30 border border-red-800 rounded-lg p-2 text-sm text-red-400 flex items-center">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Sharp money movement detected
        </div>
      )}
    </Card>
  );
};

export default MarketMovementChart;