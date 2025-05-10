import React, { useState } from 'react';
import { User, Camera, Mail, Key, Shield, Bell, CreditCard } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    membershipTier: 'Premium',
    joinDate: 'January 2024',
    totalBets: 156,
    winRate: 62.5,
    profit: 2450,
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=150'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                  <Camera size={16} />
                </button>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-gray-400 mb-3">{user.email}</p>
              
              <Badge variant="primary" size="lg" className="mb-4">
                {user.membershipTier}
              </Badge>
              
              <p className="text-sm text-gray-400">
                Member since {user.joinDate}
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">{user.totalBets}</div>
                  <div className="text-sm text-gray-400">Total Bets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">{user.winRate}%</div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">${user.profit}</div>
                  <div className="text-sm text-gray-400">Profit</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card title="Profile Information">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  disabled={!isEditing}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  disabled={!isEditing}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                {isEditing ? (
                  <>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveProfile}>
                      Save Changes
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </Card>
          
          <div className="mt-6 space-y-4">
            <Card>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Mail size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-400">Manage your email preferences</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Key size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Password</h3>
                    <p className="text-sm text-gray-400">Change your password</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Shield size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-400">Add an extra layer of security</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;