import React from 'react';
import { ModelInfo } from '../types';
import { mlModels } from '../data/mockData';
import { CheckCircle, AlertCircle } from 'lucide-react';

const ModelComparison: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h2 className="text-xl font-semibold">ML Model Comparison</h2>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mlModels.map((model, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">{model.name}</h3>
                  <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {model.accuracy}% Accurate
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 mb-4">{model.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Best For:</h4>
                  <ul className="space-y-1">
                    {model.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Limitations:</h4>
                  <ul className="space-y-1">
                    {model.limitations.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <AlertCircle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-2">How We Use These Models</h3>
          <p className="text-gray-700">
            Our system combines multiple machine learning models using an ensemble approach to deliver the most accurate predictions. We weigh the outputs of each model based on their historical performance for specific property types and locations. This approach allows us to leverage the strengths of each model while minimizing their individual limitations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelComparison;