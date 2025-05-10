import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const MainLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/value-betting':
        return 'Value Betting';
      case '/arbitrage':
        return 'Arbitrage Finder';
      case '/market-movement':
        return 'Market Movement';
      case '/predictions':
        return 'AI Predictions';
      case '/bankroll':
        return 'Bankroll Management';
      case '/profile':
        return 'Profile';
      case '/settings':
        return 'Settings';
      default:
        return 'Arbitraj App';
    }
  };
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <Header title={getPageTitle()} isSidebarCollapsed={isSidebarCollapsed} />
        
        <main className="flex-1 overflow-y-auto mt-16 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;