import React, { useState } from 'react';
import { SavedPrediction } from '../types';
import { formatCurrency } from '../utils/predictionUtils';
import { Trash2, Eye, Download, Edit, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardProps {
  savedPredictions: SavedPrediction[];
  onDelete: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ savedPredictions, onDelete }) => {
  const [sortField, setSortField] = useState<string>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedPrediction, setSelectedPrediction] = useState<SavedPrediction | null>(null);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedPredictions = [...savedPredictions].sort((a, b) => {
    if (sortField === 'timestamp') {
      return sortDirection === 'asc'
        ? new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        : new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    } else if (sortField === 'predictedRent') {
      return sortDirection === 'asc'
        ? a.result.predictedRent - b.result.predictedRent
        : b.result.predictedRent - a.result.predictedRent;
    }
    return 0;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h2 className="text-xl font-semibold">Your Saved Predictions</h2>
      </div>

      {savedPredictions.length === 0 ? (
        <div className="p-10 text-center">
          <FileText size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">No saved predictions yet</h3>
          <p className="text-gray-500 mb-6">
            Start making predictions to save them here for future reference.
          </p>
          <Link
            to="/predict"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            Make a Prediction
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                  onClick={() => handleSort('timestamp')}
                >
                  <div className="flex items-center">
                    Date
                    {sortField === 'timestamp' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property Type
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                  onClick={() => handleSort('predictedRent')}
                >
                  <div className="flex items-center">
                    Predicted Rent
                    {sortField === 'predictedRent' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedPredictions.map((prediction) => (
                <tr 
                  key={prediction.id} 
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {new Date(prediction.timestamp).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {prediction.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">
                    {prediction.propertyType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(prediction.result.predictedRent)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {prediction.result.confidenceScore}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setSelectedPrediction(prediction)}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="Export"
                      >
                        <Download size={18} />
                      </button>
                      <button
                        onClick={() => onDelete(prediction.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedPrediction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="text-xl font-semibold">Prediction Details</h3>
              <button 
                onClick={() => setSelectedPrediction(null)}
                className="text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Property Information</h4>
                  <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-800 capitalize">
                        {selectedPrediction.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Property Type</p>
                      <p className="font-medium text-gray-800 capitalize">
                        {selectedPrediction.propertyType}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm text-gray-500">Bedrooms</p>
                        <p className="font-medium text-gray-800">
                          {selectedPrediction.bedrooms}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Bathrooms</p>
                        <p className="font-medium text-gray-800">
                          {selectedPrediction.bathrooms}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Square Feet</p>
                      <p className="font-medium text-gray-800">
                        {selectedPrediction.squareFeet}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year Built</p>
                      <p className="font-medium text-gray-800">
                        {selectedPrediction.yearBuilt}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className={`text-xs ${selectedPrediction.hasParking ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} px-2 py-1 rounded flex items-center justify-center`}>
                        Parking
                      </div>
                      <div className={`text-xs ${selectedPrediction.hasFurnishing ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} px-2 py-1 rounded flex items-center justify-center`}>
                        Furnished
                      </div>
                      <div className={`text-xs ${selectedPrediction.nearPublicTransport ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} px-2 py-1 rounded flex items-center justify-center`}>
                        Public Transit
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Prediction Results</h4>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-500">Estimated Monthly Rent</p>
                      <p className="text-3xl font-bold text-blue-700">
                        {formatCurrency(selectedPrediction.result.predictedRent)}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Confidence Score</p>
                        <p className="text-xl font-medium text-gray-800">
                          {selectedPrediction.result.confidenceScore}%
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Model Accuracy</p>
                        <p className="text-xl font-medium text-gray-800">
                          {selectedPrediction.result.modelAccuracy}%
                        </p>
                      </div>
                    </div>
                    
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Contributing Factors</h5>
                    <div className="space-y-2">
                      {selectedPrediction.result.contributingFactors.map((factor, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-1/3 text-xs text-gray-600">{factor.factor}</div>
                          <div className="w-2/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full"
                              style={{ width: `${factor.impact}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedPrediction(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
                  <Download size={16} className="mr-2" />
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;