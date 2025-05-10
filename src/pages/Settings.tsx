import React, { useState } from 'react';
import { Bell, DollarSign, Shield, Palette, Globe, CreditCard, Moon, Sun, Zap, AlertTriangle } from 'lucide-react';
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
      sms: false,
      types: {
        valueBets: true,
        arbitrage: true,
        marketMovements: false,
        predictions: true
      }
    },
    betting: {
      stakingMethod: 'kelly',
      maxStakePerBet: 100,
      minOdds: 1.5,
      maxOdds: 10,
      defaultStake: 50,
      autoConfirm: false,
      preferredBookmakers: ['Bet365', 'Pinnacle', 'William Hill']
    },
    security: {
      twoFactor: false,
      loginAlerts: true,
      betConfirmation: true,
      ipWhitelist: []
    },
    display: {
      oddsFormat: 'decimal',
      timezone: 'UTC',
      currency: 'USD'
    }
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleNotificationToggle = (type: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
    setUnsavedChanges(true);
  };

  const handleNotificationTypeToggle = (type: keyof typeof settings.notifications.types) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        types: {
          ...prev.notifications.types,
          [type]: !prev.notifications.types[type]
        }
      }
    }));
    setUnsavedChanges(true);
  };

  const handleBettingSettingChange = (setting: keyof typeof settings.betting, value: number | string | boolean) => {
    setSettings(prev => ({
      ...prev,
      betting: {
        ...prev.betting,
        [setting]: value
      }
    }));
    setUnsavedChanges(true);
  };

  const handleThemeToggle = () => {
    setSettings(prev => ({
      ...prev,
      theme: prev.theme === 'dark' ? 'light' : 'dark'
    }));
    setUnsavedChanges(true);
  };

  const handleSaveChanges = () => {
    // Here you would typically make an API call to save the changes
    setUnsavedChanges(false);
  };

  return (
    <div className="space-y-6">
      {unsavedChanges && (
        <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="text-blue-500" size={20} />
            <div>
              <h3 className="text-white font-medium">Unsaved Changes</h3>
              <p className="text-sm text-blue-400">You have unsaved changes that need to be saved</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={() => setUnsavedChanges(false)}>
              Discard
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </div>
        </div>
      )}

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

            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-3">Notification Types</h4>
              <div className="space-y-3">
                {Object.entries(settings.notifications.types).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-gray-300">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handleNotificationTypeToggle(key as keyof typeof settings.notifications.types)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
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

            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Auto-confirm Bets</h3>
                <p className="text-sm text-gray-400">Skip confirmation for bets within limits</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.betting.autoConfirm}
                  onChange={(e) => handleBettingSettingChange('autoConfirm', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
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
            <button
              onClick={handleThemeToggle}
              className="w-full flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-800"
            >
              <div className="flex items-center space-x-3">
                {settings.theme === 'dark' ? (
                  <Moon size={16} className="text-blue-500" />
                ) : (
                  <Sun size={16} className="text-yellow-500" />
                )}
                <span className="text-white">Theme</span>
              </div>
              <Badge variant="primary">
                {settings.theme === 'dark' ? 'Dark' : 'Light'}
              </Badge>
            </button>

            <div className="p-3 bg-gray-900 rounded-lg">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Odds Format
              </label>
              <select
                value={settings.display.oddsFormat}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  display: { ...prev.display, oddsFormat: e.target.value }
                }))}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="decimal">Decimal (1.50)</option>
                <option value="fractional">Fractional (1/2)</option>
                <option value="american">American (-200)</option>
              </select>
            </div>
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
            <div className="p-3 bg-gray-900 rounded-lg">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>

            <div className="p-3 bg-gray-900 rounded-lg">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Timezone
              </label>
              <select
                value={settings.display.timezone}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  display: { ...prev.display, timezone: e.target.value }
                }))}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="GMT">GMT</option>
              </select>
            </div>
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
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-400">Add an extra layer of security</p>
              </div>
              <Button
                variant={settings.security.twoFactor ? "success" : "outline"}
                size="sm"
              >
                {settings.security.twoFactor ? 'Enabled' : 'Enable'}
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Login Alerts</h3>
                <p className="text-sm text-gray-400">Get notified of new logins</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.security.loginAlerts}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    security: { ...prev.security, loginAlerts: e.target.checked }
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
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
          <Button variant="primary" leftIcon={<CreditCard size={16} />}>
            Add New Card
          </Button>
        </div>

        <div className="mt-4 space-y-3">
          <div className="p-3 bg-gray-900 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-800 rounded-lg">
                <img
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visa.svg"
                  alt="Visa"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="text-white">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-400">Expires 12/24</p>
              </div>
            </div>
            <Badge variant="success">Default</Badge>
          </div>

          <div className="p-3 bg-gray-900 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-800 rounded-lg">
                <img
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mastercard.svg"
                  alt="Mastercard"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="text-white">•••• •••• •••• 8888</p>
                <p className="text-sm text-gray-400">Expires 09/25</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Make Default
            </Button>
          </div>
        </div>
      </Card>

      {unsavedChanges && (
        <div className="fixed bottom-6 right-6">
          <Button
            variant="primary"
            size="lg"
            leftIcon={<Zap size={16} />}
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default Settings;