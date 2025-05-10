import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title: string;
  isSidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, isSidebarCollapsed }) => {
  return (
    <header className={`bg-gray-900 border-b border-gray-800 fixed top-0 right-0 transition-all duration-300 z-10 ${
      isSidebarCollapsed ? 'w-[calc(100%-4rem)]' : 'w-[calc(100%-16rem)]'
    }`}>
      <div className="h-16 flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-gray-200 rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <div className="relative">
            <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              U
            </div>
            <div className="hidden md:flex items-center">
              <span className="text-sm text-white">User</span>
              <ChevronDown size={16} className="text-gray-400 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;