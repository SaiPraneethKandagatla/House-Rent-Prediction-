import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <h1 className="text-2xl font-semibold">Privacy Policy</h1>
          </div>
          
          <div className="p-6 space-y-8">
            <div className="flex items-start">
              <Shield className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Property details for rent predictions</li>
                  <li>Usage data and preferences</li>
                  <li>Device and browser information</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Lock className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Protect Your Data</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security audits</li>
                  <li>Secure data storage practices</li>
                  <li>Limited access to personal information</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Eye className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  Your information helps us provide and improve our services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Generate accurate rent predictions</li>
                  <li>Improve our machine learning models</li>
                  <li>Provide customer support</li>
                  <li>Send important updates and notifications</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <FileText className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have several rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-IN')}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                If you have any questions about this Privacy Policy, please contact us at{' '}
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

export default PrivacyPolicyPage;