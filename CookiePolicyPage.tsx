import React from 'react';
import { Cookie, Settings, Shield, Info } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <h1 className="text-2xl font-semibold">Cookie Policy</h1>
          </div>
          
          <div className="p-6 space-y-8">
            <div className="flex items-start">
              <Cookie className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">What Are Cookies</h2>
                <p className="text-gray-600">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4 ml-4">
                  <li>Remembering your preferences</li>
                  <li>Keeping you signed in</li>
                  <li>Understanding how you use our service</li>
                  <li>Improving our website functionality</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Settings className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-800">Essential Cookies</h3>
                    <p className="text-gray-600">Required for basic website functionality</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Preference Cookies</h3>
                    <p className="text-gray-600">Remember your settings and preferences</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Analytics Cookies</h3>
                    <p className="text-gray-600">Help us understand how you use our website</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Cookie Management</h2>
                <p className="text-gray-600 mb-4">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Block all cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Allow only certain types of cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Info className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Additional Information</h2>
                <p className="text-gray-600 mb-4">
                  Important details about our cookie usage:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Cookies are encrypted for security</li>
                  <li>Third-party cookies are carefully monitored</li>
                  <li>Cookie data is not shared with external parties</li>
                  <li>Regular audits of cookie usage are performed</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-IN')}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For questions about our Cookie Policy, please contact{' '}
                <a href="mailto:kandagatlabunny@gmail.com" className="text-blue-600 hover:text-blue-800">
                  kandagatlabunny@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;