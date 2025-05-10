import React, { useState } from 'react';
import { Bell, DollarSign, Shield, Palette, Globe, CreditCard } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    theme: 'dark',
    language: 'en',
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    betting: {
      stakingMethod: 'kelly',
      maxStakePerBet: 100,
      minOdds: 1.5,
      maxOdds: 10,
      defaultStake: 50
    },
    security: {
      twoFactor: false,
      loginAlerts: true,
      betConfirmation: true
    }
  });

  const handleNotificationToggle = (type: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handleBettingSettingChange = (setting: keyof typeof settings.betting, value: number | string) => {
    setSettings(prev => ({
      ...prev,
      betting: {
        ...prev.betting,
        [setting]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Notifications">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-blue-500" />
                <div>
                  <h3 className="text-white font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-400">Receive betting alerts via email</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={() => handleNotificationToggle('email')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-purple-500" />
                <div>
                  <h3 className="text-white font-medium">Push Notifications</h3>
                  <p className="text-sm text-gray-400">Get instant alerts in browser</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={() => handleNotificationToggle('push')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-green-500" />
                <div>
                  <h3 className="text-white font-medium">SMS Notifications</h3>
                  <p className="text-sm text-gray-400">Get alerts via text message</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={() => handleNotificationToggle('sms')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </Card>

        <Card title="Betting Preferences">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Staking Method
              </label>
              <select
                value={settings.betting.stakingMethod}
                onChange={(e) => handleBettingSettingChange('stakingMethod', e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="fixed">Fixed Stake</option>
                <option value="kelly">Kelly Criterion</option>
                <option value="proportional">Proportional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Maximum Stake per Bet ($)
              </label>
              <input
                type="number"
                value={settings.betting.maxStakePerBet}
                onChange={(e) => handleBettingSettingChange('maxStakePerBet', parseFloat(e.target.value))}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Minimum Odds
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={settings.betting.minOdds}
                  onChange={(e) => handleBettingSettingChange('minOdds', parseFloat(e.target.value))}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Maximum Odds
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={settings.betting.maxOdds}
                  onChange={(e) => handleBettingSettingChange('maxOdds', parseFloat(e.target.value))}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <Palette size={20} className="text-blue-500" />
            </div>
            <div>
              <h3 className="text-white font-medium">Appearance</h3>
              <p className="text-sm text-gray-400">Customize your experience</p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-800">
              <span className="text-white">Theme</span>
              <Badge variant="primary">{settings.theme === 'dark' ? 'Dark' : 'Light'}</Badge>
            </button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-600/20 rounded-lg">
              <Globe size={20} className="text-green-500" />
            </div>
            <div>
              <h3 className="text-white font-medium">Language & Region</h3>
              <p className="text-sm text-gray-400">Set your preferences</p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-800">
              <span className="text-white">Language</span>
              <Badge variant="primary">English</Badge>
            </button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-600/20 rounded-lg">
              <Shield size={20} className="text-red-500" />
            </div>
            <div>
              <h3 className="text-white font-medium">Security</h3>
              <p className="text-sm text-gray-400">Protect your account</p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-800">
              <span className="text-white">Two-Factor Authentication</span>
              <Badge variant={settings.security.twoFactor ? "success" : "danger"}>
                {settings.security.twoFactor ? 'Enabled' : 'Disabled'}
              </Badge>
            </button>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-600/20 rounded-lg">
              <CreditCard size={20} className="text-yellow-500" />
            </div>
            <div>
              <h3 className="text-white font-medium">Payment Methods</h3>
              <p className="text-sm text-gray-400">Manage your payment options</p>
            </div>
          </div>
          <Button variant="primary">Add New</Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;