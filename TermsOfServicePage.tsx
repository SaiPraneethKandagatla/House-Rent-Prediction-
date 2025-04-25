import React from 'react';
import { FileText, AlertCircle, UserCheck, Scale } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <h1 className="text-2xl font-semibold">Terms of Service</h1>
          </div>
          
          <div className="p-6 space-y-8">
            <div className="flex items-start">
              <FileText className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Agreement to Terms</h2>
                <p className="text-gray-600">
                  By accessing or using EasyLease, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer</h2>
                <p className="text-gray-600 mb-4">
                  Our rent predictions are based on machine learning models and available data:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Predictions are estimates and not guaranteed</li>
                  <li>Market conditions may vary</li>
                  <li>Individual circumstances may affect actual rental values</li>
                  <li>Users should conduct their own due diligence</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <UserCheck className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  As a user of EasyLease, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate information</li>
                  <li>Maintain account security</li>
                  <li>Comply with applicable laws</li>
                  <li>Not misuse the service</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Scale className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  EasyLease and its developers:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Are not responsible for decisions made based on predictions</li>
                  <li>Do not guarantee continuous, uninterrupted service</li>
                  <li>Are not liable for any direct or indirect damages</li>
                  <li>Reserve the right to modify or discontinue services</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-IN')}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For questions about these Terms of Service, please contact{' '}
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

export default TermsOfServicePage;