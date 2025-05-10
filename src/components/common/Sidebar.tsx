import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LineChart, Flame, TrendingUp, DollarSign, Award, 
  User, Settings, BarChart3, ChevronLeft, ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: <LineChart size={20} />, label: 'Dashboard' },
    { path: '/value-betting', icon: <BarChart3 size={20} />, label: 'Value Betting' },
    { path: '/arbitrage', icon: <Flame size={20} />, label: 'Arbitrage' },
    { path: '/market-movement', icon: <TrendingUp size={20} />, label: 'Market Movement' },
    { path: '/predictions', icon: <Award size={20} />, label: 'AI Predictions' },
    { path: '/bankroll', icon: <DollarSign size={20} />, label: 'Bankroll' },
    { path: '/profile', icon: <User size={20} />, label: 'Profile' },
    { path: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div 
      className={`bg-gray-900 h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } fixed left-0 top-0 z-10 shadow-lg`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!isCollapsed && (
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Arbitraj
          </span>
        )}
        <button 
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                } ${isCollapsed ? 'justify-center' : 'justify-start space-x-3'}`}
              >
                <div>{item.icon}</div>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 border-t border-gray-800">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              U
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">User Pro</span>
              <span className="text-xs text-gray-400">Premium</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;