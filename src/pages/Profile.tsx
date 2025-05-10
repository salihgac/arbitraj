import React, { useState } from 'react';
import { User, Camera, Mail, Key, Shield, Bell, CreditCard, Wallet, History, ChevronRight, AlertTriangle } from 'lucide-react';
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
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=150',
    recentActivity: [
      { type: 'bet', description: 'Placed bet on Manchester City vs Arsenal', amount: 100, date: '2h ago' },
      { type: 'win', description: 'Won bet on Barcelona vs Real Madrid', amount: 250, date: '5h ago' },
      { type: 'deposit', description: 'Added funds to account', amount: 500, date: '1d ago' }
    ],
    verificationStatus: 'verified'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
  };

  const handlePasswordChange = () => {
    // Handle password change logic
    setShowPasswordModal(false);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'bet':
        return <Wallet className="text-blue-500" size={16} />;
      case 'win':
        return <History className="text-green-500" size={16} />;
      case 'deposit':
        return <CreditCard className="text-purple-500" size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {user.verificationStatus !== 'verified' && (
        <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="text-yellow-500" size={20} />
            <div>
              <h3 className="text-white font-medium">Account Verification Required</h3>
              <p className="text-sm text-yellow-400">Please verify your account to unlock all features</p>
            </div>
          </div>
          <Button variant="warning">Verify Now</Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-800"
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

          <Card title="Recent Activity">
            <div className="space-y-4">
              {user.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
                  <div className="p-2 bg-gray-800 rounded-full">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">{activity.description}</p>
                    <p className="text-xs text-gray-400">{activity.date}</p>
                  </div>
                  <div className={`text-sm font-medium ${
                    activity.type === 'win' ? 'text-green-500' : 'text-white'
                  }`}>
                    ${activity.amount}
                  </div>
                </div>
              ))}
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
                <Button variant="outline" size="sm" rightIcon={<ChevronRight size={16} />}>
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  rightIcon={<ChevronRight size={16} />}
                  onClick={() => setShowPasswordModal(true)}
                >
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
                <Button variant="outline" size="sm" rightIcon={<ChevronRight size={16} />}>
                  Enable
                </Button>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <CreditCard size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Payment Methods</h3>
                    <p className="text-sm text-gray-400">Manage your payment options</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" rightIcon={<ChevronRight size={16} />}>
                  Manage
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordData.current}
                  onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordData.new}
                  onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordData.confirm}
                  onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <Button variant="outline" onClick={() => setShowPasswordModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handlePasswordChange}>
                  Update Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;