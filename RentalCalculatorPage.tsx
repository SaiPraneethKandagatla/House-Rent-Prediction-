import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp } from 'lucide-react';

const RentalCalculatorPage: React.FC = () => {
  const [monthlyRent, setMonthlyRent] = useState<number>(25000);
  const [maintenanceCost, setMaintenanceCost] = useState<number>(2000);
  const [propertyTax, setPropertyTax] = useState<number>(1000);
  const [insurance, setInsurance] = useState<number>(500);

  const calculateAnnualExpenses = () => {
    return (maintenanceCost + propertyTax + insurance) * 12;
  };

  const calculateAnnualIncome = () => {
    return monthlyRent * 12;
  };

  const calculateNetIncome = () => {
    return calculateAnnualIncome() - calculateAnnualExpenses();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rental Property Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate potential rental income and expenses for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Calculator className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Income & Expenses Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Rent (₹)
                </label>
                <input
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Maintenance (₹)
                </label>
                <input
                  type="number"
                  value={maintenanceCost}
                  onChange={(e) => setMaintenanceCost(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Property Tax (₹)
                </label>
                <input
                  type="number"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Insurance (₹)
                </label>
                <input
                  type="number"
                  value={insurance}
                  onChange={(e) => setInsurance(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Results</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="text-blue-600 mr-2" size={20} />
                  <h3 className="font-medium text-gray-800">Annual Rental Income</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{calculateAnnualIncome().toLocaleString()}
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Percent className="text-red-600 mr-2" size={20} />
                  <h3 className="font-medium text-gray-800">Annual Expenses</h3>
                </div>
                <p className="text-2xl font-bold text-red-600">
                  ₹{calculateAnnualExpenses().toLocaleString()}
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="text-green-600 mr-2" size={20} />
                  <h3 className="font-medium text-gray-800">Net Annual Income</h3>
                </div>
                <p className="text-2xl font-bold text-green-600">
                  ₹{calculateNetIncome().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCalculatorPage;