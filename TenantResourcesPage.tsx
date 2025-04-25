import React from 'react';
import { FileText, Shield, Home, DollarSign } from 'lucide-react';

const TenantResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tenant Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about renting a property in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Rental Process Guide</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Property Search</h3>
                <p className="text-gray-600">Tips for finding the right rental property</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Application Process</h3>
                <p className="text-gray-600">Required documents and verification steps</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Move-in Checklist</h3>
                <p className="text-gray-600">Essential tasks when moving into a new rental</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Tenant Rights</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Legal Protections</h3>
                <p className="text-gray-600">Understanding your rights as a tenant</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Maintenance Rights</h3>
                <p className="text-gray-600">What repairs landlords must provide</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Privacy Rights</h3>
                <p className="text-gray-600">Rules about landlord entry and inspections</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Home className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Property Maintenance</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Regular Maintenance</h3>
                <p className="text-gray-600">Keeping your rental in good condition</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Emergency Repairs</h3>
                <p className="text-gray-600">What to do in urgent situations</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Move-out Cleaning</h3>
                <p className="text-gray-600">Getting your deposit back</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Financial Planning</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Budgeting Tips</h3>
                <p className="text-gray-600">Managing rental expenses effectively</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Security Deposits</h3>
                <p className="text-gray-600">Understanding deposit requirements</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Rental Insurance</h3>
                <p className="text-gray-600">Protecting your belongings</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantResourcesPage;