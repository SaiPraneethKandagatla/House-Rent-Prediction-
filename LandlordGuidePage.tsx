import React from 'react';
import { Home, Shield, FileText, Users } from 'lucide-react';

const LandlordGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Landlord's Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential information and best practices for property owners and landlords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Home className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Property Management</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Maintenance Schedule</h3>
                <p className="text-gray-600">Regular property maintenance tips and schedules</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Property Improvements</h3>
                <p className="text-gray-600">Cost-effective upgrades to increase rental value</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Emergency Repairs</h3>
                <p className="text-gray-600">Handling urgent maintenance issues</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Legal Compliance</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Rental Agreements</h3>
                <p className="text-gray-600">Essential clauses and legal requirements</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Tax Obligations</h3>
                <p className="text-gray-600">Understanding rental income taxation</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Property Insurance</h3>
                <p className="text-gray-600">Required coverage and recommendations</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Tenant Relations</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Screening Process</h3>
                <p className="text-gray-600">Best practices for tenant selection</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Communication Guidelines</h3>
                <p className="text-gray-600">Maintaining professional relationships</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Conflict Resolution</h3>
                <p className="text-gray-600">Handling disputes and complaints</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Documentation</h2>
            </div>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Required Forms</h3>
                <p className="text-gray-600">Essential paperwork for landlords</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Record Keeping</h3>
                <p className="text-gray-600">Organizing important documents</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Digital Tools</h3>
                <p className="text-gray-600">Software recommendations for property management</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordGuidePage;