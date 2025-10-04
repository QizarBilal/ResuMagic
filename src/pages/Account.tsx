import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  subscription: 'free' | 'premium';
  resumesCreated: number;
  templatesUsed: number;
  lastActive: string;
}

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'subscription' | 'settings' | 'security'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Mock user data - in real app, this would come from API/context
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'January 2024',
    subscription: 'premium',
    resumesCreated: 5,
    templatesUsed: 3,
    lastActive: '2 hours ago'
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'subscription', name: 'Subscription', icon: '💎' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'security', name: 'Security', icon: '🔒' }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In real app, would save to API
    alert('Profile updated successfully!');
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        <Button
          variant={isEditing ? 'primary' : 'outline'}
          onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
          className="px-4 py-2"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={userProfile.name}
            onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={userProfile.email}
            onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={userProfile.phone}
            onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={userProfile.location}
            onChange={(e) => setUserProfile({...userProfile, location: e.target.value})}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50"
          />
        </div>
      </div>

      {/* Account Stats */}
      <div className="border-t pt-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Account Statistics</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-primary-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary-600">{userProfile.resumesCreated}</div>
            <div className="text-sm text-gray-600">Resumes Created</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{userProfile.templatesUsed}</div>
            <div className="text-sm text-gray-600">Templates Used</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{userProfile.joinDate}</div>
            <div className="text-sm text-gray-600">Member Since</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{userProfile.lastActive}</div>
            <div className="text-sm text-gray-600">Last Active</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubscriptionTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Subscription</h3>
        
        <div className={`border-2 rounded-lg p-6 ${
          userProfile.subscription === 'premium' 
            ? 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50' 
            : 'border-gray-300 bg-gray-50'
        }`}>
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">
                  {userProfile.subscription === 'premium' ? '💎' : '📋'}
                </span>
                <h4 className="text-xl font-bold text-gray-900">
                  {userProfile.subscription === 'premium' ? 'Premium Plan' : 'Free Plan'}
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                {userProfile.subscription === 'premium' 
                  ? 'Full access to all templates, export formats, and premium features'
                  : 'Limited access to basic templates and features'
                }
              </p>
              <div className="text-sm text-gray-500">
                {userProfile.subscription === 'premium' 
                  ? 'Renews automatically on the 15th of each month'
                  : 'Upgrade anytime to unlock premium features'
                }
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {userProfile.subscription === 'premium' ? '$9.99' : '$0.00'}
              </div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Current Features</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
              {userProfile.subscription === 'premium' ? 'Unlimited' : '2'} professional templates
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
              PDF export
            </li>
            <li className="flex items-center">
              <span className={`w-4 h-4 rounded-full mr-2 flex-shrink-0 ${
                userProfile.subscription === 'premium' ? 'bg-green-500' : 'bg-gray-300'
              }`}></span>
              Word document export
            </li>
            <li className="flex items-center">
              <span className={`w-4 h-4 rounded-full mr-2 flex-shrink-0 ${
                userProfile.subscription === 'premium' ? 'bg-green-500' : 'bg-gray-300'
              }`}></span>
              Custom color schemes
            </li>
            <li className="flex items-center">
              <span className={`w-4 h-4 rounded-full mr-2 flex-shrink-0 ${
                userProfile.subscription === 'premium' ? 'bg-green-500' : 'bg-gray-300'
              }`}></span>
              Priority customer support
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Usage This Month</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Resume Downloads</span>
                <span>8 / {userProfile.subscription === 'premium' ? '∞' : '5'}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{width: userProfile.subscription === 'premium' ? '25%' : '100%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Templates Accessed</span>
                <span>3 / {userProfile.subscription === 'premium' ? '15' : '2'}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: userProfile.subscription === 'premium' ? '20%' : '100%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Actions */}
      <div className="border-t pt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {userProfile.subscription === 'free' ? (
            <Link to="/pricing#best-value" className="btn-primary px-6 py-3 text-center">
              Upgrade to Premium
            </Link>
          ) : (
            <>
              <Button variant="outline" className="px-6 py-3">
                Manage Billing
              </Button>
              <Button variant="outline" className="px-6 py-3">
                View Invoice History
              </Button>
              <Button variant="ghost" className="px-6 py-3 text-red-600 hover:bg-red-50">
                Cancel Subscription
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <h4 className="font-medium text-gray-900">Email Notifications</h4>
              <p className="text-sm text-gray-600">Receive updates about new features and tips</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <h4 className="font-medium text-gray-900">Marketing Communications</h4>
              <p className="text-sm text-gray-600">Receive promotional emails and offers</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <h4 className="font-medium text-gray-900">Auto-save Resume Data</h4>
              <p className="text-sm text-gray-600">Automatically save your progress as you type</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data & Privacy</h3>
        
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            📥 Download My Data
          </Button>
          <Button variant="outline" className="w-full justify-start">
            🗑️ Delete All Resume Data
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:bg-red-50"
            onClick={() => setShowDeleteModal(true)}
          >
            ❌ Delete Account
          </Button>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Password & Security</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <Button className="px-6 py-2">
            Update Password
          </Button>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Login Activity</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <div>
              <div className="font-medium text-gray-900">Current Session</div>
              <div className="text-sm text-gray-600">San Francisco, CA • Chrome on Windows</div>
            </div>
            <div className="text-sm text-green-600 font-medium">Active Now</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <div>
              <div className="font-medium text-gray-900">Previous Session</div>
              <div className="text-sm text-gray-600">San Francisco, CA • Safari on iPhone</div>
            </div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <div>
              <div className="font-medium text-gray-900">Mobile Login</div>
              <div className="text-sm text-gray-600">San Francisco, CA • ResuMagic App</div>
            </div>
            <div className="text-sm text-gray-500">Yesterday</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
              <p className="text-gray-600 mt-1">Manage your profile, subscription, and preferences</p>
            </div>
            <Link to="/dashboard" className="btn-outline px-4 py-2">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="font-semibold text-gray-900">{userProfile.name}</h3>
                <p className="text-sm text-gray-600">{userProfile.email}</p>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                  userProfile.subscription === 'premium' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {userProfile.subscription === 'premium' ? '💎 Premium' : '📋 Free'}
                </div>
              </div>
              
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'subscription' && renderSubscriptionTab()}
              {activeTab === 'settings' && renderSettingsTab()}
              {activeTab === 'security' && renderSecurityTab()}
            </Card>
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Account</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your resume data.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => setShowDeleteModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                onClick={() => {
                  alert('Account deletion would be processed here');
                  setShowDeleteModal(false);
                }}
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;